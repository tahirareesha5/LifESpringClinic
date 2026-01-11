import { useState } from 'react'
import Head from 'next/head'
import { FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight, FiCalendar, FiMessageCircle, FiChevronDown, FiChevronUp } from 'react-icons/fi'

const contactInfo = [
  { icon: FiPhone, title: 'Phone', content: '(555) 123-4567', subtext: 'Mon-Fri 8am-6pm' },
  { icon: FiMail, title: 'Email', content: 'info@lifespringhealth.com', subtext: 'We reply within 24 hours' },
  { icon: FiMapPin, title: 'Location', content: '123 Wellness Avenue', subtext: 'Springfield, IL 62701' },
  { icon: FiClock, title: 'Hours', content: 'Mon-Fri: 8am-6pm', subtext: 'Sat: 9am-1pm' }
]

const faqs = [
  { question: 'How do I schedule an appointment?', answer: 'You can schedule an appointment by calling our office at (555) 123-4567, using our online booking form, or through our patient portal. New patients can also request an appointment through this website.' },
  { question: 'What should I bring to my first visit?', answer: "Please bring your photo ID, insurance card, a list of current medications, any relevant medical records, and completed new patient forms (available on our website). Arrive 15 minutes early to complete paperwork." },
  { question: 'Do you accept my insurance?', answer: 'We accept most major insurance plans including Blue Cross Blue Shield, Aetna, United Healthcare, Cigna, Medicare, and Medicaid. Contact us to verify your specific coverage.' },
  { question: 'What are your office hours?', answer: 'We are open Monday through Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 1:00 PM. We are closed on Sundays and major holidays.' },
  { question: 'Do you offer telehealth appointments?', answer: 'Yes! We offer telehealth appointments for many types of visits including follow-ups, prescription refills, and certain consultations. Ask our staff about telehealth options when scheduling.' },
  { question: 'How do I access my medical records?', answer: 'You can access your medical records through our secure patient portal. If you need physical copies or records transferred to another provider, please contact our medical records department.' }
]

export default function Contact() {
  const [activeTab, setActiveTab] = useState('appointment')
  const [activeFaq, setActiveFaq] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you shortly.')
    setFormData({ name: '', email: '', phone: '', date: '', time: '', service: '', message: '' })
  }

  return (
    <>
      <Head>
        <title>Contact Us | LifeSpring Health Clinic</title>
        <meta name="description" content="Contact LifeSpring Health Clinic to schedule an appointment, ask a question, or learn more about our services. We're here to help you on your health journey." />
      </Head>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:py-24 bg-gradient-to-br from-primary-soft to-gray-50 text-center overflow-hidden">
        <div className="container relative z-10 px-4">
          <span className="section-tag">Contact Us</span>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text-dark mb-4">Get in Touch</h1>
          <p className="text-lg text-text-light max-w-xl mx-auto leading-relaxed">
            Have questions or ready to schedule an appointment? We're here 
            to help you on your journey to better health.
          </p>
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2E8B7D 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </section>
      
      {/* Contact Info Cards */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-gray-50 p-4 sm:p-6 rounded-xl text-center transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-primary-soft text-primary rounded-xl mx-auto mb-3 sm:mb-4">
                  <item.icon size={20} className="sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-semibold text-text-dark mb-1 text-sm sm:text-base">{item.title}</h3>
                <p className="text-primary font-medium text-sm sm:text-base break-all sm:break-normal">{item.content}</p>
                <p className="text-xs sm:text-sm text-text-light mt-1">{item.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Form Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Form */}
            <div className="bg-white p-5 sm:p-8 md:p-10 rounded-2xl shadow-xl">
              {/* Tabs */}
              <div className="flex gap-1 sm:gap-2 mb-6 sm:mb-8 p-1 bg-gray-100 rounded-xl">
                <button
                  onClick={() => setActiveTab('appointment')}
                  className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2.5 sm:py-3 rounded-lg font-medium transition-all text-sm sm:text-base ${
                    activeTab === 'appointment' ? 'bg-white text-primary shadow-sm' : 'text-text-light hover:text-primary'
                  }`}
                >
                  <FiCalendar className="w-4 h-4" />
                  <span className="hidden sm:inline">Book</span> Appointment
                </button>
                <button
                  onClick={() => setActiveTab('message')}
                  className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2.5 sm:py-3 rounded-lg font-medium transition-all text-sm sm:text-base ${
                    activeTab === 'message' ? 'bg-white text-primary shadow-sm' : 'text-text-light hover:text-primary'
                  }`}
                >
                  <FiMessageCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">Send</span> Message
                </button>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm sm:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm sm:text-base"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  {activeTab === 'appointment' && (
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-2">Service</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm sm:text-base"
                      >
                        <option value="">Select a service</option>
                        <option value="preventive">Preventive Care</option>
                        <option value="chronic">Chronic Disease Management</option>
                        <option value="family">Family Medicine</option>
                        <option value="pediatric">Pediatric Care</option>
                        <option value="womens">Women's Health</option>
                        <option value="mental">Mental Wellness</option>
                      </select>
                    </div>
                  )}
                </div>
                
                {activeTab === 'appointment' && (
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-2">Preferred Date</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-2">Preferred Time</label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm sm:text-base"
                      >
                        <option value="">Select a time</option>
                        <option value="morning">Morning (8am-12pm)</option>
                        <option value="afternoon">Afternoon (12pm-4pm)</option>
                        <option value="evening">Evening (4pm-6pm)</option>
                      </select>
                    </div>
                  </div>
                )}
                
                <div className="mb-5 sm:mb-6">
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    {activeTab === 'appointment' ? 'Additional Notes' : 'Your Message *'}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required={activeTab === 'message'}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none text-sm sm:text-base"
                    placeholder={activeTab === 'appointment' ? 'Any specific concerns or questions...' : 'How can we help you?'}
                  />
                </div>
                
                <button type="submit" className="btn btn-primary w-full">
                  {activeTab === 'appointment' ? 'Request Appointment' : 'Send Message'}
                  <FiArrowRight />
                </button>
              </form>
            </div>
            
            {/* FAQ */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl text-text-dark mb-4 sm:mb-6">Frequently Asked Questions</h2>
              <p className="text-text-light mb-6 sm:mb-8 text-sm sm:text-base">Find quick answers to common questions about our services and policies.</p>
              
              <div className="space-y-3 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-medium text-text-dark hover:text-primary transition-colors text-sm sm:text-base gap-2"
                    >
                      <span>{faq.question}</span>
                      {activeFaq === index ? <FiChevronUp className="flex-shrink-0" /> : <FiChevronDown className="flex-shrink-0" />}
                    </button>
                    {activeFaq === index && (
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-text-light leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-[300px] sm:h-[400px] relative bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1507861740846!2d-89.64894708464994!3d39.79923197944129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88753814c0be30ef%3A0x8a5e0e08f6e3f2a7!2sSpringfield%2C%20IL!5e0!3m2!1sen!2sus!4v1645564750098!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="grayscale-[30%]"
        />
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg max-w-[calc(100%-2rem)] sm:max-w-xs">
          <h3 className="font-semibold text-text-dark mb-2 text-sm sm:text-base">LifeSpring Health Clinic</h3>
          <p className="text-text-light text-xs sm:text-sm mb-3">
            123 Wellness Avenue<br />
            Springfield, IL 62701
          </p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Springfield+IL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium text-xs sm:text-sm hover:underline inline-flex items-center gap-1"
          >
            Get Directions <FiArrowRight size={14} />
          </a>
        </div>
      </section>
    </>
  )
}
