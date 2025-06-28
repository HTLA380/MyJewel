import React from "react"
import TestimonialCarousel from "../components/testimonial-carousel"
import { fetchTestimonials } from "@/lib/testimonial-service"

const TestimonialsSection = async () => {
  const testimonials = await fetchTestimonials()

  return (
    <div className="flex w-full justify-center bg-background">
      <section id="testimonials" className="flex w-full max-w-screen-xl flex-col gap-[1.875rem] py-[6.25rem]">
        <h3 className="leading-50px text-center font-playfair text-4xl font-normal tracking-1% text-foreground">
          Testimonials
        </h3>

        <TestimonialCarousel testimonials={testimonials} />
      </section>
    </div>
  )
}

export default TestimonialsSection
