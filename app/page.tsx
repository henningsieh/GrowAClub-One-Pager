"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Clock, Handshake, Mountain } from "lucide-react"

export default function LandingPage() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const id = target.getAttribute('href')?.slice(1)
      if (id) {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleScroll)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScroll)
      })
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center fixed w-full bg-background z-10">
        <div className="w-full max-w-6xl flex justify-between items-center">
          <Link className="flex items-center justify-center" href="#">
            <Mountain className="h-6 w-6" />
            <span className="sr-only">GrowAClub</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#benefits">
              Benefits
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#guarantees">
              Guarantees
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 pt-14">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Simplify CanG Compliance with GrowAClub
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Streamline documentation and reporting for Cannabisanbauvereine under the new Cannabis Act
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="features">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Key Features</h2>
            <Tabs defaultValue="documentation" className="w-full">
              <div className="max-w-3xl mx-auto">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="documentation" className="w-full">Documentation</TabsTrigger>
                  <TabsTrigger value="reporting" className="w-full">Reporting</TabsTrigger>
                  <TabsTrigger value="compliance" className="w-full">Compliance</TabsTrigger>
                </TabsList>
              </div>
              <div className="mt-6 max-w-3xl mx-auto">
                <TabsContent value="documentation">
                  <Card>
                    <CardHeader>
                      <CardTitle>Detailed Documentation</CardTitle>
                      <CardDescription>Comprehensive tracking of cannabis and propagating material</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p>• Record member information and transactions</p>
                      <p>• Track quantities of cannabis and propagating material</p>
                      <p>• Document cultivation, transfer, and destruction</p>
                      <p>• Store records securely for 5 years</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="reporting">
                  <Card>
                    <CardHeader>
                      <CardTitle>Automated Reporting</CardTitle>
                      <CardDescription>Effortless generation and submission of required reports</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p>• Manual trigger for on-demand reports</p>
                      <p>• Automatic annual submission by January 31st</p>
                      <p>• Detailed breakdowns by cannabis variety, THC, and CBD content</p>
                      <p>• Anonymized electronic transmission to authorities</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="compliance">
                  <Card>
                    <CardHeader>
                      <CardTitle>Compliance Assurance</CardTitle>
                      <CardDescription>Stay aligned with CanG regulations effortlessly</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p>• Built-in forms and processes aligned with Section 26</p>
                      <p>• Real-time updates to reflect regulatory changes</p>
                      <p>• Guidance on proper documentation practices</p>
                      <p>• Alerts for upcoming reporting deadlines</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="benefits">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Benefits for Operators</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Shield className="w-10 h-10 mb-2 mx-auto" />
                  <CardTitle className="text-center">Regulatory Confidence</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Eliminate uncertainty in dealing with authorities and regulations, ensuring your club stays compliant.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Clock className="w-10 h-10 mb-2 mx-auto" />
                  <CardTitle className="text-center">Time Savings</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Save valuable time compared to setting up and maintaining your own documentation system.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Handshake className="w-10 h-10 mb-2 mx-auto" />
                  <CardTitle className="text-center">Trusted Partnership</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Enjoy direct, eye-level cooperation with a software provider committed to your success.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="guarantees">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Our Guarantees</h2>
            <div className="grid gap-6 lg:grid-cols-2 max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Data Security</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Server infrastructure in Germany. No personal member data stored in cloud storage abroad.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Rapid Adaptability</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Swift software updates to align with changes in statutory documentation and reporting obligations.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Simplify Your Compliance?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join GrowAClub today and experience hassle-free CanG compliance for your Cannabisanbauverein.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Sign Up Now</Button>
                <Button variant="outline">Request a Demo</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 border-t">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 GrowAClub. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}