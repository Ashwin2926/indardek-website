// src/components/service-details/RoadConstructionDetail.tsx
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  FiHardDrive,
  FiTool,
  FiCheckCircle,
  FiCompass,
  FiAward,
  FiUsers,
  FiMap,
  FiTruck,
  FiCalendar,
  FiSettings,
  FiDroplet,
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

export const RoadConstructionDetail = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const service = {
    name: 'Road Construction',
    description: `Indardek Limited delivers robust and sustainable road construction solutions, from urban roads to highways, ensuring connectivity and durability for all terrains. Our projects are built with precision, safety, and long-term performance in mind.`,
    imageUrl: '/assets/road.jpg', // Using a relative path for local assets
    highlights: [
      { icon: <FiMap />, text: 'Comprehensive Design & Planning' },
      { icon: <FiTruck />, text: 'Modern Fleet & Advanced Equipment' },
      { icon: <FiAward />, text: 'Excellence in Quality & Durability' },
    ],
    whyChoose: [
      '**Precision Engineering:** Utilizing advanced surveying and design tools for optimal road layouts and structures.',
      '**Modern Fleet & Equipment:** Deployment of state-of-the-art machinery for efficient and high-quality construction.',
      '**Durable Materials:** Selection and use of top-grade aggregates and paving materials for longevity.',
      '**Experienced Workforce:** A highly skilled team of engineers, project managers, and construction specialists.',
      '**Safety & Sustainability:** Adherence to stringent safety protocols and eco-friendly construction practices.',
      '**Timely Project Delivery:** Efficient project management ensuring completion within agreed timelines and budgets.',
    ],
    faqs: [
      {
        q: 'What types of road construction projects do you undertake?',
        a: 'We handle a wide array of projects including urban roads, rural roads, highways, access roads, industrial pavements, and specialized infrastructure. Our expertise covers both new construction and rehabilitation.',
      },
      {
        q: 'How do you ensure the quality and durability of your roads?',
        a: 'Quality is paramount. We use high-grade materials, employ skilled labor, and implement rigorous quality control at every stage—from geotechnical surveys and earthworks to paving and surface finishing. All projects adhere to international engineering standards.',
      },
      {
        q: 'Do you offer road maintenance services?',
        a: 'Yes, we provide comprehensive post-construction services, including routine maintenance (pothole repair, crack sealing), periodic overlays, and full-depth pavement rehabilitation programs to extend the service life of road networks.',
      },
      {
        q: 'What is your approach to environmental impact in road construction?',
        a: 'We are committed to minimizing environmental impact. Our practices include proper waste management, erosion control, noise reduction measures, and careful planning to protect natural habitats and water sources during construction.',
      },
    ],
    servicesDetailed: [
      {
        title: 'Site Survey & Geotechnical Investigation',
        description: 'Detailed topographical surveys and extensive geotechnical investigations (soil testing, boreholes) to understand ground conditions and inform precise engineering designs for optimal road stability.',
        icon: <FiCompass />,
      },
      {
        title: 'Earthworks & Subgrade Preparation',
        description: 'Efficient excavation, cutting, filling, and compaction using heavy-duty machinery. Meticulous subgrade preparation and stabilization to form a stable foundation, preventing future settlement.',
        icon: <FiHardDrive />,
      },
      {
        title: 'Pavement & High-Performance Surfacing',
        description: 'Precision paving with hot-mix asphalt concrete or rigid concrete pavements. Advanced equipment ensures precise layer thickness, consistent compaction, and durable, weather-resistant surfaces.',
        icon: <FiTool />,
      },
      {
        title: 'Integrated Drainage Systems',
        description: 'Design and installation of comprehensive drainage solutions, including culverts, side drains, catch basins, and stormwater management systems, crucial for road longevity and preventing damage.',
        icon: <FiDroplet />, // Reusing Droplet for drainage
      },
      {
        title: 'Ancillary Works & Road Furniture',
        description: 'Installation of essential road markings, reflective studs, traffic signs, safety barriers (guardrails), street lighting, and pedestrian pathways, enhancing safety and operational efficiency.',
        icon: <FiSettings />,
      },
      {
        title: 'Quality Control & Regulatory Compliance',
        description: 'Rigorous quality control protocols, including material testing and surface checks, ensuring strict adherence to local and international engineering standards. Full documentation provided.',
        icon: <FiCheckCircle />,
      },
    ],
    testimonials: [
      { quote: 'Indardek transformed our access roads. The quality of work is outstanding, and the new roads have significantly improved logistics for our industrial complex.', author: 'David P., Logistics Manager' },
      { quote: 'Their team handled our highway project with utmost professionalism and efficiency. The project was completed on time and within budget, exceeding our expectations.', author: 'Nadia F., Government Roads Authority' },
      { quote: 'We are impressed with Indardek\'s commitment to safety and environmental standards. They delivered a durable and well-designed road network for our residential community.', author: 'Sultan H., Community Developer' },
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
          <h1 className="text-5xl lg:text-6xl font-extrabold text-blue-900 leading-tight mb-6">
            {service.name} Expertise
          </h1>
          <p className="text-gray-700 text-xl leading-relaxed mb-10">
            {service.description}
          </p>
          <Dialog open={isQuoteFormOpen} onOpenChange={setIsQuoteFormOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="px-10 py-4 bg-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Get a Free Quote
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden border-none shadow-2xl rounded-2xl">
              <DialogHeader className="p-6 pb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-2xl">
                <DialogTitle className="text-3xl font-bold mb-2">Request Your Road Construction Quote</DialogTitle>
                <DialogDescription className="text-blue-100 text-lg">
                  Tell us about your road project and we'll get back to you with a tailored quotation.
                </DialogDescription>
              </DialogHeader>
              <div className="p-6">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                    <input type="text" id="name" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                    <input type="email" id="email" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                    <input type="tel" id="phone" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your Phone Number" />
                  </div>
                  <div>
                    <label htmlFor="projectLocation" className="block text-gray-700 text-sm font-bold mb-2">Project Location</label>
                    <input type="text" id="projectLocation" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="e.g., Dubai, UAE" />
                  </div>
                  <div>
                    <label htmlFor="roadType" className="block text-gray-700 text-sm font-bold mb-2">Type of Road / Project</label>
                    <input type="text" id="roadType" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="e.g., Urban Road, Highway, Industrial Pavement" />
                  </div>
                  <div>
                    <label htmlFor="lengthWidth" className="block text-gray-700 text-sm font-bold mb-2">Estimated Length & Width</label>
                    <input type="text" id="lengthWidth" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="e.g., 5 KM length, 10 M width" />
                  </div>
                  <div>
                    <label htmlFor="notes" className="block text-gray-700 text-sm font-bold mb-2">Additional Notes / Specific Requirements (e.g., paving material, drainage needs)</label>
                    <textarea id="notes" rows={4} className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="e.g., Asphalt paving, stormwater management required"></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-bold text-lg hover:bg-blue-700 transition-all duration-300">
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
        <h2 className="text-4xl font-extrabold text-gray-900 border-b-4 border-blue-500 pb-3 inline-block">
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
              <div className="text-blue-600 text-6xl mb-4">{item.icon}</div>
              <p className="text-xl text-gray-800 font-semibold text-center leading-normal">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Road Construction Expertise (New Section) */}
      <div className="text-center space-y-12">
        <h2 className="text-4xl font-extrabold text-gray-900 border-b-4 border-indigo-500 pb-3 inline-block">
          Our Road Construction Expertise
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
              <div className="text-indigo-600 text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">{item.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Road Construction Process (New Section) */}
      <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-14 rounded-3xl space-y-12 border border-gray-100">
        <h2 className="text-4xl font-extrabold text-gray-800 border-b-4 border-gray-500 pb-3 inline-block text-center w-full">
          Our Road Construction Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <FiCalendar />, title: 'Planning & Design', description: 'Detailed surveys and engineering designs for optimal roads.' },
            { icon: <FiAward />, title: 'Earthworks & Foundation', description: 'Site preparation, excavation, and robust subgrade construction.' },
            { icon: <FiTool />, title: 'Paving & Surfacing', description: 'Precision application of asphalt or concrete, ensuring durability.' },
            { icon: <FiCheckCircle />, title: 'Completion & Quality', description: 'Ancillary works, rigorous quality checks, and project handover.' },
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="text-gray-600 text-6xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">{`${idx + 1}. ${step.title}`}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-14 rounded-3xl space-y-12">
        <h2 className="text-4xl font-extrabold text-blue-800 border-b-4 border-blue-500 pb-3 inline-block">
          Why Choose Indardek for Road Construction?
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
              <FiCheckCircle className="text-blue-500 text-2xl mr-3 flex-shrink-0 mt-1" />
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
                <svg className="ml-2 w-6 h-6 text-blue-600 transform details-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-14 px-8 rounded-3xl shadow-xl"
      >
        <h4 className="text-4xl font-extrabold mb-4">Building Better Roads Together?</h4>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Discuss your road construction project with us and get a detailed, competitive quote from Indardek Limited.
        </p>
        <a href='/get-quote'>

    
        
            <Button
              size="lg"
              className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white"
            >
              Request Your Custom Quote
            </Button>
                </a>
  
      </div>
    </div>
  );
};