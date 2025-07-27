'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

// Google Analytics tracking function
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

interface AnalyticsProps {
  gaId?: string
  gtmId?: string
  fbPixelId?: string
}

export default function Analytics({ 
  gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  gtmId = process.env.NEXT_PUBLIC_GTM_ID,
  fbPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID 
}: AnalyticsProps) {
  const pathname = usePathname()

  // Track page views
  useEffect(() => {
    if (gaId && window.gtag) {
      window.gtag('config', gaId, {
        page_path: pathname,
      })
    }
  }, [pathname, gaId])

  // Track events
  const trackEvent = (action: string, parameters?: any) => {
    if (window.gtag) {
      window.gtag('event', action, parameters)
    }
  }

  // Expose tracking function globally
  useEffect(() => {
    ;(window as any).trackEvent = trackEvent
  }, [])

  return (
    <>
      {/* Google Analytics */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
              });
              
              // Enhanced ecommerce tracking for real estate
              gtag('config', '${gaId}', {
                custom_map: {'custom_parameter_1': 'property_type'}
              });
              
              // Track form submissions
              function trackFormSubmission(formName) {
                gtag('event', 'form_submit', {
                  event_category: 'engagement',
                  event_label: formName,
                  value: 1
                });
              }
              
              // Track phone calls
              function trackPhoneCall() {
                gtag('event', 'phone_call', {
                  event_category: 'contact',
                  event_label: 'header_phone',
                  value: 1
                });
              }
              
              // Track brochure downloads
              function trackBrochureDownload() {
                gtag('event', 'download', {
                  event_category: 'engagement',
                  event_label: 'brochure_download',
                  value: 1
                });
              }
              
              // Track site visit requests
              function trackSiteVisitRequest() {
                gtag('event', 'conversion', {
                  event_category: 'lead',
                  event_label: 'site_visit_request',
                  value: 1
                });
              }
              
              // Make functions available globally
              window.trackFormSubmission = trackFormSubmission;
              window.trackPhoneCall = trackPhoneCall;
              window.trackBrochureDownload = trackBrochureDownload;
              window.trackSiteVisitRequest = trackSiteVisitRequest;
            `}
          </Script>
        </>
      )}

      {/* Google Tag Manager */}
      {gtmId && (
        <>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}

      {/* Facebook Pixel */}
      {fbPixelId && (
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${fbPixelId}');
            fbq('track', 'PageView');
            
            // Custom events for real estate
            function trackLead() {
              fbq('track', 'Lead');
            }
            
            function trackCompleteRegistration() {
              fbq('track', 'CompleteRegistration');
            }
            
            window.trackLead = trackLead;
            window.trackCompleteRegistration = trackCompleteRegistration;
          `}
        </Script>
      )}

      {/* Hotjar (for user behavior analytics) */}
      <Script id="hotjar" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3857463,hjsv:6}; // Replace with your Hotjar ID
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
    </>
  )
}
