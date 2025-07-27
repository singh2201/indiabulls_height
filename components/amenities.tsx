"use client"

import { useEffect, useRef } from "react"
import { Waves, Dumbbell, Car, Shield, Trees, Gamepad2, Baby, Utensils, Wifi, Zap, Wind, Camera } from "lucide-react"

const amenities = [
  { icon: Waves, title: "Swimming Pool", description: "Olympic-size swimming pool with separate kids pool" },
  { icon: Dumbbell, title: "Fitness Center", description: "Fully equipped gymnasium with modern equipment" },
  { icon: Car, title: "Parking", description: "Covered parking with ample space for residents" },
  { icon: Shield, title: "24/7 Security", description: "Round-the-clock security with CCTV surveillance" },
  { icon: Trees, title: "Landscaped Gardens", description: "Beautiful green spaces and landscaped gardens" },
  { icon: Gamepad2, title: "Indoor Games", description: "Recreation room with indoor games and activities" },
  { icon: Baby, title: "Kids Play Area", description: "Safe and fun play area designed for children" },
  { icon: Utensils, title: "Clubhouse", description: "Multi-purpose clubhouse for events and gatherings" },
  { icon: Wifi, title: "High-Speed Internet", description: "Fiber optic internet connectivity throughout" },
  { icon: Zap, title: "Power Backup", description: "100% power backup for uninterrupted living" },
  { icon: Wind, title: "Central AC", description: "Central air conditioning in all apartments" },
  { icon: Camera, title: "CCTV Surveillance", description: "Complete CCTV coverage for enhanced security" },
]

export default function Amenities() {
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
    <section 
      id="amenities" 
      ref={sectionRef} 
      className="py-20 bg-white"
      aria-labelledby="amenities-heading"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 animate-on-scroll">
          <h2 id="amenities-heading" className="text-4xl font-bold text-gray-900 mb-4">
            World-Class <span className="text-orange-600">Amenities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience luxury living with our comprehensive range of amenities designed to enhance your lifestyle and
            provide the ultimate comfort at Indiabulls Heights, Sector 104 Gurugram.
          </p>
        </header>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="animate-on-scroll text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-orange-100 group-hover:bg-orange-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <amenity.icon className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{amenity.title}</h4>
              <p className="text-gray-600 text-sm">{amenity.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 animate-on-scroll">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Luxury Amenities for Modern Living</h3>
              <p className="text-gray-600 mb-6">
                Our carefully curated amenities ensure that every aspect of your lifestyle is taken care of. From
                fitness and recreation to security and convenience, we've thought of everything to make your home a
                perfect sanctuary.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">24/7 concierge services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Maintenance and housekeeping services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Visitor management system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Smart home automation ready</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/image11.png"
                alt="Luxury Amenities"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
