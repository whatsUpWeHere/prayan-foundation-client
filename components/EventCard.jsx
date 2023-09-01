"use client";
import React, { useState } from "react";
import { event_1 } from "@/assets";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarDays,
    faClock,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const EventCard = ({ content, date, heading, time, venue, image }) => {
    const formatDateToLong = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.toLocaleString("default", { month: "long" });
        const day = date.getDate().toString().padStart(2, "0");
        return `${day}-${month}-${year}`;
    };

    return (
        <div className="event-item bg-blue-100 mb-6 p-4 max-w-[500px] shadow-lg">
            <div
                className="image-container "
                style={{
                    width: "400px",
                    height: "300px",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <Image
                    src={image}
                    alt="Image"
                    layout="fill"
                    objectFit="cover" // This property controls how the image is displayed
                    objectPosition="center top" // You can adjust this to control the focal point of the image
                    // className="w-full h-full"
                />
            </div>
            <div className="event-content py-6 pl-2 flex-col">
                <div className="event-meta shadow-sm flex flex-col items-start justify-center  py-1">
                    <p className="flex items-center mb-2  border  shadow-sm">
                        <FontAwesomeIcon
                            icon={faCalendarDays}
                            className=" mr-2 border w-[15px]"
                        />

                        <span className="text-sm">
                            {formatDateToLong(date)}
                        </span>
                    </p>
                    <p className="flex items-center  mb-2  border  shadow-sm">
                        <FontAwesomeIcon
                            icon={faClock}
                            className=" mr-2 border w-[15px]"
                        />
                        <span className="text-sm">{time}</span>
                    </p>
                    <p className="flex items-center  mb-2 border  shadow-sm">
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            className=" mr-2 border w-[15px]"
                        />
                        <span className="text-sm">{venue}</span>
                    </p>
                </div>
                <div className="event-text relative">
                    <h3 className="text-2xl font-bold mb-2">{heading}</h3>
                    <p className="mb-4 ">{content}</p>
                    <Link
                        href=""
                        className="btn btn-custom bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
                    >
                        Join Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
