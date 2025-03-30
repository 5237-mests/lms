"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  email: string
  type: "student" | "teacher" | "admin"
} | null

type AuthContextType = {
  user: User
  isLoading: boolean
  login: (email: string, password: string, userType: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Check if user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // In a real app, you would verify the user's session with your backend
        // For this example, we'll use cookies
        const authCookie = document.cookie.split("; ").find((row) => row.startsWith("auth="))

        if (authCookie) {
          const userTypeCookie = document.cookie.split("; ").find((row) => row.startsWith("userType="))

          const userType = userTypeCookie
            ? (userTypeCookie.split("=")[1] as "student" | "teacher" | "admin")
            : "student"

          // Mock user data
          setUser({
            id: "user-123",
            email: "user@example.com",
            type: userType,
          })
        }
      } catch (error) {
        console.error("Auth check failed:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string, userType: string) => {
    setIsLoading(true)
    try {
      // In a real app, you would authenticate with your backend
      // For this example, we'll just set cookies

      // Set cookies for 7 days
      const expiryDate = new Date()
      expiryDate.setDate(expiryDate.getDate() + 7)

      document.cookie = `auth=true; expires=${expiryDate.toUTCString()}; path=/`
      document.cookie = `userType=${userType}; expires=${expiryDate.toUTCString()}; path=/`

      setUser({
        id: "user-123",
        email,
        type: userType as "student" | "teacher" | "admin",
      })
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    // Clear cookies
    document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    document.cookie = "userType=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"

    setUser(null)
    router.push("/login")
  }

  return <AuthContext.Provider value={{ user, isLoading, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

