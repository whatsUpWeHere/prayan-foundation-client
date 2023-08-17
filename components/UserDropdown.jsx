"use client";

import { Avatar, Dropdown } from "flowbite-react";

import React from "react";
import { useClerk } from "@clerk/clerk-react";
import { useUser, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const UserDropdown = () => {
    const { signOut } = useClerk();
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
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
            label={<Avatar alt="User settings" img={profileImageUrl} />}
            className="bg-[#374151] text-white rounded-xl"
        >
            <Dropdown.Header>
                <div className="flex justify-around items-center">
                    <div className="flex flex-col justify-center items-center">
                        <span className="block text-sm text-gray-200 font-semibold  rounded-lg">
                            {name}
                        </span>
                        <span className="block text-sm text-orange-500 font-semibold  rounded-lg">
                            {role}
                        </span>
                        <span className="block text-sm text-emerald-400 font-semibold  rounded-lg ">
                            donations: {donation}
                        </span>
                    </div>
                    <Image
                        src={profileImageUrl}
                        alt="profile image"
                        width={200}
                        height={400}
                        className="w-15 h-15 rounded-full"
                    ></Image>
                </div>
                <span className="block truncate text-sm font-medium text-gray-300">
                    {email}
                </span>
            </Dropdown.Header>
            {role == "member" && (
                <Dropdown.Item className="text-gray-200 semi-bold hover:bg-teal-500 rounded-lg">
                    <Link href="/admin-dashboard"> Admin Dashboard</Link>
                </Dropdown.Item>
            )}

            <Dropdown.Divider />
            <Dropdown.Item className="bg-red-500 text-gray-200 semi-bold hover:bg-teal-500 rounded-lg">
                <button
                    onclick={signOut}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Sign out
                </button>
            </Dropdown.Item>
        </Dropdown>
        // </SignedIn>
    );
};

export default UserDropdown;
