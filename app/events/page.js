import React from "react";
import Event from "@/components/Event";
import SectionWrapper from "@/hoc/SectionWrapper";

const events = () => {

  return (
    <div>
      <Event />
    </div>
  );
};

export default SectionWrapper(events);
