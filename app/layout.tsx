import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Script from 'next/script'
import Analytics from '@/components/analytics'
import PerformanceOptimizer from '@/components/performance-optimizer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://indiabulls-heights.netlify.app'),
  title: {
    default: 'Indiabulls Heights - Luxury 3BHK Apartments in Sector 104, Gurugram',
    template: '%s | Indiabulls Heights'
  },
  description: 'Explore Indiabulls Heights – premium 3BHK apartments in Sector 104, Gurugram. Book your site visit today and secure pre-launch pricing under ₹2CR. World-class amenities and excellent connectivity.',
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
  ],
  authors: [{ name: 'Indiabulls Real Estate' }],
  creator: 'Indiabulls Real Estate',
  publisher: 'Indiabulls Real Estate',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Indiabulls Heights - Luxury 3BHK Apartments in Sector 104, Gurugram',
    description: 'Premium 3BHK luxury apartments in Sector 104, Gurugram. Investment under ₹2CR with world-class amenities and excellent connectivity.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://indiabulls-heights.netlify.app',
    siteName: 'Indiabulls Heights',
    images: [
      {
        url: '/images/hero1.png',
        width: 1200,
        height: 630,
        alt: 'Indiabulls Heights - Luxury Apartments in Gurugram',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indiabulls Heights - Luxury 3BHK Apartments in Sector 104, Gurugram',
    description: 'Premium 3BHK luxury apartments in Sector 104, Gurugram. Investment under ₹2CR with world-class amenities.',
    images: ['/images/hero1.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://indiabulls-heights.netlify.app',
  },
}

export const viewport: Viewport = {
  themeColor: '#f97316',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://indiabulls-heights.netlify.app/#organization",
        "name": "Indiabulls Real Estate",
        "url": "https://indiabulls-heights.netlify.app",
        "telephone": "+91-78408-52787",
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
          "url": "https://indiabulls-heights.netlify.app/placeholder-logo.png"
        },
        "sameAs": [
          "https://www.facebook.com/indiabulls",
          "https://twitter.com/indiabulls",
          "https://www.linkedin.com/company/indiabulls"
        ]
      },
      {
        "@type": "Residence",
        "@id": "https://indiabulls-heights.netlify.app/#property",
        "name": "Indiabulls Heights",
        "description": "Premium 3BHK luxury apartments in Sector 104, Gurugram with world-class amenities",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sector 104",
          "addressLocality": "Gurugram",
          "addressRegion": "Haryana",
          "postalCode": "122001",
          "addressCountry": "IN"
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
            "name": "Gym"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Clubhouse"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Children's Play Area"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://indiabulls-heights.netlify.app/#website",
        "url": "https://indiabulls-heights.netlify.app",
        "name": "Indiabulls Heights",
        "description": "Premium 3BHK luxury apartments in Sector 104, Gurugram",
        "publisher": {
          "@id": "https://indiabulls-heights.netlify.app/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://indiabulls-heights.netlify.app/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      }
    ]
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://indiabulls-heights.netlify.app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#f97316" />
        <meta name="msapplication-TileColor" content="#f97316" />
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content="Gurugram" />
        <meta name="geo.position" content="28.4595;77.0266" />
        <meta name="ICBM" content="28.4595, 77.0266" />
        
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Google Analytics - Replace with your GA4 measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="antialiased">
        <Analytics />
        <PerformanceOptimizer />
        {children}
      </body>
    </html>
  )
}
