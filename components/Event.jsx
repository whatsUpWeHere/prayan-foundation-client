import React from "react";
import EventCard from "./EventCard";
import { event_data } from "@/constants";

const Blog = () => {
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
                {event_data.map((event)=>(
                    <EventCard key={event.id} {...event} />
                ))}
               
            </section>
        </>
    );
};

export default Blog;
