import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

import { testimonialData } from '@/constants';

function TestimonialSection() {
  return (
    <div className="testimonial py-15 mt-5 bg-gray-100">
      <Container>
        <div className=" flex items-center justify-center flex-col mx-auto pt-13">
          <h3 className="font-bold text-2xl text-[#fdbe33]">  Testimonial</h3>
          <p className="text-[#4A4C70] text-4xl text-center letter-wider font-semibold px-13 border-red-500">
            What people are talking about our Drives 
          </p>
        </div>

        <Row>
          {testimonialData.map((testimonial, index) => (
            <Col lg={3} md={6} key={index} className="my-2">
              <div className="testimonial-item py-10 text-center bg-white shadow-md rounded-lg w-full h-100 mx-auto mt-3 mb-3">
                <div className="testimonial-profile mb-4">
                  <Image
                    src={testimonial.imageSrc}
                    alt="Image"
                    className="testimonial-img w-20 h-20 rounded-full mx-auto"
                    width={100}
                    height={100}
                  />
                  <div className="testimonial-name">
                    <h3 className="text-xl mt-4">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="testimonial-text">
                  <p className="text-xs">{testimonial.text}</p>
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

