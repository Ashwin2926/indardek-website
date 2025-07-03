import PageHeader from "@/components/PageHeader";

export default function WhyUsPage() {
  const whyChooseUsReasons = [
    'Experienced technical and management teams',
    'Compliance with environmental and safety regulations',
    'Competitive pricing and timely delivery',
    'Custom solutions tailored to client needs',
    'Strong partnerships with certified vendors and consultants',
  ];

  return (
    <>
       <PageHeader
        title="Why Choose Us"
        description="Discover what sets Indardek Limited apart as your preferred partner."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Why Choose Us", href: "/why-us" }
        ]}
        // You can add a background image specific to this page if desired
        // backgroundImage="https://placehold.co/1920x400/4A6A8A/FFFFFF?text=Why+Choose+Us"
      />
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-4xl font-bold text-center text-primary-800 mb-8">Our Distinct Advantages</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-4 px-4 md:px-8">
            {whyChooseUsReasons.map((reason, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p>{reason}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg text-gray-700 text-center">
            At Indardek Limited, we are dedicated to delivering excellence, reliability, and innovative solutions tailored to your specific needs.
          </p>
        </div>
      </section>
    </>
  )
}
