"use client";
import React from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./QrCodeStyleSheet.css";
// import { QRCode } from "@/assets";
import { QRCode2 } from "@/assets";

const QrCodeFile = () => {
    const bgimg = "https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/donate.jpg?raw=true";
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
        <section className="background-radial-gradient overflow-hidden" style={sectionStyle}>

            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5 sticky-class">
                <div className="row gx-lg-5 align-items-center mb-5 sticky-class">
                    <div className="col-lg-6 mb-5 mb-lg-0 sticky-class" style={{ zIndex: 10 }} >
                    <h2 className="mx-auto text-3xl text-[#fdbe33] font-bold">
                        Wanna Contribute</h2>
                        <p className="text-[#ffff] text-5xl text-center letter-wider font-semibold  py-3 mx-auto">
                        Prayan Foundation</p>
                        <h5 className="text-[#ffff] mx-auto font-bold">&quot;Drops of water makes a mighty ocean&quot;- Though we are self-funded and self-sufficienctly operating since November 2022, 
                            but now when we are growing our dreams of serving a mass which knows no boundations; we need your help. Every small donation counts. 
                            Every penny of your&apos;s might help an orphan get her means of learning or a jobless man get his means of survival arranged or a safety 
                            apparel to some stray animal preventing the often occuring casualties. You never know when you earn someone&apos;s blessings through your 
                            selfless act of kindness. Donate now to secure a spot in someone&apos;s prayers!</h5>
                    
                        <span><Image src={QRCode2} id="qr-code" alt="QrCode" width="300px" height="300px"/></span>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                        <div className="card bg-glass" id="data-div">
                            <div className="card-body px-4 py-5 px-md-5">
                                <form>
                                    <div className="form-outline mb-4">
                                        <h4>or</h4><hr />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <h4><strong>UPI id:</strong></h4>
                                        <h5>paytm id:</h5>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <h6>9452065699795@paytm</h6> </div>




                                    <button
                                        className="btn btn-primary btn-block mb-4"
                                        onClick={async () => {
                                            const copyText = "9452065699795@paytm";

                                            try {
                                                await navigator.clipboard.writeText(copyText);
                                                alert("Copied the text: " + copyText);
                                            } catch (error) {
                                                console.error("Error copying text: ", error);
                                            }
                                        }}
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
