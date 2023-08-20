import React, { useState } from 'react';
import './initiative-box.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const NewComponent = ({ Cardsdata }) => {
    const [expandedStates, setExpandedStates] = useState(
        Cardsdata.map(() => false) // Initialize all cards as not expanded
    );

    const handleButtonClick = (index) => {
        const updatedExpandedStates = [...expandedStates];
        updatedExpandedStates[index] = !updatedExpandedStates[index];
        setExpandedStates(updatedExpandedStates);
    };

    return (
        <Container>
            <Row>
                {Cardsdata.map((card, index) => (
                    <Col lg={3} md={4} sm={6} xs={12} className="p-2" key={index}>
                        <div className="causes-item bg-white border border-gray-300 rounded-lg shadow-lg p-6">
                            <div className="causes-img" id="initiative-img">
                                <img src={card.imageSrc} alt="Image" className="w-full h-auto" />
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
                                    {card.paragraph}
                                </p>
                            </div>
                            <div className="causes-btn mt-4" id="footer-in">
                                <button
                                    className="btn btn-custom"
                                    id="initiative-button"
                                    onClick={() => handleButtonClick(index)}
                                >
                                    {expandedStates[index] ? (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                                                <path d="..." /> {/* Your minimized SVG path */}
                                            </svg>
                                            <span style={{ color: 'red' }}>minimise please</span>
                                        </>
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 576 512">
                                                <path d="..." /> {/* Your read more SVG path */}
                                            </svg>
                                            <span style={{ color: 'blue' }}>read more</span>
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

export default NewComponent;
