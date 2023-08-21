import React from "react";
import Blog from "@/components/Blog";
import SectionWrapper from "@/hoc/SectionWrapper";

const BlogLink = () => {
    return <Blog />;
};

export default SectionWrapper(BlogLink);
