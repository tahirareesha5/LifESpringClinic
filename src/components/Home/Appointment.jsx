import { useState, useEffect, useRef } from 'react'
import { FiCalendar, FiClock, FiUser, FiPhone, FiMail, FiMessageSquare } from 'react-icons/fi'

const services = ['General Consultation', 'Preventive Care', 'Family Medicine', 'Pediatric Care', "Women's Health", 'Chronic Disease Management', 'Mental Wellness', 'Other']
const timeSlots = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM']

export default function Appointment() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' })
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.15 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  
  const handleSubmit = (e) => { e.preventDefault(); alert('Thank you! Your appointment request has been submitted.') }
  
  return (
    <section className="section bg-gradient-to-br from-primary-soft to-gray-50" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          <div className={`text-center lg:text-left transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <span className="section-tag">Book Appointment</span>
            <h2 className="section-title text-center lg:text-left mx-auto lg:mx-0">Schedule Your Visit Today</h2>
            <p className="text-text-light leading-relaxed mb-8">
              Take the first step towards better health. Book an appointment with 
              our expert medical team and experience compassionate care tailored to your needs.
            </p>
            
            <div className="space-y-4 mb-8">
              {[{ icon: FiClock, title: 'Opening Hours', lines: ['Mon - Sat: 8:00 AM - 8:00 PM', 'Sunday: 9:00 AM - 2:00 PM'] },
                { icon: FiPhone, title: 'Contact Us', lines: ['Main: (123) 456-7890', 'Emergency: (123) 456-7891'] }].map((item, i) => (
                <div key={i} className={`flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${(i + 1) * 200}ms` }}>
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-soft text-primary rounded-lg flex-shrink-0 transition-all group-hover:bg-primary group-hover:text-white">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-dark mb-1">{item.title}</h4>
                    {item.lines.map((line, j) => <p key={j} className="text-sm text-text-light">{line}</p>)}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 max-w-sm mx-auto lg:mx-0">
              {['✓ Same-day appointments', '✓ Online confirmation', '✓ Insurance accepted', '✓ Flexible scheduling'].map((f, i) => (
                <div key={i} className="text-sm sm:text-[15px] text-text-dark text-center lg:text-left">{f}</div>
              ))}
            </div>
          </div>
          
          <div className={`bg-white rounded-3xl p-6 md:p-10 shadow-xl transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h3 className="text-2xl font-semibold text-text-dark mb-6 text-center">Request an Appointment</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-text-dark mb-2"><FiUser className="text-primary" />Full Name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="John Doe" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-soft transition-all" />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-text-dark mb-2"><FiPhone className="text-primary" />Phone Number</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="(123) 456-7890" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-soft transition-all" />
                </div>
              </div>
              <div className="mb-4">
                <label className="flex items-center gap-2 text-sm font-medium text-text-dark mb-2"><FiMail className="text-primary" />Email Address</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="john@example.com" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-soft transition-all" />
              </div>
              <div className="mb-4">
                <label className="flex items-center gap-2 text-sm font-medium text-text-dark mb-2"><FiMessageSquare className="text-primary" />Select Service</label>
                <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-soft transition-all bg-white">
                  <option value="">Choose a service</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-text-dark mb-2"><FiCalendar className="text-primary" />Preferred Date</label>
                  <input type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-soft transition-all" />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-text-dark mb-2"><FiClock className="text-primary" />Preferred Time</label>
                  <select value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-soft transition-all bg-white">
                    <option value="">Select time</option>
                    {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label className="flex items-center gap-2 text-sm font-medium text-text-dark mb-2"><FiMessageSquare className="text-primary" />Additional Notes (Optional)</label>
                <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Any specific concerns..." rows={3} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-soft transition-all resize-y min-h-[80px]" />
              </div>
              <button type="submit" className="btn btn-primary btn-lg w-full justify-center">
                <FiCalendar />
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
