"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"

export interface ResponsiveSidebarProps {
  children: React.ReactNode
  className?: string
  mobileTitle?: string
  showToggleButton?: boolean
  toggleButtonPosition?: "top-left" | "top-right"
  width?: string
  mobileWidth?: string
  breakpoint?: "sm" | "md" | "lg" | "xl"
}

export function ResponsiveSidebar({
  children,
  className,
  mobileTitle = "Menu",
  showToggleButton = true,
  toggleButtonPosition = "top-left",
  width = "16rem",
  mobileWidth = "80%",
  breakpoint = "md",
}: ResponsiveSidebarProps) {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Determine if we're on mobile based on the breakpoint
  useEffect(() => {
    const checkIsMobile = () => {
      const breakpointMap = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      }
      setIsMobile(window.innerWidth < breakpointMap[breakpoint])
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [breakpoint])

  // Desktop sidebar
  if (!isMobile) {
    return (
      <div className={cn("h-full overflow-y-auto border-r bg-background", className)} style={{ width }}>
        {children}
      </div>
    )
  }

  // Mobile sidebar (Sheet component)
  return (
    <>
      {showToggleButton && (
        <div className={cn("fixed z-40", toggleButtonPosition === "top-left" ? "top-4 left-4" : "top-4 right-4")}>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Toggle sidebar">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side={toggleButtonPosition === "top-left" ? "left" : "right"}
              className="p-0"
              style={{ width: mobileWidth }}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="font-semibold">{mobileTitle}</h2>
                <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close sidebar">
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className={cn("overflow-y-auto", className)}>{children}</div>
            </SheetContent>
          </Sheet>
        </div>
      )}
    </>
  )
}

