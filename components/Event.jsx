"use client";
import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import SectionWrapper from "@/hoc/SectionWrapper";

const Event = () => {
    const [eventData, setEventData] = useState([]);
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    const fetchEvents = async () => {
        try {
            const response = await fetch(
                backendUrl + "/api/event/fetchAllEvents"
            );
            const data = await response.json();
            console.log("events are ", data.events);
            setEventData(data.events); // Use setEventData to update the state
        } catch (error) {
            console.error("Error fetching events: ", error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div className="mx-auto px-5">
    
            <div className=" flex items-center justify-center flex-col mx-auto">
                <h3 className="font-bold text-xl text-[#fdbe33]">
                    Upcoming Events
                </h3>
                <p className="text-[#4A4C70] text-4xl text-center letter-wider font-semibold py-2 ">
                    Be ready for our upcoming drives
                </p>
            </div>
            {/* grid grid-cols-1 md:grid-cols-2 */}
            <section className=" flex flex-wrap my-10 gap-5 justify-center items-center mx-auto">
                {eventData.map((event) => (
                    <EventCard key={event._id} {...event} />
                ))}
            </section>
        </div>
    );
};

export default SectionWrapper(Event);
