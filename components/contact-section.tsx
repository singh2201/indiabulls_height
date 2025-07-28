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

    // Track form submission
    if (typeof window !== 'undefined' && (window as any).trackFormSubmission) {
      (window as any).trackFormSubmission('contact_form')
    }

    // Track lead conversion
    if (typeof window !== 'undefined' && (window as any).trackLead) {
      (window as any).trackLead()
    }

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

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Contact Information */}
          <div className="animate-on-scroll">
            <h3 className="mx-12 text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>

            <div className="grid lg:grid-cols-3 mx-12  md:grid-cols-2 grid-cols-1 gap-12 justify-center">
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

          </div>

        </div>
      </div>
    </section>
  )
}
