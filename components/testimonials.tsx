import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah J.",
    content: "Dr. Smith's hypnotherapy sessions have been life-changing. I've overcome my fear of public speaking!",
    rating: 5,
  },
  {
    name: "Michael R.",
    content: "The couples counseling helped save our marriage. We're communicating better than ever.",
    rating: 5,
  },
  {
    name: "Emily T.",
    content: "I've seen tremendous progress in managing my anxiety through our therapy sessions.",
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-blue-800">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardContent className="flex-grow pt-6">
                <p className="italic text-blue-800">&ldquo;{testimonial.content}&rdquo;</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="font-semibold text-blue-800">{testimonial.name}</span>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}