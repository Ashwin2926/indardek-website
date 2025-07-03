// src/components/Hero.tsx

"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export const Hero = () => {
  const router = useRouter()

  return (
    <section className="relative w-full bg-gradient-to-br from-blue-800 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-32 flex flex-col items-center text-center">
        <Image
          src="/logo.png" // place your logo in /public/logo.png
          alt="Indardek Limited Logo"
          width={120}
          height={120}
          className="mb-6 rounded-full shadow-lg bg-white p-2"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Building Reliable Infrastructure & Supply Solutions
        </h1>
        <p className="max-w-2xl text-lg md:text-xl mb-8">
          Indardek Limited specializes in general supplies, borehole drilling,
          road construction, and meat supply & export with integrity and
          efficiency.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="default"
            size="lg"
            onClick={() => router.push("/services")}
          >
            Explore Our Services
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => router.push("/contact")}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
