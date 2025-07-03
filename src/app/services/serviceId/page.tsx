// app/services/page.tsx

import PageHeader from '@/components/PageHeader'
import { ServiceCard } from '@/components/ServiceCard'
import { servicesData } from '@/lib/servicesData'

export default function ServicesPage() {
  return (
    <>
       <PageHeader
        title="Service"
        description="What sets Indardek Limited apart"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Flights", href: "/flight" }, { name: "Booking", href: "/booking" }]}
      />
      <section className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((svc) => (
            <ServiceCard key={svc.id} service={svc} detailed />
          ))}
        </div>
      </section>
    </>
  )
}
