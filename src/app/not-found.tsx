"use client"

import { useRouter } from "next/navigation"

import { Button } from "@/app/components/ui/button"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="absolute left-1/2 top-1/2 mb-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center font-open-sans">
      <span className="bg-gradient-to-b from-black to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent">
        404
      </span>
      <h2 className="font-heading my-2 text-2xl font-bold">Something&apos;s missing</h2>
      <p className="font-dm-sans">Sorry, the page you are looking for doesn&apos;t exist or has been moved.</p>
      <div className="mt-8 flex justify-center gap-2">
        <Button
          className="bg-black text-white ring-offset-2 hover:bg-black/80 focus-visible:ring-black focus-visible:ring-offset-background"
          onClick={() => router.back()}
          variant="default"
          size="lg">
          Go back
        </Button>
        <Button
          className="border ring-offset-2 hover:bg-gray-100 focus-visible:ring-black focus-visible:ring-offset-background"
          onClick={() => router.push("/")}
          variant="ghost"
          size="lg">
          Back to Home
        </Button>
      </div>
    </div>
  )
}
