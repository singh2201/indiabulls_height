# Indiabulls Heights - SEO Optimized Real Estate Website

A fully SEO-optimized Next.js website for Indiabulls Heights luxury apartments in Sector 104, Gurugram. This project implements comprehensive SEO best practices to achieve top rankings for real estate keywords.

## 🎯 SEO Optimization Features

### Meta Tags & Structured Data
- ✅ Comprehensive meta tags with title, description, keywords
- ✅ Open Graph and Twitter Card meta tags
- ✅ JSON-LD structured data for Real Estate Agent, Residence, Organization
- ✅ Local Business schema with NAP (Name, Address, Phone)
- ✅ Product schema for property listings
- ✅ Breadcrumb and FAQ schema support

### Technical SEO
- ✅ Semantic HTML with proper heading hierarchy (h1, h2, h3)
- ✅ Optimized URL structure with keyword-rich paths
- ✅ Canonical URLs to prevent duplicate content
- ✅ XML sitemap generation with next-sitemap
- ✅ SEO-friendly robots.txt
- ✅ Performance optimization for Core Web Vitals

### Content Optimization
- ✅ Keyword optimization for "Indiabulls Heights" and related terms
- ✅ Location-specific keywords (Sector 104, Gurugram)
- ✅ Descriptive alt tags for all images
- ✅ Internal linking strategy
- ✅ Content structured for featured snippets

### Performance & UX
- ✅ Next.js Image optimization with lazy loading
- ✅ Font optimization and preloading
- ✅ Critical resource hints (preload, prefetch, preconnect)
- ✅ Service Worker ready for caching
- ✅ Web Vitals monitoring

### Analytics & Tracking
- ✅ Google Analytics 4 integration
- ✅ Google Tag Manager support
- ✅ Facebook Pixel integration
- ✅ Event tracking for conversions
- ✅ Lead tracking and form submissions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/indiabulls-heights-landing.git

# Navigate to project directory
cd indiabulls-heights-landing

# Install dependencies
pnpm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your actual values

# Run development server
pnpm dev
```

### Environment Variables
Update `.env.local` with your actual values:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=XXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
```

## 📊 SEO Implementation Details

### Target Keywords
- **Primary**: Indiabulls Heights
- **Secondary**: luxury flats Gurugram, 3BHK apartments Sector 104
- **Long-tail**: investment under 2CR, pre-launch offers Gurugram

### Page Structure
```
/ (Homepage)
├── /luxury-apartments-sector-104
├── /amenities
├── /pricing  
├── /gallery
└── /contact
```

### Schema Markup
- **Organization**: Company information and contact details
- **Real Estate Agent**: Business entity schema
- **Residence**: Property details and amenities
- **Local Business**: NAP and location data
- **Product**: Property listings with pricing

### Performance Metrics Targets
- **LCP**: < 2.5s (First Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)
- **Performance Score**: 90+

## 🔧 SEO Configuration Files

### Key Files
- `app/layout.tsx` - Global meta tags and structured data
- `lib/seo.ts` - SEO utility functions and schemas
- `next-sitemap.config.js` - Sitemap configuration
- `components/analytics.tsx` - Analytics implementation
- `public/robots.txt` - Search engine directives

### Sitemap Generation
```bash
# Generate sitemap after build
pnpm postbuild

# Manual sitemap generation
pnpm sitemap
```

## 📈 Analytics Setup

### Google Analytics Events
- Form submissions (contact, inquiry)
- Phone call clicks
- WhatsApp button clicks
- Brochure downloads
- Site visit requests

### Conversion Tracking
- Lead generation forms
- Phone number clicks
- WhatsApp inquiries
- Contact form submissions

## 🏗️ Build & Deployment

### Production Build
```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

### Deployment Checklist
- [ ] Update environment variables
- [ ] Verify Google Analytics tracking
- [ ] Test sitemap generation
- [ ] Validate structured data
- [ ] Check Core Web Vitals
- [ ] Submit sitemap to Google Search Console

## 🔍 SEO Monitoring

### Tools & Verification
- Google Search Console
- Google PageSpeed Insights
- Structured Data Testing Tool
- Facebook Sharing Debugger
- Twitter Card Validator

### Key Metrics to Monitor
- Organic search rankings
- Click-through rates (CTR)
- Core Web Vitals scores
- Conversion rates
- Bounce rate and session duration

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly navigation
- Optimized images for mobile
- Fast loading on mobile networks
- Mobile-first indexing ready

## 🛡️ Security & Privacy

- HTTPS enforcement
- Content Security Policy headers
- Privacy policy compliance
- GDPR cookie consent (if required)
- Secure analytics implementation

## 📞 Contact & Support

For questions about this SEO implementation:
- **Email**: info@indiabulls-heights.com
- **Phone**: +91-78408-52787
- **Address**: Sector 104, Gurugram, Haryana, India

## 📝 License

This project is proprietary and confidential.

---

**SEO Optimization Status**: ✅ Complete
**Target Keywords**: Indiabulls Heights, luxury flats Gurugram
**Performance Score**: 90+ (Desktop/Mobile)
**Core Web Vitals**: Optimized
