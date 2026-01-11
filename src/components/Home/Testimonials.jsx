import { useState, useEffect, useRef } from 'react'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  { id: 1, name: 'Jennifer Martinez', role: 'Patient for 5 years', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face', rating: 5, text: "LifeSpring has been our family's healthcare home for years. The doctors are incredibly thorough and genuinely care about our wellbeing. I never feel rushed during appointments." },
  { id: 2, name: 'Robert Thompson', role: 'Patient for 3 years', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face', rating: 5, text: "After years of struggling with diabetes management, the team at LifeSpring helped me get my health back on track. Their chronic disease program is exceptional." },
  { id: 3, name: 'Maria Santos', role: 'Patient for 2 years', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face', rating: 5, text: "The pediatric care my children receive here is outstanding. Dr. Okonkwo is patient, kind, and makes even the most nervous little ones feel comfortable." },
  { id: 4, name: 'David Kim', role: 'Patient for 4 years', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', rating: 5, text: "The preventive care focus at LifeSpring has been life-changing. Regular screenings caught a health issue early, and their proactive approach saved my life." }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  
  return (
    <section className="section bg-white" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-center">
          <div className={`lg:pr-8 text-center lg:text-left transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title text-center lg:text-left mx-auto lg:mx-0">What Our Patients Say</h2>
            <p className="section-subtitle text-center lg:text-left mx-auto lg:mx-0">
              Real stories from real patients who have experienced the 
              LifeSpring difference in their healthcare journey.
            </p>
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              {[{ icon: FiChevronLeft, fn: () => setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length) },
                { icon: FiChevronRight, fn: () => setCurrentIndex((p) => (p + 1) % testimonials.length) }].map((btn, i) => (
                <button key={i} onClick={btn.fn} className="w-12 h-12 flex items-center justify-center border-2 border-gray-200 rounded-full text-text-dark text-xl transition-all hover:bg-primary hover:border-primary hover:text-white hover:scale-110 active:scale-95">
                  <btn.icon />
                </button>
              ))}
            </div>
          </div>
          
          <div className={`overflow-hidden transition-all duration-700 delay-200 max-w-full ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((t) => (
                <div key={t.id} className="flex-shrink-0 w-full p-5 sm:p-8 md:p-10 bg-gray-50 rounded-2xl sm:rounded-3xl transition-all hover:shadow-xl">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-lg text-xl mb-6 animate-float">
                    <FaQuoteLeft />
                  </div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => <FiStar key={i} className="text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-base sm:text-lg text-text-dark leading-relaxed mb-6 sm:mb-8">{t.text}</p>
                  <div className="flex items-center gap-4">
                    <img src={t.image} alt={t.name} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover" />
                    <div>
                      <span className="font-semibold text-text-dark block">{t.name}</span>
                      <span className="text-sm text-text-light">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrentIndex(i)} className={`h-2.5 rounded-full transition-all ${i === currentIndex ? 'w-8 bg-primary' : 'w-2.5 bg-gray-300'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
