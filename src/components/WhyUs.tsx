// components/WhyUsPage.tsx
import React from 'react';

export function WhyUsPage() {
  const reasons = [
    {
      title: 'Experienced Teams',
      description: 'Our technical and management teams bring extensive experience to every project, ensuring professional and efficient execution.',
      icon: 'https://placehold.co/60x60/3B82F6/FFFFFF?text=👥', // Placeholder icon
    },
    {
      title: 'Compliance & Safety',
      description: 'We strictly adhere to all environmental and safety regulations, prioritizing the well-being of our team, clients, and the environment.',
      icon: 'https://placehold.co/60x60/3B82F6/FFFFFF?text=✅', // Placeholder icon
    },
    {
      title: 'Competitive Pricing',
      description: 'We offer competitive pricing without compromising on quality, ensuring you receive the best value for your investment.',
      icon: 'https://placehold.co/60x60/3B82F6/FFFFFF?text=💰', // Placeholder icon
    },
    {
      title: 'Custom Solutions',
      description: 'We provide tailored solutions designed to meet the unique and specific needs of each client, ensuring maximum satisfaction.',
      icon: 'https://placehold.co/60x60/3B82F6/FFFFFF?text=💡', // Placeholder icon
    },
    {
      title: 'Strong Partnerships',
      description: 'Our strong partnerships with certified vendors and consultants guarantee access to the best resources and expertise.',
      icon: 'https://placehold.co/60x60/3B82F6/FFFFFF?text=🤝', // Placeholder icon
    },
  ];

  return (
    <section className="bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-blue-100">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Why Choose Indardek Limited?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-gray-100"
          >
            <div className="mb-4">
              <img src={reason.icon} alt={reason.title} className="w-16 h-16 object-contain" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
            <p className="text-gray-700 text-base leading-relaxed">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
