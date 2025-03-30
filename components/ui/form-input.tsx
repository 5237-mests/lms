"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { AlertCircle, Check } from "lucide-react"

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
  type?: string
  error?: string
  helperText?: string
  required?: boolean
  showSuccessIcon?: boolean
  fullWidth?: boolean
  className?: string
  labelClassName?: string
  inputClassName?: string
  validateFn?: (value: string) => string | undefined
}

export function FormInput({
  label,
  id,
  type = "text",
  error,
  helperText,
  required = false,
  showSuccessIcon = false,
  fullWidth = true,
  className,
  labelClassName,
  inputClassName,
  validateFn,
  onChange,
  onBlur,
  ...props
}: FormInputProps) {
  const [localError, setLocalError] = useState<string | undefined>(error)
  const [touched, setTouched] = useState(false)
  const [value, setValue] = useState(props.value || "")
  const [isValid, setIsValid] = useState(false)

  // Update local error when prop changes
  useEffect(() => {
    setLocalError(error)
  }, [error])

  // Update local value when prop changes
  useEffect(() => {
    setValue(props.value || "")
  }, [props.value])

  // Validate on value change if validateFn is provided
  useEffect(() => {
    if (validateFn && touched) {
      const validationError = validateFn(value as string)
      setLocalError(validationError)
      setIsValid(!validationError && value !== "")
    } else if (touched && required && !value) {
      setLocalError("This field is required")
      setIsValid(false)
    } else if (touched && value) {
      setIsValid(true)
      setLocalError(undefined)
    }
  }, [value, validateFn, touched, required])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)

    if (onChange) {
      onChange(e)
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched(true)

    if (validateFn) {
      const validationError = validateFn(e.target.value)
      setLocalError(validationError)
      setIsValid(!validationError && e.target.value !== "")
    } else if (required && !e.target.value) {
      setLocalError("This field is required")
      setIsValid(false)
    } else if (e.target.value) {
      setIsValid(true)
      setLocalError(undefined)
    }

    if (onBlur) {
      onBlur(e)
    }
  }

  return (
    <div className={cn("space-y-2", fullWidth ? "w-full" : "", className)}>
      <div className="flex justify-between">
        <Label htmlFor={id} className={cn("text-sm font-medium", localError ? "text-destructive" : "", labelClassName)}>
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
      </div>
      <div className="relative">
        <Input
          id={id}
          type={type}
          value={value as string}
          onChange={handleChange}
          onBlur={handleBlur}
          className={cn(
            "transition-colors",
            localError ? "border-destructive focus-visible:ring-destructive/30" : "",
            isValid && showSuccessIcon ? "pr-10" : "",
            inputClassName,
          )}
          aria-invalid={!!localError}
          aria-describedby={localError ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          required={required}
          {...props}
        />
        {isValid && showSuccessIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Check className="h-4 w-4 text-primary" />
          </div>
        )}
      </div>
      {localError ? (
        <div id={`${id}-error`} className="flex items-center text-sm text-destructive font-medium">
          <AlertCircle className="h-4 w-4 mr-1" />
          {localError}
        </div>
      ) : helperText ? (
        <p id={`${id}-helper`} className="text-sm text-muted-foreground">
          {helperText}
        </p>
      ) : null}
    </div>
  )
}

