"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { ComicSpeechBubble } from "@/components/comic-speech-bubble"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send the form data to your backend
    setFormSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <div className="w-full bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold text-white text-center">Contact Us</h1>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
              <p className="text-muted-foreground">
                Have questions about our products or need assistance? Fill out the form below and our team will get back
                to you as soon as possible.
              </p>
            </div>

            {formSubmitted ? (
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="text-center py-8 space-y-4">
                    <div className="flex justify-center">
                      <ComicSpeechBubble>
                        <p className="text-lg font-bold">Message Received!</p>
                      </ComicSpeechBubble>
                    </div>
                    <h3 className="text-xl font-bold">Thank You for Contacting Us</h3>
                    <p className="text-muted-foreground">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setFormSubmitted(false)}>Send Another Message</Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your inquiry..."
                    rows={5}
                    className="resize-none"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=300&width=600&text=Contact+Us"
                alt="Contact SuperTees"
                width={600}
                height={300}
                className="rounded-lg"
              />
              <div className="absolute -bottom-6 -right-6">
                <ComicSpeechBubble position="right" type="thought">
                  <p className="text-lg font-bold">We're here to help!</p>
                </ComicSpeechBubble>
              </div>
            </div>

            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Our Location</h3>
                    <p className="text-muted-foreground">
                      SuperTees HQ, 123 Hero Avenue
                      <br />
                      Bangalore, Karnataka 560001
                      <br />
                      India
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-muted-foreground">
                      <Link href="mailto:support@supertees.com" className="hover:text-primary">
                        support@supertees.com
                      </Link>
                      <br />
                      <Link href="mailto:orders@supertees.com" className="hover:text-primary">
                        orders@supertees.com
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-muted-foreground">
                      <Link href="tel:+919876543210" className="hover:text-primary">
                        +91 98765 43210
                      </Link>
                      <br />
                      Monday to Saturday, 10am to 6pm IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Follow Us</h2>
              <div className="flex space-x-4">
                {["Facebook", "Twitter", "Instagram", "YouTube"].map((social) => (
                  <Button key={social} variant="outline" size="icon" asChild>
                    <Link href="#">
                      <span className="sr-only">{social}</span>
                      <Image
                        src={`/placeholder.svg?height=24&width=24&text=${social.charAt(0)}`}
                        alt={social}
                        width={24}
                        height={24}
                      />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
