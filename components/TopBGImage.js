import React from "react";
import Image from 'next/image'
import volunteerImg from '@/assets/img/volunteer.png';
const TopBGImage = ({text}) => {
    return <>
        {/* <div className="min-h-screen flex items-center justify-center bg-gray-800"> */}
        <div className="max-h-screen flex items-center justify-center bg-gray-800 relative h-[50vh] overflow-hidden w-[100%]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
            <Image className="absolute top-0 left-0 w-full h-full opacity-25 object-cover z-0" src={volunteerImg} alt="Background Image"  />
            <div className="relative z-2 text-white text-center py-20">
                <h1 className="text-5xl font-bold  text-[#fdbe33]">{text}</h1>
                
            </div>
        </div>
       
    </>
};

export default TopBGImage;
