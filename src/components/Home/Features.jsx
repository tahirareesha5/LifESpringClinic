import { useEffect, useRef, useState } from 'react'
import { FiClock, FiUsers, FiHeart, FiAward } from 'react-icons/fi'

const features = [
  { icon: FiClock, title: 'Extended Hours', description: 'Open 7 days a week with flexible appointment times to fit your schedule.', color: 'bg-primary-soft text-primary' },
  { icon: FiUsers, title: 'Family-Centered Care', description: 'Comprehensive healthcare services for every member of your family.', color: 'bg-amber-100 text-amber-600' },
  { icon: FiHeart, title: 'Preventive Focus', description: 'Proactive wellness programs to keep you healthy and prevent illness.', color: 'bg-green-100 text-green-600' },
  { icon: FiAward, title: 'Expert Team', description: 'Board-certified physicians and specialists dedicated to your care.', color: 'bg-blue-100 text-blue-600' },
]

export default function Features() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  
  return (
    <section className="py-16 bg-white -mt-8 relative z-10" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 md:p-8 rounded-2xl shadow-lg text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`w-[70px] h-[70px] flex items-center justify-center rounded-xl mx-auto mb-6 transition-transform duration-500 group-hover:scale-110 ${feature.color}`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">{feature.title}</h3>
              <p className="text-text-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
