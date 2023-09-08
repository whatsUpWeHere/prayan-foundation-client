'use client'
import React from "react";
import Image from "next/image";
import { prakash_rawat } from "@/assets";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeveloperProfileCard = ({ card }) => {
    const { name, role, linkedin, github, portfolio, image } = card;

    return (
        <div className="w-[250px] m-5 px-3 py-6  text-center bg-gray-800 rounded-lg shadow-black shadow-3xl mx-auto">
            <div className="space-y-4 xl:space-y-6">
                <Image
                    src={image}
                    alt="profile-picture"
                    width={150}
                    height={150}
                    className="mx-auto rounded-full h-36 w-36 "
                />
                <div className="space-y-2">
                    <div className="flex justify-center items-center flex-col text-lg font-medium leading-6">
                        <h3 className="text-gray-200 text-sm">{name}</h3>
                        <p className="text-indigo-300 text-xs">{role}</p>
                        <div className="flex justify-center mt-5 space-x-5 ">
                            <div
                                onClick={() => {
                                    window.open(github, "_blank");
                                }}
                                className="text-white cursor-pointer"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="hover:text-[#3469c5]  text-[1.5rem] transition duration-300 hover:scale-110"
                                />
                            </div>
                            <div
                                onClick={() => {
                                    window.open(portfolio, "_blank");
                                }}
                                className="text-white cursor-pointer"
                            >
                                <FontAwesomeIcon
                                    icon={faLink}
                                    className="hover:text-[#3469c5]  text-[1.5rem] transition duration-300 hover:scale-110"
                                />
                            </div>
                            <div
                                onClick={() => {
                                    window.open(linkedin, "_blank");
                                }}
                                className="text-white cursor-pointer"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="hover:text-[#3469c5]  text-[1.5rem] transition duration-300 hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DeveloperProfileCard;
