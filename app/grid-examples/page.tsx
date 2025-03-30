import { GridContainer, GridItem } from "@/components/layout/grid-container"
import { Section } from "@/components/layout/section"
import { PageLayout } from "@/components/layout/page-layout"
import { CardItem } from "@/components/ui/card-item"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GridExamplesPage() {
  // Sample data for cards
  const courses = [
    {
      id: 1,
      title: "Introduction to React",
      description: "Learn the basics of React and build your first application",
      image: "/placeholder.svg?height=200&width=400",
      badge: "Beginner",
      instructor: "John Doe",
      duration: "4 weeks",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description: "Master advanced JavaScript concepts and patterns",
      image: "/placeholder.svg?height=200&width=400",
      badge: "Advanced",
      instructor: "Jane Smith",
      duration: "6 weeks",
    },
    {
      id: 3,
      title: "CSS Fundamentals",
      description: "Learn modern CSS techniques and best practices",
      image: "/placeholder.svg?height=200&width=400",
      badge: "Beginner",
      instructor: "Mike Johnson",
      duration: "3 weeks",
    },
    {
      id: 4,
      title: "Node.js Backend Development",
      description: "Build scalable backend applications with Node.js",
      image: "/placeholder.svg?height=200&width=400",
      badge: "Intermediate",
      instructor: "Sarah Williams",
      duration: "8 weeks",
    },
    {
      id: 5,
      title: "UI/UX Design Principles",
      description: "Learn the fundamentals of user interface and experience design",
      image: "/placeholder.svg?height=200&width=400",
      badge: "Beginner",
      instructor: "Alex Chen",
      duration: "5 weeks",
    },
    {
      id: 6,
      title: "Full Stack Web Development",
      description: "Comprehensive course covering both frontend and backend",
      image: "/placeholder.svg?height=200&width=400",
      badge: "Advanced",
      instructor: "David Miller",
      duration: "12 weeks",
    },
  ]

  // Sample sidebar content
  const sidebarContent = (
    <div className="p-4 space-y-4">
      <h3 className="font-semibold text-lg">Categories</h3>
      <ul className="space-y-2">
        <li>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            Web Development
          </Link>
        </li>
        <li>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            Mobile Development
          </Link>
        </li>
        <li>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            Data Science
          </Link>
        </li>
        <li>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            Design
          </Link>
        </li>
        <li>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            Business
          </Link>
        </li>
      </ul>

      <h3 className="font-semibold text-lg mt-6">Filters</h3>
      <div className="space-y-2">
        <div className="flex items-center">
          <input type="checkbox" id="beginner" className="mr-2" />
          <label htmlFor="beginner">Beginner</label>
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="intermediate" className="mr-2" />
          <label htmlFor="intermediate">Intermediate</label>
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="advanced" className="mr-2" />
          <label htmlFor="advanced">Advanced</label>
        </div>
      </div>
    </div>
  )

  return (
    <PageLayout>
      <Section
        title="Basic Grid Layout"
        description="Responsive grid that adjusts columns based on screen size"
        padding="lg"
      >
        <GridContainer
          columns={{
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
          }}
          gap="md"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <GridItem key={item}>
              <div className="bg-primary/10 p-6 rounded-md flex items-center justify-center">Item {item}</div>
            </GridItem>
          ))}
        </GridContainer>
      </Section>

      <Section
        title="Grid with Different Column Spans"
        description="Items can span multiple columns at different breakpoints"
        padding="lg"
        divider
      >
        <GridContainer
          columns={{
            xs: 2,
            sm: 4,
            md: 6,
            lg: 6,
          }}
          gap="md"
        >
          <GridItem colSpan={{ xs: 2, sm: 2, md: 3, lg: 2 }}>
            <div className="bg-primary/10 p-6 rounded-md flex items-center justify-center">Span 2-3 columns</div>
          </GridItem>
          <GridItem colSpan={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
            <div className="bg-primary/20 p-6 rounded-md flex items-center justify-center">Span 1-4 columns</div>
          </GridItem>
          <GridItem colSpan={{ xs: "full" }}>
            <div className="bg-primary/30 p-6 rounded-md flex items-center justify-center">Full width</div>
          </GridItem>
          <GridItem colSpan={{ xs: 1, md: 2 }}>
            <div className="bg-primary/10 p-6 rounded-md flex items-center justify-center">Span 1-2 columns</div>
          </GridItem>
          <GridItem colSpan={{ xs: 1, md: 2 }}>
            <div className="bg-primary/20 p-6 rounded-md flex items-center justify-center">Span 1-2 columns</div>
          </GridItem>
          <GridItem colSpan={{ xs: 1, md: 2 }}>
            <div className="bg-primary/30 p-6 rounded-md flex items-center justify-center">Span 1-2 columns</div>
          </GridItem>
        </GridContainer>
      </Section>

      <Section
        title="Course Cards Grid"
        description="Responsive grid of course cards that adjusts based on screen size"
        padding="lg"
        divider
      >
        <GridContainer
          columns={{
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
          }}
          gap="lg"
        >
          {courses.map((course) => (
            <GridItem key={course.id}>
              <CardItem
                title={course.title}
                description={course.description}
                image={course.image}
                badge={course.badge}
                actionLabel="Enroll Now"
                secondaryActionLabel="Learn More"
              >
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Duration: {course.duration}</p>
                  <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                </div>
              </CardItem>
            </GridItem>
          ))}
        </GridContainer>
      </Section>

      <Section
        title="Dashboard Layout"
        description="Example of a dashboard layout with different sized cards"
        padding="lg"
        divider
      >
        <GridContainer
          columns={{
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
          }}
          gap="md"
        >
          <GridItem colSpan={{ xs: 1, sm: 2, md: 2, lg: 2 }}>
            <div className="bg-primary/10 p-6 rounded-md h-40">
              <h3 className="font-semibold mb-2">Weekly Progress</h3>
              <p className="text-muted-foreground">Chart would go here</p>
            </div>
          </GridItem>
          <GridItem colSpan={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <div className="bg-primary/20 p-6 rounded-md h-40">
              <h3 className="font-semibold mb-2">Completed Courses</h3>
              <p className="text-3xl font-bold">12</p>
            </div>
          </GridItem>
          <GridItem colSpan={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <div className="bg-primary/30 p-6 rounded-md h-40">
              <h3 className="font-semibold mb-2">In Progress</h3>
              <p className="text-3xl font-bold">3</p>
            </div>
          </GridItem>
          <GridItem colSpan={{ xs: 1, sm: 2, md: 2, lg: 2 }}>
            <div className="bg-primary/10 p-6 rounded-md h-40">
              <h3 className="font-semibold mb-2">Upcoming Deadlines</h3>
              <ul className="text-sm space-y-1">
                <li>Project submission - 3 days</li>
                <li>Quiz - 1 week</li>
                <li>Final exam - 2 weeks</li>
              </ul>
            </div>
          </GridItem>
          <GridItem colSpan={{ xs: 1, sm: 2, md: 2, lg: 2 }}>
            <div className="bg-primary/20 p-6 rounded-md h-40">
              <h3 className="font-semibold mb-2">Recent Activity</h3>
              <ul className="text-sm space-y-1">
                <li>Completed Module 3 - 2 days ago</li>
                <li>Submitted assignment - 4 days ago</li>
                <li>Started new course - 1 week ago</li>
              </ul>
            </div>
          </GridItem>
        </GridContainer>
      </Section>

      <Section
        title="Page with Sidebar Layout"
        description="Example of a page layout with responsive sidebar"
        padding="lg"
        divider
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-64 border rounded-md">{sidebarContent}</div>
          <div className="flex-1">
            <GridContainer
              columns={{
                xs: 1,
                sm: 2,
                md: 2,
                lg: 2,
              }}
              gap="md"
            >
              {courses.slice(0, 4).map((course) => (
                <GridItem key={course.id}>
                  <CardItem
                    title={course.title}
                    description={course.description}
                    badge={course.badge}
                    actionLabel="View Course"
                  >
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                    </div>
                  </CardItem>
                </GridItem>
              ))}
            </GridContainer>
          </div>
        </div>
      </Section>

      <Section title="Form Layout" description="Example of a responsive form layout" padding="lg">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Registration Form</h3>
            <GridContainer
              columns={{
                xs: 1,
                sm: 2,
                md: 2,
                lg: 2,
              }}
              gap="md"
            >
              <GridItem>
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  />
                </div>
              </GridItem>
              <GridItem>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  />
                </div>
              </GridItem>
              <GridItem colSpan={{ xs: "full" }}>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  />
                </div>
              </GridItem>
              <GridItem>
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  />
                </div>
              </GridItem>
              <GridItem>
                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  />
                </div>
              </GridItem>
              <GridItem colSpan={{ xs: "full" }}>
                <div className="pt-4">
                  <Button className="w-full sm:w-auto">Register</Button>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}

