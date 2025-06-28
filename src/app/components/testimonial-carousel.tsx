"use client"

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel"
import { Testimonial } from "@/lib/testimonial-service"
import { cn } from "@/lib/utils"
import { useCallback, useEffect, useState } from "react"

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index)
    },
    [api],
  )

  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full">
        <CarouselContent className="-ml-[1.666875rem]">
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="basis-auto pl-[1.666875rem]">
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-[1.40625rem] size-[2.8125rem] border border-border-secondary bg-background text-foreground-muted [&_svg]:size-5" />
        <CarouselNext className="-right-[1.40625rem] size-[2.8125rem] border border-border-secondary bg-background text-foreground-muted [&_svg]:size-5" />

        <div className="mt-[1.875rem] flex justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "size-2 rounded-full transition-all duration-300 hover:scale-110",
                current === index + 1
                  ? "scale-110 bg-carousel-dot-active"
                  : "bg-carousel-dot hover:bg-carousel-dot-hover",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-[20.375rem] w-[18.75rem] flex-col items-center justify-center gap-[1.05rem] border bg-background px-[1.5625rem]">
      <div className="relative size-[7.5rem] shrink-0">
        {/* eslint-disable-next-line */}
        <img
          className="bg-background-accent object-cover object-center"
          alt={testimonial.name}
          src={testimonial.avatar || "/images/avatar-01.jpg"}
        />
      </div>
      <div className="flex flex-col items-center gap-[0.3125rem]">
        <h5 className="h-[1.125rem] font-dm-sans text-sm font-semibold leading-100% tracking-normal text-foreground-secondary">
          {testimonial.name}
        </h5>
        <p className="font-dm-sans text-xs font-normal leading-100% tracking-normal text-foreground-accent">
          {testimonial.position}
        </p>
      </div>
      <p className="mt-0.5 text-center font-dm-sans text-sm font-normal leading-5 tracking-normal text-foreground-secondary">
        {testimonial.content}
      </p>
    </div>
  )
}
