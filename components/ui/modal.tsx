"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description?: string
  children?: React.ReactNode
  footer?: React.ReactNode
  confirmLabel?: string
  cancelLabel?: string
  onConfirm?: () => void
  confirmVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "sm" | "md" | "lg" | "xl" | "full"
  className?: string
  showCloseButton?: boolean
  closeOnClickOutside?: boolean
  isLoading?: boolean
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  confirmLabel,
  cancelLabel = "Cancel",
  onConfirm,
  confirmVariant = "default",
  size = "md",
  className,
  showCloseButton = true,
  closeOnClickOutside = true,
  isLoading = false,
}: ModalProps) {
  const [open, setOpen] = useState(isOpen)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  const handleClose = () => {
    if (isLoading) return
    setOpen(false)
    onClose()
  }

  const handleConfirm = () => {
    if (isLoading) return
    if (onConfirm) {
      onConfirm()
    }
  }

  const sizeClasses = {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    full: "sm:max-w-[calc(100vw-2rem)] sm:h-[calc(100vh-4rem)]",
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        if (!open && !isLoading) {
          handleClose()
        }
      }}
    >
      <DialogContent
        className={cn("sm:rounded-lg", sizeClasses[size], size === "full" && "flex flex-col", className)}
        onInteractOutside={(e) => {
          if (!closeOnClickOutside || isLoading) {
            e.preventDefault()
          }
        }}
      >
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>{title}</DialogTitle>
            {showCloseButton && (
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={handleClose}
                disabled={isLoading}
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        <div className={cn(size === "full" && "flex-grow overflow-auto")}>{children}</div>

        {(footer || confirmLabel) && (
          <DialogFooter>
            {footer || (
              <>
                <Button variant="outline" onClick={handleClose} disabled={isLoading}>
                  {cancelLabel}
                </Button>
                {confirmLabel && (
                  <Button variant={confirmVariant} onClick={handleConfirm} disabled={isLoading}>
                    {isLoading ? "Loading..." : confirmLabel}
                  </Button>
                )}
              </>
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}

