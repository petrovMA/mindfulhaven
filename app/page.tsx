import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, User, Brain, Users } from 'lucide-react'
import Testimonials from '@/components/testimonials'

export default function HomePage() {
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

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/landscape.png"
          alt="Serene landscape with mountains and lake"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center text-white max-w-3xl px-4">
          <h1 className="text-5xl font-bold mb-6">Your Journey to Inner Peace Begins Here</h1>
          <p className="text-xl mb-8">Discover balance and harmony through our expert psychology and hypnotherapy services</p>
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
            <Link href="/book-appointment">Start Your Journey</Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-teal-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Individual Therapy", description: "Personalized sessions to address your unique challenges.", icon: User },
              { title: "Hypnotherapy", description: "Unlock the power of your subconscious mind for positive change.", icon: Brain },
              { title: "Couples Counseling", description: "Strengthen your relationship and improve communication.", icon: Users },
            ].map((service, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <service.icon className="mx-auto h-12 w-12 text-teal-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-teal-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button asChild variant="outline" className="mt-2 text-teal-600 hover:bg-teal-50">
                    <Link href={`/services#${service.title.toLowerCase().replace(' ', '-')}`}>
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Transform Your Life?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Take the first step towards a more balanced and fulfilling life. Our experienced therapists are here to guide you on your journey to well-being.</p>
          <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-teal-100">
            <Link href="/book-appointment">Book Your Session Now</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

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