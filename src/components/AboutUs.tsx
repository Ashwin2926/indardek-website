// components/AboutUs.tsx
import React from 'react';
import Image from 'next/image';

export function AboutUs() {
  return (
    <section className="bg-white p-8 md:p-10 rounded-lg border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-8"> {/* Reduced padding, smaller rounded corners, reduced gap */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-5 leading-tight">Company Overview: Indardek Limited</h2> {/* Slightly smaller title, reduced margin */}
        <p className="text-base text-gray-700 leading-relaxed mb-5"> {/* Slightly smaller text */}
          Indardek Limited is a fully registered and reputable Kenyan company specializing in <strong className="text-blue-600">general supplies, borehole drilling, and road construction</strong>. We are committed to delivering excellence in every project.
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          With a strong foundation built on <strong className="text-blue-600">integrity, efficiency, and client satisfaction</strong>, we provide high-quality services that meet the dynamic needs of both public and private sector clients across the region.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center items-center relative min-h-[280px] md:min-h-[350px] rounded-lg overflow-hidden"> {/* Adjusted min-heights, smaller rounded corners */}
        <Image
          src="/images/company-overview.jpg" // Placeholder for an actual company overview image
          alt="Indardek Limited Company Overview - Construction site with team"
          layout="fill"
          objectFit="cover"
          className="shadow-sm" // Very subtle shadow
        />
        {/* Very subtle overlay to ensure sleekness and slightly blend with content */}
        <div className="absolute inset-0 bg-blue-900 opacity-5 rounded-lg"></div>
      </div>
    </section>
  );
}