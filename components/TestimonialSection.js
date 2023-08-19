import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import '@/app/globals.css';

import {testimonialData} from "@/constants"

function TestimonialSection() {
  
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
                  <Image src={testimonial.imageSrc} alt="Image" className='testimonial-img' width={100} height={100}/>
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
