"use client"

import { useEffect, useRef } from "react"
import { Building, MapPin, Calendar, Award } from "lucide-react"

export default function ProjectOverview() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="overview" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-orange-600">Indiabulls Heights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A premium residential project offering luxury 3BHK apartments in the prime location of Sector 104, Gurugram.
            Experience affordable luxury homes with world-class amenities and excellent connectivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-on-scroll">
            <img
              src="/images/image2.png"
              alt="Indiabulls Heights Building"
              className="w-full h-96 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
          <div className="animate-on-scroll">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Luxury Living Redefined</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Indiabulls Heights represents the pinnacle of luxury living in Gurugram. Located in the prestigious Sector
              104, this project offers spacious 3BHK apartments designed for modern families who appreciate quality,
              comfort, and style.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With investment opportunities under 2cr, these affordable luxury homes provide excellent value for money
              while maintaining the highest standards of construction and amenities.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <span className="text-gray-700">Premium 3BHK apartments with modern layouts</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <span className="text-gray-700">Investment under 2cr with excellent ROI potential</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <span className="text-gray-700">World-class amenities and facilities</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <span className="text-gray-700">Prime location with excellent connectivity</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center animate-on-scroll bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="h-8 w-8 text-orange-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Premium Construction</h4>
            <p className="text-gray-600">High-quality construction with modern architecture and premium finishes</p>
          </div>

          <div className="text-center animate-on-scroll bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-orange-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Prime Location</h4>
            <p className="text-gray-600">
              Strategically located in Sector 104 with excellent connectivity to major hubs
            </p>
          </div>

          <div className="text-center animate-on-scroll bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-orange-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Pre-Launch Offers</h4>
            <p className="text-gray-600">Exclusive pre-launch real estate offers with attractive payment plans</p>
          </div>

          <div className="text-center animate-on-scroll bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-orange-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Trusted Brand</h4>
            <p className="text-gray-600">Indiabulls investment backed by years of excellence in real estate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
