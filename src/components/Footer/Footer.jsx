import Link from 'next/link'
import Logo from '../Logo/Logo'
import { FiPhone, FiMail, FiMapPin, FiClock, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiArrowRight } from 'react-icons/fi'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Meet Our Doctors', href: '/doctors' },
  { name: 'Contact Us', href: '/contact' },
]

const services = [
  { name: 'Preventive Care', href: '/services#preventive' },
  { name: 'Family Medicine', href: '/services#family' },
  { name: 'Chronic Disease Management', href: '/services#chronic' },
  { name: 'Pediatric Care', href: '/services#pediatric' },
  { name: "Women's Health", href: '/services#womens' },
]

export default function Footer() {
  return (
    <footer className="bg-text-dark text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-2">Stay Updated with Health Tips</h3>
              <p className="opacity-90">Subscribe to our newsletter for wellness advice and clinic updates.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 flex-1 max-w-md w-full" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 rounded-xl text-text-dark outline-none focus:ring-2 focus:ring-white/30"
                required
              />
              <button type="submit" className="btn btn-secondary whitespace-nowrap">
                Subscribe
                <FiArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 md:py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* About Column */}
            <div className="md:col-span-2 lg:col-span-1 text-center md:text-left lg:pr-8">
              <Logo variant="white" />
              <p className="mt-6 mb-6 opacity-80 leading-relaxed">
                LifeSpring Health Clinic is dedicated to providing compassionate, 
                patient-centered healthcare for your entire family. We focus on 
                preventive care and long-term wellness.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg text-white transition-all hover:bg-primary hover:-translate-y-1">
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-6 pb-3 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-10 after:h-0.5 after:bg-primary">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="flex items-center gap-2 opacity-80 transition-all hover:opacity-100 hover:text-primary-light hover:translate-x-1 justify-center md:justify-start group">
                      <FiArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-6 pb-3 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-10 after:h-0.5 after:bg-primary">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link href={service.href} className="flex items-center gap-2 opacity-80 transition-all hover:opacity-100 hover:text-primary-light hover:translate-x-1 justify-center md:justify-start group">
                      <FiArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-6 pb-3 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-10 after:h-0.5 after:bg-primary">
                Contact Us
              </h4>
              <ul className="space-y-5">
                <li className="flex gap-4 opacity-80 justify-center md:justify-start">
                  <FiMapPin className="flex-shrink-0 mt-1 text-primary-light" />
                  <span>123 Wellness Avenue<br />Healthcare City, HC 12345</span>
                </li>
                <li className="flex gap-4 opacity-80 justify-center md:justify-start">
                  <FiPhone className="flex-shrink-0 mt-1 text-primary-light" />
                  <div>
                    <span>Main: (123) 456-7890</span><br />
                    <span>Emergency: (123) 456-7891</span>
                  </div>
                </li>
                <li className="flex gap-4 opacity-80 justify-center md:justify-start">
                  <FiMail className="flex-shrink-0 mt-1 text-primary-light" />
                  <span>info@lifespringhealth.com</span>
                </li>
                <li className="flex gap-4 opacity-80 justify-center md:justify-start">
                  <FiClock className="flex-shrink-0 mt-1 text-primary-light" />
                  <div>
                    <span>Mon - Sat: 8:00 AM - 8:00 PM</span><br />
                    <span>Sunday: 9:00 AM - 2:00 PM</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 opacity-70 text-sm text-center md:text-left">
          <p>© 2026 LifeSpring Health Clinic. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
            <Link href="/privacy" className="hover:text-primary-light transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-light transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-primary-light transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
