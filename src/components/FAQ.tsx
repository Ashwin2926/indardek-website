// src/components/FAQ.tsx

"use client"

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Define a type for FAQ items for better type safety
interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ = () => {
  // State to manage which FAQ item is open (stores the index of the open item)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Sample FAQ data - replace with actual data from a prop or API call
  const faqData: FAQItem[] = [
    {
      question: "What services does Indardek Limited offer?",
      answer: "Indardek Limited specializes in general supplies, borehole drilling, road construction, and meat supply & export. We aim to provide comprehensive solutions across various sectors."
    },
    {
      question: "Where does Indardek Limited operate?",
      answer: "We primarily operate within Kenya, serving both public and private sector clients across different regions."
    },
    {
      question: "How can I request a quote or consultation?",
      answer: "You can request a quote or consultation by visiting our 'Contact Us' page and filling out the inquiry form, or by reaching out to us directly via phone or email."
    },
    {
      question: "What makes Indardek Limited different from competitors?",
      answer: "Our commitment to integrity, efficiency, and client satisfaction, combined with experienced teams and competitive pricing, sets us apart. We focus on delivering tailored, high-quality solutions."
    },
    {
      question: "Are your services environmentally friendly?",
      answer: "Yes, environmental responsibility is a core value. We strictly adhere to all environmental regulations and implement sustainable practices in our projects to minimize impact."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto px-4 py-12 bg-white rounded-lg border border-gray-100 shadow-sm"> {/* Reduced padding, smaller rounded corners, subtle shadow */}
      <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-gray-800 mb-10"> {/* Slightly smaller heading, reduced margin */}
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-3"> {/* Reduced space between FAQ items */}
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 hover:bg-gray-100" // Smaller rounded corners, subtle hover effect
          >
            <button
              className="flex justify-between items-center w-full p-4 text-left text-base font-semibold text-gray-800 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500" // Reduced padding, smaller font, thinner ring
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span>{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="text-blue-600" size={20} /> // Slightly smaller icon
              ) : (
                <ChevronDown className="text-gray-500" size={20} /> // Slightly smaller icon
              )}
            </button>
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className={`px-4 pt-0 pb-4 text-gray-700 leading-relaxed text-sm transition-all duration-300 ease-in-out ${ // Reduced padding, smaller text
                openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
              }`}
              style={{ overflow: 'hidden' }} // Ensure content is hidden when collapsed
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};