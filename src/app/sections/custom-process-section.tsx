import Image from "next/image"
import React from "react"

const CustomProcessSection = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-screen-xl pb-[6.25rem] pt-[1.3125rem]">
        <p className="min-h-6 font-dm-sans text-sm leading-160% text-foreground-secondary">
          <span className="text-foreground-muted">Home / </span> Custom Jewelry
        </p>

        <div className="mt-[3.5625rem] flex items-start gap-[5.675rem]">
          <div className="flex w-[31.95rem] flex-col justify-center">
            <div className="flex flex-col gap-5">
              <h2 className="min-h-12 font-playfair text-4xl leading-100% tracking-1% text-foreground">
                Custom Jewelry{" "}
              </h2>

              <p className="min-h-16 max-w-[23.875rem] font-dm-sans text-xl leading-160% tracking-3% text-foreground-secondary">
                Create Your Masterpiece: Bespoke Jewelry Crafted for You
              </p>
            </div>

            <div className="relative mt-[1.875rem] flex flex-col">
              <Image width={379.22} height={474} src={"/images/diamond-3.jpg"} alt="diamond" />

              <div className="absolute left-[16.503125rem] top-[19.625rem] h-[20.8125rem] w-[15.95rem] bg-background p-2">
                <div className="relative size-full">
                  <Image fill className="object-cover" src={"/images/ring-2.jpg"} alt="ring" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex grow flex-col gap-10">
            <p className="min-h-[3.25rem] max-w-[34.9375rem] font-dm-sans text-base font-normal leading-160% tracking-3% text-foreground-secondary">
              Exquisite design, flawless craftsmanship, and timeless elegance—your vision, perfectly crafted.
            </p>

            <div className="flex flex-col gap-[1.875rem]">
              <div className="flex w-full">
                <div className="min-h-[6.875rem] w-[2.6875rem]">
                  <p className="font-dm-sans text-lg font-normal uppercase leading-160% tracking-1% text-foreground-muted">
                    01
                  </p>
                </div>
                <div className="flex min-h-[6.875rem] grow flex-col gap-2.5 border-b">
                  <h3 className="font-dm-sans text-2xl font-medium uppercase leading-160% tracking-10% text-foreground">
                    Consultation
                  </h3>
                  <p className="font-dm-sans text-xl font-normal leading-160% tracking-0% text-foreground-muted">
                    We discuss your vision and preferences to craft a unique design.
                  </p>
                </div>
              </div>

              <div className="flex w-full">
                <div className="min-h-[6.875rem] w-[2.6875rem]">
                  <p className="font-dm-sans text-lg font-normal uppercase leading-160% tracking-1% text-foreground-muted">
                    02
                  </p>
                </div>
                <div className="flex min-h-[6.875rem] grow flex-col gap-2.5 border-b">
                  <h3 className="font-dm-sans text-2xl font-medium uppercase leading-160% tracking-10% text-foreground">
                    Selecting Materials{" "}
                  </h3>
                  <p className="font-dm-sans text-xl font-normal leading-160% tracking-0% text-foreground-muted">
                    Choose from exquisite diamonds, precious metals, and gemstones.
                  </p>
                </div>
              </div>

              <div className="flex w-full">
                <div className="min-h-[6.875rem] w-[2.6875rem]">
                  <p className="font-dm-sans text-lg font-normal uppercase leading-160% tracking-1% text-foreground-muted">
                    03
                  </p>
                </div>
                <div className="flex min-h-[6.875rem] grow flex-col gap-2.5 border-b">
                  <h3 className="font-dm-sans text-2xl font-medium uppercase leading-160% tracking-10% text-foreground">
                    Creating a 3D Model
                  </h3>
                  <p className="font-dm-sans text-xl font-normal leading-160% tracking-0% text-foreground-muted">
                    Visualize your design with a precise 3D model before production.
                  </p>
                </div>
              </div>

              <div className="flex w-full">
                <div className="min-h-[6.875rem] w-[2.6875rem]">
                  <p className="font-dm-sans text-lg font-normal uppercase leading-160% tracking-1% text-foreground-muted">
                    04
                  </p>
                </div>
                <div className="flex min-h-[6.875rem] grow flex-col gap-2.5 border-b">
                  <h3 className="font-dm-sans text-2xl font-medium uppercase leading-160% tracking-10% text-foreground">
                    Manufacturing{" "}
                  </h3>
                  <p className="font-dm-sans text-xl font-normal leading-160% tracking-0% text-foreground-muted">
                    Expert artisans bring your piece to life with precision and care.
                  </p>
                </div>
              </div>

              <div className="flex w-full">
                <div className="min-h-[6.875rem] w-[2.6875rem]">
                  <p className="font-dm-sans text-lg font-normal uppercase leading-160% tracking-1% text-foreground-muted">
                    05
                  </p>
                </div>
                <div className="flex min-h-[6.875rem] grow flex-col gap-2.5 border-b">
                  <h3 className="font-dm-sans text-2xl font-medium uppercase leading-160% tracking-10% text-foreground">
                    Quality Assurance{" "}
                  </h3>
                  <p className="font-dm-sans text-xl font-normal leading-160% tracking-0% text-foreground-muted">
                    Every detail is inspected to ensure flawless craftsmanship.
                  </p>
                </div>
              </div>

              <div className="flex w-full">
                <div className="min-h-[6.875rem] w-[2.6875rem]">
                  <p className="font-dm-sans text-lg font-normal uppercase leading-160% tracking-1% text-foreground-muted">
                    06
                  </p>
                </div>
                <div className="flex min-h-[6.875rem] grow flex-col gap-2.5 border-b">
                  <h3 className="font-dm-sans text-2xl font-medium uppercase leading-160% tracking-10% text-foreground">
                    Delivery{" "}
                  </h3>
                  <p className="font-dm-sans text-xl font-normal leading-160% tracking-0% text-foreground-muted">
                    Your custom jewelry is elegantly packaged and delivered to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomProcessSection
