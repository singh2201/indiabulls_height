'use client'

import { useEffect } from 'react'

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload hero images
      const heroImages = [
        '/images/hero1.png',
        '/images/hero2.png',
        '/images/hero3.png',
        '/images/hero4.png'
      ]

      heroImages.forEach((src, index) => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        if (index === 0) link.fetchPriority = 'high' // Priority for first image
        document.head.appendChild(link)
      })

      // Preload fonts
      const fontLinks = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
      ]

      fontLinks.forEach(href => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'style'
        link.href = href
        link.onload = () => {
          link.rel = 'stylesheet'
        }
        document.head.appendChild(link)
      })
    }

    // DNS prefetch for external resources
    const dnsPrefetch = () => {
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com',
        'https://connect.facebook.net',
        'https://static.hotjar.com'
      ]

      domains.forEach(domain => {
        const link = document.createElement('link')
        link.rel = 'dns-prefetch'
        link.href = domain
        document.head.appendChild(link)
      })
    }

    // Lazy load non-critical images
    const lazyLoadImages = () => {
      const images = document.querySelectorAll('img[data-src]')
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src!
            img.classList.remove('lazy')
            imageObserver.unobserve(img)
          }
        })
      })

      images.forEach(img => imageObserver.observe(img))
    }

    // Optimize scroll performance
    const optimizeScroll = () => {
      let ticking = false

      function updateScrollEffects() {
        // Batch DOM reads and writes
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          
          // Update header background
          const header = document.querySelector('header')
          if (header) {
            header.classList.toggle('scrolled', scrollY > 50)
          }
          
          ticking = false
        })
      }

      function onScroll() {
        if (!ticking) {
          requestAnimationFrame(updateScrollEffects)
          ticking = true
        }
      }

      window.addEventListener('scroll', onScroll, { passive: true })
      
      return () => window.removeEventListener('scroll', onScroll)
    }

    // Critical resource hints
    const addResourceHints = () => {
      // Preconnect to critical third-party origins
      const preconnectUrls = [
        'https://fonts.googleapis.com',
        'https://www.google-analytics.com'
      ]

      preconnectUrls.forEach(url => {
        const link = document.createElement('link')
        link.rel = 'preconnect'
        link.href = url
        link.crossOrigin = 'anonymous'
        document.head.appendChild(link)
      })
    }

    // Service Worker registration for caching
    const registerServiceWorker = () => {
      if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
        navigator.serviceWorker.register('/sw.js').catch(error => {
          console.log('Service Worker registration failed:', error)
        })
      }
    }

    // Web Vitals monitoring
    const monitorWebVitals = () => {
      // Monitor Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries()
            const lastEntry = entries[entries.length - 1]
            
            // Track LCP in analytics
            if (window.gtag && lastEntry) {
              window.gtag('event', 'LCP', {
                event_category: 'Web Vitals',
                value: Math.round(lastEntry.startTime),
                custom_parameter_1: 'performance'
              })
            }
          })
          
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
        } catch (e) {
          console.log('LCP observer not supported')
        }

        // Monitor First Input Delay (FID)
        try {
          const fidObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries()
            entries.forEach(entry => {
              const fidEntry = entry as any // Type assertion for FID entry
              if (window.gtag && fidEntry.processingStart) {
                window.gtag('event', 'FID', {
                  event_category: 'Web Vitals',
                  value: Math.round(fidEntry.processingStart - fidEntry.startTime),
                  custom_parameter_1: 'performance'
                })
              }
            })
          })
          
          fidObserver.observe({ entryTypes: ['first-input'] })
        } catch (e) {
          console.log('FID observer not supported')
        }
      }
    }

    // Initialize all optimizations
    preloadCriticalResources()
    dnsPrefetch()
    addResourceHints()
    lazyLoadImages()
    registerServiceWorker()
    monitorWebVitals()
    
    const cleanupScroll = optimizeScroll()

    // Cleanup function
    return () => {
      cleanupScroll()
    }
  }, [])

  return null // This component doesn't render anything
}

// Performance monitoring helper
export const reportWebVitals = (metric: any) => {
  // Send to analytics
  if (window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    })
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric)
  }
}
