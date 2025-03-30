import type React from "react"
import { cn } from "@/lib/utils"

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

