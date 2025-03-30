import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { GridContainer, GridItem } from "@/components/layout/grid-container"
import { Save, Upload } from "lucide-react"

export default function AdminSettingsPage() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-primary">System Settings</h1>
          <p className="text-muted-foreground">Configure system-wide settings for your LMS platform</p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="bg-primary/10">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="emails">Email Templates</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        {/* General Settings Tab */}
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Platform Settings</CardTitle>
              <CardDescription>Configure general settings for your LMS platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <GridContainer columns={{ xs: 1, md: 2 }} gap="md">
                <GridItem>
                  <div className="space-y-2">
                    <Label htmlFor="platform-name">Platform Name</Label>
                    <Input id="platform-name" defaultValue="EduLearn LMS" />
                  </div>
                </GridItem>
                <GridItem>
                  <div className="space-y-2">
                    <Label htmlFor="platform-url">Platform URL</Label>
                    <Input id="platform-url" defaultValue="https://edulearn.example.com" />
                  </div>
                </GridItem>
                <GridItem colSpan={{ xs: "full" }}>
                  <div className="space-y-2">
                    <Label htmlFor="platform-description">Platform Description</Label>
                    <textarea
                      id="platform-description"
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      defaultValue="EduLearn is a comprehensive learning management system for educational institutions."
                    />
                  </div>
                </GridItem>
              </GridContainer>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Branding</h3>
                <div className="flex items-start gap-4">
                  <div className="w-24 h-24 border rounded-md flex items-center justify-center bg-muted">
                    <p className="text-xs text-center text-muted-foreground">Logo Preview</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="logo">Platform Logo</Label>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Logo
                      </Button>
                      <p className="text-xs text-muted-foreground">Recommended size: 200x200px. Max file size: 2MB.</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Regional Settings</h3>
                <GridContainer columns={{ xs: 1, md: 2 }} gap="md">
                  <GridItem>
                    <div className="space-y-2">
                      <Label htmlFor="default-language">Default Language</Label>
                      <Select defaultValue="en">
                        <SelectTrigger>
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                          <SelectItem value="zh">Chinese</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </GridItem>
                  <GridItem>
                    <div className="space-y-2">
                      <Label htmlFor="default-timezone">Default Timezone</Label>
                      <Select defaultValue="utc">
                        <SelectTrigger>
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="utc">UTC (GMT)</SelectItem>
                          <SelectItem value="est">Eastern Time (ET)</SelectItem>
                          <SelectItem value="cst">Central Time (CT)</SelectItem>
                          <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                          <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </GridItem>
                  <GridItem>
                    <div className="space-y-2">
                      <Label htmlFor="date-format">Date Format</Label>
                      <Select defaultValue="mdy">
                        <SelectTrigger>
                          <SelectValue placeholder="Select date format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                          <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                          <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </GridItem>
                  <GridItem>
                    <div className="space-y-2">
                      <Label htmlFor="currency">Default Currency</Label>
                      <Select defaultValue="usd">
                        <SelectTrigger>
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usd">USD ($)</SelectItem>
                          <SelectItem value="eur">EUR (€)</SelectItem>
                          <SelectItem value="gbp">GBP (£)</SelectItem>
                          <SelectItem value="jpy">JPY (¥)</SelectItem>
                          <SelectItem value="cad">CAD (C$)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </GridItem>
                </GridContainer>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">System Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable maintenance mode to temporarily disable access to the platform
                      </p>
                    </div>
                    <Switch id="maintenance-mode" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="enable-blog">Blog Feature</Label>
                      <p className="text-sm text-muted-foreground">Enable the blog feature for your platform</p>
                    </div>
                    <Switch id="enable-blog" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="enable-forum">Discussion Forums</Label>
                      <p className="text-sm text-muted-foreground">Enable discussion forums for courses</p>
                    </div>
                    <Switch id="enable-forum" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="enable-certificates">Certificates</Label>
                      <p className="text-sm text-muted-foreground">Enable course completion certificates</p>
                    </div>
                    <Switch id="enable-certificates" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Analytics & Tracking</CardTitle>
              <CardDescription>Configure analytics and tracking settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="google-analytics">Google Analytics ID</Label>
                <Input id="google-analytics" placeholder="UA-XXXXXXXXX-X or G-XXXXXXXXXX" />
                <p className="text-sm text-muted-foreground">Enter your Google Analytics tracking ID</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="enable-tracking">Enable User Activity Tracking</Label>
                  <p className="text-sm text-muted-foreground">Track user activity for analytics purposes</p>
                </div>
                <Switch id="enable-tracking" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* User Management Tab */}
        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Registration</CardTitle>
              <CardDescription>Configure user registration settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Registration Options</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="allow-registration">Allow Public Registration</Label>
                      <p className="text-sm text-muted-foreground">Allow users to register accounts on the platform</p>
                    </div>
                    <Switch id="allow-registration" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-verification">Require Email Verification</Label>
                      <p className="text-sm text-muted-foreground">
                        Require users to verify their email address before accessing the platform
                      </p>
                    </div>
                    <Switch id="email-verification" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="admin-approval">Require Admin Approval</Label>
                      <p className="text-sm text-muted-foreground">
                        Require administrator approval for new user registrations
                      </p>
                    </div>
                    <Switch id="admin-approval" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Default User Settings</h3>
                <GridContainer columns={{ xs: 1, md: 2 }} gap="md">
                  <GridItem>
                    <div className="space-y-2">
                      <Label htmlFor="default-role">Default User Role</Label>
                      <Select defaultValue="student">
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="instructor">Instructor</SelectItem>
                          <SelectItem value="admin">Administrator</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </GridItem>
                  <GridItem>
                    <div className="space-y-2">
                      <Label htmlFor="account-status">Default Account Status</Label>
                      <Select defaultValue="active">
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="pending">Pending Approval</SelectItem>
                          <SelectItem value="restricted">Restricted</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </GridItem>
                </GridContainer>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">User Profile Fields</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>First Name</Label>
                      <p className="text-sm text-muted-foreground">Require first name in user profiles</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch defaultChecked />
                      <Label className="text-sm">Required</Label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Last Name</Label>
                      <p className="text-sm text-muted-foreground">Require last name in user profiles</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch defaultChecked />
                      <Label className="text-sm">Required</Label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Phone Number</Label>
                      <p className="text-sm text-muted-foreground">Require phone number in user profiles</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch />
                      <Label className="text-sm">Required</Label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Profile Picture</Label>
                      <p className="text-sm text-muted-foreground">Allow users to upload profile pictures</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch defaultChecked />
                      <Label className="text-sm">Enabled</Label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Bio</Label>
                      <p className="text-sm text-muted-foreground">Allow users to add a bio to their profile</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch defaultChecked />
                      <Label className="text-sm">Enabled</Label>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Add Custom Field
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Roles & Permissions</CardTitle>
              <CardDescription>Configure user roles and their permissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Manage Roles</h3>
                  <Button variant="outline" size="sm">
                    Add New Role
                  </Button>
                </div>
                <div className="border rounded-md">
                  <div className="grid grid-cols-4 gap-4 p-4 font-medium border-b bg-muted/50">
                    <div>Role Name</div>
                    <div>Description</div>
                    <div>Users</div>
                    <div>Actions</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 p-4 border-b">
                    <div className="font-medium">Administrator</div>
                    <div className="text-sm text-muted-foreground">Full system access and control</div>
                    <div>3</div>
                    <div>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 p-4 border-b">
                    <div className="font-medium">Instructor</div>
                    <div className="text-sm text-muted-foreground">Can create and manage courses</div>
                    <div>12</div>
                    <div>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 p-4">
                    <div className="font-medium">Student</div>
                    <div className="text-sm text-muted-foreground">Can enroll in and access courses</div>
                    <div>1,248</div>
                    <div>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Courses Tab */}
        <TabsContent value="courses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Settings</CardTitle>
              <CardDescription>Configure course-related settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Course Creation</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="instructor-course-creation">Instructor Course Creation</Label>
                      <p className="text-sm text-muted-foreground">Allow instructors to create courses</p>
                    </div>
                    <Switch id="instructor-course-creation" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="course-approval">Require Course Approval</Label>
                      <p className="text-sm text-muted-foreground">
                        Require administrator approval before courses are published
                      </p>
                    </div>
                    <Switch id="course-approval" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="course-templates">Enable Course Templates</Label>
                      <p className="text-sm text-muted-foreground">Allow instructors to use course templates</p>
                    </div>
                    <Switch id="course-templates" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Course Display</h3>
                <GridContainer columns={{ xs: 1, md: 2 }} gap="md">
                  <GridItem>
                    <div className="space-y-2">
                      <Label htmlFor="courses-per-page">Courses Per Page</Label>
                      <Input id="courses-per-page" type="number" defaultValue="12" />
                    </div>
                  </GridItem>
                  <GridItem>
                    <div className="space-y-2">
                      <Label htmlFor="default-sort">Default Sort Order</Label>
                      <Select defaultValue="newest">
                        <SelectTrigger>
                          <SelectValue placeholder="Select sort order" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="newest">Newest First</SelectItem>
                          <SelectItem value="oldest">Oldest First</SelectItem>
                          <SelectItem value="alphabetical">Alphabetical</SelectItem>
                          <SelectItem value="popular">Most Popular</SelectItem>
                          <SelectItem value="rating">Highest Rated</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </GridItem>
                </GridContainer>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="show-ratings">Show Course Ratings</Label>
                    <p className="text-sm text-muted-foreground">Display course ratings on course cards and pages</p>
                  </div>
                  <Switch id="show-ratings" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="show-instructors">Show Course Instructors</Label>
                    <p className="text-sm text-muted-foreground">Display instructor information on course cards</p>
                  </div>
                  <Switch id="show-instructors" defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Course Categories</h3>
                <div className="border rounded-md">
                  <div className="grid grid-cols-3 gap-4 p-4 font-medium border-b bg-muted/50">
                    <div>Category Name</div>
                    <div>Courses</div>
                    <div>Actions</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 border-b">
                    <div className="font-medium">Computer Science</div>
                    <div>24</div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 border-b">
                    <div className="font-medium">Business</div>
                    <div>18</div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4">
                    <div className="font-medium">Mathematics</div>
                    <div>12</div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Add Category
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content Settings</CardTitle>
              <CardDescription>Configure content and media settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">File Uploads</h3>
                <GridContainer columns={{ xs: 1, md: 2 }} gap="md">
                  <GridItem>
                    <div className="space-y-2">
                      <Label htmlFor="max-upload-size">Maximum Upload Size (MB)</Label>
                      <Input id="max-upload-size" type="number" defaultValue="50" />
                    </div>
                  </GridItem>
                  <GridItem>
                    <div className="space-y-2">
                      <Label htmlFor="allowed-file-types">Allowed File Types</Label>
                      <Input
                        id="allowed-file-types"
                        defaultValue="pdf,doc,docx,ppt,pptx,xls,xlsx,jpg,jpeg,png,gif,mp4,mp3"
                      />
                    </div>
                  </GridItem>
                </GridContainer>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Media Settings</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="video-autoplay">Video Autoplay</Label>
                      <p className="text-sm text-muted-foreground">Automatically play videos when loaded</p>
                    </div>
                    <Switch id="video-autoplay" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="video-quality">Default Video Quality</Label>
                      <p className="text-sm text-muted-foreground">Set the default video quality</p>
                    </div>
                    <Select defaultValue="auto">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select quality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="auto">Auto</SelectItem>
                        <SelectItem value="1080p">1080p</SelectItem>
                        <SelectItem value="720p">720p</SelectItem>
                        <SelectItem value="480p">480p</SelectItem>
                        <SelectItem value="360p">360p</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payments Tab */}
        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Gateways</CardTitle>
              <CardDescription>Configure payment gateway settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Stripe Integration</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="enable-stripe">Enable Stripe</Label>
                      <p className="text-sm text-muted-foreground">Enable Stripe payment gateway</p>
                    </div>
                    <Switch id="enable-stripe" defaultChecked />
                  </div>
                  <GridContainer columns={{ xs: 1, md: 2 }} gap="md">
                    <GridItem>
                      <div className="space-y-2">
                        <Label htmlFor="stripe-public-key">Stripe Public Key</Label>
                        <Input id="stripe-public-key" type="password" defaultValue="pk_test_..." />
                      </div>
                    </GridItem>
                    <GridItem>
                      <div className="space-y-2">
                        <Label htmlFor="stripe-secret-key">Stripe Secret Key</Label>
                        <Input id="stripe-secret-key" type="password" defaultValue="sk_test_..." />
                      </div>
                    </GridItem>
                  </GridContainer>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="stripe-test-mode">Test Mode</Label>
                      <p className="text-sm text-muted-foreground">Enable Stripe test mode</p>
                    </div>
                    <Switch id="stripe-test-mode" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">PayPal Integration</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="enable-paypal">Enable PayPal</Label>
                      <p className="text-sm text-muted-foreground">Enable PayPal payment gateway</p>
                    </div>
                    <Switch id="enable-paypal" />
                  </div>
                  <GridContainer columns={{ xs: 1, md: 2 }} gap="md">
                    <GridItem>
                      <div className="space-y-2">
                        <Label htmlFor="paypal-client-id">PayPal Client ID</Label>
                        <Input id="paypal-client-id" type="password" defaultValue="client_id_..." />
                      </div>
                    </GridItem>
                    <GridItem>
                      <div className="space-y-2">
                        <Label htmlFor="paypal-secret">PayPal Secret</Label>
                        <Input id="paypal-secret" type="password" defaultValue="secret_..." />
                      </div>
                    </GridItem>
                  </GridContainer>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="paypal-sandbox">Sandbox Mode</Label>
                      <p className="text-sm text-muted-foreground">Enable PayPal sandbox mode</p>
                    </div>
                    <Switch id="paypal-sandbox" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Settings</CardTitle>
              <CardDescription>Configure general payment settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Currency Settings</h3>
                <GridContainer columns={{ xs: 1, md: 2 }} gap="md">
                  <GridItem>
                    <div className="space-y-2">
                      <Label htmlFor="currency-symbol">Currency Symbol</Label>
                      <Input id="currency-symbol" defaultValue="$" />
                    </div>
                  </GridItem>
                  <GridItem>
                    <div className="space-y-2">
                      <Label htmlFor="currency-position">Currency Position</Label>
                      <Select defaultValue="before">
                        <SelectTrigger>
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="before">Before amount ($100)</SelectItem>
                          <SelectItem value="after">After amount (100$)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </GridItem>
                  <GridItem>
                    <div className="space-y-2">
                      <Label htmlFor="thousand-separator">Thousand Separator</Label>
                      <Input id="thousand-separator" defaultValue="," />
                    </div>
                  </GridItem>
                  <GridItem>
                    <div className="space-y-2">
                      <Label htmlFor="decimal-separator">Decimal Separator</Label>
                      <Input id="decimal-separator" defaultValue="." />
                    </div>
                  </GridItem>
                </GridContainer>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Tax Settings</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="enable-tax">Enable Tax</Label>
                      <p className="text-sm text-muted-foreground">Enable tax calculations for payments</p>
                    </div>
                    <Switch id="enable-tax" defaultChecked />
                  </div>
                  <GridContainer columns={{ xs: 1, md: 2 }} gap="md">
                    <GridItem>
                      <div className="space-y-2">
                        <Label htmlFor="tax-rate">Default Tax Rate (%)</Label>
                        <Input id="tax-rate" type="number" defaultValue="7.5" />
                      </div>
                    </GridItem>
                    <GridItem>
                      <div className="space-y-2">
                        <Label htmlFor="tax-name">Tax Name</Label>
                        <Input id="tax-name" defaultValue="Sales Tax" />
                      </div>
                    </GridItem>
                  </GridContainer>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="prices-include-tax">Prices Include Tax</Label>
                      <p className="text-sm text-muted-foreground">Display prices with tax included</p>
                    </div>
                    <Switch id="prices-include-tax" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Invoice Settings</h3>
                <GridContainer columns={{ xs: 1, md: 2 }} gap="md">
                  <GridItem>
                    <div className="space-y-2">
                      <Label htmlFor="invoice-prefix">Invoice Number Prefix</Label>
                      <Input id="invoice-prefix" defaultValue="INV-" />
                    </div>
                  </GridItem>
                  <GridItem>
                    <div className="space-y-2">
                      <Label htmlFor="next-invoice-number">Next Invoice Number</Label>
                      <Input id="next-invoice-number" type="number" defaultValue="1001" />
                    </div>
                  </GridItem>
                  <GridItem colSpan={{ xs: "full" }}>
                    <div className="space-y-2">
                      <Label htmlFor="invoice-footer">Invoice Footer Text</Label>
                      <textarea
                        id="invoice-footer"
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        defaultValue="Thank you for your business!"
                      />
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Templates Tab */}
        <TabsContent value="emails" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Email Configuration</CardTitle>
              <CardDescription>Configure email sending settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">SMTP Settings</h3>
                <GridContainer columns={{ xs: 1, md: 2 }} gap="md">
                  <GridItem>
                    <div className="space-y-2">
                      <Label htmlFor="smtp-host">SMTP Host</Label>
                      <Input id="smtp-host" defaultValue="smtp.example.com" />
                    </div>
                  </GridItem>
                  <GridItem>
                    <div className="space-y-2">
                      <Label htmlFor="smtp-port">SMTP Port</Label>
                      <Input id="smtp-port" type="number" defaultValue="587" />
                    </div>
                  </GridItem>
                  <GridItem>
                    <div className="space-y-2">
                      <Label htmlFor="smtp-username">SMTP Username</Label>
                      <Input id="smtp-username" defaultValue="user@example.com" />
                    </div>
                  </GridItem>
                  <GridItem>
                    <div className="space-y-2">
                      <Label htmlFor="smtp-password">SMTP Password</Label>
                      <Input id="smtp-password" type="password" defaultValue="password" />
                    </div>
                  </GridItem>
                  <GridItem>
                    <div className="space-y-2">
                      <Label htmlFor="smtp-encryption">Encryption</Label>
                      <Select defaultValue="tls">
                        <SelectTrigger>
                          <SelectValue placeholder="Select encryption" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="ssl">SSL</SelectItem>
                          <SelectItem value="tls">TLS</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </GridItem>
                  <GridItem>
                    <div className="space-y-2">
                      <Label htmlFor="from-email">From Email</Label>
                      <Input id="from-email" defaultValue="noreply@example.com" />
                    </div>
                  </GridItem>
                </GridContainer>
                <Button variant="outline" size="sm">
                  Test Connection
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Email Templates</CardTitle>
              <CardDescription>Configure email templates for various system notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Manage Templates</h3>
                  <Button variant="outline" size="sm">
                    Create Template
                  </Button>
                </div>
                <div className="border rounded-md">
                  <div className="grid grid-cols-4 gap-4 p-4 font-medium border-b bg-muted/50">
                    <div>Template Name</div>
                    <div>Subject</div>
                    <div>Last Updated</div>
                    <div>Actions</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 p-4 border-b">
                    <div className="font-medium">Welcome Email</div>
                    <div className="text-sm text-muted-foreground">Welcome to EduLearn LMS</div>
                    <div className="text-sm text-muted-foreground">2023-10-15</div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Preview
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 p-4 border-b">
                    <div className="font-medium">Password Reset</div>
                    <div className="text-sm text-muted-foreground">Reset Your Password</div>
                    <div className="text-sm text-muted-foreground">2023-10-10</div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Preview
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 p-4 border-b">
                    <div className="font-medium">Course Enrollment</div>
                    <div className="text-sm text-muted-foreground">You've Been Enrolled in a Course</div>
                    <div className="text-sm text-muted-foreground">2023-09-28</div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Preview
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 p-4">
                    <div className="font-medium">Course Completion</div>
                    <div className="text-sm text-muted-foreground">Congratulations on Completing Your Course</div>
                    <div className="text-sm text-muted-foreground">2023-09-15</div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Preview
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Authentication Settings</CardTitle>
              <CardDescription>Configure authentication and security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Password Policy</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="min-password-length">Minimum Password Length</Label>
                      <p className="text-sm text-muted-foreground">Set the minimum required password length</p>
                    </div>
                    <Input
                      id="min-password-length"
                      type="number"
                      defaultValue="8"
                      className="w-20 text-center"
                      min="6"
                      max="32"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="require-uppercase">Require Uppercase Letters</Label>
                      <p className="text-sm text-muted-foreground">Require at least one uppercase letter</p>
                    </div>
                    <Switch id="require-uppercase" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="require-numbers">Require Numbers</Label>
                      <p className="text-sm text-muted-foreground">Require at least one number</p>
                    </div>
                    <Switch id="require-numbers" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="require-special">Require Special Characters</Label>
                      <p className="text-sm text-muted-foreground">Require at least one special character</p>
                    </div>
                    <Switch id="require-special" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Login Security</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="max-login-attempts">Maximum Login Attempts</Label>
                      <p className="text-sm text-muted-foreground">
                        Number of failed login attempts before account lockout
                      </p>
                    </div>
                    <Input
                      id="max-login-attempts"
                      type="number"
                      defaultValue="5"
                      className="w-20 text-center"
                      min="1"
                      max="10"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="lockout-duration">Account Lockout Duration (minutes)</Label>
                      <p className="text-sm text-muted-foreground">
                        Duration to lock account after maximum failed attempts
                      </p>
                    </div>
                    <Input id="lockout-duration" type="number" defaultValue="30" className="w-20 text-center" min="5" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically log out users after period of inactivity
                      </p>
                    </div>
                    <Input id="session-timeout" type="number" defaultValue="60" className="w-20 text-center" min="5" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="force-2fa-admin">Force 2FA for Administrators</Label>
                      <p className="text-sm text-muted-foreground">Require two-factor authentication for admin users</p>
                    </div>
                    <Switch id="force-2fa-admin" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Social Login</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="enable-google">Google Login</Label>
                      <p className="text-sm text-muted-foreground">Allow users to sign in with Google</p>
                    </div>
                    <Switch id="enable-google" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="enable-facebook">Facebook Login</Label>
                      <p className="text-sm text-muted-foreground">Allow users to sign in with Facebook</p>
                    </div>
                    <Switch id="enable-facebook" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="enable-twitter">Twitter Login</Label>
                      <p className="text-sm text-muted-foreground">Allow users to sign in with Twitter</p>
                    </div>
                    <Switch id="enable-twitter" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="enable-linkedin">LinkedIn Login</Label>
                      <p className="text-sm text-muted-foreground">Allow users to sign in with LinkedIn</p>
                    </div>
                    <Switch id="enable-linkedin" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacy & Compliance</CardTitle>
              <CardDescription>Configure privacy and compliance settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Privacy Policy</h3>
                <div className="space-y-2">
                  <Label htmlFor="privacy-policy">Privacy Policy URL</Label>
                  <Input id="privacy-policy" defaultValue="https://example.com/privacy-policy" />
                  <p className="text-sm text-muted-foreground">URL to your privacy policy page</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="require-privacy-acceptance">Require Privacy Policy Acceptance</Label>
                    <p className="text-sm text-muted-foreground">
                      Require users to accept privacy policy during registration
                    </p>
                  </div>
                  <Switch id="require-privacy-acceptance" defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Terms of Service</h3>
                <div className="space-y-2">
                  <Label htmlFor="terms-of-service">Terms of Service URL</Label>
                  <Input id="terms-of-service" defaultValue="https://example.com/terms-of-service" />
                  <p className="text-sm text-muted-foreground">URL to your terms of service page</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="require-terms-acceptance">Require Terms Acceptance</Label>
                    <p className="text-sm text-muted-foreground">
                      Require users to accept terms of service during registration
                    </p>
                  </div>
                  <Switch id="require-terms-acceptance" defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">GDPR Compliance</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="enable-gdpr">Enable GDPR Features</Label>
                      <p className="text-sm text-muted-foreground">Enable GDPR compliance features</p>
                    </div>
                    <Switch id="enable-gdpr" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="cookie-consent">Cookie Consent Banner</Label>
                      <p className="text-sm text-muted-foreground">Display cookie consent banner to users</p>
                    </div>
                    <Switch id="cookie-consent" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="data-export">Allow Data Export</Label>
                      <p className="text-sm text-muted-foreground">Allow users to export their personal data</p>
                    </div>
                    <Switch id="data-export" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="data-deletion">Allow Data Deletion</Label>
                      <p className="text-sm text-muted-foreground">Allow users to request account deletion</p>
                    </div>
                    <Switch id="data-deletion" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}

