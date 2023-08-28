import React from "react";
import Image from 'next/image';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { NGO_about_mission_vision } from '@/constants';

const OurInfo = () => {
    return <div>
        <Row className=" m-5 md:m-10">
            <Col md={4} className='py-7 h-[90%] w-auto  overflow-hidden border border-red-500' >
                <Image
                    
                    src='https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/About.png?raw=true'
                    alt="me"
                    width={400}
                    height={100}
                    className='object-contain'
                />
            </Col>
            <Col md={8}>
                <div className=" flex items-start justify-center flex-col mx-auto pt-13">
                    <h3 className="mx-auto text-2xl text-[#fdbe33]">
                        Learn About Us</h3>
                    <p className="text-[#4A4C70] text-5xl text-center letter-wider font-semibold  py-7 mx-auto">
                        Prayan Foundation
                    </p>
                </div>
                <Tabs
                    defaultActiveKey="about"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                >
                    {NGO_about_mission_vision.map((item, index) =>
                    (<Tab eventKey={item.eventKey} title={item.title} key={index} className='text-justify  mt-0'>
                        {item.content}
                    </Tab>)
                    )}


                </Tabs>
            </Col>
        </Row>
    </div>
};

export default OurInfo;
