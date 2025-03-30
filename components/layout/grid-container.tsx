import type React from "react"
import { cn } from "@/lib/utils"

export interface GridContainerProps {
  children: React.ReactNode
  className?: string
  fullWidth?: boolean
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl"
  columns?: {
    xs?: 1 | 2 | 3 | 4 | 5 | 6
    sm?: 1 | 2 | 3 | 4 | 5 | 6
    md?: 1 | 2 | 3 | 4 | 5 | 6
    lg?: 1 | 2 | 3 | 4 | 5 | 6
    xl?: 1 | 2 | 3 | 4 | 5 | 6
  }
}

export function GridContainer({
  children,
  className,
  fullWidth = false,
  gap = "md",
  columns = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 4,
  },
}: GridContainerProps) {
  // Map gap sizes to Tailwind classes
  const gapClasses = {
    none: "gap-0",
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  }

  // Map column counts to Tailwind grid-template-columns classes
  const getColumnClass = (count: number | undefined, breakpoint: string) => {
    if (count === undefined) return ""

    if (breakpoint === "xs") {
      return `grid-cols-${count}`
    }

    return `${breakpoint}:grid-cols-${count}`
  }

  // Generate column classes for each breakpoint
  const columnClasses = [
    getColumnClass(columns.xs, "xs"),
    getColumnClass(columns.sm, "sm"),
    getColumnClass(columns.md, "md"),
    getColumnClass(columns.lg, "lg"),
    getColumnClass(columns.xl, "xl"),
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <div className={cn(fullWidth ? "w-full" : "container", "grid", columnClasses, gapClasses[gap], className)}>
      {children}
    </div>
  )
}

export interface GridItemProps {
  children: React.ReactNode
  className?: string
  colSpan?: {
    xs?: 1 | 2 | 3 | 4 | 5 | 6 | "full"
    sm?: 1 | 2 | 3 | 4 | 5 | 6 | "full"
    md?: 1 | 2 | 3 | 4 | 5 | 6 | "full"
    lg?: 1 | 2 | 3 | 4 | 5 | 6 | "full"
    xl?: 1 | 2 | 3 | 4 | 5 | 6 | "full"
  }
  rowSpan?: {
    xs?: 1 | 2 | 3 | 4 | 5 | 6
    sm?: 1 | 2 | 3 | 4 | 5 | 6
    md?: 1 | 2 | 3 | 4 | 5 | 6
    lg?: 1 | 2 | 3 | 4 | 5 | 6
    xl?: 1 | 2 | 3 | 4 | 5 | 6
  }
}

export function GridItem({ children, className, colSpan, rowSpan }: GridItemProps) {
  // Helper function to generate span classes
  const getSpanClass = (span: number | "full" | undefined, type: "col" | "row", breakpoint: string) => {
    if (span === undefined) return ""

    const prefix = breakpoint === "xs" ? "" : `${breakpoint}:`

    if (span === "full" && type === "col") {
      return `${prefix}col-span-full`
    }

    return `${prefix}${type}-span-${span}`
  }

  // Generate column span classes
  const colSpanClasses = colSpan
    ? [
        getSpanClass(colSpan.xs, "col", "xs"),
        getSpanClass(colSpan.sm, "col", "sm"),
        getSpanClass(colSpan.md, "col", "md"),
        getSpanClass(colSpan.lg, "col", "lg"),
        getSpanClass(colSpan.xl, "col", "xl"),
      ]
        .filter(Boolean)
        .join(" ")
    : ""

  // Generate row span classes
  const rowSpanClasses = rowSpan
    ? [
        getSpanClass(rowSpan.xs, "row", "xs"),
        getSpanClass(rowSpan.sm, "row", "sm"),
        getSpanClass(rowSpan.md, "row", "md"),
        getSpanClass(rowSpan.lg, "row", "lg"),
        getSpanClass(rowSpan.xl, "row", "xl"),
      ]
        .filter(Boolean)
        .join(" ")
    : ""

  return <div className={cn(colSpanClasses, rowSpanClasses, className)}>{children}</div>
}

