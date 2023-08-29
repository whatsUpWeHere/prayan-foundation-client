'use client'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutLink from '@/components/nav-link-components/AboutLink';
import TopBGImage from '@/components/TopBGImage';



const about = () => {
  return (
    <>
      <TopBGImage text="Learn about us" />
      <AboutLink />

    </>
  );
};

export default about;
