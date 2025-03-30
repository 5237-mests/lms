"use client"

import type React from "react"

import { useState } from "react"
import { GridContainer, GridItem } from "@/components/layout/grid-container"
import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FormInput } from "@/components/ui/form-input"
import { useAuth } from "@/components/auth-provider"
import { useRouter } from "next/navigation"
import {
  Bell,
  Lock,
  User,
  Shield,
  Palette,
  LogOut,
  Mail,
  MessageSquare,
  Calendar,
  Upload,
  Trash2,
  Save,
} from "lucide-react"

export default function SettingsPage() {
  const router = useRouter()
  const { user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState("account")
  const [isSaving, setIsSaving] = useState(false)

  // Mock user data
  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    language: "english",
    timezone: "utc-8",
    bio: "Student in Computer Science program.",
    theme: "system",
    fontSize: "medium",
    highContrast: false,
    reducedMotion: false,
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    marketingEmails: false,
    profileVisibility: "public",
    activityVisibility: "friends",
    showOnlineStatus: true,
    twoFactorEnabled: false,
    sessionTimeout: "30min",
  })

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setUserData((prev) => ({ ...prev, [id]: value }))
  }

  // Handle switch toggle
  const handleSwitchChange = (id: string, checked: boolean) => {
    setUserData((prev) => ({ ...prev, [id]: checked }))
  }

  // Handle select change
  const handleSelectChange = (id: string, value: string) => {
    setUserData((prev) => ({ ...prev, [id]: value }))
  }

  // Handle save
  const handleSave = () => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      // Show success message or notification
    }, 1000)
  }

  // Sidebar content
  const sidebar = (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b">
        <h2 className="font-semibold text-primary">Settings</h2>
      </div>
      <div className="flex-1 p-2">
        <nav className="space-y-1">
          {[
            { name: "Account", value: "account", icon: User },
            { name: "Notifications", value: "notifications", icon: Bell },
            { name: "Privacy", value: "privacy", icon: Shield },
            { name: "Appearance", value: "appearance", icon: Palette },
            { name: "Security", value: "security", icon: Lock },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.value)}
              className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md ${
                activeTab === item.value
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
              }`}
            >
              <item.icon className="mr-3 h-5 w-5" aria-hidden="true" />
              {item.name}
            </button>
          ))}
        </nav>
      </div>
      <div className="p-4 border-t">
        <Button variant="destructive" className="w-full" onClick={logout}>
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </div>
    </div>
  )

  //if (!user) {
    //router.push("/login")
    //return null
  //}

  return (
    <PageLayout sidebar={sidebar} sidebarPosition="left" sidebarWidth="16rem">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Settings</h1>
            <p className="text-muted-foreground">Manage your account settings and preferences</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Button onClick={handleSave} disabled={isSaving}>
              {isSaving ? (
                <>Saving...</>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsContent value="account" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal information and profile details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="flex flex-col items-center gap-2">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-1" />
                        Upload
                      </Button>
                      <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex-1">
                    <GridContainer
                      columns={{
                        xs: 1,
                        sm: 2,
                      }}
                      gap="md"
                    >
                      <GridItem>
                        <FormInput
                          label="First Name"
                          id="firstName"
                          value={userData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </GridItem>
                      <GridItem>
                        <FormInput
                          label="Last Name"
                          id="lastName"
                          value={userData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </GridItem>
                      <GridItem colSpan={{ xs: "full" }}>
                        <FormInput
                          label="Email"
                          id="email"
                          type="email"
                          value={userData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </GridItem>
                      <GridItem>
                        <FormInput
                          label="Phone Number"
                          id="phone"
                          type="tel"
                          value={userData.phone}
                          onChange={handleInputChange}
                        />
                      </GridItem>
                    </GridContainer>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea
                      id="bio"
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={userData.bio}
                      onChange={handleInputChange}
                    />
                    <p className="text-sm text-muted-foreground">
                      Write a short bio about yourself. This will be visible on your profile.
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Regional Settings</h3>
                  <GridContainer
                    columns={{
                      xs: 1,
                      sm: 2,
                    }}
                    gap="md"
                  >
                    <GridItem>
                      <div className="space-y-2">
                        <Label htmlFor="language">Language</Label>
                        <Select
                          value={userData.language}
                          onValueChange={(value) => handleSelectChange("language", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="english">English</SelectItem>
                            <SelectItem value="spanish">Spanish</SelectItem>
                            <SelectItem value="french">French</SelectItem>
                            <SelectItem value="german">German</SelectItem>
                            <SelectItem value="chinese">Chinese</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </GridItem>
                    <GridItem>
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select
                          value={userData.timezone}
                          onValueChange={(value) => handleSelectChange("timezone", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="utc-12">UTC-12:00</SelectItem>
                            <SelectItem value="utc-8">UTC-08:00 (Pacific Time)</SelectItem>
                            <SelectItem value="utc-5">UTC-05:00 (Eastern Time)</SelectItem>
                            <SelectItem value="utc">UTC+00:00 (GMT)</SelectItem>
                            <SelectItem value="utc+1">UTC+01:00 (Central European Time)</SelectItem>
                            <SelectItem value="utc+8">UTC+08:00 (China Standard Time)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </GridItem>
                  </GridContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Manage how and when you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Email Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="emailNotifications">Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                      </div>
                      <Switch
                        id="emailNotifications"
                        checked={userData.emailNotifications}
                        onCheckedChange={(checked) => handleSwitchChange("emailNotifications", checked)}
                      />
                    </div>

                    {userData.emailNotifications && (
                      <div className="ml-6 space-y-3 border-l pl-6">
                        <div className="flex items-center gap-4">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <div className="flex-1 space-y-0.5">
                            <Label>Course Updates</Label>
                            <p className="text-sm text-muted-foreground">Receive updates about your enrolled courses</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center gap-4">
                          <MessageSquare className="h-4 w-4 text-muted-foreground" />
                          <div className="flex-1 space-y-0.5">
                            <Label>Messages</Label>
                            <p className="text-sm text-muted-foreground">Receive notifications about new messages</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center gap-4">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <div className="flex-1 space-y-0.5">
                            <Label>Calendar Events</Label>
                            <p className="text-sm text-muted-foreground">Receive reminders about upcoming events</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">SMS Notifications</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="smsNotifications">SMS Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
                    </div>
                    <Switch
                      id="smsNotifications"
                      checked={userData.smsNotifications}
                      onCheckedChange={(checked) => handleSwitchChange("smsNotifications", checked)}
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Push Notifications</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="pushNotifications">Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications in your browser</p>
                    </div>
                    <Switch
                      id="pushNotifications"
                      checked={userData.pushNotifications}
                      onCheckedChange={(checked) => handleSwitchChange("pushNotifications", checked)}
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Marketing Communications</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="marketingEmails">Marketing Emails</Label>
                      <p className="text-sm text-muted-foreground">Receive emails about new courses and promotions</p>
                    </div>
                    <Switch
                      id="marketingEmails"
                      checked={userData.marketingEmails}
                      onCheckedChange={(checked) => handleSwitchChange("marketingEmails", checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>Control your privacy and data sharing preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Profile Visibility</h3>
                  <div className="space-y-2">
                    <Label htmlFor="profileVisibility">Who can see your profile</Label>
                    <Select
                      value={userData.profileVisibility}
                      onValueChange={(value) => handleSelectChange("profileVisibility", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select visibility" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Everyone (Public)</SelectItem>
                        <SelectItem value="students">Students Only</SelectItem>
                        <SelectItem value="friends">Friends Only</SelectItem>
                        <SelectItem value="private">Only Me (Private)</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      This controls who can see your profile information and activity.
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Activity Visibility</h3>
                  <div className="space-y-2">
                    <Label htmlFor="activityVisibility">Who can see your activity</Label>
                    <Select
                      value={userData.activityVisibility}
                      onValueChange={(value) => handleSelectChange("activityVisibility", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select visibility" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Everyone (Public)</SelectItem>
                        <SelectItem value="students">Students Only</SelectItem>
                        <SelectItem value="friends">Friends Only</SelectItem>
                        <SelectItem value="private">Only Me (Private)</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      This controls who can see your course progress and achievements.
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Online Status</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="showOnlineStatus">Show Online Status</Label>
                      <p className="text-sm text-muted-foreground">Allow others to see when you're online</p>
                    </div>
                    <Switch
                      id="showOnlineStatus"
                      checked={userData.showOnlineStatus}
                      onCheckedChange={(checked) => handleSwitchChange("showOnlineStatus", checked)}
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Data Management</h3>
                  <div className="space-y-2">
                    <Button variant="outline">Download My Data</Button>
                    <p className="text-sm text-muted-foreground">Download a copy of all your personal data.</p>
                  </div>
                  <div className="space-y-2">
                    <Button variant="destructive">Delete Account</Button>
                    <p className="text-sm text-muted-foreground">
                      Permanently delete your account and all associated data.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appearance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
                <CardDescription>Customize how the application looks and feels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Theme</h3>
                  <div className="space-y-2">
                    <Label htmlFor="theme">Color Theme</Label>
                    <Select value={userData.theme} onValueChange={(value) => handleSelectChange("theme", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">Choose between light, dark, or system theme.</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Text Size</h3>
                  <div className="space-y-2">
                    <Label htmlFor="fontSize">Font Size</Label>
                    <Select value={userData.fontSize} onValueChange={(value) => handleSelectChange("fontSize", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select font size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
                        <SelectItem value="x-large">Extra Large</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">Adjust the size of text throughout the application.</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Accessibility</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="highContrast">High Contrast Mode</Label>
                        <p className="text-sm text-muted-foreground">Increase contrast for better visibility</p>
                      </div>
                      <Switch
                        id="highContrast"
                        checked={userData.highContrast}
                        onCheckedChange={(checked) => handleSwitchChange("highContrast", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="reducedMotion">Reduced Motion</Label>
                        <p className="text-sm text-muted-foreground">Minimize animations and transitions</p>
                      </div>
                      <Switch
                        id="reducedMotion"
                        checked={userData.reducedMotion}
                        onCheckedChange={(checked) => handleSwitchChange("reducedMotion", checked)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your account security and authentication methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Change Password</h3>
                  <GridContainer
                    columns={{
                      xs: 1,
                    }}
                    gap="md"
                  >
                    <GridItem>
                      <FormInput label="Current Password" id="currentPassword" type="password" required />
                    </GridItem>
                    <GridItem>
                      <FormInput
                        label="New Password"
                        id="newPassword"
                        type="password"
                        required
                        helperText="Password must be at least 8 characters and include a number and special character."
                      />
                    </GridItem>
                    <GridItem>
                      <FormInput label="Confirm New Password" id="confirmPassword" type="password" required />
                    </GridItem>
                    <GridItem>
                      <Button>Update Password</Button>
                    </GridItem>
                  </GridContainer>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="twoFactorEnabled">Enable Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Switch
                      id="twoFactorEnabled"
                      checked={userData.twoFactorEnabled}
                      onCheckedChange={(checked) => handleSwitchChange("twoFactorEnabled", checked)}
                    />
                  </div>
                  {userData.twoFactorEnabled && (
                    <div className="mt-4 p-4 border rounded-md bg-muted/50">
                      <h4 className="font-medium mb-2">Setup Two-Factor Authentication</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Scan the QR code with your authenticator app or enter the code manually.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <div className="bg-white p-4 rounded-md">
                          <div className="w-32 h-32 bg-primary/10 flex items-center justify-center">
                            <p className="text-xs text-center">QR Code Placeholder</p>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="space-y-2">
                            <Label htmlFor="verificationCode">Verification Code</Label>
                            <Input id="verificationCode" placeholder="Enter 6-digit code" />
                          </div>
                          <Button className="mt-4">Verify</Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Session Management</h3>
                  <div className="space-y-2">
                    <Label htmlFor="sessionTimeout">Session Timeout</Label>
                    <Select
                      value={userData.sessionTimeout}
                      onValueChange={(value) => handleSelectChange("sessionTimeout", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeout" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15min">15 minutes</SelectItem>
                        <SelectItem value="30min">30 minutes</SelectItem>
                        <SelectItem value="1hour">1 hour</SelectItem>
                        <SelectItem value="4hours">4 hours</SelectItem>
                        <SelectItem value="1day">1 day</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">Automatically log out after a period of inactivity.</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Active Sessions</h3>
                  <div className="space-y-3 border rounded-md divide-y">
                    <div className="p-3 flex justify-between items-center">
                      <div>
                        <p className="font-medium">Current Session</p>
                        <p className="text-sm text-muted-foreground">Chrome on Windows • IP: 192.168.1.1</p>
                        <p className="text-xs text-muted-foreground">Started: Today, 2:30 PM</p>
                      </div>
                      <div className="flex items-center">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        <span className="text-sm">Active</span>
                      </div>
                    </div>
                    <div className="p-3 flex justify-between items-center">
                      <div>
                        <p className="font-medium">Mobile App</p>
                        <p className="text-sm text-muted-foreground">iPhone • IP: 192.168.1.2</p>
                        <p className="text-xs text-muted-foreground">Started: Yesterday, 10:15 AM</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Revoke
                      </Button>
                    </div>
                    <div className="p-3 flex justify-between items-center">
                      <div>
                        <p className="font-medium">Safari</p>
                        <p className="text-sm text-muted-foreground">Mac • IP: 192.168.1.3</p>
                        <p className="text-xs text-muted-foreground">Started: 3 days ago</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Revoke
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline">Log Out of All Sessions</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  )
}

