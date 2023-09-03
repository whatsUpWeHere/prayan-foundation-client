"use client";
import { useState } from "react";
import { SignIn } from "@clerk/nextjs";
import ReCaptcha from "react-google-recaptcha";

export default function Page() {
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const test_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
    const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || test_SITE_KEY;

    const handleVerify = (token) => {
        setRecaptchaToken(token);
        console.log("captch verified", token);
    };

    const renderSignInComponent = () => {
        if (recaptchaToken) {
            return <SignIn afterSignInUrl="/onboarding" />;
        } else {
            return null; 
        }
    };

    const divStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      };

    return (
        <div  style={divStyle} >
            <h2>Please confirm that you are not bot...</h2>
            <ReCaptcha
                sitekey={test_SITE_KEY}
                onChange={handleVerify}
            />

            {renderSignInComponent()}
        </div>
    );

    // return <SignIn afterSignInUrl="/onboarding" />;
}
