'use client'
import UserProfileCard from '@/components/cards/UserProfileCard'
import Event from '@/components/Event';
import TestimonialSection from '@/components/TestimonialSection';
import ParallaxComponent from '@/components/ParallaxComponent';
import OurInfo from '@/components/OurInfo';
import EventForm from '@/components/forms/EventForm';
import SectionWrapper from '@/hoc/SectionWrapper';


function Home() {

  return (
    <>
      <h1>Home page</h1>
<EventForm/>
      <UserProfileCard />
      <OurInfo />
      <ParallaxComponent />
      <TestimonialSection />
      <Event />

    </>
  )
}


export default SectionWrapper(Home)