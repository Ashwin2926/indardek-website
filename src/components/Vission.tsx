// components/VisionMissionValues.tsx
import React from 'react';

export function VisionMissionValues() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-10 rounded-lg border border-blue-100 relative overflow-hidden"> {/* Reduced padding, smaller rounded corners, very subtle gradient */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-3"> {/* Even lower opacity for subtlety */}
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="15" fill="url(#pattern0_1_2)" />
          <circle cx="80" cy="50" r="20" fill="url(#pattern1_1_2)" />
          <defs>
            <pattern id="pattern0_1_2" patternContentUnits="objectBoundingBox" width="1" height="1">
              <image id="image0_1_2" width="1" height="1" xlinkHref="data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H100V100H0V0Z' fill='%23DBEAFE'/%3E%3C/svg%3E"/> {/* Lighter blue */}
            </pattern>
            <pattern id="pattern1_1_2" patternContentUnits="objectBoundingBox" width="1" height="1">
              <image id="image1_1_2" width="1" height="1" xlinkHref="data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H100V100H0V0Z' fill='%2393C5FD'/%3E%3C/svg%3E"/>
            </pattern>
          </defs>
        </svg>
      </div>

      <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-gray-800 mb-10 relative z-10">Our Vision, Mission & Core Values</h2> {/* Slightly smaller heading */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 relative z-10"> {/* Reduced gap */}
        {/* Vision Card */}
        <div className="bg-white p-6 rounded-lg border border-gray-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1"> {/* Reduced padding, smaller rounded corners, subtle shadow */}
          <div className="text-blue-600 mb-5 bg-blue-50 p-3 rounded-full"> {/* Slightly smaller padding for icon container */}
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"> {/* Slightly thinner stroke */}
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3> {/* Smaller, bolder font */}
          <p className="text-gray-700 text-base leading-relaxed">
            To be a leading regional provider of reliable infrastructure and supply solutions that drive sustainable development.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white p-6 rounded-lg border border-gray-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1">
          <div className="text-blue-600 mb-5 bg-blue-50 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="6"/>
              <circle cx="12" cy="12" r="2"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            To deliver innovative, safe, and cost-effective services in general supplies, water solutions, and infrastructure development enhancing the quality of life and supporting economic growth.
          </p>
        </div>

        {/* Core Values Card */}
        <div className="bg-white p-6 rounded-lg border border-gray-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1">
          <div className="text-blue-600 mb-5 bg-blue-50 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gem">
              <path d="M6 3v18l6-4 6 4V3"/>
              <path d="M12 3v18"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Our Core Values</h3>
          <ul className="text-gray-700 text-base leading-relaxed list-disc list-inside space-y-1 text-left"> {/* Reduced list item spacing */}
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