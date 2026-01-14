import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from '../Logo/Logo'
import { FiPhone, FiMenu, FiX, FiSearch, FiChevronDown, FiChevronUp } from 'react-icons/fi'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Our Doctors', href: '/doctors' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [router.pathname])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 text-sm">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4 opacity-90">
            <span>Welcome to LifeSpring Health Clinic</span>
            <span className="opacity-50 hidden sm:inline">|</span>
            <span className="hidden sm:inline">Mon - Sat: 8:00 AM - 8:00 PM</span>
          </div>
          <a href="tel:+1234567890" className="flex items-center gap-2 text-white font-medium hover:opacity-90 transition-opacity">
            <FiPhone />
            <span>Emergency: (123) 456-7890</span>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 left-0 right-0 bg-white z-[100] transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium py-2 relative transition-colors hover:text-primary ${
                  router.pathname === link.href ? 'text-primary' : 'text-text-dark'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${
                  router.pathname === link.href ? 'after:w-full' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact" className="btn btn-primary">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-text-dark p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed top-0 ${isMobileMenuOpen ? 'right-0' : '-right-full'} w-[300px] h-screen bg-white z-[101] pt-24 px-6 pb-8 transition-all duration-300 shadow-xl`}>
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg font-medium p-4 rounded-lg transition-all ${
                router.pathname === link.href 
                  ? 'bg-primary-soft text-primary' 
                  : 'text-text-dark hover:bg-primary-soft hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary w-full mt-4 justify-center">
            Book Appointment
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[100]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
