import Image from "next/image"
import React from "react"
import { BsBoxArrowUpRight } from "react-icons/bs"

const ExploreMoreSection = () => {
  return (
    <div className="relative flex h-[26.1875rem] w-full justify-center">
      <section className="w-full max-w-screen-xl pb-[6.25rem] pr-[36.25rem] pt-[4.375rem]">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-[0.9375rem]">
            <h3 className="min-h-[2.6875rem] font-playfair text-[2rem] font-normal leading-100% tracking-1% text-foreground">
              Explore More
            </h3>

            <p className="min-h-9 font-dm-sans text-sm font-normal leading-100% tracking-1% text-foreground-muted">
              Looking for more diamond guides, buying tips or details about
              <br />
              the 4Cs? Explore more of our diamond education pages:
            </p>
          </div>

          <div className="grid w-full grid-cols-2 gap-x-[4.375rem] gap-y-[1.4375rem]">
            <a
              href="#"
              className="flex h-[3.125rem] w-[19.875rem] items-center justify-between gap-[1.4375rem] text-foreground-secondary">
              <p className="font-dm-sans text-sm font-normal leading-100% tracking-1% underline">
                How to Select the Ideal Wedding Band
              </p>

              <button className="flex size-[3.125rem] items-center justify-center rounded-full border border-foreground-muted">
                <BsBoxArrowUpRight size={15} />
              </button>
            </a>

            <a
              href="#"
              className="group flex h-[3.125rem] w-[19.875rem] items-baseline justify-between gap-[1.4375rem] text-foreground-secondary">
              <p className="font-dm-sans text-sm font-normal leading-30px tracking-1% group-hover:underline">
                Lab Grown Diamond Guide{" "}
              </p>

              <button className="flex size-[3.125rem] items-center justify-center rounded-full border border-foreground-muted">
                <BsBoxArrowUpRight size={15} />
              </button>
            </a>

            <a
              href="#"
              className="group flex h-[3.125rem] w-[19.875rem] items-center justify-between gap-[1.4375rem] text-foreground-secondary">
              <p className="font-dm-sans text-sm font-normal leading-30px tracking-1% group-hover:underline">
                How to Choose the Engagement Ring
              </p>

              <button className="flex size-[3.125rem] items-center justify-center rounded-full border border-foreground-muted">
                <BsBoxArrowUpRight size={15} />
              </button>
            </a>

            <a
              href="#"
              className="group flex h-[3.125rem] w-[19.875rem] items-center justify-between gap-[1.4375rem] text-foreground-secondary">
              <p className="font-dm-sans text-sm font-normal leading-100% tracking-1% group-hover:underline">
                Ring Size Guide
              </p>

              <button className="flex size-[3.125rem] items-center justify-center rounded-full border border-foreground-muted">
                <BsBoxArrowUpRight size={15} />
              </button>
            </a>
          </div>
        </div>

        <div className="absolute inset-y-0 right-0 w-[36.875rem]">
          <Image fill className="object-cover" alt="Model" src={"/images/model.png"} />
        </div>
      </section>
    </div>
  )
}

export default ExploreMoreSection
