"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export interface CardItemProps {
  title: string
  description?: string
  image?: string
  imageAlt?: string
  footer?: React.ReactNode
  className?: string
  headerClassName?: string
  contentClassName?: string
  footerClassName?: string
  children?: React.ReactNode
  badge?: string
  badgeVariant?: "default" | "success" | "warning" | "danger" | "info"
  actionLabel?: string
  actionHref?: string
  onActionClick?: () => void
  secondaryActionLabel?: string
  secondaryActionHref?: string
  onSecondaryActionClick?: () => void
  horizontal?: boolean
}

export function CardItem({
  title,
  description,
  image,
  imageAlt = "Card image",
  footer,
  className,
  headerClassName,
  contentClassName,
  footerClassName,
  children,
  badge,
  badgeVariant = "default",
  actionLabel,
  actionHref,
  onActionClick,
  secondaryActionLabel,
  secondaryActionHref,
  onSecondaryActionClick,
  horizontal = false,
}: CardItemProps) {
  const badgeClasses = {
    default: "bg-primary/10 text-primary",
    success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
    warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
    danger: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
    info: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
  }

  const renderActionButton = () => {
    if (!actionLabel) return null

    const button = (
      <Button onClick={onActionClick} className="w-full">
        {actionLabel}
      </Button>
    )

    if (actionHref) {
      return (
        <Link href={actionHref} className="w-full">
          {button}
        </Link>
      )
    }

    return button
  }

  const renderSecondaryActionButton = () => {
    if (!secondaryActionLabel) return null

    const button = (
      <Button variant="outline" onClick={onSecondaryActionClick} className="w-full">
        {secondaryActionLabel}
      </Button>
    )

    if (secondaryActionHref) {
      return (
        <Link href={secondaryActionHref} className="w-full">
          {button}
        </Link>
      )
    }

    return button
  }

  return (
    <Card
      className={cn("overflow-hidden transition-all hover:shadow-md", horizontal && "sm:flex sm:flex-row", className)}
    >
      {image && (
        <div className={cn("relative h-48 w-full overflow-hidden", horizontal && "sm:h-auto sm:w-1/3")}>
          <Image src={image || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
          {badge && (
            <div
              className={cn(
                "absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded-md",
                badgeClasses[badgeVariant],
              )}
            >
              {badge}
            </div>
          )}
        </div>
      )}
      <div className={cn("flex flex-col", horizontal && "sm:w-2/3")}>
        <CardHeader className={headerClassName}>
          {badge && !image && (
            <div
              className={cn("inline-block px-2 py-1 text-xs font-medium rounded-md mb-2", badgeClasses[badgeVariant])}
            >
              {badge}
            </div>
          )}
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent className={cn("flex-grow", contentClassName)}>{children}</CardContent>
        {(footer || actionLabel || secondaryActionLabel) && (
          <CardFooter className={cn("flex flex-col sm:flex-row gap-2", footerClassName)}>
            {footer || (
              <>
                {renderActionButton()}
                {renderSecondaryActionButton()}
              </>
            )}
          </CardFooter>
        )}
      </div>
    </Card>
  )
}

