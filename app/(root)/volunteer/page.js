import React from "react";
import RegForm from '@/components/forms/volunteer/RegForm';
import VolunteerLink from '@/components/nav-link-components/VolunteerLink';
import TopBGImage from '@/components/TopBGImage';

const page = () => {
    return <>
        <TopBGImage text="Become a Voluteer" />

        <VolunteerLink />
    </>;
};

export default page;
