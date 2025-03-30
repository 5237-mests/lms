"use client"

import Link from "next/link"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/components/auth-provider"
import { Loader2 } from "lucide-react"

export default function ProfilePage() {
  const router = useRouter()
  const { user, isLoading: authLoading } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    bio: "",
  })

  // Redirect if not logged in
  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login")
    } else if (user) {
      // In a real app, you would fetch user data from your API
      setUserData({
        firstName: "John",
        lastName: "Doe",
        email: user.email || "john.doe@example.com",
        phone: "123-456-7890",
        address: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
        bio: "Student in Computer Science program.",
      })
    }
  }, [user, authLoading, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setUserData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    // In a real app, you would update user data via your API
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      // Show success message or notification
    }, 1500)
  }

  if (authLoading) {
    return (
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="flex flex-col items-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="mt-2">Loading profile...</p>
        </div>
      </main>
    )
  }

  if (!user) {
    return null // Will redirect in useEffect
  }

  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-primary">My Profile</h1>
          <div className="flex items-center mt-2 md:mt-0">
            <Avatar className="h-10 w-10 mr-2">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt={userData.firstName} />
              <AvatarFallback>
                {userData.firstName.charAt(0)}
                {userData.lastName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">
                {userData.firstName} {userData.lastName}
              </p>
              <p className="text-sm text-muted-foreground">{user.type || "Student"}</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="personal">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="account">Account Settings</TabsTrigger>
            <TabsTrigger value="academic">Academic Info</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" value={userData.firstName} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" value={userData.lastName} onChange={handleInputChange} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" value={userData.email} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" value={userData.phone} onChange={handleInputChange} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" value={userData.address} onChange={handleInputChange} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" value={userData.city} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State/Province</Label>
                      <Input id="state" value={userData.state} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">Postal/Zip Code</Label>
                      <Input id="zip" value={userData.zip} onChange={handleInputChange} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea
                      id="bio"
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={userData.bio}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Button type="submit" disabled={isSaving}>
                    {isSaving ? "Saving..." : "Save Changes"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account settings and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Change Password</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                    <Button>Update Password</Button>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <h3 className="text-lg font-medium">Notification Preferences</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="emailNotifications">Email Notifications</Label>
                      <input
                        type="checkbox"
                        id="emailNotifications"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        defaultChecked
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="smsNotifications">SMS Notifications</Label>
                      <input
                        type="checkbox"
                        id="smsNotifications"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="marketingEmails">Marketing Emails</Label>
                      <input
                        type="checkbox"
                        id="marketingEmails"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                    </div>
                  </div>
                  <Button className="mt-2">Save Preferences</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="academic">
            <Card>
              <CardHeader>
                <CardTitle>Academic Information</CardTitle>
                <CardDescription>View your academic information and progress</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Program Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Program</p>
                      <p className="font-medium">Computer Science</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Student ID</p>
                      <p className="font-medium">STU-12345</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Enrollment Date</p>
                      <p className="font-medium">September 1, 2023</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Expected Graduation</p>
                      <p className="font-medium">June 15, 2027</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <h3 className="text-lg font-medium">Academic Progress</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <p className="text-sm font-medium">Overall Progress</p>
                        <p className="text-sm font-medium">25%</p>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: "25%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <p className="text-sm font-medium">Current Semester</p>
                        <p className="text-sm font-medium">75%</p>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <h3 className="text-lg font-medium">Current Courses</h3>
                  <div className="space-y-2">
                    {[
                      { code: "CS101", name: "Introduction to Computer Science", grade: "A-" },
                      { code: "MATH201", name: "Calculus II", grade: "B+" },
                      { code: "ENG102", name: "Academic Writing", grade: "A" },
                      { code: "PHYS101", name: "Physics I", grade: "B" },
                    ].map((course, index) => (
                      <div key={index} className="flex justify-between items-center p-2 border rounded-md">
                        <div>
                          <p className="font-medium">
                            {course.code}: {course.name}
                          </p>
                          <p className="text-sm text-muted-foreground">Current Grade: {course.grade}</p>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/courses/${course.code.toLowerCase()}`}>View Course</Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

