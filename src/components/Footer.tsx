// src/components/Footer.tsx

import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">Indardek Limited</h3>
          <p className="text-sm">
            Dealers in general supplies, borehole drilling, road construction,
            and meat supply & export in Kenya.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/why-us" className="hover:text-white">Why Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm">Hurlingham, Nairobi, Kenya</p>
          <p className="text-sm">P.O. Box 24, Isiolo, Kenya</p>
          <p className="text-sm">Phone: 0720 976 397</p>
          <p className="text-sm">Email: indark2025@gmail.com</p>
        </div>
      </div>

      <div className="bg-gray-800 text-center text-sm py-4">
        © {new Date().getFullYear()} Indardek Limited. All rights reserved.
      </div>
    </footer>
  )
}
 