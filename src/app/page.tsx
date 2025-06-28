import { Suspense } from "react"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import CustomProcessSection from "./sections/custom-process-section"
import ExploreMoreSection from "./sections/explore-more-section"
import HeroSection from "./sections/hero-section"
import TestimonialsSection from "./sections/testimonials-section"
import WhyMyJewelSection from "./sections/why-myjewel-section"
import ToggleWidthWrapper from "./components/toggle-width-wrapper"

// Enable ISR (Incremental Static Regeneration) - revalidate every 5 minutes
export const revalidate = 300

const Home = async () => {
  return (
    <div className="flex items-center justify-center bg-background">
      <ToggleWidthWrapper>
        <Navbar />

        <HeroSection />

        <CustomProcessSection />

        <WhyMyJewelSection />

        <ExploreMoreSection />

        <Suspense
          fallback={
            <div className="flex min-h-64 w-full items-center justify-center font-dm-sans text-base text-foreground">
              Loading Testimonials...
            </div>
          }>
          <TestimonialsSection />
        </Suspense>

        <Footer />
      </ToggleWidthWrapper>
    </div>
  )
}

export default Home
