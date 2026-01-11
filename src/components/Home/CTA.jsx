import Link from 'next/link'
import { FiArrowRight, FiPhone } from 'react-icons/fi'
import { useEffect, useRef, useState } from 'react'

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark py-20 relative overflow-hidden" ref={ref}>
      {/* Animated background blobs */}
      <div className="absolute -top-1/2 -right-[10%] w-[400px] h-[400px] bg-white/10 rounded-full animate-[morphBlob_15s_ease-in-out_infinite]"></div>
      <div className="absolute -bottom-[30%] -left-[5%] w-[300px] h-[300px] bg-white/5 rounded-full animate-[morphBlob_12s_ease-in-out_infinite_reverse]"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 text-center lg:text-left">
          <div className={`max-w-xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-white mb-4">Ready to Start Your Wellness Journey?</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Join thousands of families who trust LifeSpring Health Clinic for 
              their healthcare needs. Experience the difference of compassionate, 
              patient-centered care.
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 flex-shrink-0 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link href="/contact" className="btn btn-white btn-lg animate-[pulse-glow_2s_ease-in-out_infinite]">
              Book an Appointment
              <FiArrowRight />
            </Link>
            <a href="tel:+1234567890" className="btn btn-lg bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary transition-all hover:-translate-y-1">
              <FiPhone />
              Call (123) 456-7890
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
