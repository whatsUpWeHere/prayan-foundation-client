'use client'
import SectionWrapper from "@/hoc/SectionWrapper";
import React from 'react'
import Container from 'react-bootstrap/Container'

import 'bootstrap/dist/css/bootstrap.min.css';

import TestimonialSection from '@/components/TestimonialSection';
import OurInfo from '@/components/OurInfo';
import Cards from '@/components/Cards';
import ParallaxComponent from '@/components/ParallaxComponent';



const about = () => {
  return (
    <>
      <OurInfo />
      <ParallaxComponent />
      <Container className='mt-13'>
        <Cards />
      </Container>
      <TestimonialSection />

    </>
  );
};

export default SectionWrapper(about);
