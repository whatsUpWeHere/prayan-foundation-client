import React from "react";
import CountUp from 'react-countup';
import { Parallax } from 'react-parallax';
import { FaLinkedinIn, FaInstagram, FaMailBulk } from 'react-icons/fa';



const ParallaxComponent = () => {
    return <Parallax bgImage={'https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/facts.png?raw=true'} strength={500} style={{ height: '400px', width: '100%' }} className='my-6 '>
        <div className='facts bg-black opacity-50 flex items-center justify-evenly ' style={{ height: '400px', width: '100%' }}>
            <h1 style={{ textAlign: 'center', color: 'white' }} className="w-full ">
                <div className="container ">
                    <div className="row border my-5 ">
                        <div className="col-lg-3  col-md-6 py-[0.125rem]">
                            <div className="facts-item">
                                <img src="https://cdn.discordapp.com/attachments/920675701101830187/1145765349963346031/college.png"/>
                                <div className="facts-text">
                                    <h3 className="facts-plus text-xl lg:text-4xl font-semibold text-[#ffc23f]">
                                        <CountUp start={0} end={20} duration={7.5} />+
                                    </h3>
                                    <p className='text-xl lg:text-2xl text-[#fdbe33] font-semibold'>Colleges</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 py-[0.125rem] ">
                            <div className="facts-item">
                                <i className="flaticon-charity"></i>
                                <div className="facts-text">
                                    <h3 className="facts-plus text-xl lg:text-4xl font-semibold text-[#ffc23f]" style={{ strength: '500', font: '50px' }} >
                                        <CountUp start={0} end={2000} duration={7.5} />+
                                    </h3>
                                    <p className='text-xl lg:text-2xl text-[#fdbe33] font-semibold'>Volunteers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 py-[0.125rem]">
                            <div className="facts-item">
                                <i className="flaticon-kindness"></i>
                                <div className="facts-text">
                                    <h3 className="facts-plus text-xl lg:text-4xl font-semibold text-[#ffc23f]">
                                        <CountUp start={0} end={1000000} duration={7.5} />+
                                    </h3>
                                    <p className='text-xl lg:text-2xl text-[#fdbe33] font-semibold'>Our Goal to Serve People</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 py-[0.125rem]">
                            <div className="facts-item">
                                <i className="flaticon-kindness"></i>
                                <div className="facts-text">
                                    <h3 className="facts-plus text-xl lg:text-4xl font-semibold text-[#ffc23f]">
                                        <CountUp start={0} end={20000} duration={7.5} />+
                                    </h3>
                                    <p className='text-xl lg:text-2xl text-[#fdbe33] font-semibold'>People Served till now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </h1>
        </div>
    </Parallax>;
};

export default ParallaxComponent;
