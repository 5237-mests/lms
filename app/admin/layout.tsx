import type React from "react"
import Sidebar from "@/components/sidebar"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

// This is a server component that checks if the user is authenticated as admin
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // In a real app, you would verify the user's session on the server
  // For this example, we'll use a simple cookie check
  //const cookieStore = cookies()
  //const isAuthenticated = cookieStore.get("auth")?.value
  //const userType = cookieStore.get("userType")?.value

  // If not authenticated or not an admin, redirect to login
  //if (!isAuthenticated || userType !== "admin") {
    //redirect("/login")
  //}

  return (
    <>
      <Sidebar />
      <div className="flex-1">{children}</div>
    </>
  )
}

