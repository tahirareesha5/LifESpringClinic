import { useEffect, useRef, useState } from 'react'

const stats = [
  { number: 15000, suffix: '+', label: 'Happy Patients' },
  { number: 20, suffix: '+', label: 'Expert Doctors' },
  { number: 15, suffix: '+', label: 'Years Experience' },
  { number: 98, suffix: '%', label: 'Patient Satisfaction' }
]

function AnimatedNumber({ value, suffix, isVisible }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) { setCount(value); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, value])
  
  return <span>{count.toLocaleString()}{suffix}</span>
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  
  return (
    <section className="relative py-20 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=600&fit=crop"
          alt="Medical background"
          className={`w-full h-full object-cover transition-transform duration-[8s] ${isVisible ? 'scale-100' : 'scale-110'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary-dark/95"></div>
      </div>
      
      <div className="container relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className={`text-white text-center lg:text-left transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <span className="section-tag bg-white/20 text-white">Our Impact</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] text-white mb-4">Trusted by Thousands of Families</h2>
          <p className="text-white/85 text-lg leading-relaxed">
            Our commitment to excellence has made us a leading healthcare provider 
            in the community for over 15 years.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`bg-white/10 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center border border-white/20 transition-all duration-500 hover:bg-white/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-90'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                <AnimatedNumber value={stat.number} suffix={stat.suffix} isVisible={isVisible} />
              </div>
              <div className="text-white/85">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
