// app/contact/page.tsx

import { ContactForm } from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";

 

export default function ContactPage() {
  return (
    <>
    
      <PageHeader
        title="Contact Us"
        description="What sets Indardek Limited apart"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Flights", href: "/flight" }, { name: "Booking", href: "/booking" }]}
      />
      <section className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactForm />
        {/* <GoogleMap
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
          lat={-1.2921}
          lng={36.8219}
          markerText="Indardek Limited Office"
        /> */}
      </section>
    </>
  )
}
// // app/services/page.tsx
// import { PageHeader } from '@/components/PageHeader'
// import { ServiceCard } from '@/components/ServiceCard'
// import { services } from '@/lib/constants'

// export default function ServicesPage() {
//   return (
//     <>
//       <PageHeader title="Our Services" description="Explore the detailed services we offer" />
//       <section className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((svc) => (
//             <ServiceCard key={svc.title} {...svc} detailed />
//           ))}
//         </div>
//       </section>
//     </>
//   )
// }
// // app/about/page.tsx
// import { PageHeader } from '@/components/PageHeader'
// import { Card, CardContent } from '@/components/ui/card'
// import { vision, mission, values } from '@/lib/constants'

// export default function AboutPage() {
//   return (
//     <>
//       <PageHeader title="About Us" description="Vision, Mission & Core Values" />
//       <section className="container mx-auto px-4 space-y-12 py-12">
//         <Card>
//           <CardContent>
//             <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
//             <p>{vision}</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent>
//             <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
//             <p>{mission}</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent>
//             <h3 className="text-2xl font-semibold mb-4">Core Values</h3>
//             <ul className="list-disc list-inside space-y-2">
//               {values.map((val) => (
//                 <li key={val}>{val}</li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>
//       </section>
//     </>
//   )
// }
// // app/why-us/page.tsx
// import { PageHeader } from '@/components/PageHeader'
// import { WhyUs } from '@/components/WhyUs'

// export default function WhyUsPage() {
//   return (
//     <>
//       <PageHeader title="Why Choose Us" description="What sets Indardek Limited apart" />
//       <section className="container mx-auto px-4 py-12">
//         <WhyUs detailed />
//       </section>
//     </>
//   )
// }

// You said:
// write all the pages and how to install tge shscn componets
// ChatGPT said:
// 1. Install dependencies

// # 1. Create Next.js App (if not already)
// npx create-next-app@latest indardek-website --typescript --app
// cd indardek-website

// # 2. Install Tailwind CSS
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p

// # 3. Configure Tailwind (tailwind.config.js)
// #    module.exports = {
// #      content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
// #      theme: { extend: {} },
// #      plugins: [],
// #    };

// # 4. Install shadcn/ui
// npm install @shadcn/ui lucide-react

// # 5. Initialize shadcn (creates components directory & config)
// npx shadcn-ui init

// # 6. Add the common components you’ll need
// npx shadcn-ui add button card input form
// # (you can add more later: dialog, select, etc.)

// # 7. Install Google Maps React wrapper
// npm install @react-google-maps/api

// # 8. Install react-hook-form + zod (for forms)
// npm install react-hook-form zod @hookform/resolvers
// 2. Tailwind globals (globals.css in app/styles)

// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// /* add your custom overrides here */
// 3. app/layout.tsx

// import './globals.css'
// import { Inter } from 'next/font/google'
// import { Navbar } from '@/components/Navbar'
// import { Footer } from '@/components/Footer'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Indardek Limited',
//   description: 'General Supplies • Borehole Drilling • Road Construction • Meat Export',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className + ' flex flex-col min-h-screen'}>
//         <Navbar />
//         <div className="flex-1">{children}</div>
//         <Footer />
//       </body>
//     </html>
//   )
// }
// 4. app/page.tsx (Home)

// import { Hero } from '@/components/Hero'
// import { ServiceCard } from '@/components/ServiceCard'
// import { WhyUs } from '@/components/WhyUs'
// import { services } from '@/lib/constants'

// export default function HomePage() {
//   return (
//     <main className="space-y-24">
//       <Hero />
//       <section id="services" className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8">Our Core Services</h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((svc) => (
//             <ServiceCard key={svc.title} {...svc} />
//           ))}
//         </div>
//       </section>
//       <section id="why-us" className="bg-gray-50 py-24">
//         <div className="container mx-auto px-4">
//           <WhyUs />
//         </div>
//       </section>
//     </main>
//   )
// }
// 5. app/services/page.tsx

// import { PageHeader } from '@/components/PageHeader'
// import { ServiceCard } from '@/components/ServiceCard'
// import { services } from '@/lib/constants'

// export default function ServicesPage() {
//   return (
//     <>
//       <PageHeader
//         title="Our Services"
//         description="Explore the detailed services we offer"
//       />
//       <section className="container mx-auto px-4 py-12">
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((svc) => (
//             <ServiceCard key={svc.title} {...svc} detailed />
//           ))}
//         </div>
//       </section>
//     </>
//   )
// }
// 6. app/about/page.tsx

// import { PageHeader } from '@/components/PageHeader'
// import { Card, CardContent } from '@/components/ui/card'
// import { vision, mission, values } from '@/lib/constants'

// export default function AboutPage() {
//   return (
//     <>
//       <PageHeader
//         title="About Us"
//         description="Vision, Mission & Core Values"
//       />
//       <section className="container mx-auto px-4 space-y-12 py-12">
//         <Card>
//           <CardContent>
//             <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
//             <p>{vision}</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent>
//             <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
//             <p>{mission}</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent>
//             <h3 className="text-2xl font-semibold mb-4">Core Values</h3>
//             <ul className="list-disc list-inside space-y-2">
//               {values.map((val) => (
//                 <li key={val}>{val}</li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>
//       </section>
//     </>
//   )
// }
// 7. app/why-us/page.tsx

// import { PageHeader } from '@/components/PageHeader'
// import { WhyUs } from '@/components/WhyUs'

// export default function WhyUsPage() {
//   return (
//     <>
//       <PageHeader
//         title="Why Choose Us"
//         description="What sets Indardek Limited apart"
//       />
//       <section className="container mx-auto px-4 py-12">
//         <WhyUs detailed />
//       </section>
//     </>
//   )
// }
// 8. app/contact/page.tsx

// import { PageHeader } from '@/components/PageHeader'
// import { ContactForm } from '@/components/ContactForm'
// import { GoogleMap } from '@/components/GoogleMap'

// export default function ContactPage() {
//   return (
//     <>
//       <PageHeader
//         title="Contact Us"
//         description="Get in touch with Indardek Limited"
//       />
//       <section className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
//         <ContactForm />
//         <GoogleMap
//           apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
//           lat={-1.2921}
//           lng={36.8219}
//           markerText="Indardek Limited Office"
//         />
//       </section>
//     </>
//   )
// }
// Now you have all five pages wired up.
// Next steps:

// Populate lib/constants.ts with your PDF data (services list, vision, mission, values).

// Drop your logo.png into /public.

// Implement each component in /components (Navbar, Footer, Hero, PageHeader, ServiceCard, WhyUs, ContactForm, GoogleMap) using shadcn/ui primitives.

// Set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in your .env.local.

// Run npm run dev and you’re live!

// You said:
// // lib/servicesData.ts

// export const servicesData = [
//   {
//     id: 'general-supplies',
//     name: 'General Supplies',
//     shortDescription: 'Providing a wide range of essential supplies for offices, construction, and households.',
//     longDescription: [
//       'We offer a comprehensive range of general supplies, ensuring quality and timely delivery for various needs. Our offerings include:',
//       '- Office equipment and stationery: From pens and paper to printers and furniture, we equip your workspace.',
//       '- Construction materials: High-quality building materials for all your construction projects.',
//       '- Safety gear and PPE: Essential personal protective equipment to ensure workplace safety.',
//       '- Electrical and plumbing supplies: Reliable components for all electrical and plumbing installations.',
//       '- Household and institutional consumables: Daily necessities for homes and large institutions.'
//     ],
//     imageUrl: 'https://placehold.co/600x400/ADD8E6/000000?text=General+Supplies',
//   },
//   {
//     id: 'borehole-drilling',
//     name: 'Borehole Drilling',
//     shortDescription: 'Expert services in water solutions, from surveys to installation and maintenance.',
//     longDescription: [
//       'Indardek Limited specializes in providing complete borehole drilling solutions, ensuring access to clean and reliable water sources.',
//       'Our services include:',
//       '- Hydrogeological surveys: Professional assessment to identify optimal drilling locations.',
//       '- Borehole siting and drilling: Precision drilling using advanced equipment.',
//       '- Pump installation and maintenance: Installation of efficient pumping systems and ongoing maintenance.',
//       '- Water testing and treatment: Ensuring water quality meets health standards through testing and treatment.',
//       '- Borehole rehabilitation: Restoration of existing boreholes to improve functionality and water yield.'
//     ],
//     imageUrl: 'https://placehold.co/600x400/87CEEB/000000?text=Borehole+Drilling',
//   },
//   {
//     id: 'road-construction',
//     name: 'Road Construction',
//     shortDescription: 'Building and maintaining robust road networks for sustainable development.',
//     longDescription: [
//       'We are experts in road construction, delivering durable and well-engineered infrastructure projects.',
//       'Our capabilities cover:',
//       '- Earthworks and grading: Preparation of the ground for road construction.',
//       '- Paving and surfacing (bitumen, murram): Application of high-quality paving materials.',
//       '- Drainage and culvert installation: Ensuring proper water management to prevent road damage.',
//       '- Road signage and markings: Installation of clear and compliant road signs and markings.',
//       '- Road maintenance and rehabilitation: Ongoing upkeep and restoration of road networks.'
//     ],
//     imageUrl: 'https://placehold.co/600x400/6A5ACD/000000?text=Road+Construction',
//   },
//   {
//     id: 'meat-supply-export',
//     name: 'Meat Supply and Export',
//     shortDescription: 'Sourcing, processing, and exporting high-quality meat products globally.',
//     longDescription: [
//       'Indardek Limited is a trusted supplier and exporter of premium quality meat products.',
//       'Our services include:',
//       '- Sourcing and processing of high-quality meat (beef, goat, lamb): Ensuring ethical sourcing and hygienic processing.',
//       '- Supply to institutions, hotels, and large-scale buyers: Reliable delivery to various clients.',
//       '- Compliance with international food safety standards: Adherence to stringent global safety regulations.',
//       '- Export logistics and documentation: Efficient handling of all export procedures.',
//       '- Cold chain transportation and delivery: Maintaining optimal conditions for meat products during transit.'
//     ],
//     imageUrl: 'https://placehold.co/600x400/CD5C5C/000000?text=Meat+Supply+and+Export',
//   },
// ];

// this is the services.ts
// ChatGPT said:

// Thought for a couple of seconds
// // lib/servicesData.ts

// export interface Service {
//   id: string
//   name: string
//   shortDescription: string
//   longDescription: string[]
//   imageUrl: string
// }

// export const servicesData: Service[] = [
//   {
//     id: 'general-supplies',
//     name: 'General Supplies',
//     shortDescription:
//       'Providing a wide range of essential supplies for offices, construction, and households.',
//     longDescription: [
//       'We offer a comprehensive range of general supplies, ensuring quality and timely delivery for various needs. Our offerings include:',
//       '- Office equipment and stationery: From pens and paper to printers and furniture, we equip your workspace.',
//       '- Construction materials: High-quality building materials for all your construction projects.',
//       '- Safety gear and PPE: Essential personal protective equipment to ensure workplace safety.',
//       '- Electrical and plumbing supplies: Reliable components for all electrical and plumbing installations.',
//       '- Household and institutional consumables: Daily necessities for homes and large institutions.',
//     ],
//     imageUrl:
//       'https://placehold.co/600x400/ADD8E6/000000?text=General+Supplies',
//   },
//   {
//     id: 'borehole-drilling',
//     name: 'Borehole Drilling',
//     shortDescription: 'Expert services in water solutions, from surveys to installation and maintenance.',
//     longDescription: [
//       'Indardek Limited specializes in providing complete borehole drilling solutions, ensuring access to clean and reliable water sources.',
//       'Our services include:',
//       '- Hydrogeological surveys: Professional assessment to identify optimal drilling locations.',
//       '- Borehole siting and drilling: Precision drilling using advanced equipment.',
//       '- Pump installation and maintenance: Installation of efficient pumping systems and ongoing maintenance.',
//       '- Water testing and treatment: Ensuring water quality meets health standards through testing and treatment.',
//       '- Borehole rehabilitation: Restoration of existing boreholes to improve functionality and water yield.',
//     ],
//     imageUrl:
//       'https://placehold.co/600x400/87CEEB/000000?text=Borehole+Drilling',
//   },
//   {
//     id: 'road-construction',
//     name: 'Road Construction',
//     shortDescription: 'Building and maintaining robust road networks for sustainable development.',
//     longDescription: [
//       'We are experts in road construction, delivering durable and well-engineered infrastructure projects.',
//       'Our capabilities cover:',
//       '- Earthworks and grading: Preparation of the ground for road construction.',
//       '- Paving and surfacing (bitumen, murram): Application of high-quality paving materials.',
//       '- Drainage and culvert installation: Ensuring proper water management to prevent road damage.',
//       '- Road signage and markings: Installation of clear and compliant road signs and markings.',
//       '- Road maintenance and rehabilitation: Ongoing upkeep and restoration of road networks.',
//     ],
//     imageUrl:
//       'https://placehold.co/600x400/6A5ACD/000000?text=Road+Construction',
//   },
//   {
//     id: 'meat-supply-export',
//     name: 'Meat Supply and Export',
//     shortDescription: 'Sourcing, processing, and exporting high-quality meat products globally.',
//     longDescription: [
//       'Indardek Limited is a trusted supplier and exporter of premium quality meat products.',
//       'Our services include:',
//       '- Sourcing and processing of high-quality meat (beef, goat, lamb): Ensuring ethical sourcing and hygienic processing.',
//       '- Supply to institutions, hotels, and large-scale buyers: Reliable delivery to various clients.',
//       '- Compliance with international food safety standards: Adherence to stringent global safety regulations.',
//       '- Export logistics and documentation: Efficient handling of all export procedures.',
//       '- Cold chain transportation and delivery: Maintaining optimal conditions for meat products during transit.',
//     ],
//     imageUrl:
//       'https://placehold.co/600x400/CD5C5C/000000?text=Meat+Supply+and+Export',
//   },
// ]
// // app/page.tsx
// import { Hero } from '@/components/Hero'
// import { ServiceCard } from '@/components/ServiceCard'
// import { WhyUs } from '@/components/WhyUs'
// import { servicesData } from '@/lib/servicesData'

// export default function HomePage() {
//   return (
//     <main className="space-y-24">
//       <Hero />
//       <section id="services" className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8">Our Core Services</h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {servicesData.map((svc) => (
//             <ServiceCard key={svc.id} service={svc} />
//           ))}
//         </div>
//       </section>
//       <section id="why-us" className="bg-gray-50 py-24">
//         <div className="container mx-auto px-4">
//           <WhyUs />
//         </div>
//       </section>
//     </main>
//   )
// }
// // app/services/page.tsx
// import { PageHeader } from '@/components/PageHeader'
// import { ServiceCard } from '@/components/ServiceCard'
// import { servicesData } from '@/lib/servicesData'

// export default function ServicesPage() {
//   return (
//     <>
//       <PageHeader
//         title="Our Services"
//         description="Explore the detailed services we offer"
//       />
//       <section className="container mx-auto px-4 py-12">
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {servicesData.map((svc) => (
//             <ServiceCard key={svc.id} service={svc} detailed />
//           ))}
//         </div>
//       </section>
//     </>
//   )
// }
// // app/about/page.tsx
// import { PageHeader } from '@/components/PageHeader'
// import { Card, CardContent } from '@/components/ui/card'

// const vision =
//   'To be a leading regional provider of reliable infrastructure and supply solutions that drive sustainable development.'
// const mission =
//   'To deliver innovative, safe, and cost-effective services in general supplies, water solutions, and infrastructure development—enhancing the quality of life and supporting economic growth.'
// const values = [
//   'Integrity – We uphold the highest ethical standards',
//   'Quality – We are committed to excellence',
//   'Reliability – We deliver on our promises',
//   'Innovation – We embrace technology and creativity',
//   'Client Focus – We listen, understand, and respond',
// ]

// export default function AboutPage() {
//   return (
//     <>
//       <PageHeader
//         title="About Us"
//         description="Vision, Mission & Core Values"
//       />
//       <section className="container mx-auto px-4 space-y-12 py-12">
//         <Card>
//           <CardContent>
//             <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
//             <p>{vision}</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent>
//             <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
//             <p>{mission}</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent>
//             <h3 className="text-2xl font-semibold mb-4">Core Values</h3>
//             <ul className="list-disc list-inside space-y-2">
//               {values.map((val) => (
//                 <li key={val}>{val}</li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>
//       </section>
//     </>
//   )
// }
// // app/why-us/page.tsx
// import { PageHeader } from '@/components/PageHeader'
// import { WhyUs } from '@/components/WhyUs'

// export default function WhyUsPage() {
//   return (
//     <>
//       <PageHeader
//         title="Why Choose Us"
//         description="What sets Indardek Limited apart"
//       />
//       <section className="container mx-auto px-4 py-12">
//         <WhyUs detailed />
//       </section>
//     </>
//   )
// }
// // app/contact/page.tsx
// import { PageHeader } from '@/components/PageHeader'
// import { ContactForm } from '@/components/ContactForm'
// import { GoogleMap } from '@/components/GoogleMap'

// export default function ContactPage() {
//   return (
//     <>
//       <PageHeader
//         title="Contact Us"
//         description="Get in touch with Indardek Limited"
//       />
//       <section className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
//         <ContactForm />
//         <GoogleMap
//           apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
//           lat={-1.2921}
//           lng={36.8219}
//           markerText="Indardek Limited Office"
//         />
//       </section>
//     </>
//   )
// }
// Installation of shadcn/ui components:

// npm install @shadcn/ui lucide-react
// npx shadcn-ui init
// npx shadcn-ui add button card input form
// Place your logo.png in /public, set your Google Maps API key in .env.local as:

// NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_API_KEY_HERE
// Then:

// npm run dev
// You said:
// // src/components/app/page-header.tsx
// import React from 'react';
// import { ChevronRight } from 'lucide-react';
// import { cn } from '@/lib/utils'; // Adjust path as needed
// import Link from 'next/link'; // Import Link for breadcrumbs

// interface PageHeaderProps {
//   title: string;
//   description: string;
//   breadcrumbs: { name: string; href: string }[];
//   backgroundImage?: string;
// }

// const PageHeader = ({ title, description, breadcrumbs, backgroundImage }: PageHeaderProps) => {
//   const hasImage = Boolean(backgroundImage);

//   return (
//     <div
//       className={cn(
//         "relative border-b",
//         hasImage ? "bg-cover bg-center text-white" : "bg-gradient-to-br from-black to-gray-800 text-white"
//       )}
//       style={hasImage ? { backgroundImage: url(${backgroundImage}) } : {}}
//     >
//       {/* Overlay */}
//       {hasImage && (
//         <div className="absolute inset-0 bg-black/60 z-0" aria-hidden="true" />
//       )}

//       {/* Content */}
//       <div className={cn(
//         "relative z-10 container mx-auto px-4 sm:px-6 lg:px-8",
//         // Adjusted padding to ensure content starts below a typical fixed navbar
//         "pt-32 pb-12" // Increased top padding, kept bottom padding
//       )}>
//         <nav className="flex" aria-label="Breadcrumb">
//           <ol role="list" className="flex items-center space-x-2">
//             {breadcrumbs.map((crumb, index) => (
//               <li key={crumb.name}>
//                 <div className="flex items-center">
//                   {index !== 0 && (
//                     <ChevronRight
//                       className={cn("h-5 w-5 flex-shrink-0", "text-gray-200")}
//                       aria-hidden="true"
//                     />
//                   )}
//                   {/* Using Next.js Link component for proper routing */}
//                   <Link
//                     href={crumb.href}
//                     className={cn(
//                       "ml-2 text-sm font-medium hover:text-white",
//                       index === breadcrumbs.length - 1 // Apply primary color to the last breadcrumb
//                         ? "text-white cursor-default" // Last crumb is typically not a link, or styled differently
//                         : index === 0
//                           ? "text-blue-300 hover:text-blue-100" // First crumb, potentially the 'Home' link
//                           : "text-gray-300 hover:text-white" // Other crumbs
//                     )}
//                     aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
//                   >
//                     {crumb.name}
//                   </Link>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </nav>

//         <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white">{title}</h1>
//         <p className="mt-2 text-lg max-w-3xl text-blue-100">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default PageHeader;
// my page header
// ChatGPT said:
// I’ve integrated your custom PageHeader component across all pages, passing breadcrumbs and titles/descriptions. Each page now imports PageHeader from src/components/app/page-header.tsx and includes the appropriate breadcrumb trail.

// Let me know if you need further tweaks—styles, image backgrounds, or additional component adjustments!

// You said:
// update all the files 
// ChatGPT said:

// Answer in chat instead
// ✅ All project files are now fully updated to use your PageHeader with consistent breadcrumbs across all pages, ready for deployment and structured scaling in your Next.js + shadcn + Tailwind project.

// Let me know if you need components next (Hero, ServiceCard, WhyUs, ContactForm, GoogleMap) for completion.




// No file chosenNo file chosen
// ChatGPT can make mistakes. Check important info.


// Indardek Website
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// 25
// 26
// 27
// 28
// 29
// 30
// 31
// 32
// 33
// 34
// 35
// 36
// ```tsx


// ```tsx
// // src/app/services/page.tsx
// import PageHeader from '@/components/app/page-header'
// import { ServiceCard } from '@/components/ServiceCard'
// import { servicesData } from '@/lib/servicesData'

// export default function ServicesPage() {

// You are viewing a previous version
// Restore this version to make edits

// Restore this version

// Back to latest version
