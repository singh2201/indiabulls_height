export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-orange-400 mb-4">
              Indiabulls Heights
            </div>
            <p className="text-gray-400 mb-4">
              Premium 3BHK luxury apartments in Sector 104, Gurugram. Your dream home awaits with world-class amenities
              and excellent connectivity to Delhi NCR, Cyber City, and major IT hubs.
            </p>
            <div className="text-orange-400 font-semibold">
              <a href="tel:+917840852787" aria-label="Call Indiabulls Heights sales office">
                +91 78408 52787
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav role="navigation" aria-label="Footer navigation">
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#overview" className="hover:text-orange-400 transition-colors">
                    Project Overview
                  </a>
                </li>
                <li>
                  <a href="#amenities" className="hover:text-orange-400 transition-colors">
                    Amenities
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-orange-400 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-orange-400 transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-orange-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Project Features</h3>
            <ul className="space-y-2 text-gray-400">
              <li>3BHK Luxury Apartments</li>
              <li>Investment Under ₹2CR</li>
              <li>Premium Amenities</li>
              <li>Sector 104 Location</li>
              <li>Pre-Launch Offers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <address className="text-gray-400 mb-4 not-italic">
              Sector 104, Gurugram
              <br />
              Haryana, India
            </address>
            <div className="text-sm text-gray-500">
              <p>Excellent connectivity to:</p>
              <ul className="mt-2 space-y-1">
                <li>• Delhi NCR</li>
                <li>• Cyber City</li>
                <li>• IGI Airport</li>
                <li>• Major IT Hubs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Indiabulls Heights. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                RERA Details
              </a>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            <p>RERA Registration: [Registration Number] | This project is applied for RERA Act 2016</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
