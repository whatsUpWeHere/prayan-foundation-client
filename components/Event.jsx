'use client'
import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

const Blog = () => {
    const [eventData, setEventData] = useState([]);

   

    const fetchEvents = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/api/event/fetchAllEvents"
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
        <>
            <div className=" flex items-center justify-center flex-col mx-auto">
                <h3 className="font-bold text-xl text-[#fdbe33]">
                    Upcoming Events
                </h3>
                <p className="text-[#4A4C70] text-4xl text-center letter-wider font-semibold py-2 ">
                    Be ready for our upcoming drives
                </p>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2  my-10 gap-5">
                {eventData.map((event) => (
                    <EventCard key={event._id} {...event} />
                ))}
            </section>
        </>
    );
};

export default Blog;
