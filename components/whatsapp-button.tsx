"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "917840852787"
    const message = encodeURIComponent(
      "Hi! I am interested in Indiabulls Heights, Sector 104, Gurugram. Please share more details.",
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-bounce"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  )
}
