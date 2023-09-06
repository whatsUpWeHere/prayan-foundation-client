"use client";
import Event from "@/components/Event";
import TestimonialSection from "@/components/TestimonialSection";
import ParallaxComponent from "@/components/ParallaxComponent";
import OurInfo from "@/components/OurInfo";
import SectionWrapper from "@/hoc/SectionWrapper";
import Ourproject from "../forms/OurProject";
import OurIni from "@/components/crousel/CardSet1";
import HomeCarousel from '@/components/crousel/HomeCarousel';

function Home() {
    return (
        <>
            <HomeCarousel />
            <OurInfo />
            <ParallaxComponent />
            <OurIni/>
            <TestimonialSection />
            <Event />
            <Ourproject />
        </>
    );
}

export default SectionWrapper(Home);
