import type { Metadata } from "next"
import Script from "next/script"
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
  title: "Indiabulls Heights - Luxury 3BHK Apartments in Sector 104, Gurugram | Investment Under ₹2CR",
  description:
    "Discover premium 3BHK luxury apartments at Indiabulls Heights, Sector 104 Gurugram. Affordable luxury homes with world-class amenities. Investment opportunities under ₹2CR. Pre-launch offers available. Book your site visit today!",
  keywords: [
    "Indiabulls Heights",
    "luxury flats Gurugram", 
    "Indiabulls real estate",
    "investment under 2CR",
    "3BHK flats Gurugram",
    "luxury apartments Gurugram",
    "affordable luxury homes sector 104",
    "invest in Gurugram real estate",
    "pre-launch real estate offers Gurugram",
    "Sector 104 apartments",
    "premium housing Gurugram",
    "real estate investment Haryana"
  ],
  openGraph: {
    title: "Indiabulls Heights - Luxury 3BHK Apartments in Sector 104, Gurugram",
    description:
      "Premium 3BHK luxury apartments in Sector 104, Gurugram. Investment under ₹2CR with world-class amenities and excellent connectivity to Delhi NCR.",
    type: "website",
    url: "https://indiabulls-heights.netlify.app",
    images: [
      {
        url: "/images/hero1.png",
        width: 1200,
        height: 630,
        alt: "Indiabulls Heights luxury apartments exterior view in Sector 104 Gurugram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indiabulls Heights - Luxury 3BHK Apartments in Sector 104, Gurugram",
    description:
      "Premium 3BHK luxury apartments in Sector 104, Gurugram. Investment under ₹2CR with world-class amenities.",
    images: ["/images/hero1.png"],
  },
  alternates: {
    canonical: "https://indiabulls-heights.netlify.app",
  },
}

export default function Home() {
  const propertyListingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Indiabulls Heights - 3BHK Luxury Apartments",
    "description": "Premium 3BHK luxury apartments in Sector 104, Gurugram with world-class amenities and excellent connectivity",
    "brand": {
      "@type": "Brand",
      "name": "Indiabulls Real Estate"
    },
    "offers": {
      "@type": "Offer",
      "price": "20000000",
      "priceCurrency": "INR",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "20000000",
        "priceCurrency": "INR",
        "valueAddedTaxIncluded": false
      },
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-01-01",
      "seller": {
        "@type": "RealEstateAgent",
        "name": "Indiabulls Real Estate",
        "telephone": "+91-78408-52787"
      }
    },
    "category": "Real Estate",
    "image": [
      "https://indiabulls-heights.netlify.app/images/hero1.png",
      "https://indiabulls-heights.netlify.app/images/hero2.png",
      "https://indiabulls-heights.netlify.app/images/hero3.png"
    ]
  }

  return (
    <>
      <Script
        id="property-listing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(propertyListingSchema),
        }}
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        <main role="main">
          <HeroSection />
          <ProjectOverview />
          <Amenities />
          <PriceSection />
          <Gallery />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}
