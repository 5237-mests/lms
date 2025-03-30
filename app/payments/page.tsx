"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/components/auth-provider"

export default function PaymentPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [isLoading, setIsLoading] = useState(false)

  // Redirect if not logged in
  if (!user) {
    router.push("/login")
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // In a real app, you would process the payment through a payment gateway
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      router.push("/payments/success")
    }, 1500)
  }

  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-primary">Payment</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
                <CardDescription>Complete your payment details below</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="credit-card" onValueChange={setPaymentMethod}>
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="credit-card">Credit Card</TabsTrigger>
                    <TabsTrigger value="bank-transfer">Bank Transfer</TabsTrigger>
                    <TabsTrigger value="other">Other Methods</TabsTrigger>
                  </TabsList>

                  <TabsContent value="credit-card">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="XXXX XXXX XXXX XXXX" required />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input id="expiryDate" placeholder="MM/YY" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="XXX" required />
                        </div>
                      </div>

                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Processing..." : "Pay Now"}
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="bank-transfer">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="accountName">Account Holder Name</Label>
                        <Input id="accountName" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="accountNumber">Account Number</Label>
                        <Input id="accountNumber" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bankName">Bank Name</Label>
                        <Input id="bankName" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="routingNumber">Routing Number</Label>
                        <Input id="routingNumber" required />
                      </div>

                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Processing..." : "Pay Now"}
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="other">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-4">
                        <Label>Select Payment Method</Label>
                        <RadioGroup defaultValue="paypal">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="paypal" id="paypal" />
                            <Label htmlFor="paypal">PayPal</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="apple-pay" id="apple-pay" />
                            <Label htmlFor="apple-pay">Apple Pay</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="google-pay" id="google-pay" />
                            <Label htmlFor="google-pay">Google Pay</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" required />
                      </div>

                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Processing..." : "Continue to Payment"}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Payment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Tuition Fee</span>
                  <span>$1,200.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Registration Fee</span>
                  <span>$50.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Materials</span>
                  <span>$75.00</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-medium">
                  <span>Total</span>
                  <span>$1,325.00</span>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  Payment is secure and encrypted. Your financial information is never stored on our servers.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

