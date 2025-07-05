// components/WhyUsPage.tsx
import React from 'react';

export function WhyUsPage() {
  const reasons = [
    {
      title: 'Experienced Teams',
      description: 'Our technical and management teams bring extensive experience to every project, ensuring professional and efficient execution.',
      icon: '/icons/team-icon.svg', // Assuming actual SVG icons or images
      alt: 'Experienced Teams Icon',
    },
    {
      title: 'Compliance & Safety',
      description: 'We strictly adhere to all environmental and safety regulations, prioritizing the well-being of our team, clients, and the environment.',
      icon: '/icons/safety-icon.svg',
      alt: 'Compliance and Safety Icon',
    },
    {
      title: 'Competitive Pricing',
      description: 'We offer competitive pricing without compromising on quality, ensuring you receive the best value for your investment.',
      icon: '/icons/pricing-icon.svg',
      alt: 'Competitive Pricing Icon',
    },
    {
      title: 'Custom Solutions',
      description: 'We provide tailored solutions designed to meet the unique and specific needs of each client, ensuring maximum satisfaction.',
      icon: '/icons/solutions-icon.svg',
      alt: 'Custom Solutions Icon',
    },
    {
      title: 'Strong Partnerships',
      description: 'Our strong partnerships with certified vendors and consultants guarantee access to the best resources and expertise.',
      icon: '/icons/partnership-icon.svg',
      alt: 'Strong Partnerships Icon',
    },
  ];

  return (
    <section className="bg-white p-8 md:p-10 rounded-lg border border-gray-100"> {/* Reduced padding, smaller rounded corners, subtle border */}
      <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-gray-800 mb-10">Why Choose Indardek Limited?</h2> {/* Slightly smaller heading */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Reduced gap */}
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-5 bg-gray-50 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1" // Reduced padding, smaller rounded corners, subtle shadow
          >
            <div className="mb-4 bg-blue-50 p-3 rounded-full"> {/* Subtle background for icon, slightly smaller */}
              {/* Using Image for better optimization and alt text */}
              <img src={reason.icon} alt={reason.alt} className="w-14 h-14 object-contain" /> {/* Slightly smaller icon size */}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3> {/* Smaller, bolder font, reduced margin */}
            <p className="text-gray-700 text-sm leading-relaxed">{reason.description}</p> {/* Slightly smaller text */}
          </div>
        ))}
      </div>
    </section>
  );
}