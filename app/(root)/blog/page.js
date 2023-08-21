import React from "react";
import BlogLink from "@/components/nav-link-components/BlogLink"
import SectionWrapper from "@/hoc/SectionWrapper";
import TopBGImage from '@/components/TopBGImage';

const blog = () => {
  return <>
    <TopBGImage text="Our Blog" />
    <BlogLink />
  </>;
};

export default blog;
