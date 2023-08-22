'use client'
import Event from '@/components/Event';
import TestimonialSection from '@/components/TestimonialSection';
import ParallaxComponent from '@/components/ParallaxComponent';
import OurInfo from '@/components/OurInfo';
import SectionWrapper from '@/hoc/SectionWrapper';


function Home() {

  return (
    <>
      <OurInfo />
      <ParallaxComponent />
      <TestimonialSection />
      <Event />

    </>
  )
}


export default SectionWrapper(Home)