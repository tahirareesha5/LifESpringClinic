import Head from 'next/head'
import Link from 'next/link'
import { FiCheck, FiArrowRight, FiAward, FiHeart, FiUsers, FiTarget } from 'react-icons/fi'

const values = [
  { icon: FiHeart, title: 'Compassionate Care', description: 'We treat every patient with empathy, respect, and genuine concern for their wellbeing.' },
  { icon: FiUsers, title: 'Patient-Centered', description: 'Your health journey is unique. We create personalized care plans that fit your life.' },
  { icon: FiTarget, title: 'Preventive Focus', description: 'We believe in proactive healthcare to prevent illness before it starts.' },
  { icon: FiAward, title: 'Excellence', description: 'Our commitment to medical excellence drives everything we do.' }
]

const milestones = [
  { year: '2010', title: 'Founded', description: 'LifeSpring Health Clinic opened its doors to the community.' },
  { year: '2013', title: 'Expansion', description: "Added specialized pediatric and women's health departments." },
  { year: '2016', title: 'Recognition', description: 'Received Excellence in Patient Care award.' },
  { year: '2019', title: 'Innovation', description: 'Launched comprehensive chronic disease management program.' },
  { year: '2022', title: 'Growth', description: 'Expanded to include mental wellness services.' },
  { year: '2025', title: 'Community', description: 'Celebrating 15,000+ patients and growing.' }
]

const team = [
  { name: 'Dr. Elizabeth Harper', role: 'Founder & Medical Director', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face', bio: 'With over 25 years in family medicine, Dr. Harper founded LifeSpring with a vision of compassionate, accessible healthcare.' },
  { name: 'Dr. Marcus Johnson', role: 'Chief Medical Officer', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face', bio: 'Dr. Johnson oversees clinical operations and ensures the highest standards of patient care across all departments.' },
  { name: 'Sarah Chen', role: 'Director of Operations', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face', bio: 'Sarah ensures smooth clinic operations and exceptional patient experience at every touchpoint.' }
]

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | LifeSpring Health Clinic</title>
        <meta name="description" content="Learn about LifeSpring Health Clinic's mission, values, and dedicated team committed to providing compassionate healthcare for your family." />
      </Head>
      
      {/* Hero Section */}
      <section className="relative py-32 md:py-24 bg-gradient-to-br from-primary-soft to-gray-50 text-center overflow-hidden">
        <div className="container relative z-10">
          <span className="section-tag">About Us</span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-text-dark mb-4">Your Partner in Lifelong Wellness</h1>
          <p className="text-lg text-text-light max-w-xl mx-auto leading-relaxed">
            Since 2010, LifeSpring Health Clinic has been dedicated to providing 
            compassionate, patient-centered healthcare for families in our community.
          </p>
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2E8B7D 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </section>
      
      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop" alt="LifeSpring Clinic" className="w-full rounded-3xl shadow-xl" />
              <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=300&fit=crop" alt="Medical team" className="absolute -bottom-8 -right-4 md:right-[-2rem] w-[50%] md:w-[60%] rounded-2xl shadow-xl border-4 border-white" />
            </div>
            <div>
              <h2 className="font-display text-3xl text-text-dark mb-6">Our Story</h2>
              <p className="text-text-light leading-relaxed mb-4">
                LifeSpring Health Clinic was founded by Dr. Elizabeth Harper with a simple 
                yet powerful vision: to create a healthcare home where every patient feels 
                valued, heard, and cared for like family.
              </p>
              <p className="text-text-light leading-relaxed mb-4">
                What started as a small family practice has grown into a comprehensive 
                health center serving thousands of patients. Throughout our growth, we've 
                remained true to our founding principles of compassionate care, preventive 
                medicine, and community service.
              </p>
              <p className="text-text-light leading-relaxed">
                Today, our team of dedicated physicians and healthcare professionals 
                continues to uphold these values, combining the warmth of personalized 
                care with the precision of modern medicine.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Values</span>
            <h2 className="section-title">What We Stand For</h2>
            <p className="section-subtitle">Our core values guide every interaction and decision we make.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-md text-center transition-all hover:-translate-y-1 hover:shadow-xl group">
                <div className="w-[70px] h-[70px] flex items-center justify-center bg-primary-soft text-primary rounded-xl mx-auto mb-6 transition-all group-hover:bg-primary group-hover:text-white">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-text-dark mb-3">{value.title}</h3>
                <p className="text-text-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">Milestones</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-2xl border-l-4 border-primary transition-all hover:translate-x-1">
                <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">{milestone.title}</h3>
                <p className="text-text-light">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Leadership Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Leadership</span>
            <h2 className="section-title">Meet Our Leadership Team</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                <img src={member.image} alt={member.name} className="w-full h-[280px] object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text-dark mb-1">{member.name}</h3>
                  <span className="block text-primary font-medium text-sm mb-4">{member.role}</span>
                  <p className="text-text-light leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-center">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <h2 className="font-display text-3xl text-white mb-4">Join Our Family of Care</h2>
            <p className="text-white/90 text-lg mb-8">
              Experience the LifeSpring difference. Schedule your first 
              appointment and start your journey to better health.
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
