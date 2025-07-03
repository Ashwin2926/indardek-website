// components/ContactUs.tsx
import React from 'react';

export function ContactUs() {
  return (
    <section className="bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Contact Us</h2>
        <address className="not-italic text-lg text-gray-700 leading-relaxed space-y-3">
          <p><strong>Indardek Limited</strong></p>
          <p>P.O. Box 24, Isiolo, Kenya</p>
          <p>Phone: <a href="tel:+254720976397" className="text-blue-600 hover:underline">0720 976 397</a></p>
          <p>Email: <a href="mailto:indark2025@gmail.com" className="text-blue-600 hover:underline">indark2025@gmail.com</a></p>
          <p>Office Location: Hurlinghum, Nairobi</p>
        </address>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        {/* Placeholder for a map or contact form */}
        <img
          src="https://placehold.co/600x400/E0F2F7/000000?text=Contact+Map+Placeholder"
          alt="Contact Map"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </section>
  );
}
