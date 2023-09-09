"use client";
import React, { useState } from "react";
import EventHorizontalTabs from "./EventHorizontalTabs";
import Link from "next/link";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="flex w-full border min-h-[100vh] border-red-500 ">
            <div className="w-[150px] bg-gray-200 p-2">
                <div
                    onClick={() => handleTabClick(0)}
                    className={`mx-auto bg-red-300 m-3  mt-3 w-[100%] font-bold border-2 text-center border-b-blue-500 cursor-pointer ${
                        activeTab === 0 ? "bg-red-300" : "bg-red-400"
                    }`}
                >
                    For&nbsp;Admin
                </div>
                <div
                    onClick={() => handleTabClick(1)}
                    className={`mx-auto m-3 w-[100%] font-bold border-2 text-center border-b-blue-500 cursor-pointer ${
                        activeTab === 0 ? "bg-gray-300" : "bg-gray-100"
                    }`}
                >
                    Events
                </div>
            </div>
            <div className="flex-1 border  border-red-500 p-4">
                {activeTab === 0 && (
                    <div>
                        <span className="font-bold text-2xl text-bold ">
                            for admin:
                        </span>
                        <ul>
                            <li className="font-bold p-2">
                                <span className="w-15 h-15 rounded-full bg-red-500 inline-block">
                                    &nbsp;
                                </span>
                                &nbsp;If you can&apos;t see admin dashboard or
                                any other kind of error, try refreshing the page
                            </li>
                            <li className="p-2">
                                <span className="w-15 h-15 rounded-full bg-red-500 inline-block">
                                    &nbsp;
                                </span>
                                &nbsp;For any kind of data manipulation, best
                                and easy way is to manipulate directly from
                                mongodb atlas dashboard. Visit&nbsp;
                                <span className="text-blue-600 font-bold cursor:pointer">
                                    <Link
                                        href="https://cloud.mongodb.com/v2/64ecc91b66f0ec497b646617#/overview"
                                        target="_blank"
                                    >
                                        Mongodb Atlas dashboard
                                    </Link>
                                </span>
                                &nbsp;OR&nbsp;
                                <span className="text-blue-600 font-bold cursor:pointer">
                                    <Link
                                        href="https://www.mongodb.com/atlas"
                                        target="_blank"
                                    >
                                        MongoDB atlas
                                    </Link>
                                </span>
                            </li>
                            <li className="p-2">
                                <span className=" w-15 h-15 rounded-full bg-red-500 inline-block">
                                    &nbsp;
                                </span>
                                &nbsp;The FrontEnd is deployed for free on
                                &nbsp;
                                <span className="text-blue-600 font-bold cursor:pointer">
                                    <Link
                                        href="https://vercel.com/dashboard"
                                        target="_blank"
                                    >
                                        Vercel
                                    </Link>
                                </span>
                            </li>
                            <li className=" p-2">
                                <span className=" w-15 h-15 rounded-full bg-red-500 inline-block">
                                    &nbsp;
                                </span>
                                &nbsp;The backend is hosted for free on
                                Adaptable IO. Visit&nbsp;
                                <span className="text-blue-600 font-bold cursor:pointer">
                                    <Link href="https://adaptable.io/app/dashboard#">
                                        Adaptable IO Dashboard
                                    </Link>
                                </span>
                            </li>
                            <li className="p-2">
                                <span className=" w-15 h-15 rounded-full bg-red-500 inline-block">
                                    &nbsp;
                                </span>
                                &nbsp;All the volunteer images and event images
                                are stored in firebase storage bucket,
                                Visit&nbsp;
                                <span className="text-blue-600 font-bold cursor:pointer">
                                    <Link
                                        href="https://console.firebase.google.com/project/prayan-foundation/storage/prayan-foundation.appspot.com/files"
                                        target="_blank"
                                    >
                                        Firebase Console
                                    </Link>
                                </span>
                            </li>
                            <li className="p-2">
                                <span className=" w-15 h-15 rounded-full bg-red-500 inline-block">
                                    &nbsp;
                                </span>
                                &nbsp;All the source code is available on &nbsp;
                                <span className="text-blue-600 font-bold cursor:pointer">
                                    <Link
                                        href="https://github.com/"
                                        target="_blank"
                                    >
                                        Github
                                    </Link>
                                </span>
                            </li>
                            <li className="p-2">
                                <span className=" w-15 h-15 rounded-full bg-red-500 inline-block">
                                    &nbsp;
                                </span>
                                &nbsp;REMEMBER: to use official email of Prayan
                                Foundation to log in all above platforms &nbsp;
                                <span className="text-blue-600 font-semibold text-sm bg-gray-200 cursor:pointer">
                                    pryanfoundations@gmail.com
                                </span>
                            </li>
                        </ul>
                    </div>
                )}
                {activeTab === 1 && (
                    <div className="h-full flex">
                        <EventHorizontalTabs />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
