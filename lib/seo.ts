import { Metadata } from 'next'

// Base SEO configuration
export const siteConfig = {
  name: 'Indiabulls Heights',
  description: 'Premium 3BHK luxury apartments in Sector 104, Gurugram. Investment under ₹2CR with world-class amenities and excellent connectivity.',
  url: 'https://indiabulls-heights.netlify.app',
  ogImage: 'https://indiabulls-heights.netlify.app/images/hero1.png',
  phone: '+91-78408-52787',
  address: 'Sector 104, Gurugram, Haryana, India',
  keywords: [
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
}

// Generate page metadata
export function generatePageMetadata({
  title,
  description,
  path = '',
  images,
  keywords,
}: {
  title: string
  description: string
  path?: string
  images?: string[]
  keywords?: string[]
}): Metadata {
  const url = `${siteConfig.url}${path}`
  
  return {
    title,
    description,
    keywords: keywords ? [...siteConfig.keywords, ...keywords] : siteConfig.keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: images || [siteConfig.ogImage],
      type: 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images || [siteConfig.ogImage],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// Real Estate Agent Schema
export const realEstateAgentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Indiabulls Real Estate",
  "url": siteConfig.url,
  "telephone": siteConfig.phone,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sector 104",
    "addressLocality": "Gurugram",
    "addressRegion": "Haryana",
    "postalCode": "122001",
    "addressCountry": "IN"
  },
  "logo": {
    "@type": "ImageObject",
    "url": `${siteConfig.url}/placeholder-logo.png`
  },
  "sameAs": [
    "https://www.facebook.com/indiabulls",
    "https://twitter.com/indiabulls",
    "https://www.linkedin.com/company/indiabulls"
  ]
}

// Residence Schema for Property
export const residenceSchema = {
  "@context": "https://schema.org",
  "@type": "Residence",
  "name": "Indiabulls Heights",
  "description": siteConfig.description,
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
  "floorSize": {
    "@type": "QuantitativeValue",
    "value": "1200-1500",
    "unitText": "SqFt"
  },
  "numberOfRooms": "3",
  "accommodationCategory": "Luxury Apartment",
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Swimming Pool"
    },
    {
      "@type": "LocationFeatureSpecification", 
      "name": "Gymnasium"
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Clubhouse"
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Children's Play Area"
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "24/7 Security"
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Power Backup"
    }
  ],
  "offers": {
    "@type": "Offer",
    "price": "20000000",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "RealEstateAgent",
      "name": "Indiabulls Real Estate"
    }
  }
}

// Organization Schema for Local Business
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Indiabulls Real Estate",
  "url": siteConfig.url,
  "logo": `${siteConfig.url}/placeholder-logo.png`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": siteConfig.phone,
    "contactType": "sales",
    "areaServed": "IN",
    "availableLanguage": ["en", "hi"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sector 104",
    "addressLocality": "Gurugram",
    "addressRegion": "Haryana",
    "postalCode": "122001",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.facebook.com/indiabulls",
    "https://twitter.com/indiabulls",
    "https://www.linkedin.com/company/indiabulls"
  ]
}

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

// FAQ Schema Generator
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}
