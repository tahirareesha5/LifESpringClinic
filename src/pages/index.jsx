import Head from 'next/head'
import Hero from '@/components/Home/Hero'
import Features from '@/components/Home/Features'
import About from '@/components/Home/About'
import Services from '@/components/Home/Services'
import Stats from '@/components/Home/Stats'
import Doctors from '@/components/Home/Doctors'
import Testimonials from '@/components/Home/Testimonials'
import CTA from '@/components/Home/CTA'
import Appointment from '@/components/Home/Appointment'

export default function Home() {
  return (
    <>
      <Head>
        <title>LifeSpring Health Clinic | Compassionate Family Healthcare</title>
        <meta name="description" content="LifeSpring Health Clinic - Your trusted partner in preventive care, family medicine, and chronic disease management. Experience warm, compassionate healthcare." />
      </Head>
      
      <Hero />
      <Features />
      <About />
      <Services />
      <Stats />
      <Doctors />
      <Testimonials />
      <Appointment />
      <CTA />
    </>
  )
}
