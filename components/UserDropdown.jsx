"use client";

import { Avatar, Dropdown } from "flowbite-react";

import React from "react";

import { useUser, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import UserProfileCard from "./UserProfileCard";
import { SignOutButton } from "@clerk/nextjs";

const UserDropdown = () => {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isSignedIn) {
        console.log("isLoaded ", isLoaded);
        console.log("isSignedIn: ", isSignedIn);
        return null;
    }
    const userUnsafeMetaData = user?.unsafeMetadata;
    const { name, email, role, donation, profileImageUrl } = userUnsafeMetaData;
    return (
        // <SignedIn>
        <Dropdown
            inline
            label=<Avatar
                rounded
                alt="User settings"
                img={profileImageUrl}
                placeholder="Aa"
            />
            className="bg-gray-800 rounded-lg"
        >
            <div className="userProfileCard w-full max-w-sm border  rounded-lg shadow bg-gray-800 border-gray-700 pl-3 pr-3 pt-5">
                <div className="flex flex-col items-center pb-5">
                    <h5 className="mb-1 text-xl font-medium text-white">
                        {name}
                    </h5>
                    <span className="text-sm text-gray-400">{role}</span>
                    <Image
                        className="w-24 h-24 mb-3  mt-3 rounded-full shadow-lg"
                        src={profileImageUrl}
                        alt="profile picture"
                        width={96}
                        height={96}
                    />
                    <span className="text-sm text-gray-300">
                        Your donations:&nbsp;
                        <span className="text-sm text-green-400 font-semibold">
                            {donation}
                        </span>
                        &nbsp; Rs
                    </span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <Link
                            href="/donate"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center  border rounded-lg focus:ring-4 focus:outline-none bg-green-800 text-white border-green-600 hover:bg-green-700 hover:border-green-700 focus:ring-green-700"
                        >
                            Donate
                        </Link>
                        <SignOutButton>
                            <Link
                                href="#"
                               
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none bg-red-600 hover:bg-red-700 focus:ring-blue-800"
                            >
                                Sign Out
                            </Link>
                        </SignOutButton>
                    </div>
                    {role === "member" && (
                        <div>
                            <Link
                                href="admin/dashboard"
                                onClick={() => signOut()}
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none bg-sky-600 hover:bg-sky-700 focus:ring-blue-800 mt-5"
                            >
                                Admin Dashboard
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </Dropdown>
        // </SignedIn>
    );
};

export default UserDropdown;
