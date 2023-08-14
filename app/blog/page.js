import React from "react";
import Blog from "@/components/Blog"
import SectionWrapper from "@/hoc/SectionWrapper";

const blog = () => {
  return <Blog />;
};

export default SectionWrapper(blog);
