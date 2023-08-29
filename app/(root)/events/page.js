import React from "react";
import EventsLink from "@/components/nav-link-components/EventsLink";
import TopBGImage from "@/components/TopBGImage";


const events = () => {

  return (
    <>
      <TopBGImage text="Upcoming Events" />
      <EventsLink/>
    </>


  );
};

export default events;
