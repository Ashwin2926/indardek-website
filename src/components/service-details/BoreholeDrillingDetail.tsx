// src/components/service-details/BoreholeDrillingDetail.tsx
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  FiTool,
  FiCheckCircle,
  FiCompass,
  FiZap,
  FiDroplet,
  FiUsers,
  FiGlobe,
  FiSun,
  FiTrendingUp,
  FiBarChart2,
  FiLifeBuoy,
  FiMap
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export const BoreholeDrillingDetail = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const service = {
    name: 'Borehole Drilling',
    description: `Indardek Limited specializes in complete borehole drilling solutions, ensuring access to clean and reliable water sources for various applications across residential, agricultural, and industrial sectors. We combine scientific rigor with advanced technology to deliver sustainable water infrastructure.`,
    imageUrl: '/assets/borehole.jpg', // Using a relative path for local assets
    highlights: [
      { icon: <FiCompass />, text: 'Precision Hydrogeological Surveys' },
      { icon: <FiDroplet />, text: 'Guaranteed Sustainable Water Yield' },
      { icon: <FiSun />, text: 'Eco-Friendly & Solar Pump Solutions' },
    ],
    whyChoose: [
      '**Unmatched Expertise:** Leveraging years of experience with certified hydrogeologists and engineers.',
      '**Advanced Technology:** Utilizing modern drilling rigs and geophysical survey equipment for optimal results.',
      '**Comprehensive Solutions:** From initial survey to pump installation and long-term maintenance.',
      '**Sustainable Practices:** Committed to environmentally responsible drilling and water resource management.',
      '**Client-Centric Approach:** Tailored solutions and responsive support for every project.',
    ],
    faqs: [
      {
        q: 'How long does a typical borehole drilling project take?',
        a: 'The duration varies greatly depending on geological conditions, desired depth, and site accessibility. A typical residential borehole can take from 1 to 3 weeks, while larger industrial projects may take longer. We provide a detailed timeline during the planning phase.',
      },
      {
        q: 'What is the lifespan of a borehole?',
        a: 'With proper construction, pump selection, and regular maintenance, a borehole can last for 20 to 50 years or even more. Factors like water quality, geological stability, and usage patterns influence its longevity.',
      },
      {
        q: 'Do you provide water quality testing?',
        a: 'Yes, comprehensive water quality analysis is an integral part of our service. Post-drilling, water samples are sent to certified laboratories to ensure the water meets safety and potability standards for its intended use.',
      },
      {
        q: 'Are your drilling methods environmentally friendly?',
        a: 'Absolutely. We adhere to strict environmental regulations and employ sustainable drilling practices to minimize ecological impact. This includes proper waste disposal, groundwater protection, and efficient water use during drilling.',
      },
    ],
    servicesDetailed: [
      {
        title: 'Hydrogeological Surveys & Siting',
        description: 'Meticulous surveys using advanced geophysical methods (e.g., resistivity, VLF) to identify optimal underground water veins, determine aquifer characteristics, and recommend precise drilling locations to maximize yield and minimize dry hole risks.',
        icon: <FiMap />,
      },
      {
        title: 'Advanced Borehole Drilling & Construction',
        description: 'Deployment of modern, high-capacity drilling rigs (DTH, Rotary) capable of penetrating diverse geological formations. Installation of durable casings (PVC, Steel) and gravel packs compliant with international drilling standards.',
        icon: <FiTool />,
      },
      {
        title: 'Test Pumping & Water Quality Analysis',
        description: 'Extensive test pumping to accurately determine sustainable yield and drawdown. Water samples analyzed by certified laboratories for physiochemical and microbiological parameters, guaranteeing water quality for intended use.',
        icon: <FiBarChart2 />,
      },
      {
        title: 'Pump Installation & Reticulation Systems',
        description: 'Professional selection and installation of high-efficiency pumping systems (submersible, solar, surface) tailored to borehole yield. Design and implementation of complete water reticulation systems, including tanks and automated controls.',
        icon: <FiZap />,
      },
      {
        title: 'Borehole Rehabilitation & Maintenance',
        description: 'Specialized rehabilitation services (airlifting, chemical treatment, mechanical brushing) to restore reduced yield. Preventive maintenance programs with regular inspections, pump servicing, and water quality monitoring to extend operational lifespan.',
        icon: <FiLifeBuoy />,
      },
      {
        title: 'Sustainable & Environmentally Compliant Practices',
        description: 'Commitment to environmentally responsible drilling, strictly adhering to local and international environmental regulations. Implementation of robust waste management, groundwater protection, and sustainable abstraction practices.',
        icon: <FiGlobe />,
      },
    ],
    testimonials: [
      { quote: 'Indardek delivered an exceptional borehole solution for our farm. The water yield is fantastic, and their team was professional and efficient throughout the process.', author: 'Ahmed L., Agricultural Business Owner' },
      { quote: 'The hydrogeological survey was incredibly thorough, leading to a perfectly sited borehole for our new residential development. Clean water access is now reliable.', author: 'Sara M., Real Estate Developer' },
      { quote: 'Their expertise in pump installation and reticulation saved us a lot of hassle. We now have a consistent and strong water supply across our entire industrial facility.', author: 'Khalid S., Factory Manager' },
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
          <h1 className="text-5xl lg:text-6xl font-extrabold text-teal-900 leading-tight mb-6">
            {service.name} Solutions
          </h1>
          <p className="text-gray-700 text-xl leading-relaxed mb-10">
            {service.description}
          </p>
          <Dialog open={isQuoteFormOpen} onOpenChange={setIsQuoteFormOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="px-10 py-4 bg-teal-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-300"
              >
                Get a Free Quote
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden border-none shadow-2xl rounded-2xl">
              <DialogHeader className="p-6 pb-4 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-t-2xl">
                <DialogTitle className="text-3xl font-bold mb-2">Request Your Borehole Drilling Quote</DialogTitle>
                <DialogDescription className="text-teal-100 text-lg">
                  Tell us about your water needs and project details for a tailored quotation.
                </DialogDescription>
              </DialogHeader>
              <div className="p-6">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                    <input type="text" id="name" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                    <input type="email" id="email" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                    <input type="tel" id="phone" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Your Phone Number" />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Drilling Location</label>
                    <input type="text" id="location" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="e.g., Dubai, UAE" />
                  </div>
                  <div>
                    <label htmlFor="purpose" className="block text-gray-700 text-sm font-bold mb-2">Purpose of Borehole</label>
                    <textarea id="purpose" rows={3} className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="e.g., Residential supply, agricultural irrigation, industrial use"></textarea>
                  </div>
                  <div>
                    <label htmlFor="notes" className="block text-gray-700 text-sm font-bold mb-2">Additional Notes</label>
                    <textarea id="notes" rows={4} className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Any specific requirements or questions?"></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-teal-600 text-white py-3 rounded-md font-bold text-lg hover:bg-teal-700 transition-all duration-300">
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
        <h2 className="text-4xl font-extrabold text-gray-900 border-b-4 border-teal-500 pb-3 inline-block">
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
              <div className="text-teal-600 text-6xl mb-4">{item.icon}</div>
              <p className="text-xl text-gray-800 font-semibold text-center leading-normal">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Comprehensive Borehole Services (New Section) */}
      <div className="text-center space-y-12">
        <h2 className="text-4xl font-extrabold text-gray-900 border-b-4 border-green-500 pb-3 inline-block">
          Our Comprehensive Borehole Services
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
              <div className="text-green-600 text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">{item.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Simple Process (New Section - using a generic process for all, can be customized) */}
      <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-14 rounded-3xl space-y-12 border border-blue-100">
        <h2 className="text-4xl font-extrabold text-blue-800 border-b-4 border-blue-500 pb-3 inline-block text-center w-full">
          Our Borehole Drilling Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <FiCompass />, title: 'Site Assessment', description: 'Detailed hydrogeological surveys and site evaluations.' },
            { icon: <FiTool />, title: 'Drilling & Construction', description: 'Advanced drilling, casing, and gravel pack installation.' },
            { icon: <FiTrendingUp />, title: 'Testing & Analysis', description: 'Yield testing and comprehensive water quality analysis.' },
            { icon: <FiZap />, title: 'Installation & Handover', description: 'Pump installation, reticulation, and project completion.' },
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 text-6xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">{`${idx + 1}. ${step.title}`}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-br from-green-50 to-white p-8 md:p-14 rounded-3xl space-y-12">
        <h2 className="text-4xl font-extrabold text-green-800 border-b-4 border-green-500 pb-3 inline-block">
          Why Choose Indardek for Borehole Drilling?
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
              <FiCheckCircle className="text-teal-500 text-2xl mr-3 flex-shrink-0 mt-1" />
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
                <svg className="ml-2 w-6 h-6 text-teal-600 transform details-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        className="text-center bg-gradient-to-r from-teal-600 to-blue-700 text-white py-14 px-8 rounded-3xl shadow-xl"
      >
        <h4 className="text-4xl font-extrabold mb-4">Ready for a Reliable Water Source?</h4>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Contact us today for a personalized quote and let Indardek Limited provide you with sustainable borehole solutions.
        </p>
        <Dialog open={isQuoteFormOpen} onOpenChange={setIsQuoteFormOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="bg-white text-teal-700 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white"
            >
              Request Your Custom Quote
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden border-none shadow-2xl rounded-2xl">
            <DialogHeader className="p-6 pb-4 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-t-2xl">
              <DialogTitle className="text-3xl font-bold mb-2">Request Your Borehole Drilling Quote</DialogTitle>
              <DialogDescription className="text-teal-100 text-lg">
                Tell us about your water needs and project details for a tailored quotation.
              </DialogDescription>
            </DialogHeader>
            <div className="p-6">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                  <input type="text" id="name" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                  <input type="email" id="email" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Your Phone Number" />
                </div>
                <div>
                  <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Drilling Location</label>
                  <input type="text" id="location" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="e.g., Dubai, UAE" />
                </div>
                <div>
                  <label htmlFor="purpose" className="block text-gray-700 text-sm font-bold mb-2">Purpose of Borehole</label>
                  <textarea id="purpose" rows={3} className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="e.g., Residential supply, agricultural irrigation, industrial use"></textarea>
                </div>
                <div>
                  <label htmlFor="notes" className="block text-gray-700 text-sm font-bold mb-2">Additional Notes</label>
                  <textarea id="notes" rows={4} className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Any specific requirements or questions?"></textarea>
                </div>
                <Button type="submit" className="w-full bg-teal-600 text-white py-3 rounded-md font-bold text-lg hover:bg-teal-700 transition-all duration-300">
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