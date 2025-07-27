"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, MapPin, Home, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroImages = [
  "/images/hero4.png",
  "/images/hero1.png",
  "/images/hero2.png",
  "/images/hero3.png",
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Indiabulls Heights ${index + 1}`}
              className="w-full blur-sm h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-orange-400">Indiabulls Heights</span>
            <br />
            <span className="text-2xl md:text-4xl">Sector 104, Gurugram</span>
          </h1>

          <div className="flex items-center justify-center space-x-2 mb-6">
            <MapPin className="h-5 w-5 text-orange-400" />
            <span className="text-lg">Prime Location • Luxury Living • Investment Under 2Cr</span>
          </div>

          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Experience luxury 3BHK apartments with world-class amenities in the heart of Gurugram
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Home className="h-5 w-5 text-orange-400" />
              <span>3BHK Luxury Apartments</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Star className="h-5 w-5 text-orange-400" />
              <span>Premium Amenities</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Book Site Visit
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              Get Price Details
            </Button>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage ? "bg-orange-400" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
