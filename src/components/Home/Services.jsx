import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const services = [
  { icon: '🩺', title: 'Preventive Care', description: 'Regular health screenings, vaccinations, and wellness check-ups to keep you healthy.', color: 'bg-primary-soft', link: '/services#preventive' },
  { icon: '👨‍👩‍👧‍👦', title: 'Family Medicine', description: 'Comprehensive care for patients of all ages, from newborns to seniors.', color: 'bg-amber-100', link: '/services#family' },
  { icon: '❤️', title: 'Chronic Disease Management', description: 'Expert management of diabetes, hypertension, asthma, and other conditions.', color: 'bg-pink-100', link: '/services#chronic' },
  { icon: '👶', title: 'Pediatric Care', description: 'Specialized healthcare for infants, children, and adolescents.', color: 'bg-blue-100', link: '/services#pediatric' },
  { icon: '👩', title: "Women's Health", description: "Comprehensive women's healthcare including gynecology and prenatal care.", color: 'bg-purple-100', link: '/services#womens' },
  { icon: '🧠', title: 'Mental Wellness', description: 'Counseling and support for mental health and emotional wellbeing.', color: 'bg-green-100', link: '/services#mental' },
]

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  
  return (
    <section className="section bg-white" ref={ref}>
      <div className="container">
        <div className={`section-header transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">Comprehensive Healthcare Services</h2>
          <p className="section-subtitle">
            From preventive care to specialized treatments, we offer a wide range of 
            medical services to meet your family's healthcare needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Link 
              href={service.link} 
              key={index} 
              className={`block bg-white p-6 md:p-8 rounded-2xl border border-gray-200 transition-all duration-500 hover:border-primary hover:shadow-lg hover:-translate-y-2 hover:scale-[1.02] group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <div className={`w-20 h-20 flex items-center justify-center rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[5deg] ${service.color}`}>
                <span className="text-4xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">{service.title}</h3>
              <p className="text-text-light leading-relaxed mb-6">{service.description}</p>
              <span className="inline-flex items-center gap-2 text-primary font-medium transition-all group-hover:gap-3">
                Learn More <FiArrowRight />
              </span>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services" className="btn btn-outline">
            View All Services
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
