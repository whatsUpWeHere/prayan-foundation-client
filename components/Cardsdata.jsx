"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/TestimonialSection.css";

import "@/styles/Cards.css";
import { FaInstagram, FaLinkedinIn, FaMailBulk } from "react-icons/fa";
import { cards_data } from "@/constants";
import Image from "next/image";
import { facts } from "@/assets";

const Cardsdata = () => {
    return (
        <div className="testimonial">
            <Container>
                <div class="section-header text-center">
                    <p>Meet Our Team</p>
                    <h2>Awesome guys behind Prayan Foundation</h2>
                </div>
                <Row>
                    {cards_data.map((card, index) => {
                        console.log("card.imagesrc is ", card.imageSrc, "card is ", card);
                        return (
                            <Col
                                lg={3}
                                md={6}
                                key={index}
                                className="w-[18rem] h-[18rem]"
                            >
                                <div
                                    className="card"
                                    style={{ width: "18rem" }}
                                    id="member-box"
                                >
                                    <Image
                                        src={card.imageSrc}
                                        width={100}
                                        height={100}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div id="mem-card-div">
                                        <h2 id="mem-box-title">{card.name}</h2>
                                        <p id="mem-box-position">{card.role}</p>
                                        <div className="team-social">
                                            <a
                                                href={card.linkedin}
                                                className="btn btn-primary"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaLinkedinIn />
                                            </a>
                                            <a
                                                href={card.insta}
                                                className="btn btn-primary"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaInstagram />
                                            </a>
                                            <a
                                                href={card.gmail}
                                                className="btn btn-primary"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaMailBulk />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default Cardsdata;
