import Head from 'next/head'
import Link from 'next/link'
import { FiArrowRight, FiCheck, FiHeart, FiActivity, FiUsers, FiSmile, FiShield, FiBriefcase, FiMoon, FiUser } from 'react-icons/fi'

const services = [
  {
    icon: FiHeart,
    title: 'Preventive Care',
    description: 'Comprehensive health screenings and preventive services designed to keep you healthy and catch potential issues early.',
    features: ['Annual physical exams', 'Health risk assessments', 'Vaccinations & immunizations', 'Cancer screenings', 'Cholesterol & blood pressure checks'],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&h=300&fit=crop'
  },
  {
    icon: FiActivity,
    title: 'Chronic Disease Management',
    description: 'Expert care and ongoing support for managing chronic conditions like diabetes, hypertension, and heart disease.',
    features: ['Personalized care plans', 'Regular monitoring', 'Medication management', 'Lifestyle coaching', 'Specialist coordination'],
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&h=300&fit=crop'
  },
  {
    icon: FiUsers,
    title: 'Family Medicine',
    description: 'Complete healthcare for every member of your family, from newborns to grandparents, all under one roof.',
    features: ['Well-child visits', 'Adolescent care', 'Adult medicine', 'Geriatric care', 'Family health planning'],
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=500&h=300&fit=crop'
  },
  {
    icon: FiSmile,
    title: 'Pediatric Care',
    description: 'Specialized healthcare for infants, children, and adolescents in a friendly, child-centered environment.',
    features: ['Newborn care', 'Growth & development monitoring', 'School & sports physicals', 'Behavioral health', 'Allergy testing'],
    image: 'https://images.unsplash.com/photo-1542884748-2b87b36c6b90?w=500&h=300&fit=crop'
  },
  {
    icon: FiShield,
    title: "Women's Health",
    description: "Comprehensive care addressing women's unique health needs through every stage of life.",
    features: ['Annual wellness exams', 'Reproductive health', 'Prenatal & postnatal care', 'Menopause management', 'Breast health'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=300&fit=crop'
  },
  {
    icon: FiMoon,
    title: 'Mental Wellness',
    description: 'Integrated mental health services to support your emotional and psychological wellbeing.',
    features: ['Depression & anxiety treatment', 'Stress management', 'Counseling services', 'Behavioral therapy', 'Crisis support'],
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=300&fit=crop'
  }
]

const insurances = [
  'Blue Cross Blue Shield',
  'Aetna',
  'United Healthcare',
  'Cigna',
  'Medicare',
  'Medicaid',
  'Humana',
  'Kaiser Permanente'
]

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | LifeSpring Health Clinic</title>
        <meta name="description" content="Explore LifeSpring Health Clinic's comprehensive healthcare services including preventive care, chronic disease management, family medicine, pediatrics, women's health, and mental wellness." />
      </Head>
      
      {/* Hero Section */}
      <section className="relative py-32 md:py-24 bg-gradient-to-br from-primary-soft to-gray-50 text-center overflow-hidden">
        <div className="container relative z-10">
          <span className="section-tag">Our Services</span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-text-dark mb-4">Comprehensive Healthcare Services</h1>
          <p className="text-lg text-text-light max-w-xl mx-auto leading-relaxed">
            From preventive care to specialized treatments, we offer a full range 
            of services to meet your family's healthcare needs.
          </p>
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2E8B7D 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </section>
      
      {/* Services List */}
      <section className="section">
        <div className="container">
          {services.map((service, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-24 last:mb-0 ${index % 2 !== 0 ? 'lg:[direction:rtl] [&>*]:[direction:ltr]' : ''}`}>
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-primary-soft text-primary rounded-xl mb-6">
                  <service.icon size={32} />
                </div>
                <h2 className="font-display text-3xl text-text-dark mb-4">{service.title}</h2>
                <p className="text-text-light text-lg leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-text-light">
                      <FiCheck className="text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn btn-primary">
                  Learn More
                  <FiArrowRight />
                </Link>
              </div>
              <div className="relative">
                <img src={service.image} alt={service.title} className="w-full rounded-2xl shadow-xl" />
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Insurance Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Insurance</span>
            <h2 className="section-title">Insurance We Accept</h2>
            <p className="section-subtitle">We work with most major insurance providers to ensure you receive the care you need.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {insurances.map((insurance, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center font-medium text-text-dark shadow-sm">
                {insurance}
              </div>
            ))}
          </div>
          
          <p className="text-center text-text-light mt-8">
            Don't see your insurance? <Link href="/contact" className="text-primary hover:underline">Contact us</Link> to verify your coverage.
          </p>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-center">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <h2 className="font-display text-3xl text-white mb-4">Ready to Get Started?</h2>
            <p className="text-white/90 text-lg mb-8">
              Schedule your appointment today and experience 
              compassionate, comprehensive healthcare.
            </p>
            <Link href="/contact" className="btn btn-white btn-lg">
              Book an Appointment
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
