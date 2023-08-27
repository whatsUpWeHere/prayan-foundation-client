"use client";
import React, { useState } from "react";
import EventHorizontalTabs from "./EventHorizontalTabs";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="flex w-full border min-h-[100vh] border-red-500 ">
            <div className="w-[150px] bg-gray-200 p-4">
                <div
                    onClick={() => handleTabClick(0)}
                    className={`p- w-[100%] border-2 border-red-500 cursor-pointer ${
                        activeTab === 0 ? "bg-gray-300" : "bg-gray-100"
                    }`}
                >
                    Events
                </div>
                
            </div>
            <div className="flex-1 border  border-red-500 p-4">
                {activeTab === 0 && (
                    <div className="h-full flex">
                        <EventHorizontalTabs />
                    </div>
                )}
                {activeTab === 1 && <div>Required functionality will be added in future as per requirement</div>}
                {activeTab === 2 && <div>Required functionality will be added in future as per requirement</div>}
            </div>
        </div>
    );
};

export default Dashboard;
