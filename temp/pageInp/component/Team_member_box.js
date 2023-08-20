import React from 'react';
import './mem-card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';

function Cards() {
  const Cardsdata = [
    {
      imageSrc: 'https://source.unsplash.com/random/300×300',
      title: 'Member 1',
      paragraph: 'Position 1',
  },
  {
      imageSrc: 'https://source.unsplash.com/random/300×300',
      title: 'Member 2',
      paragraph: 'Position 2',
  },
  {
      imageSrc: 'https://source.unsplash.com/random/300×300',
      title: 'Member 2',
      paragraph: 'Position 2',
  },
  {
      imageSrc: 'https://source.unsplash.com/random/300×300',
      title: 'Member 2',
      paragraph: 'Position 2',
  },



    // Add more testimonial objects here
  ];

  return (
    <div className="testimonial">
      <Container>

        <Row>
          {Cardsdata.map((card, index) => (
            <Col lg={3} md={6} key={index}>
              <div className="card" style={{ width: '18rem' }} id="member-box">
                <img src={card.imageSrc} className="card-img-top" alt="..." id="member-img" />
                <div id="mem-card-div">
                  < h2 id="mem-box-title">{card.name}</h2>
                  <p id="mem-box-position">{card.title}</p>
                  <p id="#">{card.paragraph}</p>
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
