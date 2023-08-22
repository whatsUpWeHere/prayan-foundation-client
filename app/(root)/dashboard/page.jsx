// 'use client'
import React from "react";
import { currentUser, SignedIn, SignInButton } from "@clerk/nextjs";
// importing redirect
import { redirect } from "next/navigation";
import EventForm from "@/components/forms/EventForm";

const page = async () => {
    const { isLoaded, isSignedIn, user } = await currentUser();

    if (!isSignedIn) {
        return redirect("/sign-in");
    }

    if (user?.unsafeMetadata.role !== "admin") {
        return (
            <div>
                <h1 className="font-bold text-3xl text-center">
                    Sorry, you are not authorized to view this page
                </h1>
                <p className="font-semibold text-xl m-3">
                    Please sign in with admin account
                </p>
                <SignInButton />
            </div>
        );
    }
    return (
        <>
            <div className="inline-flex rounded-md shadow-sm">
                <a
                    href="#"
                    aria-current="page"
                    className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                    Profile
                </a>
                <a
                    href="#"
                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                    Settings
                </a>
                <a
                    href="#"
                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                    Messages
                </a>
            </div>

            <EventForm />
        </>
    );
};

export default page;
