import Head from 'next/head'
import Link from 'next/link'
import { FiArrowRight, FiCalendar, FiMail, FiAward } from 'react-icons/fi'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const doctors = [
  {
    name: 'Dr. Elizabeth Harper',
    specialty: 'Family Medicine',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=face',
    education: 'Harvard Medical School',
    experience: '25+ years',
    bio: 'Dr. Harper founded LifeSpring with a passion for personalized, compassionate healthcare. She specializes in preventive medicine and chronic disease management.'
  },
  {
    name: 'Dr. Marcus Johnson',
    specialty: 'Internal Medicine',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=face',
    education: 'Johns Hopkins University',
    experience: '18+ years',
    bio: 'With expertise in complex medical conditions, Dr. Johnson provides thoughtful, evidence-based care for adult patients with multiple health concerns.'
  },
  {
    name: 'Dr. Sarah Chen',
    specialty: 'Pediatrics',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&crop=face',
    education: 'Stanford Medical School',
    experience: '12+ years',
    bio: "Dr. Chen's warm approach and expertise in child development make her a favorite among our youngest patients and their parents."
  },
  {
    name: 'Dr. Michael Davis',
    specialty: "Women's Health",
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500&fit=crop&crop=face',
    education: 'Yale Medical School',
    experience: '20+ years',
    bio: "Dedicated to women's health through every life stage, Dr. Davis provides comprehensive care with sensitivity and expertise."
  },
  {
    name: 'Dr. Jennifer Martinez',
    specialty: 'Mental Health',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=500&fit=crop&crop=face',
    education: 'Columbia University',
    experience: '15+ years',
    bio: 'Dr. Martinez integrates mental wellness into primary care, helping patients achieve holistic health through counseling and therapy.'
  },
  {
    name: 'Dr. James Wilson',
    specialty: 'Chronic Care',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&crop=face',
    education: 'UCLA Medical School',
    experience: '14+ years',
    bio: 'Specializing in diabetes, hypertension, and heart disease, Dr. Wilson helps patients manage chronic conditions with personalized care plans.'
  }
]

export default function Doctors() {
  return (
    <>
      <Head>
        <title>Our Doctors | LifeSpring Health Clinic</title>
        <meta name="description" content="Meet the dedicated team of physicians at LifeSpring Health Clinic. Our board-certified doctors bring expertise and compassion to every patient interaction." />
      </Head>
      
      {/* Hero Section */}
      <section className="relative py-32 md:py-24 bg-gradient-to-br from-primary-soft to-gray-50 text-center overflow-hidden">
        <div className="container relative z-10">
          <span className="section-tag">Our Team</span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-text-dark mb-4">Meet Our Doctors</h1>
          <p className="text-lg text-text-light max-w-xl mx-auto leading-relaxed">
            Our board-certified physicians combine expertise with compassion 
            to deliver exceptional healthcare for you and your family.
          </p>
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2E8B7D 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </section>
      
      {/* Doctors Grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl group">
                <div className="relative h-[300px] overflow-hidden">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-semibold">{doctor.name}</h3>
                    <span className="text-white/90">{doctor.specialty}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-4 mb-4 text-sm">
                    <span className="flex items-center gap-1 text-text-light">
                      <FiAward className="text-primary" />
                      {doctor.education}
                    </span>
                  </div>
                  <p className="text-text-light leading-relaxed mb-4">{doctor.bio}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-primary font-medium">{doctor.experience} experience</span>
                    <div className="flex gap-2">
                      <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-text-light hover:bg-primary hover:text-white transition-colors">
                        <FaLinkedin size={16} />
                      </a>
                      <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-text-light hover:bg-primary hover:text-white transition-colors">
                        <FaTwitter size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Team Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="section-tag">Careers</span>
              <h2 className="font-display text-3xl text-text-dark mb-6">Join Our Team</h2>
              <p className="text-text-light text-lg leading-relaxed mb-6">
                We're always looking for passionate healthcare professionals who 
                share our commitment to compassionate, patient-centered care. 
                Join a team that values collaboration, innovation, and making 
                a real difference in patients' lives.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-text-light">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary-soft text-primary rounded-full">✓</div>
                  Competitive compensation and benefits
                </li>
                <li className="flex items-center gap-3 text-text-light">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary-soft text-primary rounded-full">✓</div>
                  Supportive, collaborative work environment
                </li>
                <li className="flex items-center gap-3 text-text-light">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary-soft text-primary rounded-full">✓</div>
                  Continuing education opportunities
                </li>
                <li className="flex items-center gap-3 text-text-light">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary-soft text-primary rounded-full">✓</div>
                  Work-life balance
                </li>
              </ul>
              <Link href="/contact" className="btn btn-primary">
                View Open Positions
                <FiArrowRight />
              </Link>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=500&fit=crop" alt="Medical team" className="w-full rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-center">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <h2 className="font-display text-3xl text-white mb-4">Schedule Your Visit</h2>
            <p className="text-white/90 text-lg mb-8">
              Ready to meet one of our physicians? Book your appointment 
              today and experience personalized healthcare.
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
