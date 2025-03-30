"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Menu, Moon, Sun, User, LogOut, Home, BookOpen, UserPlus, LayoutDashboard, CreditCard } from "lucide-react"
// Add the import for LanguageSwitcher and useLanguage
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/components/language-provider"

export interface NavigationItem {
  name: string
  href: string
  icon?: React.ElementType
  requiresAuth?: boolean
  adminOnly?: boolean
}

export interface NavigationBarProps {
  logo?: React.ReactNode
  logoText?: string
  items?: NavigationItem[]
  className?: string
  showThemeToggle?: boolean
  showAuthButtons?: boolean
  onLoginClick?: () => void
  onRegisterClick?: () => void
}

// Update the NavigationBar component to use translations
export function NavigationBar({
  logo,
  logoText = "Learning Management System",
  items,
  className,
  showThemeToggle = true,
  showAuthButtons = true,
  onLoginClick,
  onRegisterClick,
}: NavigationBarProps) {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const { user, logout } = useAuth()
  const [isMounted, setIsMounted] = useState(false)
  const { t } = useLanguage() // Add this line to use translations

  // Default navigation items if none provided
  const defaultItems: NavigationItem[] = [
    { name: t("navigation.home"), href: "/", icon: Home },
    { name: t("navigation.courses"), href: "/courses", icon: BookOpen },
    { name: t("navigation.registration"), href: "/registration", icon: UserPlus },
    { name: t("navigation.dashboard"), href: "/dashboard", icon: LayoutDashboard, requiresAuth: true },
    { name: t("navigation.payments"), href: "/payments", icon: CreditCard, requiresAuth: true },
    { name: t("navigation.admin"), href: "/admin", icon: LayoutDashboard, requiresAuth: true, adminOnly: true },
  ]

  const navigationItems = items || defaultItems

  // Filter items based on authentication status
  const filteredItems = navigationItems.filter((item) => {
    if (item.adminOnly && (!user || user.type !== "admin")) {
      return false
    }
    if (item.requiresAuth && !user) {
      return false
    }
    return true
  })

  // Handle hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  // Default logo if none provided
  const defaultLogo = (
    <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
      LMS
    </div>
  )

  // Add the LanguageSwitcher to the header
  return (
    <header className={cn("sticky top-0 z-50 w-full border-b bg-background", className)}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            {logo || defaultLogo}
            <span className="hidden font-bold text-primary sm:inline-block">{logoText}</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {filteredItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1.5",
                  pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? "text-primary font-semibold"
                    : "text-muted-foreground",
                )}
              >
                {Icon && <Icon className="h-4 w-4" />}
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* Add the LanguageSwitcher here */}
          <LanguageSwitcher />

          {showThemeToggle && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt={user.email} />
                    <AvatarFallback>{user.email.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.email}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.type.charAt(0).toUpperCase() + user.type.slice(1)}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout} className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : showAuthButtons ? (
            <>
              <Button variant="ghost" onClick={onLoginClick} asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button onClick={onRegisterClick} asChild>
                <Link href="/registration">Register</Link>
              </Button>
            </>
          ) : null}

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex items-center gap-2 mb-8 mt-4">
                {logo || defaultLogo}
                <span className="font-bold text-primary">{logoText}</span>
              </div>
              <nav className="flex flex-col gap-4">
                {filteredItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary p-2 rounded-md flex items-center gap-2",
                        pathname === item.href || pathname.startsWith(`${item.href}/`)
                          ? "text-primary font-semibold bg-primary/10"
                          : "text-muted-foreground",
                      )}
                    >
                      {Icon && <Icon className="h-5 w-5" />}
                      {item.name}
                    </Link>
                  )
                })}
                {showThemeToggle && (
                  <div className="flex items-center gap-2 mt-4 p-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      aria-label="Toggle theme"
                    >
                      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                    <span className="text-sm">Toggle {theme === "dark" ? "Light" : "Dark"} Mode</span>
                  </div>
                )}
                {user ? (
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 p-2 border-t pt-4">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt={user.email} />
                        <AvatarFallback>{user.email.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{user.email}</p>
                        <p className="text-xs text-muted-foreground">
                          {user.type.charAt(0).toUpperCase() + user.type.slice(1)}
                        </p>
                      </div>
                    </div>
                    <Link
                      href="/profile"
                      className="text-sm font-medium transition-colors hover:text-primary p-2 rounded-md flex items-center gap-2 text-muted-foreground"
                    >
                      <User className="h-5 w-5" />
                      Profile
                    </Link>
                    <Button variant="outline" className="w-full mt-2 flex items-center gap-2" onClick={logout}>
                      <LogOut className="h-5 w-5" />
                      Log out
                    </Button>
                  </div>
                ) : showAuthButtons ? (
                  <div className="flex flex-col gap-2 mt-4">
                    <Button variant="outline" onClick={onLoginClick} asChild>
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button onClick={onRegisterClick} asChild>
                      <Link href="/registration">Register</Link>
                    </Button>
                  </div>
                ) : null}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

