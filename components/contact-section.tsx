"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Thank you for your inquiry! We will contact you soon.")
    setFormData({ name: "", phone: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="text-orange-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to invest in Gurugram real estate? Contact us today for site visits, detailed pricing, and exclusive
            pre-launch offers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone Number</h4>
                  <p className="text-gray-600">+91 78408 52787</p>
                  <p className="text-sm text-gray-500">Available 24/7 for inquiries</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">Sector 104, Gurugram, Haryana</p>
                  <p className="text-sm text-gray-500">Prime location with excellent connectivity</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Site Visit Hours</h4>
                  <p className="text-gray-600">Monday - Sunday: 9:00 AM - 7:00 PM</p>
                  <p className="text-sm text-gray-500">Book your site visit in advance</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Location Map</h4>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Sector 104, Gurugram</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-semibold flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Quick Response Guarantee:</strong> We respond to all inquiries within 2 hours during business
                  hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
