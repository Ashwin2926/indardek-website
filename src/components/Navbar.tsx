// src/components/Navbar.tsx

"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Why Us", href: "/why-us" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3"> {/* Slightly reduced vertical padding */}
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="I"
            width={36} // Slightly smaller logo
            height={36}
            className="rounded-full"
          />
          <span className="font-semibold text-base text-gray-800 tracking-tight">Indardek Ltd</span> {/* Slightly smaller text, tighter tracking */}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6"> {/* Maintained gap, but ensured tighter overall feel */}
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-blue-700 transition-colors text-sm font-medium px-2 py-1" // Slightly smaller text, added subtle padding
            >
              {item.name}
            </Link>
          ))}
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-1.5 text-sm transition-colors" onClick={() => location.href = "/contact"}> {/* Rounded full, slightly smaller padding */}
            Get Quote
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />} {/* Adjusted icon size to match overall scale */}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 absolute top-[56px] w-full left-0 animate-slideDown"> {/* Adjusted top for smaller navbar height */}
          <div className="flex flex-col space-y-2 px-4 py-3"> {/* Slightly reduced vertical padding */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-blue-700 transition-colors py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button size="sm" className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 transition-colors" onClick={() => { setIsOpen(false); location.href = "/contact"; }}>
              Get Quote
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}