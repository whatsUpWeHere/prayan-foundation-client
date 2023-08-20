import React from "react";
import { event_1 } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarDays,
    faClock,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const EventCard = ({ title, description, date, time, location }) => {
    return (
        <div>
            <div className="event-item bg-blue-100 mb-6 p-4">
                <Image src={event_1} alt="Image" className="w-full"></Image>
                <div className="event-content p-6 pl-2 flex">
                    <div className="event-meta mr-10 flex flex-col  w-[145px] py-1">
                        <p className="flex items-center  mb-2 w-[145px] border border-b-slate-500 shadow-sm">
                            <FontAwesomeIcon
                                icon={faCalendarDays}
                                className=" mr-2 border w-[15px]"
                            />

                            <p className="text-sm">{date}</p>
                        </p>
                        <p className="flex items-center  mb-2 w-[165px] border border-b-slate-500 shadow-sm">
                            <FontAwesomeIcon icon={faClock} className=" mr-2 border w-[15px]" />
                            <p className="text-sm">{time}</p>
                            
                        </p >
                        <p className="flex items-center  mb-2 w-[165px] border border-b-slate-500 shadow-sm">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className=" mr-2 border w-[15px]"
                            />
                            <p className="text-sm">{location}</p>
                        </p >
                    </div>
                    <div className="event-text relative">
                        <h3 className="text-2xl font-bold mb-2">{title}</h3>
                        <p className="mb-4">{description}</p>
                        <Link
                            href=""
                            className="btn btn-custom bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
                        >
                            Join Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
