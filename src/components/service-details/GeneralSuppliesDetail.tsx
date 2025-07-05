// src/components/service-details/GeneralSuppliesDetail.tsx

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  FiTruck,
  FiShield,
  FiClock,
  FiCheckCircle,
  FiSend,
  FiClipboard,
  FiAward,
  FiPackage,
  FiHome,
  FiTool,
  FiCpu,
  FiBox,
  FiUsers,
  FiSearch
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

export const GeneralSuppliesDetail = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const service = {
    name: 'General Supplies',
    description: `We offer a comprehensive range of general supplies, ensuring quality and timely delivery for various needs. From office essentials to construction materials and household consumables, we are your one-stop solution. Our commitment to excellence means you get exactly what you need, when you need it, with unparalleled reliability.`,
    imageUrl: '/assets/general.jpg',
    highlights: [
      { icon: <FiTruck />, text: 'Reliable & Fast Delivery Across UAE' },
      { icon: <FiShield />, text: 'Trusted by Over 500 Satisfied Clients' },
      { icon: <FiClock />, text: '24/7 Support for Your Urgent Needs' },
    ],
    whyChoose: [
      'Comprehensive range of categories in one convenient place',
      'Custom orders and specialized procurement tailored to your specific requirements',
      'Highly competitive pricing with attractive volume discounts for bulk purchases',
      'Dedicated expert logistics support ensuring smooth and on-time delivery',
      'Unwavering commitment to product quality and customer satisfaction',
    ],
    faqs: [
      {
        q: 'Do you offer bulk discounts?',
        a: 'Yes, we offer flexible and competitive pricing for large and recurring orders. Please contact our sales team directly for a personalized quote based on your volume and specific needs.',
      },
      {
        q: 'How fast can you deliver?',
        a: 'Our standard delivery timeframe is typically within 24–48 hours for most locations in the UAE, depending on the order size and current stock availability. Expedited options may be available upon request.',
      },
      {
        q: 'Can I request items not listed on your website?',
        a: 'Absolutely. We specialize in handling custom procurement requests and can source a wide variety of items not explicitly listed. Simply provide us with your requirements, and we’ll do your best to fulfill them.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept various payment methods including bank transfers, credit/debit cards, and corporate accounts. Specific terms can be discussed upon order confirmation.',
      },
    ],
    categories: [
      { icon: <FiHome />, title: 'Office & Stationery', description: 'Everything from paper to ergonomic chairs.' },
      { icon: <FiTool />, title: 'Construction & Building', description: 'Materials, tools, and heavy-duty supplies.' },
      { icon: <FiCpu />, title: 'IT & Electronics', description: 'Hardware, peripherals, and networking essentials.' },
      { icon: <FiBox />, title: 'Industrial & Chemicals', description: 'Lubricants, solvents, and safety solutions.' },
      { icon: <FiCheckCircle />, title: 'Safety & PPE', description: 'Protective gear for all work environments.' },
      { icon: <FiSearch />, title: 'Custom Sourcing', description: 'We find specialty items not readily available.' },
    ],
    processSteps: [
      { icon: <FiSend />, title: 'Submit Your Request', description: 'Easily fill out our online quote form with your specific supply needs.' },
      { icon: <FiClipboard />, title: 'Receive Custom Quote', description: 'Our team reviews your request and provides a competitive, tailored quotation.' },
      { icon: <FiAward />, title: 'Confirm & Procure', description: 'Approve the quote, and we begin immediate procurement and quality checks.' },
      { icon: <FiPackage />, title: 'Fast Delivery', description: 'Your supplies are delivered directly to your specified location, on time.' },
    ],
    testimonials: [
      { quote: 'Indark has revolutionized our office supply chain. Their delivery is incredibly reliable, and the quality is consistently top-notch. Highly recommend!', author: 'Aisha R., Office Manager' },
      { quote: 'We needed a very specific type of industrial chemical, and Indark sourced it for us quickly and efficiently. Their custom procurement service is a game-changer.', author: 'Omar K., Procurement Head' },
      { quote: 'The best general supplies provider in UAE! Their wide range of products means we no longer need multiple vendors. The 24/7 support is a huge plus.', author: 'Fatima S., Operations Director' },
    ],
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans text-gray-800 space-y-24"> {/* Base font styling, increased section spacing */}
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 md:p-14 rounded-xl  flex flex-col md:flex-row items-center gap-10" // Increased padding, more rounded
      >
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-indigo-900 leading-tight mb-6">
            {service.name}
          </h1>
          <p className="text-gray-700 text-xl leading-relaxed mb-10"> {/* Adjusted text color, increased margin */}
            {service.description}
          </p>
          {/* Dialog Trigger Button */}
          <Dialog open={isQuoteFormOpen} onOpenChange={setIsQuoteFormOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="px-10 py-4 bg-indigo-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
              >
                Get a Free Quote
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden border-none shadow-2xl rounded-2xl">
              {/* The content for your quote form goes here */}
              <DialogHeader className="p-6 pb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-2xl">
                <DialogTitle className="text-3xl font-bold mb-2">Request Your Custom Quote</DialogTitle>
                <DialogDescription className="text-indigo-100 text-lg">
                  Tell us your specific supply needs and we'll get back to you with a tailored quotation.
                </DialogDescription>
              </DialogHeader>
              <div className="p-6">
                {/* Placeholder for your actual quote form. You would replace this div with your form component. */}
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="requirements" className="block text-gray-700 text-sm font-bold mb-2">
                      Your Supply Requirements
                    </label>
                    <textarea
                      id="requirements"
                      rows={5}
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="e.g., 500 reams of A4 paper, 10 safety helmets, 2 industrial vacuum cleaners..."
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-md font-bold text-lg hover:bg-indigo-700 transition-all duration-300"
                  >
                    Submit Request
                  </Button>
                </form>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="md:w-1/2 relative h-96 w-full rounded-3xl overflow-hidden shadow-xl border border-gray-200"> {/* More rounded corners */}
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
      <div className="text-center space-y-12"> {/* Increased section spacing */}
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
              className="flex flex-col items-center bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 ease-in-out  transform hover:-translate-y-1"
            >
              <div className="text-indigo-600 text-6xl mb-4">{item.icon}</div>
              <p className="text-xl text-gray-800 font-semibold text-center leading-normal">{item.text}</p> {/* Normal leading */}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Extensive Supply Categories (New Section) */}
      <div className="text-center space-y-12"> {/* Increased section spacing */}
        <h2 className="text-4xl font-extrabold text-gray-900 border-b-4 border-emerald-500 pb-3 inline-block">
          Our Extensive Supply Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col items-center text-center bg-white rounded-xl p-8  hover:shadow-lg transition-shadow duration-300 ease-in-out  transform hover:-translate-y-1"
            >
              <div className="text-emerald-600 text-5xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">{category.title}</h3> {/* Tighter leading for headings */}
              <p className="text-gray-600 text-lg leading-relaxed">{category.description}</p> {/* Relaxed leading for body */}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Simple Process (New Section) */}
      <div className="bg-gradient-to-br from-purple-50 to-white p-8 md:p-14 rounded-3xl space-y-12 border border-purple-100"> {/* Increased padding, more rounded */}
        <h2 className="text-4xl font-extrabold text-purple-800 border-b-4 border-purple-500 pb-3 inline-block text-center w-full">
          Our Simple Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {service.processSteps.map((step, idx) => (
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
      <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-14 rounded-3xl space-y-12 "> {/* Increased padding, more rounded */}
        <h2 className="text-4xl font-extrabold text-blue-800 border-b-4 border-blue-500 pb-3 inline-block">
          Why Our Clients Choose Us
        </h2>
        <ul className="text-gray-700 space-y-4">
          {service.whyChoose.map((reason, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start text-lg leading-relaxed" // Relaxed leading for list items
            >
              <FiCheckCircle className="text-green-500 text-2xl mr-3 flex-shrink-0 mt-1" />
              {reason}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* What Our Clients Say (Testimonials) */}
      <div className="text-center space-y-12"> {/* Increased section spacing */}
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
              className="bg-white rounded-xl p-8  flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              <FiUsers className="text-orange-500 text-5xl mb-4" />
              <p className="text-gray-700 text-lg italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
              <p className="font-semibold text-blue-700 text-base leading-normal">- {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="space-y-12"> {/* Increased section spacing */}
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
                <svg className="ml-2 w-6 h-6 text-indigo-600 transform details-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-14 px-8 rounded-3xl shadow-xl" // More rounded
      >
        <h4 className="text-4xl font-extrabold mb-4">Ready to Get Started with Your Supplies?</h4>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Tell us your requirements, and our team will prepare a custom quote tailored to your needs, often within 24 hours.
        </p>
        <Dialog open={isQuoteFormOpen} onOpenChange={setIsQuoteFormOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white"
            >
              Request Your Custom Quote
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden border-none shadow-2xl rounded-2xl">
            {/* The content for your quote form goes here */}
            <DialogHeader className="p-6 pb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-2xl">
              <DialogTitle className="text-3xl font-bold mb-2">Request Your Custom Quote</DialogTitle>
              <DialogDescription className="text-indigo-100 text-lg">
                Tell us your specific supply needs and we'll get back to you with a tailored quotation.
              </DialogDescription>
            </DialogHeader>
            <div className="p-6">
              {/* Placeholder for your actual quote form. You would replace this div with your form component. */}
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="requirements" className="block text-gray-700 text-sm font-bold mb-2">
                    Your Supply Requirements
                  </label>
                  <textarea
                    id="requirements"
                    rows={5}
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="e.g., 500 reams of A4 paper, 10 safety helmets, 2 industrial vacuum cleaners..."
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-md font-bold text-lg hover:bg-indigo-700 transition-all duration-300"
                >
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