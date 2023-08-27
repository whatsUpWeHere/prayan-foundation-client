import React, { useState } from 'react';
import './initiative-box.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { Ourprojects } from '@/constants';

const Ourproject = () => {
    const [expandedStates, setExpandedStates] = useState(
        Ourprojects.map(() => false) // Initialize all cards as not expanded
    );

    const handleButtonClick = (index) => {
        const updatedExpandedStates = [...expandedStates];
        updatedExpandedStates[index] = !updatedExpandedStates[index];
        setExpandedStates(updatedExpandedStates);
    };

    return (
        <Container>
            <div className=" flex items-center justify-center flex-col mx-auto pt-13">
                <h3 className="font-bold text-2xl text-[#fdbe33]">  Our Projects</h3>
                <p className="text-[#4A4C70] text-4xl text-center letter-wider font-semibold px-13 py-7 border border-red-500">
                    Have a look on working of our Projects
                </p>
            </div>
            <Row>
                {Ourprojects.map((card, index) => (
                    <Col lg={3} md={4} sm={6} xs={12} className="p-2" key={index}>
                        <div className="causes-item bg-white border  rounded-lg shadow-lg p-6">
                            <div className="causes-img" id="initiative-img">
                                <Image src={card.imageSrc} alt="Image" width={100} height={100} className="w-full h-auto" />
                            </div>
                            <div
                                className={`causes-text mt-4 ${expandedStates[index] ? 'expanded' : ''
                                    }`}
                                id="initiative-content"
                            >
                                <h3 className="text-lg font-semibold">{card.title}</h3>
                                <p
                                    className={`mt-2 text-gray-600 ${expandedStates[index] ? 'expanded' : ''
                                        }`}
                                >
                                    {card.content}
                                </p>
                            </div>
                            <div className="causes-btn mt-4 border-2 flex justify-center items-center  mx-auto" id="footer-in">
                                <button
                                    className="btn btn-custom flex flex-col justify-center items-center"
                                    id="initiative-button"
                                    onClick={() => handleButtonClick(index)}
                                >
                                    {expandedStates[index] ? (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1.37em" viewBox="0 0 576 512"><path d="M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H320zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H320zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z" /></svg>

                                            <span id="min-tab">minimise please</span>
                                        </>
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="2.37em" viewBox="0 0 576 512"><path d="M528.3 46.5H388.5c-48.1 0-89.9 33.3-100.4 80.3-10.6-47-52.3-80.3-100.4-80.3H48c-26.5 0-48 21.5-48 48v245.8c0 26.5 21.5 48 48 48h89.7c102.2 0 132.7 24.4 147.3 75 .7 2.8 5.2 2.8 6 0 14.7-50.6 45.2-75 147.3-75H528c26.5 0 48-21.5 48-48V94.6c0-26.4-21.3-47.9-47.7-48.1zM242 311.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5V289c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V251zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm259.3 121.7c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5V228c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.8c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V190z" /></svg>

                                            <span id="read-more-tab ">read more</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

        </Container>
    );
};

export default Ourproject;
