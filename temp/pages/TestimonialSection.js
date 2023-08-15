'use client'

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TestimonialSection.css';

function TestimonialSection() {
  const testimonialData = [
    {
      name: 'Disha Goel',
      role: 'Member at Akshaypatra',
      imageSrc: 'images/testimonial-1.jpeg',
      text:
        "For me, Prayan is a source of joy and gratefulness through which I feel I make a tiny contribution towards the well-being of society. It is like a family to me where we work together, learn and grow.",
    },
    {
        name: 'Nitish Pandey',
        role: 'Member at Project Swashrit',
        imageSrc: 'images/testimonial-2.jpeg',
        text:
          "I absolutely love this organization! Their unwavering dedication to their mission is inspiring, and the impact they have made is truly remarkable. Their team is committed to making a difference.",
      },
      {
        name: 'Priyam Tiwari',
        role: 'Joint Secretary ZHDC Unit',
        imageSrc: 'images/testimonial-3.jpg',
        text:
          "Prayan, an exceptional organization, with an amazing team and their unwavering commitment to empowering communities in need has been inspiring, and I am grateful to be a part of their meaningful work.",
      },
      {
        name: 'Ananya Gupta',
        role: 'Member Miranda House Unit',
        imageSrc: 'images/testimonial-4.jpeg',
        text:
          "Prayan according to me is an organization which tries its best to make this world a better place for everyone be it humans or animals.",
      },
      
    // Add more testimonial objects here
  ];

  return (
    <div className="testimonial">
      <Container>
        <div className="section-header text-center">
          <h2>Testimonial</h2>
          <h1>What people are talking about our Drives</h1>
        </div>
        <Row>
          {testimonialData.map((testimonial, index) => (
            <Col lg={3} md={6} key={index} >
              <div className="testimonial-item" style={{height:"24rem", width:"18rem"}}>
                <div className="testimonial-profile">
                  <img src={testimonial.imageSrc} alt="Image" className='testimonial-img' />
                  <div className="testimonial-name">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
                <div className="testimonial-text">
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default TestimonialSection;
