import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FiCalendar, FiPhone, FiHeart, FiShield, FiUsers } from 'react-icons/fi'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])
  
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 md:py-24 lg:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-soft via-gray-50 to-orange-50"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2E8B7D 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      <div className="container relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md mb-6 text-sm font-medium text-primary">
            <FiHeart className="text-secondary" />
            <span>Your Health, Our Priority</span>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-text-dark leading-tight mb-6">
            Compassionate Care for 
            <span className="text-primary relative"> Your Entire Family
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-secondary-light/40 -z-10 rounded"></span>
            </span>
          </h1>
          
          <p className="text-lg text-text-light leading-relaxed mb-8 max-w-xl">
            At LifeSpring Health Clinic, we believe in nurturing wellness through 
            personalized preventive care, comprehensive family medicine, and 
            dedicated chronic disease management.
          </p>
          
          <div className="flex flex-wrap gap-4 md:gap-6 mb-8">
            {[
              { icon: FiShield, label: 'Preventive Care' },
              { icon: FiUsers, label: 'Family Medicine' },
              { icon: FiHeart, label: 'Chronic Care' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-medium text-text-dark">
                <item.icon className="text-primary" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link href="/contact" className="btn btn-primary btn-lg">
              <FiCalendar />
              Book Appointment
            </Link>
            <a href="tel:+1234567890" className="btn btn-outline btn-lg">
              <FiPhone />
              Call Now
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 border-t border-gray-200">
            <div className="flex -space-x-3">
              {['photo-1559839734-2b71ea197ec2', 'photo-1612349317150-e413f6a5b16d', 'photo-1594824476967-48c8b964273f'].map((img, i) => (
                <img key={i} src={`https://images.unsplash.com/${img}?w=100&h=100&fit=crop&crop=face`} alt="Doctor" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[3px] border-white object-cover" />
              ))}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary text-white flex items-center justify-center text-xs font-semibold border-[3px] border-white">+15</div>
            </div>
            <div className="text-center sm:text-left">
              <span className="text-xl font-bold text-text-dark">20+</span>
              <span className="block text-sm text-text-light">Expert Doctors & Specialists</span>
            </div>
          </div>
        </div>
        
        <div className={`relative flex items-center justify-center order-first lg:order-last transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
          <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=900&fit=crop" 
                alt="Doctor caring for patient"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[560px] object-cover"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="hidden lg:flex absolute top-[10%] -left-[20%] items-center gap-3 bg-white p-4 rounded-xl shadow-lg animate-float">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-soft text-primary rounded-lg text-xl">
                <FiCalendar />
              </div>
              <div>
                <span className="font-semibold text-text-dark block">Easy Booking</span>
                <span className="text-sm text-text-light">Schedule in minutes</span>
              </div>
            </div>
            
            <div className="hidden lg:flex absolute bottom-[25%] -left-[15%] items-center gap-3 bg-white p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 text-green-600 rounded-lg text-xl">
                <FiHeart />
              </div>
              <div>
                <span className="font-semibold text-text-dark block">15,000+</span>
                <span className="text-sm text-text-light">Happy Patients</span>
              </div>
            </div>
            
            <div className="hidden lg:flex absolute top-[30%] -right-[15%] items-center gap-3 bg-white p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '2s' }}>
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 text-amber-600 rounded-lg text-xl">
                <FiShield />
              </div>
              <div>
                <span className="font-semibold text-text-dark block">24/7</span>
                <span className="text-sm text-text-light">Emergency Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
