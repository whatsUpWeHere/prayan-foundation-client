import React from 'react';
import './initiative-box.css';
import {Container, Card, Row, Col } from 'react-bootstrap';
import { OurInidata } from '@/constants';
import{ useState } from 'react';

function OurIni() {
    const [expandedStates, setExpandedStates] = useState(new Array(OurInidata.length).fill(false));

    const expandFunc = (index) => {
        const newExpandedStates = [...expandedStates];
        newExpandedStates[index] = !newExpandedStates[index];
        setExpandedStates(newExpandedStates);
    };

    return (
        <Container id="root-root">
            <div className=" flex items-center justify-center flex-col mx-auto pt-13">
          <h3 className="font-bold text-2xl text-[#fdbe33]">  What We Do?</h3>
          <p className="text-[#4A4C70] text-4xl text-center letter-wider font-semibold px-13 py-7 border border-red-500">
          We believe that we can save more lifes with you 
          </p>
        </div>
            <Row>
                {OurInidata.map((card, index) => (
                    <Col key={index} md={4} className={`mb-4 ${expandedStates[index] ? 'expanded' : ''}`} id="card-root">
                        <Card id="main-card">
                            <div className={`d-flex align-items-center service-item`} id="div-root">
                                <Card.Img
                                    src={card.imageSrc}
                                    alt="Card image"
                                    className="mr-3"
                                    // 
                                    style={{width: '8em', height: '5em'}}
                                />
                                <div id="content-div">
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text id="conent-root" className={expandedStates[index] ? 'expanded' : ''}>
                                        {card.content}
                                    </Card.Text>
                                </div>
                                <hr />
                                <span>
                                    
                                        <button className="fancy-button" onClick={() => expandFunc(index)}>
                                            &gt;&gt;
                                        </button>

                                </span>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default OurIni;