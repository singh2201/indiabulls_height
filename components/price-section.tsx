"use client"

import { useEffect, useRef } from "react"
import { Check, Star, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PriceSection() {
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

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Investment <span className="text-orange-600">Under 2Cr</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover affordable luxury homes in Gurugram with excellent investment potential and attractive payment
            plans.
          </p>
        </div>

      <div className="max-w-7xl w-full px-4">
        <div className="grid lg:grid-cols-2 mx-auto gap-12 mb-16">
          {/* Basic Plan */}
          <div className="animate-on-scroll bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">3BHK Standard</h3>
              <div className="text-4xl font-bold text-orange-600 mb-2">₹2Cr</div>
              <p className="text-gray-600">Starting Price</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">1,600 sq ft carpet area</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Premium flooring</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Modular kitchen</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">1 covered parking</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">All basic amenities</span>
              </li>
            </ul>
            <Button onClick={scrollToContact} className="w-full bg-gray-900 hover:bg-gray-800 text-white">
              Get Details
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="animate-on-scroll bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-orange-200 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                <Star className="h-4 w-4" />
                <span>Most Popular</span>
              </div>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">3BHK Premium</h3>
              <div className="text-4xl font-bold text-orange-600 mb-2">₹3Cr</div>
              <p className="text-gray-600">Best Value</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">2,500 sq ft carpet area</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Premium imported flooring</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Designer modular kitchen</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">1 covered parking + storage</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">All premium amenities</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Smart home features</span>
              </li>
            </ul>
            <Button onClick={scrollToContact} className="w-full bg-orange-600 hover:bg-orange-700 text-white">
              Book Now
            </Button>
          </div>

        </div>
      </div>

        {/* Investment Benefits */}
        <div className="bg-white rounded-2xl p-8 shadow-lg animate-on-scroll">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <TrendingUp className="h-8 w-8 text-orange-600" />
                <span>Investment Benefits</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">High ROI Potential</h4>
                    <p className="text-gray-600">Expected appreciation of 12-15% annually in Gurugram real estate</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Flexible Payment Plans</h4>
                    <p className="text-gray-600">Easy EMI options and construction-linked payment plans available</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Pre-Launch Offers</h4>
                    <p className="text-gray-600">Exclusive pre-launch real estate offers with attractive discounts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Rental Income</h4>
                    <p className="text-gray-600">High rental demand in Sector 104 with excellent rental yields</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/image12.png"
                alt="Investment Benefits"
                className="w-full h-76 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-sm text-gray-500 mb-4">
            *Prices are subject to change. All prices are inclusive of basic amenities. Additional charges may apply for
            premium upgrades and parking.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
          >
            Get Detailed Price List
          </Button>
        </div>
      </div>
    </section>
  )
}
