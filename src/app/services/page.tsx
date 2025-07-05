// app/services/page.tsx

import PageHeader from '@/components/PageHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { servicesData } from '@/lib/servicesData';
 

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* PageHeader component for the services page */}
      <PageHeader
        title="Our Comprehensive Services"
        description="Indardek Limited offers a diverse range of high-quality solutions in general supplies, water management, infrastructure development, and meat export. Explore how we can support your needs."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]}
      />
      
      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-16 text-center bg-white shadow-sm rounded-lg mt-8 mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Solutions Tailored to Your Success
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          At Indardek Limited, we are committed to delivering excellence across all our service areas. Our expertise ensures reliable, efficient, and sustainable outcomes for every project, big or small.
        </p>
      </section>

      {/* Service Cards Grid Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Map through servicesData to render each ServiceCard */}
          {servicesData.map((svc) => (
            <ServiceCard key={svc.id} service={svc} />
          ))}
        </div>
      </section>
    </main>
  )
}
