import React from "react"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="relative h-[26.25rem] w-full overflow-hidden bg-background-muted">
      <Image
        priority={false}
        src={"/images/innerbanner.png"}
        fill
        alt="banner"
        className="-z-1 pointer-events-none absolute inset-0 object-cover"
        draggable={false}
      />

      <Image
        width={533.4}
        height={381}
        priority={false}
        alt="diamond"
        src={"/images/hero-diamond-1.png"}
        draggable={false}
        className="pointer-events-none absolute left-0 top-[4.5625rem]"
      />

      <Image
        width={565}
        height={565}
        priority={false}
        alt="ring"
        src={"/images/ring.png"}
        draggable={false}
        className="pointer-events-none absolute -right-6 top-[6.5625rem]"
      />

      <Image
        width={363.37}
        height={336.45}
        priority={false}
        alt="ring"
        src={"/images/hero-diamond-2.png"}
        draggable={false}
        className="pointer-events-none absolute -right-28 bottom-[17.5rem] rotate-[93deg] -scale-y-100"
      />

      <div className="flex size-full items-center justify-center">
        <div className="mt-2 flex flex-col items-center justify-center gap-6">
          <h1 className="-ml-16 h-16 font-playfair text-5xl font-normal leading-100% tracking-1% text-foreground-secondary">
            Custom Jewelry
          </h1>

          <p className="font-dm-sans text-xl font-normal leading-100% tracking-1% text-foreground-secondary">
            Create Your Masterpiece: Bespoke Jewelry Crafted for You
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
