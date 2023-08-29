"use client";
import React, { useState } from "react";
import { contact } from "@/assets";
import Image from "next/image";
import SectionWrapper from "@/hoc/SectionWrapper";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const serviceId = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(form);

        emailjs
            .send(
                serviceId,
                templateId,
                {
                    from_name: form.name,
                    to_name: "Prayan Foundation",
                    to_email: ["pryanfoundations@gmail.com"],
                    message: form.message,
                    reply_to: form.email,
                },
                publicKey
            )
            .then(
                (res) => {
                    setLoading(false);
                    alert(
                        "We will contact you soon. Thank you for contacting us."
                    );
                    console.log(res);

                    setForm({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.log(error);
                    alert(error.text);
                }
            );
    };

    return (
        <div className="contact bg-gray-100 py-12 ">
            <div className="container mx-auto ">
                <div className="section-header text-center py-10">
                    <p className="font-bold text-xl text-[#fdbe33]">
                        Get In Touch
                    </p>
                    <h2 className="text-[#4A4C70] text-[2.5rem] letter-wider font-semibold py-2 ">
                        Contact for any query
                    </h2>
                </div>
                <div className="contact-img w-[100%] bg-cover bg-center bg-no-repeat bg-fixed   ">
                    <img src="https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/contact.png?raw=true" style={{width:"100%",height:"40%"}} alt="Image"/>
                </div>
                {/* bg-[#FDE5EC] */}
                <section className="bg-[#D5e0e8] text-black max-w-[70%]  border border-gray-300 rounded-lg shadow-md mx-auto">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md  ">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#4A4C70] ">
                            Contact Us
                        </h2>

                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="block p-3 w-full text-sm text-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 "
                                    placeholder="your name"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
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
                                    name="email"
                                    className="block p-3 w-full text-sm text-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 "
                                    placeholder="info@site.com"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
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
                                    name="subject"
                                    className="block p-3 w-full text-sm text-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 "
                                    placeholder="Let us know how we can help you"
                                    required
                                    value={form.subject}
                                    onChange={handleChange}
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
                                    name="message"
                                    rows={6}
                                    className="block p-3 w-full text-sm text-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 "
                                    placeholder="Leave a comment..."
                                    defaultValue=""
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg  sm:w-fit  bg-sky-400 hover:border-orange-500 hover:bg-sky-600 border-gray-500 shadow-md bg-red  hover:shadow-lg transition duration-300 ease-in-out"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ContactForm;
