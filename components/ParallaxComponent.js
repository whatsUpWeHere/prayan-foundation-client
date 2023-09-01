import React from "react";
import CountUp from 'react-countup';
import { Parallax } from 'react-parallax';
import { FaLinkedinIn, FaInstagram, FaMailBulk } from 'react-icons/fa';
import Image from 'next/image';


const ParallaxComponent = () => {
    return <Parallax bgImage={'https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/facts.png?raw=true'} strength={500} style={{ height: '500px', width: '100%' }} className='my-6 '>
        <div className='facts bg-black opacity-60 flex items-center justify-evenly  ' style={{ height: '500px', width: '100%' }}>

            <div className=" flex my-0  h-full  justify-center items-center text-center text-white w-full " style={{ height: '500px', width: '100%' }}>
                <div className="row flex justify-center items-center  h-full w-full  py-10 ">
                    <div className="col-lg-3  col-md-6 py-[0.125rem]">
                        <div className="facts-item flex items-start justify-center ">

                            <Image src="https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/collage.png?raw=true" alt="img" width={75} height={75} className="pt-0.5" />
                            <div className="facts-text ">
                                <h3 className="facts-plus text-3xl lg:text-4xl font-semibold text-[#ffc23f] ">
                                    <CountUp start={0} end={20} duration={7.5} />+
                                </h3>
                                <p className='text-xl lg:text-2xl text-[#fdbe33] font-semibold '>Colleges</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 ">
                        <div className="facts-item flex items-start justify-center ">
                            <Image src="https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/social-care.png?raw=true" alt="img" width={75} height={75} className="pt-0.5" />
                            <div className="facts-text">
                                <h3 className="facts-plus text-3xl lg:text-4xl font-semibold text-[#ffc23f]" style={{ strength: '500', font: '50px' }} >
                                    <CountUp start={0} end={2000} duration={7.5} />+
                                </h3>
                                <p className='text-xl lg:text-2xl text-[#fdbe33] font-semibold'>Volunteers</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 py-[0.125rem]">
                        <div className="facts-item flex items-start justify-center ">
                            <Image src="https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/error.png?raw=true" alt="img" width={75} height={75} className="pt-0.5" />
                            <div className="facts-text">
                                <h3 className="facts-plus text-3xl lg:text-4xl font-semibold text-[#ffc23f]">
                                    <CountUp start={0} end={1000000} duration={7.5} />+
                                </h3>
                                <p className='text-xl lg:text-2xl text-[#fdbe33] font-semibold'>Our Goal to Serve People</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 py-[0.125rem]">
                        <div className="facts-item flex items-start justify-center ">
                            <Image src="https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/support.png?raw=true" alt="img" width={75} height={75} className="pt-0.5" />
                            <div className="facts-text">
                                <h3 className="facts-plus text-3xl lg:text-4xl font-semibold text-[#ffc23f]">
                                    <CountUp start={0} end={20000} duration={7.5} />+
                                </h3>
                                <p className='text-xl lg:text-2xl text-[#fdbe33] font-semibold'>People Served till now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </Parallax>;
};

export default ParallaxComponent;
