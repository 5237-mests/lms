import type React from "react"
import { cn } from "@/lib/utils"

export interface SectionProps {
  children: React.ReactNode
  className?: string
  title?: string
  description?: string
  fullWidth?: boolean
  padding?: "none" | "sm" | "md" | "lg" | "xl"
  divider?: boolean
  titleClassName?: string
  descriptionClassName?: string
  contentClassName?: string
}

export function Section({
  children,
  className,
  title,
  description,
  fullWidth = false,
  padding = "md",
  divider = false,
  titleClassName,
  descriptionClassName,
  contentClassName,
}: SectionProps) {
  // Map padding sizes to Tailwind classes
  const paddingClasses = {
    none: "py-0",
    sm: "py-4",
    md: "py-8",
    lg: "py-12",
    xl: "py-16",
  }

  return (
    <section className={cn(paddingClasses[padding], divider && "border-b", className)}>
      <div className={cn(fullWidth ? "w-full" : "container")}>
        {/* Section header */}
        {(title || description) && (
          <div className="mb-6">
            {title && <h2 className={cn("text-2xl font-bold tracking-tight", titleClassName)}>{title}</h2>}
            {description && <p className={cn("mt-1 text-muted-foreground", descriptionClassName)}>{description}</p>}
          </div>
        )}

        {/* Section content */}
        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  )
}

