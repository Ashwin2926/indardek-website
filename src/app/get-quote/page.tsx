// src/app/get-quote/page.tsx

'use client';

import React from 'react';
import { DynamicQuoteForm } from '@/components/quote-forms/DynamicQuoteForm';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';

const GetQuotePage = () => {
  return (
    <>
     <PageHeader
        title="Get Quote"
        description="Discover what sets Indardek Limited apart as your preferred partner."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "services", href: "/services" }
        ]}
        // You can add a background image specific to this page if desired
        // backgroundImage="https://placehold.co/1920x400/4A6A8A/FFFFFF?text=Why+Choose+Us"
      />
      <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      

      {/* Dynamic Quote Form Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <DynamicQuoteForm />
      </main>
    </div>
    </>
  
  );
};

export default GetQuotePage;