import React from "react";
import Image from "next/image";
import Link from "next/link";
import '@/app/globals.css'
import { logo } from "@/assets";

const Footer = () => {
    return (
        <footer className="bg-[#20212B] text-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="border-b border-gray-100 py-8 dark:border-gray-800 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16">
                        <div className="block text-teal-600 dark:text-teal-300 "></div>
                        <div className="mt-8 space-y-4 lg:mt-0">
                            <span className="hidden h-1 w-10 rounded bg-teal-500 lg:block" />
                            <div>
                                <h2 className="text-2xl font-medium text-[#FDBE33]">
                                    Join Us
                                </h2>
                                <p className="mt-4 max-w-lg text-gray-500 dark:text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Veritatis, harum deserunt
                                    nesciunt praesentium, repellendus eum
                                    perspiciatis ratione pariatur a aperiam eius
                                    numquam doloribus asperiores sunt.
                                </p>
                            </div>
                            <form className="mt-6 w-full">
                                <label htmlFor="UserEmail" className="sr-only">
                                    Email
                                </label>
                                <div className="rounded-md border border-gray-100 p-2 dark:border-gray-800 sm:flex sm:items-center sm:gap-4 ">
                                    <input
                                        type="email"
                                        id="UserEmail"
                                        placeholder="example@email.com"
                                        className="w-full border-none focus:border-transparent focus:ring-transparent dark:bg-gray-900 dark:text-white sm:text-sm py-3 my-3"
                                    />
                                    <button className="mt-1 w-full rounded bg-teal-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="py-8 lg:py-16 lg:pe-16 ">
                        <div className="flex text-teal-300  justify-start items-center ml-11 ">
                            <Image
                                src={logo}
                                alt="logo"
                                width={80}
                                height={80}
                            ></Image>
                            <div className="font-bold text-2xl pl-10 text-white">
                                Prayan NGO
                            </div>
                        </div>
                        {/* mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 place-items-center	 */}
                        <div className=" flex justify-center items-center gap-5 md:gap-10 mx-auto mt-5">
                            <div>
                                <p className="font-medium text-[#FDBE33]">
                                    Navigation Links
                                </p>
                                <ul className="mt-6 space-y-4 text-sm  list-none pl-0">
                                    <li >
                                        <Link
                                            href="/about"
                                            className=" transition hover:opacity-75 text-gray-200 "
                                            
                                        >
                                            about us
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="/our-units"
                                            className="transition hover:opacity-75 text-gray-200"
                                        >
                                            Our Units
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/events"
                                            className="transition hover:opacity-75 text-gray-200"
                                        >
                                            Events
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/blog"
                                            className="transition hover:opacity-75 text-gray-200"
                                        >
                                            Our Blog
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium text-[#FDBE33]">
                                    Quick Links
                                </p>
                                <ul className="list-none mt-6 space-y-4 text-sm pl-0">
                                    <li>
                                        <Link
                                            href="/donate"
                                            className="transition hover:opacity-75 text-gray-200"
                                        >
                                            Donate Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/contact"
                                            className="transition hover:opacity-75 text-gray-200"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/dashboard"
                                            className="transition hover:opacity-75 text-gray-200"
                                        >
                                            Admin Dashboard
                                        </Link>
                                    </li>
                                    <li>&nbsp;</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium text-[#FDBE33]">
                                    People behind prayan
                                </p>
                                <ul className=" mt-6 space-y-4 text-sm pl-0 list-none">
                                    <li>
                                        <Link
                                            href="/about/developers"
                                            className="transition hover:opacity-75 text-gray-200"
                                        >
                                            developers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="transition hover:opacity-75 text-gray-200"
                                        >
                                            FAQs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="transition hover:opacity-75 text-gray-200"
                                        >
                                            Live Chat
                                        </Link>
                                    </li>
                                    <li>&nbsp;</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 border-t border-gray-100 pt-8 dark:border-gray-800 flex flex-col items-center">
                            <ul className="flex flex-wrap gap-4 text-xs ">
                                <li>
                                    <Link
                                        href="#"
                                        className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                                    >
                                        Cookies
                                    </Link>
                                </li>
                            </ul>
                            <p className="mt-8 text-xs text-gray-500 dark:text-gray-400">
                                © 2023. Prayan Foundation. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
