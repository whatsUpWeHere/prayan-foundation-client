"use client";
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";

const EventForm = () => {
    // const backend_url = "https://ngo-site-backend.onrender.com";
    const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;
    const { user } = useUser();

    const [event, setEvent] = useState({
        heading: "",
        content: "",
        date: "",
        time: "",
        venue: "",
        image: "",
    });

    const handleChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setEvent({
            ...event,
            [name]: value,
        });
    };

    const createEventButton = async (e) => {
        e.preventDefault();
        console.log("event is: ",event);

        const userUnsafeMetaData = user?.unsafeMetadata;
        console.log("user: ", user);
        const { dbID } = userUnsafeMetaData;

        try {
            const response = await fetch(
                backend_url + "/api/event/createEvent",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        id: dbID,
                    },
                    body: JSON.stringify(event),
                }
            );

            if (response.status === 401) {
                alert("You are not authorized to create event");
                return;
            }
            const eventObject = await response.json();
            console.log("database response: ", response);
            console.log("event object response: ", eventObject);

            if ( response.status === 201) {
                setEvent({
                    heading: "",
                    content: "",
                    date: "",
                    time: "",
                    venue: "",
                    image: "",
                });
                alert("Event Created Successfully");
                console.log("Event Created Successfully")
                return ;
            }
        } catch (error) {
            console.log("some error creating event... ", error);
            alert("some error creating event... ");
        }
    };

    return (
        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4">
                <div>
                    <span className="ml-2">heading</span>
                    <label className="sr-only" htmlFor="heading">
                        Name
                    </label>
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm shadow-lg"
                        placeholder="Title of event"
                        type="text"
                        name="heading"
                        value={event.heading}
                        onChange={handleChange}
                    />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <span className="ml-2">Date</span>
                        <label className="sr-only" htmlFor="date">
                            date
                        </label>
                        <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm shadow-lg"
                            placeholder="date"
                            type="date"
                            name="date"
                            value={event.date}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <span>time</span>
                        <label className="sr-only" htmlFor="time">
                            time
                        </label>
                        <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm shadow-lg"
                            placeholder="HH:mm"
                            type="time"
                            name="time"
                            value={event.time}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <span className="ml-2">venue</span>
                        <label className="sr-only" htmlFor="venue">
                            
                        </label>
                        <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm shadow-lg"
                            placeholder="location of event"
                            type="text"
                            name="venue"
                            value={event.venue}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <span className="ml-2">Image</span>
                        <label className="sr-only" htmlFor="image">
                             
                        </label>
                        <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm shadow-lg"
                            placeholder="Enter Image URL"
                            type="text"
                            name="image"
                            value={event.image}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div>
                    <span className="ml-2">Content</span>
                    <label className="sr-only" htmlFor="message">
                        Tell about event
                    </label>
                    <textarea
                        className="w-full rounded-lg border-gray-200 p-3 text-sm shadow-lg"
                        placeholder="Tell about event"
                        rows={8}
                        value={event.content}
                        name="content"
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-4">
                    <button
                        type="submit"
                        onClick={createEventButton}
                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                    >
                        Create Event
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EventForm;
