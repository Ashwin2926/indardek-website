// app/page.tsx

import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { servicesData } from '@/lib/servicesData';
import { VisionMissionValues } from '@/components/Vission';
import { WhyUsPage } from '@/components/WhyUs';
import { ContactUs } from '@/components/ContactUs';
import { AboutUs } from '@/components/AboutUs';



export default function HomePage() {
  return (
    <main className="space-y-16">
      {/* Hero Section */}
      <Hero />

      {/* Company Overview Section */}
      <section id="about-us" className="container mx-auto px-4 py-16">
        <AboutUs />
      </section>

      {/* Core Services Section */}
      <section id="services" className="container mx-auto px-4 py-16 bg-gray-50 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((svc) => (
            <ServiceCard key={svc.id} service={svc} />
          ))}
        </div>
      </section>

      {/* Vision, Mission, Core Values Section */}
      <section id="vision-mission-values" className="container mx-auto px-4 py-16">
        <VisionMissionValues />
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="bg-blue-50 py-16 rounded-lg shadow-lg">
        <div className="container mx-auto px-4">
          <WhyUsPage />
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="container mx-auto px-4 py-16">
        <ContactUs />
      </section>
    </main>
  );
}
