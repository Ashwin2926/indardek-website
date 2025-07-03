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
    <Card className="flex flex-col h-full shadow-md hover:shadow-lg transition-shadow">
      <div className="relative w-full h-48">
        <Image
          src={service.imageUrl}
          alt={service.name}
          fill
          className="object-cover rounded-t-md"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{service.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-between flex-1">
        <p className="text-sm text-muted-foreground mb-4">
          {detailed
            ? service.longDescription[0]
            : service.shortDescription}
        </p>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => router.push(`/services#${service.id}`)}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  )
}
