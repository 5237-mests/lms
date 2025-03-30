import type React from "react"
import { cn } from "@/lib/utils"

export interface PageLayoutProps {
  children: React.ReactNode
  className?: string
  sidebar?: React.ReactNode
  sidebarPosition?: "left" | "right"
  sidebarWidth?: string
  header?: React.ReactNode
  headerSticky?: boolean
  footer?: React.ReactNode
  footerSticky?: boolean
  contentClassName?: string
}

export function PageLayout({
  children,
  className,
  sidebar,
  sidebarPosition = "left",
  sidebarWidth = "16rem",
  header,
  headerSticky = true,
  footer,
  footerSticky = false,
  contentClassName,
}: PageLayoutProps) {
  return (
    <div className={cn("flex flex-col min-h-screen", className)}>
      {/* Header */}
      {header && (
        <div className={cn("w-full bg-background z-10 border-b", headerSticky && "sticky top-0")}>{header}</div>
      )}

      {/* Main content with optional sidebar */}
      <div className="flex flex-1 w-full">
        {/* Sidebar - Left position */}
        {sidebar && sidebarPosition === "left" && (
          <div className="hidden md:block border-r bg-background" style={{ width: sidebarWidth }}>
            {sidebar}
          </div>
        )}

        {/* Main content */}
        <main className={cn("flex-1 w-full", contentClassName)}>{children}</main>

        {/* Sidebar - Right position */}
        {sidebar && sidebarPosition === "right" && (
          <div className="hidden md:block border-l bg-background" style={{ width: sidebarWidth }}>
            {sidebar}
          </div>
        )}
      </div>

      {/* Footer */}
      {footer && <div className={cn("w-full bg-background border-t", footerSticky && "sticky bottom-0")}>{footer}</div>}
    </div>
  )
}

