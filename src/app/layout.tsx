import { cn } from "@/lib/utils"
import "./globals.css"
import { Open_Sans, DM_Sans, Playfair_Display } from "next/font/google"
import { TooltipProvider } from "./components/ui/tooltip"
import { Metadata } from "next"

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-open-sans",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-playfair-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MyJewel",
  description: "Create Your Masterpiece: Bespoke Jewelry Crafted for You",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(openSans.variable, dmSans.variable, playfairDisplay.variable)}>
      <body>
        <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
      </body>
    </html>
  )
}
