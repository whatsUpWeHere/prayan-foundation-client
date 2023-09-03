import React, { useState } from 'react';
import './initiative-box.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { InitiativeData } from '@/constants';

const Check = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsClicked(false);
    };

    const [expandedStates, setExpandedStates] = useState(
        InitiativeData.map(() => false) // Initialize all cards as not expanded
    );
    const handleClick = () => {
        setIsClicked(true);

    };
    const handleButtonClick = (index) => {
        const updatedExpandedStates = [...expandedStates];
        updatedExpandedStates[index] = !updatedExpandedStates[index];
        setExpandedStates(updatedExpandedStates);
        handleClick();
    };

    return (
        <Container>

            <Row>
                {InitiativeData.map((card, index) => (
                    <Col lg={3} md={4} sm={6} xs={12} className="p-2" key={index}>
                        <div className="causes-item bg-white border  rounded-lg shadow-lg p-6">
                            <div className="causes-img" id="initiative-img">
                                <Image src={card.imageSrc} alt="Image" width={400} height={200} className="w-full h-auto" />
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
                                    {card.description}
                                </p>
                            </div>
                            <div className="causes-btn mt-4  flex justify-center items-center  mx-auto" id="footer-in">
                                <button
                                    className={`fancy-button ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''
                                        }`}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleButtonClick(index)}
                                >
                                    {expandedStates[index] ? (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" /></svg>

                                        </>
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" /></svg>

                                        </>
                                    )}
                                    <span className={`triangle ${isHovered ? 'show' : ''}`}></span>
                                </button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

        </Container>
    );
};

export default Check;
