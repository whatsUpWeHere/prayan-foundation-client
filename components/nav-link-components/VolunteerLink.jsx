"use client";
import SectionWrapper from "@/hoc/SectionWrapper";
import React from "react";

import RegForm from "@/components/forms/volunteer/RegForm";

import "bootstrap/dist/css/bootstrap.min.css";

const VolunteerLink = () => {
    return (
        <>
            <div className="mx-auto px-5">
                <div className=" flex items-center justify-center flex-col mx-auto">
                    <h3 className="font-bold text-xl text-[#fdbe33]">
                        Become A Volunteer
                    </h3>
                    <p className="text-[#4A4C70] text-4xl text-center letter-wider font-semibold py-2 ">
                        Let&quot;s make a difference in the lives of others
                    </p>
                </div>

                <RegForm />
            </div>
        </>
    );
};

export default SectionWrapper(VolunteerLink);
