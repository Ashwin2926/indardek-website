// src/components/service-details/MeatSupplyExportDetail.tsx
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  FiGlobe,
 
  FiCheckSquare,
  FiTruck,
  FiAward,
  FiPackage,
  FiHeart,
  FiUsers,
  FiZap,
  FiFastForward,
 
  FiClock,
  FiBriefcase
} from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export const MeatSupplyExportDetail = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const service = {
    name: 'Meat Supply & Export',
    description: `Indardek Limited is a premier supplier and exporter of high-quality meat products, committed to delivering fresh, safe, and ethically sourced produce to global markets. We ensure stringent quality control and seamless cold chain logistics.`,
    imageUrl: '/assets/meat.jpg', // Using a relative path for local assets
    highlights: [
      { icon: <FiCheckSquare />, text: 'Certified Global Food Safety Standards' },
      { icon: <FiPackage />, text: 'Customized Processing & Packaging' },
      { icon: <FiTruck />, text: 'Reliable Cold Chain Logistics Worldwide' },
    ],
    whyChoose: [
      '**Uncompromising Quality:** Sourced from accredited farms with strict animal welfare and hygiene standards.',
      '**Global Certifications:** Adherence to HACCP, ISO, and Halal certifications for diverse markets.',
      '**Seamless Export Logistics:** Expertise in documentation, customs, and efficient global delivery.',
      '**Tailored Solutions:** Custom cuts, specific packaging, and flexible order volumes to meet client demands.',
      '**Traceability & Transparency:** Full traceability from farm to fork for every shipment.',
    ],
    faqs: [
      {
        q: 'What types of meat do you supply?',
        a: 'We supply a diverse range including premium beef (various cuts), succulent lamb/mutton, tender goat meat, and high-quality poultry (chicken, turkey). We can also source specific types based on client requests.',
      },
      {
        q: 'Do you offer Halal certified meat?',
        a: 'Yes, we are fully compliant with Halal requirements and provide certified Halal meat products to cater to Islamic markets, ensuring all processes adhere to religious dietary laws.',
      },
      {
        q: 'How do you ensure freshness during export?',
        a: 'We implement a robust, integrated cold chain logistics system. This means continuous temperature control from our processing facilities through transportation (land, sea, air) until delivery, preserving freshness and quality.',
      },
      {
        q: 'Can you handle large volume orders?',
        a: 'Absolutely. We have established strong, long-term partnerships with producers and a resilient supply chain network that enables us to consistently fulfill large-volume orders for wholesalers, distributors, and the HORECA sector.',
      },
    ],
    servicesDetailed: [
      {
        title: 'Ethical Sourcing & Quality Assurance',
        description: 'Meticulous sourcing from accredited farms adhering to the highest standards of animal welfare, sustainable practices, and hygiene. Rigorous quality control from farm-gate to delivery.',
        icon: <FiHeart />,
      },
      {
        title: 'Diverse Meat Portfolio & Custom Cuts',
        description: 'Extensive range of fresh and frozen premium beef, lamb, goat, and poultry. Customized cutting, trimming, and portioning services to meet specific culinary or commercial requirements.',
        icon: <FiBriefcase />,
      },
      {
        title: 'State-of-the-Art Processing & Packaging',
        description: 'Utilizing advanced facilities for precise cutting, grading, and hygienic packaging. Offering vacuum-sealed, bulk, MAP, and retail-ready packaging solutions to preserve quality.',
        icon: <FiZap />,
      },
      {
        title: 'International Certifications & Compliance',
        description: 'Prioritizing adherence to global food safety regulations with HACCP, ISO, and Halal certifications. Full traceability documentation provided for every shipment.',
        icon: <FiAward />,
      },
      {
        title: 'Robust Cold Chain Logistics & Global Export',
        description: 'Integrated cold chain network guaranteeing optimal temperature from facility to destination. Efficient management of land, sea, and air freight, customs, and last-mile delivery globally.',
        icon: <FiGlobe />,
      },
      {
        title: 'Partnerships & Supply Chain Resilience',
        description: 'Building strong, long-term relationships with global producers and logistics partners to ensure consistent fulfillment of large-volume orders and adapt to market demands.',
        icon: <FiUsers />,
      },
    ],
    testimonials: [
      { quote: 'Indardek has been our go-to for premium meat imports. Their quality is consistent, and their cold chain management is flawless, ensuring fresh product every time.', author: 'Maria K., Restaurant Chain CEO' },
      { quote: 'The Halal certification and transparent sourcing made Indardek our preferred partner. They always deliver on time and with the exact specifications we need.', author: 'Yusuf A., International Distributor' },
      { quote: 'We appreciate their flexible custom cutting services. It has significantly streamlined our kitchen operations and reduced waste.', author: 'Chef Elena P., Luxury Hotel' },
    ],
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans text-gray-800 space-y-24">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 md:p-14 rounded-xl flex flex-col md:flex-row items-center gap-10"
      >
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-red-900 leading-tight mb-6">
            {service.name} Services
          </h1>
          <p className="text-gray-700 text-xl leading-relaxed mb-10">
            {service.description}
          </p>
          <Dialog open={isQuoteFormOpen} onOpenChange={setIsQuoteFormOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="px-10 py-4 bg-red-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
              >
                Get a Free Quote
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden border-none shadow-2xl rounded-2xl">
              <DialogHeader className="p-6 pb-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-t-2xl">
                <DialogTitle className="text-3xl font-bold mb-2">Request Your Meat Supply Quote</DialogTitle>
                <DialogDescription className="text-red-100 text-lg">
                  Tell us your specific meat requirements and destination for a tailored quotation.
                </DialogDescription>
              </DialogHeader>
              <div className="p-6">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                    <input type="text" id="name" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                    <input type="email" id="email" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                    <input type="tel" id="phone" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Your Phone Number" />
                  </div>
                  <div>
                    <label htmlFor="meatType" className="block text-gray-700 text-sm font-bold mb-2">Type of Meat (e.g., Beef, Lamb, Poultry)</label>
                    <input type="text" id="meatType" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="e.g., Beef, Lamb, Chicken" />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">Quantity (e.g., in KG or Tons)</label>
                    <input type="text" id="quantity" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="e.g., 500 KG or 2 Tons" />
                  </div>
                  <div>
                    <label htmlFor="destination" className="block text-gray-700 text-sm font-bold mb-2">Destination Country & Port</label>
                    <input type="text" id="destination" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="e.g., Japan, Port of Tokyo" />
                  </div>
                  <div>
                    <label htmlFor="notes" className="block text-gray-700 text-sm font-bold mb-2">Additional Notes / Specific Requirements (e.g., cuts, packaging, certifications)</label>
                    <textarea id="notes" rows={4} className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="e.g., Halal certification, specific cuts, vacuum-packed"></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-red-600 text-white py-3 rounded-md font-bold text-lg hover:bg-red-700 transition-all duration-300">
                    Submit Request
                  </Button>
                </form>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="md:w-1/2 relative h-96 w-full rounded-3xl overflow-hidden shadow-xl border border-gray-200">
          <Image
            src={service.imageUrl}
            alt={service.name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </motion.div>

      {/* Highlights */}
      <div className="text-center space-y-12">
        <h2 className="text-4xl font-extrabold text-gray-900 border-b-4 border-red-500 pb-3 inline-block">
          Our Commitments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="text-red-600 text-6xl mb-4">{item.icon}</div>
              <p className="text-xl text-gray-800 font-semibold text-center leading-normal">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Diverse Meat Portfolio & Services (New Section) */}
      <div className="text-center space-y-12">
        <h2 className="text-4xl font-extrabold text-gray-900 border-b-4 border-pink-500 pb-3 inline-block">
          Our Meat Supply & Export Offerings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.servicesDetailed.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col items-center text-center bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="text-pink-600 text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">{item.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Export Process (New Section - using a generic process) */}
      <div className="bg-gradient-to-br from-purple-50 to-white p-8 md:p-14 rounded-3xl space-y-12 border border-purple-100">
        <h2 className="text-4xl font-extrabold text-purple-800 border-b-4 border-purple-500 pb-3 inline-block text-center w-full">
          Our Meat Export Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <FiClock />, title: 'Order & Sourcing', description: 'Confirm requirements and source premium meat from accredited farms.' },
            { icon: <FiZap />, title: 'Processing & Packaging', description: 'Hygienic processing, custom cuts, and quality packaging.' },
            { icon: <FiFastForward />, title: 'Logistics & Documentation', description: 'Efficient cold chain management, customs, and export papers.' },
            { icon: <FiCheckSquare />, title: 'Global Delivery', description: 'Timely and safe delivery to your international destination.' },
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="text-purple-600 text-6xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">{`${idx + 1}. ${step.title}`}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-br from-red-50 to-white p-8 md:p-14 rounded-3xl space-y-12">
        <h2 className="text-4xl font-extrabold text-red-800 border-b-4 border-red-500 pb-3 inline-block">
          Why Choose Indardek for Meat Supply & Export?
        </h2>
        <ul className="text-gray-700 space-y-4">
          {service.whyChoose.map((reason, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start text-lg leading-relaxed"
            >
              <FiCheckSquare className="text-red-500 text-2xl mr-3 flex-shrink-0 mt-1" />
              <span dangerouslySetInnerHTML={{ __html: reason }}></span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* What Our Clients Say (Testimonials) */}
      <div className="text-center space-y-12">
        <h2 className="text-4xl font-extrabold text-gray-900 border-b-4 border-orange-500 pb-3 inline-block">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              <FiUsers className="text-orange-500 text-5xl mb-4" />
              <p className="text-gray-700 text-lg italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
              <p className="font-semibold text-blue-700 text-base leading-normal">- {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="space-y-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center border-b-4 border-purple-500 pb-3 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="space-y-5">
          {service.faqs.map((faq, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer border border-gray-200 hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <summary className="font-bold text-xl text-gray-800 flex justify-between items-center outline-none leading-normal">
                {faq.q}
                <svg className="ml-2 w-6 h-6 text-red-600 transform details-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">{faq.a}</p>
            </motion.details>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="text-center bg-gradient-to-r from-red-600 to-pink-700 text-white py-14 px-8 rounded-3xl shadow-xl"
      >
        <h4 className="text-4xl font-extrabold mb-4">Source Premium Meats Globally?</h4>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Contact us for competitive pricing and reliable delivery of high-quality meat products to your destination.
        </p>
        <Dialog open={isQuoteFormOpen} onOpenChange={setIsQuoteFormOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="bg-white text-red-700 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white"
            >
              Request Your Custom Quote
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden border-none shadow-2xl rounded-2xl">
            <DialogHeader className="p-6 pb-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-t-2xl">
              <DialogTitle className="text-3xl font-bold mb-2">Request Your Meat Supply Quote</DialogTitle>
              <DialogDescription className="text-red-100 text-lg">
                Tell us your specific meat requirements and destination for a tailored quotation.
              </DialogDescription>
            </DialogHeader>
            <div className="p-6">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                  <input type="text" id="name" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                  <input type="email" id="email" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Your Phone Number" />
                </div>
                <div>
                  <label htmlFor="meatType" className="block text-gray-700 text-sm font-bold mb-2">Type of Meat (e.g., Beef, Lamb, Poultry)</label>
                  <input type="text" id="meatType" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="e.g., Beef, Lamb, Chicken" />
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">Quantity (e.g., in KG or Tons)</label>
                  <input type="text" id="quantity" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="e.g., 500 KG or 2 Tons" />
                </div>
                <div>
                  <label htmlFor="destination" className="block text-gray-700 text-sm font-bold mb-2">Destination Country & Port</label>
                  <input type="text" id="destination" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="e.g., Japan, Port of Tokyo" />
                </div>
                <div>
                  <label htmlFor="notes" className="block text-gray-700 text-sm font-bold mb-2">Additional Notes / Specific Requirements (e.g., cuts, packaging, certifications)</label>
                  <textarea id="notes" rows={4} className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="e.g., Halal certification, specific cuts, vacuum-packed"></textarea>
                </div>
                <Button type="submit" className="w-full bg-red-600 text-white py-3 rounded-md font-bold text-lg hover:bg-red-700 transition-all duration-300">
                  Submit Request
                </Button>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};