import React from "react";
import { contact } from "@/assets";
import Image from "next/image";
import SectionWrapper from "@/hoc/SectionWrapper";

const ContactForm = () => {
    return (
        <div className="contact bg-gray-100 py-12 ">
            <div className="container mx-auto ">
                <div className="section-header text-center py-10">
                    <p className="font-bold text-xl text-[#fdbe33]">Get In Touch</p>
                    <h2 className="text-[#4A4C70] text-[2.5rem] letter-wider font-semibold py-2 ">Contact for any query</h2>
                </div>
                <div className="contact-img w-[100%] bg-cover bg-center bg-no-repeat bg-fixed   ">
                    <Image src={contact} alt="Image">
                        
                    </Image>
                </div>
                <section className="bg-[#FDE5EC] text-black max-w-[70%]  border border-gray-300 rounded-lg shadow-md mx-auto">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md  ">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#4A4C70] ">
                            Contact Us
                        </h2>
                        
                        <form action="#" className="space-y-8">
                        <div>
                                <label
                                    htmlFor="subject"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="block p-3 w-full text-sm text-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 "
                                    placeholder="your name"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="block p-3 w-full text-sm text-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 "
                                    placeholder="info@site.com"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="block p-3 w-full text-sm text-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 "
                                    placeholder="Let us know how we can help you"
                                    required=""
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="message"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Your message
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="block p-3 w-full text-sm text-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 "
                                    placeholder="Leave a comment..."
                                    defaultValue=""
                                />
                            </div>
                            <button
                                type="submit"
                                className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg  sm:w-fit  bg-sky-400 hover:border-orange-500 hover:bg-sky-600 border-gray-500 shadow-md bg-red  hover:shadow-lg transition duration-300 ease-in-out"
                            >
                                Send message
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ContactForm;
