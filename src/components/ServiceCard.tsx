// src/components/ServiceCard.tsx

"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Service } from "@/lib/servicesData"

interface ServiceCardProps {
  service: Service
  detailed?: boolean
}

export const ServiceCard = ({ service, detailed = false }: ServiceCardProps) => {
  const router = useRouter()

  return (
    <Card className="flex flex-col h-full border border-gray-200 rounded-lg overflow-hidden bg-white group shadow-sm hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"> {/* Replaced strong shadow with subtle shadow, smaller rounded corners, very subtle hover */}
      <div className="relative w-full h-44 bg-gray-100 overflow-hidden"> {/* Reduced height for a more compact card */}
        <Image
          src={service.imageUrl}
          alt={service.name}
          fill
          className="object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-500 ease-in-out" // Smaller rounded corners
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Subtle dark gradient overlay to make text pop more if it were on the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div> {/* Even lighter overlay */}
      </div>
      <CardHeader className="p-4 pb-2"> {/* Reduced padding */}
        <CardTitle className="text-xl font-bold text-gray-900 leading-tight"> {/* Slightly smaller title */}
          {service.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-between flex-1 p-4 pt-0"> {/* Reduced padding */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3"> {/* Smaller text, reduced margin */}
          {service.shortDescription}
        </p>
        <Button
          variant="default"
          size="sm" // Smaller button for a sleeker look
          className="w-full rounded-md py-2 px-4 text-white font-semibold text-sm bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105" // Reduced padding, smaller font
          onClick={() => router.push(`/services/${service.id}`)}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  )
}