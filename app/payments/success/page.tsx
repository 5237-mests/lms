import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function PaymentSuccessPage() {
  return (
    <main className="flex-1 flex items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Payment Successful!</CardTitle>
          <CardDescription>Your payment has been processed successfully</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p>Thank you for your payment. Your transaction has been completed successfully.</p>
          <div className="bg-muted p-4 rounded-md">
            <p className="font-medium">Transaction Details</p>
            <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
              <div className="text-left text-muted-foreground">Transaction ID:</div>
              <div className="text-right font-medium">TXN-{Math.floor(100000 + Math.random() * 900000)}</div>
              <div className="text-left text-muted-foreground">Amount:</div>
              <div className="text-right font-medium">$1,325.00</div>
              <div className="text-left text-muted-foreground">Date:</div>
              <div className="text-right font-medium">{new Date().toLocaleDateString()}</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">A receipt has been sent to your email address.</p>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button asChild className="w-full">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link href="/">Return to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}

