import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AdminDashboard() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-primary">Admin Dashboard</h1>
        <Button asChild>
          <Link href="/admin/reports/generate">Generate Report</Link>
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="bg-primary/10">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-l-4 border-l-primary">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,248</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45</div>
                <p className="text-xs text-muted-foreground">+3 new courses</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <p className="text-xs text-muted-foreground">+2% from last month</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$24,563</div>
                <p className="text-xs text-muted-foreground">+15% from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Registrations</CardTitle>
                <CardDescription>Students who registered in the last 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center justify-between border-b pb-2">
                      <div>
                        <p className="font-medium">Student {i + 1}</p>
                        <p className="text-sm text-muted-foreground">Registered for Course {i + 1}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{new Date().toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Payments</CardTitle>
                <CardDescription>Payments due in the next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center justify-between border-b pb-2">
                      <div>
                        <p className="font-medium">Payment #{1000 + i}</p>
                        <p className="text-sm text-muted-foreground">Student {i + 10}</p>
                      </div>
                      <p className="font-medium">${(i + 1) * 100}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="students" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Student Management</CardTitle>
              <CardDescription>View and manage all registered students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Input placeholder="Search students..." className="w-64" />
                    <Button variant="outline" size="sm">
                      Search
                    </Button>
                  </div>
                  <Button asChild>
                    <Link href="/admin/students/add">Add Student</Link>
                  </Button>
                </div>

                <div className="border rounded-md">
                  <div className="grid grid-cols-5 gap-4 p-4 font-medium border-b bg-muted/50">
                    <div>ID</div>
                    <div>Name</div>
                    <div>Email</div>
                    <div>Program</div>
                    <div>Actions</div>
                  </div>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="grid grid-cols-5 gap-4 p-4 border-b last:border-0">
                      <div>STU-{10001 + i}</div>
                      <div>Student {i + 1}</div>
                      <div>student{i + 1}@example.com</div>
                      <div>{["Computer Science", "Business", "Engineering", "Medicine", "Arts"][i % 5]}</div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/admin/students/${10001 + i}`}>View</Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/admin/students/${10001 + i}/edit`}>Edit</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Showing 1-10 of 1,248 students</p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Management</CardTitle>
              <CardDescription>View and manage all payment transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Input placeholder="Search payments..." className="w-64" />
                    <Button variant="outline" size="sm">
                      Search
                    </Button>
                  </div>
                  <Button asChild>
                    <Link href="/admin/payments/new">Record Payment</Link>
                  </Button>
                </div>

                <div className="border rounded-md">
                  <div className="grid grid-cols-6 gap-4 p-4 font-medium border-b bg-muted/50">
                    <div>Transaction ID</div>
                    <div>Student</div>
                    <div>Amount</div>
                    <div>Date</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="grid grid-cols-6 gap-4 p-4 border-b last:border-0">
                      <div>TXN-{100001 + i}</div>
                      <div>Student {i + 1}</div>
                      <div>${(i + 1) * 100 + 500}</div>
                      <div>{new Date(Date.now() - i * 86400000).toLocaleDateString()}</div>
                      <div>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            i % 3 === 0
                              ? "bg-yellow-100 text-yellow-800"
                              : i % 3 === 1
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {i % 3 === 0 ? "Pending" : i % 3 === 1 ? "Completed" : "Failed"}
                        </span>
                      </div>
                      <div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/admin/payments/${100001 + i}`}>View</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Showing 1-10 of 156 payments</p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
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

