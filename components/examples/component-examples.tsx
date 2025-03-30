"use client"

import { useState } from "react"
import { FormInput } from "@/components/ui/form-input"
import { CardItem } from "@/components/ui/card-item"
import { Modal } from "@/components/ui/modal"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { NavigationBar } from "@/components/navigation-bar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ComponentExamples() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("form-input")

  // Form validation examples
  const validateEmail = (value: string) => {
    if (!value) return "Email is required"
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(value) ? undefined : "Invalid email address"
  }

  const validatePassword = (value: string) => {
    if (!value) return "Password is required"
    if (value.length < 8) return "Password must be at least 8 characters"
    return undefined
  }

  // Handle modal confirmation with loading state
  const handleConfirm = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsConfirmModalOpen(false)
    }, 2000)
  }

  return (
    <div className="container py-8 space-y-12">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full grid grid-cols-5">
          <TabsTrigger value="form-input">Form Input</TabsTrigger>
          <TabsTrigger value="card-item">Card Item</TabsTrigger>
          <TabsTrigger value="modal">Modal</TabsTrigger>
          <TabsTrigger value="loading-spinner">Loading Spinner</TabsTrigger>
          <TabsTrigger value="navigation-bar">Navigation Bar</TabsTrigger>
        </TabsList>

        <TabsContent value="form-input" className="mt-6 space-y-6">
          <h2 className="text-2xl font-bold">Form Input Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Name"
              id="name"
              placeholder="Enter your name"
              required
              helperText="Your full name as it appears on your ID"
            />

            <FormInput
              label="Email"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              validateFn={validateEmail}
              showSuccessIcon
            />

            <FormInput
              label="Password"
              id="password"
              type="password"
              placeholder="Enter your password"
              required
              validateFn={validatePassword}
              helperText="Password must be at least 8 characters"
            />

            <FormInput label="Date of Birth" id="dob" type="date" required />
          </div>
        </TabsContent>

        <TabsContent value="card-item" className="mt-6 space-y-6">
          <h2 className="text-2xl font-bold">Card Item Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CardItem
              title="Introduction to React"
              description="Learn the basics of React and build your first application"
              image="/placeholder.svg?height=200&width=400"
              badge="Beginner"
              actionLabel="Enroll Now"
              secondaryActionLabel="Learn More"
            >
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Duration: 4 weeks</p>
                <p className="text-sm text-muted-foreground">Instructor: John Doe</p>
              </div>
            </CardItem>

            <CardItem
              title="Advanced JavaScript"
              description="Master advanced JavaScript concepts and patterns"
              image="/placeholder.svg?height=200&width=400"
              badge="Advanced"
              badgeVariant="warning"
              actionLabel="Enroll Now"
              secondaryActionLabel="Learn More"
              horizontal
            >
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Duration: 6 weeks</p>
                <p className="text-sm text-muted-foreground">Instructor: Jane Smith</p>
              </div>
            </CardItem>
          </div>
        </TabsContent>

        <TabsContent value="modal" className="mt-6 space-y-6">
          <h2 className="text-2xl font-bold">Modal Component</h2>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => setIsModalOpen(true)}>Open Basic Modal</Button>

            <Button onClick={() => setIsConfirmModalOpen(true)}>Open Confirmation Modal</Button>

            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Basic Modal"
              description="This is a basic modal example"
              confirmLabel="Save Changes"
              onConfirm={() => setIsModalOpen(false)}
            >
              <div className="py-4">
                <p>This is the content of the modal. You can put any React components here.</p>
              </div>
            </Modal>

            <Modal
              isOpen={isConfirmModalOpen}
              onClose={() => setIsConfirmModalOpen(false)}
              title="Confirm Action"
              description="Are you sure you want to perform this action? This cannot be undone."
              confirmLabel="Confirm"
              confirmVariant="destructive"
              onConfirm={handleConfirm}
              isLoading={isLoading}
              closeOnClickOutside={!isLoading}
            >
              <div className="py-4">
                <p>Please confirm that you want to delete this item.</p>
              </div>
            </Modal>
          </div>
        </TabsContent>

        <TabsContent value="loading-spinner" className="mt-6 space-y-6">
          <h2 className="text-2xl font-bold">Loading Spinner Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-md flex items-center justify-center">
              <LoadingSpinner size="sm" />
            </div>

            <div className="p-4 border rounded-md flex items-center justify-center">
              <LoadingSpinner size="md" text="Loading..." />
            </div>

            <div className="p-4 border rounded-md flex items-center justify-center">
              <LoadingSpinner size="lg" color="secondary" text="Processing payment..." textPosition="bottom" />
            </div>

            <div className="p-4 border rounded-md flex items-center justify-center col-span-1 md:col-span-3">
              <Button
                onClick={() => {
                  setIsLoading(true)
                  setTimeout(() => setIsLoading(false), 3000)
                }}
              >
                Show Full Page Spinner (3s)
              </Button>
            </div>

            {isLoading && <LoadingSpinner fullPage text="Loading, please wait..." />}
          </div>
        </TabsContent>

        <TabsContent value="navigation-bar" className="mt-6 space-y-6">
          <h2 className="text-2xl font-bold">Navigation Bar Component</h2>
          <div className="border rounded-md overflow-hidden">
            <NavigationBar />
          </div>
          <div className="border rounded-md overflow-hidden">
            <NavigationBar
              logoText="Custom LMS"
              items={[
                { name: "Home", href: "#", icon: undefined },
                { name: "Courses", href: "#", icon: undefined },
                { name: "About", href: "#", icon: undefined },
                { name: "Contact", href: "#", icon: undefined },
              ]}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

