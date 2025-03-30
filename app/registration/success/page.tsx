import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function RegistrationSuccessPage() {
  return (
    <main className="flex-1 flex items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Registration Successful!</CardTitle>
          <CardDescription>Your registration has been completed successfully</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p>
            Thank you for registering with our Learning Management System. Your account has been created and you can now
            log in.
          </p>
          <p className="font-medium">
            Your student ID: <span className="text-primary">STU-{Math.floor(10000 + Math.random() * 90000)}</span>
          </p>
          <p className="text-sm text-muted-foreground">
            We have sent a confirmation email with your registration details.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button asChild className="w-full">
            <Link href="/login">Login to Your Account</Link>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link href="/">Return to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}

