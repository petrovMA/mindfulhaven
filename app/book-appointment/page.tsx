"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { useState } from 'react'

export default function BookAppointmentPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="min-h-screen flex flex-col">
    {/* Header */}
    <header className="bg-teal-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-end">
          <div className="flex space-x-8">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/about" className="hover:underline">About Us</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </header>
      {/* Booking Form */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/landscape.png"
          alt="Serene landscape with mountains and lake"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center text-white max-w-3xl px-4 mx-auto">
          <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Book Your Appointment</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Take the first step towards a more balanced and fulfilling life. Schedule your session with our experienced therapists today.</p>
        </div>
        <div className="container mx-auto px-3 py-3 bg-gray-800 bg-opacity-50">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(123) 456-7890" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual-therapy">Individual Therapy</SelectItem>
                        <SelectItem value="hypnotherapy">Hypnotherapy</SelectItem>
                        <SelectItem value="couples-counseling">Couples Counseling</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Preferred Date</Label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea id="message" placeholder="Any specific concerns or questions?" />
                </div>
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                  Book Appointment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">MindfulHaven</h3>
              <p>Guiding you towards mental wellness and inner peace.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/services" className="hover:underline">Services</Link></li>
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>123 Serenity Lane, Mindful City, MC 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@mindfulhaven.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}