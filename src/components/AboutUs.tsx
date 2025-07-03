// components/AboutUs.tsx
import React from 'react';

export function AboutUs() {
  return (
    <section className="bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Company Overview</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Indardek Limited is a fully registered and reputable Kenyan company specializing in general supplies, borehole drilling, and road construction.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          With a strong foundation built on integrity, efficiency, and client satisfaction, we provide high-quality services that meet the dynamic needs of both public and private sector clients.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src="https://placehold.co/600x400/E0F2F7/000000?text=Company+Overview+Image"
          alt="Company Overview"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </section>
  );
}
