"use client";
import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { Form, Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
const EventTable = () => {
    const [eventData, setEventData] = useState([]);
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const { user } = useUser();
    console.log(user);

    const { dbID } = user?.unsafeMetadata;

    // const editEventHandle = () => {
    //     //
    // };
    const deleteEventHandle = async (id) => {
        const result = confirm("Are you sure you want to delete this event?");
        if (result) {
            try {
                const response = await fetch(
                    backendUrl + "/api/event/deleteEvent/" + id,
                    {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                            id: dbID,
                        },
                    }
                );

                if (response.status === 401) {
                    alert("You are not authorized to create event");
                    return;
                }
                if (response.ok) {
                    const responseObject = await response.json();
                    console.log("responseObject is ", responseObject);
                    console.log("message is ", responseObject.message);
                    console.log("status code is ", responseObject.status);

                    alert("Event Deleted Successfully");
                    setEventData((prevEventData) =>
                        prevEventData.filter((event) => event._id !== id)
                    );
                } else {
                    console.log(
                        "Some Error Occured deleting event at frontend: ",
                        response
                    );
                }
            } catch (error) {
                console.log("Error deleting event at frontend: ", error);
            }
        } else {
            // User clicked "Cancel", do nothing or handle accordingly
        }
    };
    const fetchEvents = async () => {
        try {
            const response = await fetch(
                backendUrl + "/api/event/fetchAllEvents",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.ok) {
                const data = await response.json();
                console.log("events are ", data.events);
                setEventData(data.events); // Use setEventData to update the state
            } else {
                console.log(
                    "Some Error Occured fetching events at frontend: ",
                    response
                );
            }
        } catch (error) {
            console.error("Error fetching events at frontend: ", error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const formatDateToLong = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.toLocaleString("default", { month: "long" });
        const day = date.getDate().toString().padStart(2, "0");
        return `${day}-${month}-${year}`;
    };

    return (
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm dark:divide-gray-700 dark:bg-gray-900">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                                Heading
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                                Date
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                                Time
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                                Venue
                            </th>
                            <th className="px-4 py-2" />
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {eventData.map((event) => (
                            <tr key={event._id}>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                                    {event.heading}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                                    {formatDateToLong(event.date)}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                                    {event.time}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                                    {event.venue}
                                </td>
                                <Form.Group>
                            
                        </Form.Group>
                                {/* <td className="whitespace-nowrap px-4 py-2">
                                    <button
                                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        onClick={editEventHandle}
                                    >
                                        Edit
                                    </button>
                                </td> */}
                                <td className="whitespace-nowrap px-4 py-2">
                                    <button
                                        className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                                        onClick={() => {
                                            deleteEventHandle(event._id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default EventTable;
