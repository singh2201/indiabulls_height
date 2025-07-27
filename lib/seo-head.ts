import { Metadata } from 'next'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  structuredData?: object
}

export function generateSEOHead({
  title = "Indiabulls Heights - Luxury 3BHK Apartments in Sector 104, Gurugram",
  description = "Premium 3BHK luxury apartments in Sector 104, Gurugram. Investment under ₹2CR with world-class amenities and excellent connectivity.",
  keywords = [],
  canonical = "https://indiabulls-heights.netlify.app",
  ogImage = "/images/hero1.png",
  structuredData
}: SEOHeadProps = {}) {
  
  const defaultKeywords = [
    'Indiabulls Heights',
    'luxury flats Gurugram',
    'Indiabulls real estate',
    'investment under 2CR',
    'pre-launch offers Gurugram',
    '3BHK flats Gurugram',
    'Indiabulls investment',
    'Sector 104 Gurugram',
    'luxury apartments Gurugram',
    'real estate Gurugram',
    'premium housing Gurugram'
  ]

  const allKeywords = [...defaultKeywords, ...keywords]

  return {
    title,
    description,
    keywords: allKeywords,
    authors: [{ name: 'Indiabulls Real Estate' }],
    creator: 'Indiabulls Real Estate',
    publisher: 'Indiabulls Real Estate',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_IN',
      url: canonical,
      siteName: 'Indiabulls Heights',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@indiabulls',
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical,
    },
    other: {
      'geo.region': 'IN-HR',
      'geo.placename': 'Gurugram',
      'geo.position': '28.4595;77.0266',
      'ICBM': '28.4595, 77.0266',
      'DC.title': title,
      'DC.description': description,
      'DC.subject': 'Real Estate, Luxury Apartments, Gurugram',
      'DC.coverage': 'Sector 104, Gurugram, Haryana, India',
      'rating': 'general',
      'distribution': 'global',
      'expires': 'never',
    }
  }
}

// Local Business Schema for NAP (Name, Address, Phone)
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Indiabulls Heights",
  "description": "Premium 3BHK luxury apartments in Sector 104, Gurugram with world-class amenities",
  "url": "https://indiabulls-heights.netlify.app",
  "telephone": "+91-78408-52787",
  "email": "info@indiabulls-heights.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sector 104",
    "addressLocality": "Gurugram",
    "addressRegion": "Haryana", 
    "postalCode": "122001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.4595",
    "longitude": "77.0266"
  },
  "openingHours": [
    "Mo-Su 09:00-20:00"
  ],
  "image": [
    "https://indiabulls-heights.netlify.app/images/hero1.png",
    "https://indiabulls-heights.netlify.app/images/hero2.png"
  ],
  "priceRange": "₹15,00,000 - ₹2,00,00,000",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Rajesh Kumar"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Excellent project with amazing amenities and great location connectivity."
    }
  ],
  "sameAs": [
    "https://www.facebook.com/indiabulls",
    "https://twitter.com/indiabulls",
    "https://www.linkedin.com/company/indiabulls"
  ]
}
