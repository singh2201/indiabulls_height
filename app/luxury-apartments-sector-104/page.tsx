import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProjectOverview from "@/components/project-overview"
import Amenities from "@/components/amenities"
import PriceSection from "@/components/price-section"
import Gallery from "@/components/gallery"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = generatePageMetadata({
  title: "Luxury 3BHK Apartments in Sector 104 Gurugram | Indiabulls Heights",
  description: "Discover premium luxury 3BHK apartments at Indiabulls Heights, Sector 104 Gurugram. Modern amenities, excellent connectivity, investment under ₹2CR. Book site visit now!",
  path: "/luxury-apartments-sector-104",
  keywords: [
    "luxury apartments Sector 104",
    "3BHK flats Sector 104 Gurugram",
    "premium housing Gurugram",
    "luxury flats for sale Gurugram",
    "residential projects Sector 104"
  ]
})

export default function LuxuryApartmentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main role="main">
        <section className="pt-20 pb-12 bg-gradient-to-r from-orange-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Luxury 3BHK Apartments in <span className="text-orange-600">Sector 104, Gurugram</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Experience premium living at Indiabulls Heights with world-class amenities, 
                modern architecture, and excellent connectivity to Delhi NCR, Cyber City, and major IT hubs.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <span className="bg-orange-100 px-3 py-1 rounded-full">Investment Under ₹2CR</span>
                <span className="bg-orange-100 px-3 py-1 rounded-full">Pre-Launch Offers</span>
                <span className="bg-orange-100 px-3 py-1 rounded-full">RERA Approved</span>
                <span className="bg-orange-100 px-3 py-1 rounded-full">Premium Location</span>
              </div>
            </div>
          </div>
        </section>
        <ProjectOverview />
        <Amenities />
        <PriceSection />
        <Gallery />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
