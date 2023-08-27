"use client";
import React from "react";
import Image from "next/image";

import "./QrCodeStyleSheet.css";
import { QRCode } from "@/assets";
import { QRCode2 } from "@/assets";

const QrCodeFile = () => {
    const bgimg = "https://source.unsplash.com/random?donate,charity,help,poor";
    const sectionStyle = {
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
    };

    const handleCopy = async () => {
        const copyText = "9452065699795@paytm";

        try {
            await navigator.clipboard.writeText(copyText);
            alert("Copied the text: " + copyText);
        } catch (error) {
            console.error("Error copying text: ", error);
        }
    };

    return (
        <section
            className="background-radial-gradient overflow-hidden "
            style={sectionStyle}
        >
            <div className="absolute w-screen h-screen bg-black opacity-50 top-0 left-0 "></div>
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5 z-5">
                <div>
                    <h1
                        className="my-5 display-5 fw-bold ls-tight"
                        style={{ color: "hsl(218, 81%, 95%)" }}
                    >
                        "heading" <br />
                        <span style={{ color: "hsl(218, 81%, 75%)" }}>
                            "subheading"
                        </span>
                    </h1>
                    <p
                        className="mb-4 opacity-70"
                        style={{ color: "hsl(218, 81%, 85%)" }}
                    >
                        "content"
                    </p>
                </div>
                <div className=" flex items-center justify-center row align-items-center mb-5 gap-10">
                    <div className="w-[300px] h-auto z-5">
                        <Image
                            src={QRCode2}
                            id="qr-code"
                            alt="QrCode"
                            width="300px"
                            height="auto"
                        />
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0 position-relative shadow-xl">
                        <div
                            id="radius-shape-1"
                            className="position-absolute rounded-circle shadow-5-strong"
                        ></div>
                        <div
                            id="radius-shape-2"
                            className="position-absolute shadow-5-strong"
                        ></div>

                        <div className="card bg-glass" id="data-div">
                            <div className="card-body px-4 py-5 px-md-5">
                                <form>
                                    <div className="form-outline mb-4">
                                        <h4>or</h4>
                                        <hr />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <h4>
                                            <strong>UPI id:</strong>
                                        </h4>
                                        <h5>paytm id:</h5>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <h6>9452065699795@paytm</h6>{" "}
                                    </div>

                                    <button
                                        className="btn btn-primary btn-block mb-4"
                                        onClick={handleCopy}
                                    >
                                        Copy
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QrCodeFile;
