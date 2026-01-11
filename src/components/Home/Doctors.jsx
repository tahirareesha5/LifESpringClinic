import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'

const doctors = [
  { name: 'Dr. Sarah Mitchell', specialty: 'Family Medicine', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=face', experience: '15+ years', bio: 'Specializes in comprehensive family care with a focus on preventive medicine.' },
  { name: 'Dr. James Chen', specialty: 'Internal Medicine', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=face', experience: '12+ years', bio: 'Expert in managing chronic conditions and complex medical cases.' },
  { name: 'Dr. Amara Okonkwo', specialty: 'Pediatrics', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&crop=face', experience: '10+ years', bio: 'Dedicated to providing compassionate care for children of all ages.' },
  { name: 'Dr. Michael Roberts', specialty: "Women's Health", image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500&fit=crop&crop=face', experience: '18+ years', bio: "Comprehensive women's healthcare including obstetrics and gynecology." }
]

export default function Doctors() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.15 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  
  return (
    <section className="section bg-gray-50" ref={ref}>
      <div className="container">
        <div className={`section-header transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-tag">Our Doctors</span>
          <h2 className="section-title">Meet Our Expert Physicians</h2>
          <p className="section-subtitle">
            Our team of board-certified doctors brings decades of combined experience 
            and a shared commitment to your health and wellbeing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {doctors.map((doctor, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-xl group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img src={doctor.image} alt={doctor.name} className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-3">
                    {[FaLinkedin, FaTwitter].map((Icon, i) => (
                      <a key={i} href="#" className="w-9 h-9 flex items-center justify-center bg-white text-primary rounded-full transition-all hover:bg-primary hover:text-white hover:-translate-y-1">
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block bg-primary-soft text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
                  {doctor.specialty}
                </span>
                <h3 className="text-lg font-semibold text-text-dark mb-2">{doctor.name}</h3>
                <p className="text-sm text-text-light leading-relaxed mb-4">{doctor.bio}</p>
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-sm text-text-light">{doctor.experience} experience</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-12 transition-all duration-600 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <Link href="/doctors" className="btn btn-primary">
            View All Doctors
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
