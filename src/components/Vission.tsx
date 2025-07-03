// components/VisionMissionValues.tsx
import React from 'react';

export function VisionMissionValues() {
  return (
    <section className="bg-blue-50 p-8 md:p-12 rounded-xl shadow-2xl border border-blue-100">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Our Vision, Mission & Core Values</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Vision Card */}
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-gray-100 flex flex-col items-center text-center">
          <div className="text-blue-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            To be a leading regional provider of reliable infrastructure and supply solutions that drive sustainable development.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-gray-100 flex flex-col items-center text-center">
          <div className="text-blue-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="6"/>
              <circle cx="12" cy="12" r="2"/>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            To deliver innovative, safe, and cost-effective services in general supplies, water solutions, and infrastructure development enhancing the quality of life and supporting economic growth.
          </p>
        </div>

        {/* Core Values Card */}
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-gray-100 flex flex-col items-center text-center">
          <div className="text-blue-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gem">
              <path d="M6 3v18l6-4 6 4V3"/>
              <path d="M12 3v18"/>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Core Values</h3>
          <ul className="text-gray-700 text-base leading-relaxed list-disc list-inside space-y-2 text-left">
            <li><strong>Integrity:</strong> We uphold the highest ethical standards.</li>
            <li><strong>Quality:</strong> We are committed to excellence.</li>
            <li><strong>Reliability:</strong> We deliver on our promises.</li>
            <li><strong>Innovation:</strong> We embrace technology and creativity.</li>
            <li><strong>Client Focus:</strong> We listen, understand, and respond.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
