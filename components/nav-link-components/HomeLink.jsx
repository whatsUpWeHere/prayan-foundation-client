"use client";
import Event from "@/components/Event";
import TestimonialSection from "@/components/TestimonialSection";
import ParallaxComponent from "@/components/ParallaxComponent";
import OurInfo from "@/components/OurInfo";
import SectionWrapper from "@/hoc/SectionWrapper";
import Check from "@/components/Check";
import OurIni from "@/components/crousel/CardSet1";

function Home() {
    return (
        <>
            <OurInfo />
            <ParallaxComponent />
            <OurIni/>
            <TestimonialSection />
            <Event />
            <Check />
        </>
    );
}

export default SectionWrapper(Home);
