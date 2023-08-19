import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TestimonialSection.css';
import { FaInstagram, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';
import {Cardsdata} from "@/constants";





function Cards() {
  

  return (
    <div className="testimonial">
      <Container>
        <div className="section-header text-center">
          <p>Meet Our Team</p>
          <h2>Awesome guys behind Prayan Foundation</h2>
        </div>
        <Row>
          {Cardsdata.map((card, index) => (
            <Col lg={3} md={6} key={index}>
              <div className="card" style={{ width: '18rem' }} id="member-box">
                <img src={card.imageSrc} className="card-img-top" alt="..." id="member-img" />
                <div id="mem-card-div">
                  < h2 id="mem-box-title">{card.name}</h2>
                  <p id="mem-box-position">{card.role}</p>
                  <div className="team-social">
                    <a href={card.linkedin} className="btn btn-primary" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    <a href={card.insta} className="btn btn-primary" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href={card.gmail} className="btn btn-primary" target="_blank" rel="noopener noreferrer"><FaMailBulk /></a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Cards;
