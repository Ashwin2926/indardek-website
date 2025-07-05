// app/services/[serviceId]/page.tsx

"use client"

import React from 'react';
import { useParams } from 'next/navigation';

import { servicesData } from '@/lib/servicesData';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/PageHeader';

// Import the specific service detail components
import { GeneralSuppliesDetail } from '@/components/service-details/GeneralSuppliesDetail';
import { BoreholeDrillingDetail } from '@/components/service-details/BoreholeDrillingDetail';
import { RoadConstructionDetail } from '@/components/service-details/RoadConstructionDetail';
import { MeatSupplyExportDetail } from '@/components/service-details/MeatSupplyExportDetail';


export default function ServiceDetailPage() {
  const params = useParams();
  const serviceId = params.serviceId as string; // Get serviceId from URL parameters

  // Find the service details based on the serviceId for PageHeader and validation
  const serviceMetaData = servicesData.find(svc => svc.id === serviceId);

  if (!serviceMetaData) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-red-600">Service Not Found</h1>
        <p className="text-gray-700 mt-4">The requested service could not be found. Please check the URL or navigate back to our services page.</p>
        <Button onClick={() => window.location.href = '/services'} className="mt-6">Back to Services</Button>
      </div>
    );
  }

  // Render the appropriate service detail component based on serviceId
  const renderServiceDetailComponent = () => {
    switch (serviceId) {
      case 'general-supplies':
        return <GeneralSuppliesDetail />;
      case 'borehole-drilling':
        return <BoreholeDrillingDetail />;
      case 'road-construction':
        return <RoadConstructionDetail />;
      case 'meat-supply-export':
        return <MeatSupplyExportDetail />;
      default:
        // This case should ideally not be reached if serviceMetaData exists,
        // but included for robustness.
        return (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Details for {serviceMetaData.name}</h2>
            <p className="text-gray-700 mb-3 leading-relaxed">
              Detailed information for this service is coming soon. Please contact us directly for more information.
            </p>
            <p className="text-gray-600 mt-4">Email: indark2025@gmail.com | Phone: 0720 976 397</p>
          </div>
        );
    }
  };

  return (
    <main>
      <PageHeader
        title={serviceMetaData.name}
        description={serviceMetaData.shortDescription}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: serviceMetaData.name, href: `/services/${serviceId}` }, // Link to itself
        ]}
      />

      <section className="container mx-auto px-4 py-12">
        {renderServiceDetailComponent()}
      </section>
    </main>
  );
}