// src/components/Hero.tsx

"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export const Hero = () => {
  const router = useRouter()

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.jpg" // Assuming a high-quality background image
          alt="Modern infrastructure and construction background"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
        />
        {/* Gradient Overlay for better text readability and sleek depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 opacity-75"></div> {/* Slightly reduced opacity for a lighter feel */}
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center relative z-10"> {/* Reduced vertical padding */}
        <Image
          src="/logo.png" // place your logo in /public/logo.png
          alt="Indardek Limited Logo"
          width={120} // Slightly smaller logo
          height={120}
          className="mb-7 rounded-full shadow-sm bg-white p-2 border border-blue-200" // Reduced shadow, smaller padding
        />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight drop-shadow-sm">
          Building Reliable Infrastructure & <br className="hidden sm:inline"/> Supply Solutions for a Better Future
        </h1>
        <p className="max-w-2xl text-base md:text-lg mb-8 opacity-90"> {/* Reduced max-width, slightly smaller font, adjusted opacity */}
          Indardek Limited specializes in general supplies, borehole drilling,
          road construction, and meat supply & export with unwavering integrity and
          efficiency, empowering sustainable growth in the region.
        </p>
        <div className="flex flex-col sm:flex-row gap-4"> {/* Maintained gap */}
          <Button
            variant="default"
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 text-base" // Reduced padding, smaller font, subtle shadow
            onClick={() => router.push("/services")}
          >
            Explore Our Services
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-white text-white font-bold py-2.5 px-6 rounded-full hover:bg-white hover:text-blue-700 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 text-base" // Reduced padding, smaller font, subtle shadow
            onClick={() => router.push("/contact")}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}