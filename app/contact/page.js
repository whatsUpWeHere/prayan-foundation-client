import React from "react";
import ContactForm from "@/components/ContactForm";
import SectionWrapper from "@/hoc/SectionWrapper";

const contact = () => {
    return (
        <div>
            contact
            <ContactForm />
        </div>
    );
};

export default SectionWrapper(contact);
