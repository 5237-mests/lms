import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

export interface LoadingSpinnerProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  color?: "primary" | "secondary" | "white" | "muted"
  className?: string
  text?: string
  textPosition?: "left" | "right" | "top" | "bottom"
  fullPage?: boolean
}

export function LoadingSpinner({
  size = "md",
  color = "primary",
  className,
  text,
  textPosition = "right",
  fullPage = false,
}: LoadingSpinnerProps) {
  const sizeClasses = {
    xs: "h-3 w-3",
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
  }

  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    white: "text-white",
    muted: "text-muted-foreground",
  }

  const spinner = (
    <Loader2 className={cn("animate-spin", sizeClasses[size], colorClasses[color], className)} aria-hidden="true" />
  )

  if (fullPage) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
        <div className="flex flex-col items-center justify-center space-y-2">
          {spinner}
          {text && <p className="text-sm font-medium">{text}</p>}
        </div>
      </div>
    )
  }

  if (!text) {
    return (
      <div className="flex items-center justify-center" role="status" aria-label="Loading">
        {spinner}
        <span className="sr-only">Loading</span>
      </div>
    )
  }

  const flexDirection = {
    left: "flex-row-reverse",
    right: "flex-row",
    top: "flex-col-reverse",
    bottom: "flex-col",
  }

  const spacing = {
    left: "space-x-reverse space-x-2",
    right: "space-x-2",
    top: "space-y-reverse space-y-2",
    bottom: "space-y-2",
  }

  return (
    <div
      className={cn("flex items-center justify-center", flexDirection[textPosition], spacing[textPosition])}
      role="status"
      aria-label={text}
    >
      {spinner}
      <span className="text-sm font-medium">{text}</span>
    </div>
  )
}

