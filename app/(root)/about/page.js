import React from "react";
import About from '@/components/About';
import SectionWrapper from "@/hoc/SectionWrapper";

const about = () => {
  return (
    <>
      <About/>

    </>
  );
};

export default SectionWrapper(about);
