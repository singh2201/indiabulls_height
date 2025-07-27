"use client"

import { useState, useEffect } from "react"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-orange-600">Indiabulls</div>
            <div className="text-sm text-gray-600 hidden sm:block">Heights</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("overview")}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection("amenities")}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Amenities
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-orange-600">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">+91 78408 52787</span>
            </div>
            <Button onClick={() => scrollToSection("contact")} className="bg-orange-600 hover:bg-orange-700 text-white">
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="py-4 space-y-2">
              <button
                onClick={() => scrollToSection("overview")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection("amenities")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Amenities
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Contact
              </button>
              <div className="px-4 py-2 border-t">
                <div className="flex items-center space-x-2 text-orange-600 mb-2">
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">+91 78408 52787</span>
                </div>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                >
                  Enquire Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
