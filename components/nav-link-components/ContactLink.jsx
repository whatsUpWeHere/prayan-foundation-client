import React from "react";
import ContactForm from "@/components/ContactForm";
import SectionWrapper from "@/hoc/SectionWrapper";

const ContactLink = () => {
    return (
        <>
            <ContactForm />
        </>
    );
};

export default SectionWrapper(ContactLink);
