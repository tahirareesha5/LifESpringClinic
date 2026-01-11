import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { FiCheck, FiArrowRight } from 'react-icons/fi'

const highlights = [
  'Board-certified physicians and specialists',
  'State-of-the-art medical facilities',
  'Personalized treatment plans',
  'Compassionate patient care',
  'Insurance and payment flexibility',
  'Online patient portal access'
]

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  
  return (
    <section className="section bg-gray-50" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=700&fit=crop" 
                alt="Modern medical facility"
                className="w-full h-[350px] md:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 md:right-[-2rem] w-[150px] md:w-[200px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=400&h=300&fit=crop" 
                alt="Doctor consultation"
                className="w-full h-[120px] md:h-[150px] object-cover"
              />
            </div>
            <div className={`absolute top-4 md:top-8 left-0 md:-left-4 bg-primary text-white p-4 md:p-6 rounded-2xl text-center shadow-lg transition-all duration-500 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
              <span className="block text-3xl md:text-4xl font-bold leading-none">15+</span>
              <span className="text-xs uppercase tracking-wide opacity-90">Years of Excellence</span>
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            <span className="section-tag">About Us</span>
            <h2 className="section-title text-left">Your Partner in Lifelong Wellness</h2>
            <p className="text-text-light leading-relaxed mb-4">
              Founded in 2010, LifeSpring Health Clinic has been a cornerstone of 
              community healthcare. We believe that wellness is a journey, not a 
              destination, and we're here to guide you every step of the way.
            </p>
            <p className="text-text-light leading-relaxed mb-8">
              Our clinic combines the warmth of personalized care with the precision 
              of modern medicine. From routine check-ups to complex chronic disease 
              management, our team of dedicated professionals is committed to helping 
              you and your family thrive.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-text-dark group">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary-soft text-primary rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <FiCheck size={14} />
                  </div>
                  <span className="text-[15px]">{item}</span>
                </div>
              ))}
            </div>
            
            <Link href="/about" className="btn btn-primary">
              Learn More About Us
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
