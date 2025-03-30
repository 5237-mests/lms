"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, Users, CreditCard, FileText, Settings, LayoutDashboard } from "lucide-react"
import { cn } from "@/lib/utils"

const adminNavigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Student Registration", href: "/admin/students", icon: Users },
  { name: "Payment Management", href: "/admin/payments", icon: CreditCard },
  { name: "Report Generation", href: "/admin/reports", icon: FileText },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex flex-col w-64 border-r bg-background">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-primary">Admin Panel</h2>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        {adminNavigation.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-primary/5 hover:text-primary",
              )}
            >
              <Icon className="mr-3 h-5 w-5" aria-hidden="true" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

