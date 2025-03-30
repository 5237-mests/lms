import { GridContainer, GridItem } from "@/components/layout/grid-container"
import { Section } from "@/components/layout/section"
import { PageLayout } from "@/components/layout/page-layout"
import { CardItem } from "@/components/ui/card-item"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  BarChart,
  Calendar,
  Clock,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Settings,
  User,
  Users,
} from "lucide-react"

export default function DashboardExamplePage() {
  // Sidebar content
  const sidebar = (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b">
        <h2 className="font-semibold text-primary">Student Dashboard</h2>
      </div>
      <div className="flex-1 p-2">
        <nav className="space-y-1">
          {[
            { name: "Dashboard", href: "#", icon: LayoutDashboard, active: true },
            { name: "My Courses", href: "#", icon: GraduationCap },
            { name: "Calendar", href: "#", icon: Calendar },
            { name: "Assignments", href: "#", icon: FileText },
            { name: "Messages", href: "#", icon: Users },
            { name: "Profile", href: "#", icon: User },
            { name: "Settings", href: "#", icon: Settings },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                item.active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
              }`}
            >
              <item.icon className="mr-3 h-5 w-5" aria-hidden="true" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )

  return (
    <PageLayout sidebar={sidebar} sidebarPosition="left" sidebarWidth="16rem">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, John!</h1>
            <p className="text-muted-foreground">Here's what's happening with your courses today.</p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-2">
            <Button variant="outline" size="sm">
              <Clock className="mr-2 h-4 w-4" />
              Last updated: 2 hours ago
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <Section title="Overview" className="mb-8">
          <GridContainer
            columns={{
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
            }}
            gap="md"
          >
            <GridItem>
              <div className="bg-card border rounded-lg p-4">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-primary/10 mr-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Enrolled Courses</p>
                    <h3 className="text-2xl font-bold">6</h3>
                  </div>
                </div>
              </div>
            </GridItem>
            <GridItem>
              <div className="bg-card border rounded-lg p-4">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-primary/10 mr-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Assignments Due</p>
                    <h3 className="text-2xl font-bold">3</h3>
                  </div>
                </div>
              </div>
            </GridItem>
            <GridItem>
              <div className="bg-card border rounded-lg p-4">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-primary/10 mr-4">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Overall Progress</p>
                    <h3 className="text-2xl font-bold">68%</h3>
                  </div>
                </div>
              </div>
            </GridItem>
            <GridItem>
              <div className="bg-card border rounded-lg p-4">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-primary/10 mr-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Upcoming Events</p>
                    <h3 className="text-2xl font-bold">2</h3>
                  </div>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </Section>

        {/* Current Courses */}
        <Section title="Current Courses" className="mb-8">
          <GridContainer
            columns={{
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
            }}
            gap="md"
          >
            {[
              {
                title: "Introduction to React",
                progress: 75,
                image: "/placeholder.svg?height=200&width=400",
                instructor: "John Doe",
                nextLesson: "Component Lifecycle",
              },
              {
                title: "Advanced JavaScript",
                progress: 45,
                image: "/placeholder.svg?height=200&width=400",
                instructor: "Jane Smith",
                nextLesson: "Promises and Async/Await",
              },
              {
                title: "UI/UX Design Principles",
                progress: 30,
                image: "/placeholder.svg?height=200&width=400",
                instructor: "Alex Chen",
                nextLesson: "User Research Methods",
              },
            ].map((course, index) => (
              <GridItem key={index}>
                <CardItem
                  title={course.title}
                  image={course.image}
                  actionLabel="Continue Learning"
                  secondaryActionLabel="View Details"
                >
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                    <div>
                      <div className="flex justify-between mb-1">
                        <p className="text-sm font-medium">Progress</p>
                        <p className="text-sm font-medium">{course.progress}%</p>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                      </div>
                    </div>
                    <p className="text-sm">Next: {course.nextLesson}</p>
                  </div>
                </CardItem>
              </GridItem>
            ))}
          </GridContainer>
        </Section>

        {/* Upcoming Assignments and Calendar */}
        <GridContainer
          columns={{
            xs: 1,
            md: 2,
            lg: 2,
          }}
          gap="lg"
          className="mb-8"
        >
          <GridItem>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Upcoming Assignments</h3>
              <div className="space-y-4">
                {[
                  { title: "React Project Submission", course: "Introduction to React", due: "Tomorrow, 11:59 PM" },
                  { title: "JavaScript Quiz", course: "Advanced JavaScript", due: "3 days left" },
                  { title: "User Persona Creation", course: "UI/UX Design Principles", due: "1 week left" },
                ].map((assignment, index) => (
                  <div key={index} className="flex items-start p-3 border rounded-md">
                    <div className="p-2 rounded-full bg-primary/10 mr-3">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{assignment.title}</h4>
                      <p className="text-sm text-muted-foreground">{assignment.course}</p>
                      <p className="text-sm font-medium text-primary">{assignment.due}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Assignments
              </Button>
            </div>
          </GridItem>
          <GridItem>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {[
                  { title: "Live Q&A Session", course: "Introduction to React", date: "Today, 3:00 PM" },
                  { title: "Group Project Meeting", course: "UI/UX Design Principles", date: "Tomorrow, 2:00 PM" },
                ].map((event, index) => (
                  <div key={index} className="flex items-start p-3 border rounded-md">
                    <div className="p-2 rounded-full bg-primary/10 mr-3">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">{event.course}</p>
                      <p className="text-sm font-medium text-primary">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View Calendar
              </Button>
            </div>
          </GridItem>
        </GridContainer>

        {/* Recent Activity */}
        <Section title="Recent Activity">
          <div className="bg-card border rounded-lg p-6">
            <div className="space-y-4">
              {[
                {
                  action: "Completed lesson",
                  item: "Component Lifecycle",
                  course: "Introduction to React",
                  time: "2 hours ago",
                },
                {
                  action: "Submitted assignment",
                  item: "JavaScript Basics Quiz",
                  course: "Advanced JavaScript",
                  time: "Yesterday",
                },
                { action: "Started new course", item: "UI/UX Design Principles", course: "", time: "3 days ago" },
                {
                  action: "Received grade",
                  item: "React Fundamentals Quiz: 92%",
                  course: "Introduction to React",
                  time: "1 week ago",
                },
              ].map((activity, index) => (
                <div key={index} className="flex items-start border-b last:border-0 pb-4 last:pb-0">
                  <div className="p-2 rounded-full bg-primary/10 mr-3">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">
                      {activity.action}: {activity.item}
                    </h4>
                    {activity.course && <p className="text-sm text-muted-foreground">{activity.course}</p>}
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </PageLayout>
  )
}

