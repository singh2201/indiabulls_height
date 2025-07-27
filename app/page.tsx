import type { Metadata } from "next"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProjectOverview from "@/components/project-overview"
import Amenities from "@/components/amenities"
import PriceSection from "@/components/price-section"
import Gallery from "@/components/gallery"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Indiabulls Heights Sector 104 Gurugram | 3BHK Luxury Apartments Under 2Cr",
  description:
    "Discover luxury 3BHK flats at Indiabulls Heights, Sector 104 Gurugram. Affordable luxury homes with world-class amenities. Investment opportunities under 2cr. Pre-launch offers available.",
  keywords:
    "indiabulls, indiabulls heights, indiabulls investment, investment under 2cr, 3BHK flats Gurugram, luxury apartments Gurugram, affordable luxury homes sector 104, invest in Gurugram real estate, pre-launch real estate offers Gurugram",
  openGraph: {
    title: "Indiabulls Heights Sector 104 Gurugram | Luxury 3BHK Apartments",
    description:
      "Premium 3BHK luxury apartments in Sector 104, Gurugram. Investment under 2cr with world-class amenities.",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProjectOverview />
      <Amenities />
      <PriceSection />
      <Gallery />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
