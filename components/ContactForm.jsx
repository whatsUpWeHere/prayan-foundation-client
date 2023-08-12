import React from 'react';
import {contact} from '@/assets'
import Image from 'next/image'
import SectionWrapper from '@/hoc/SectionWrapper';

const ContactForm = () => {
    return (
        <div className="contact bg-gray-100 py-12">
            <div className="container mx-auto">
                <div className="section-header text-center">
                    <p>Get In Touch</p>
                    <h2>Contact for any query</h2>
                </div>
                <div className="contact-img">
                    <Image src={contact} alt="Image" ></Image>
                    
                </div>
                <div className="contact-form mt-8 md:mt-0">
                    <form name="sentMessage" id="contactForm" noValidate>
                        <div className="mb-4">
                            <input type="text" className="form-input" id="name" placeholder="Your Name" required />
                            <p className="text-red-500 text-xs italic"></p>
                        </div>
                        <div className="mb-4">
                            <input type="email" className="form-input" id="email" placeholder="Your Email" required />
                            <p className="text-red-500 text-xs italic"></p>
                        </div>
                        <div className="mb-4">
                            <input type="text" className="form-input" id="subject" placeholder="Subject" required />
                            <p className="text-red-500 text-xs italic"></p>
                        </div>
                        <div className="mb-4">
                            <textarea className="form-textarea" id="message" placeholder="Message" required></textarea>
                            <p className="text-red-500 text-xs italic"></p>
                        </div>
                        <div>
                            <button className="btn btn-custom" type="submit" id="sendMessageButton">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SectionWrapper(ContactForm);
