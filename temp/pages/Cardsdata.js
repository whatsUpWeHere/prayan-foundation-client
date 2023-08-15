'use client'

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TestimonialSection.css';
import './Cards.css'
import { FaInstagram, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';

function Cards() {
  const Cardsdata = [
    {
      name: 'Parth Ojha',
      role: 'Founder &  President',
      imageSrc: 'images/team -1.png',
      linkedin: 'https://www.linkedin.com/in/parth-ojha-a91084227',
      insta: 'https://instagram.com/nexusgtr?igshid=MzRlODBiNWFlZA==',
      gmail: ''
    },
    {
        name: 'Avni Jain',
        role: 'Vice President',
        imageSrc: 'images/team -2.png',
        linkedin: 'https://www.linkedin.com/in/avni-jain-34263a211',
        insta: 'https://instagram.com/jnavni29?igshid=OTk0YzhjMDVlZA==',
        gmail: ''
    },
    {
        name: 'Navya Shrivastava',
        role: 'General Secretary',
        imageSrc: 'images/team -3.png',
        linkedin: 'https://www.linkedin.com/in/navya-shrivastava-534446225',
        insta: 'https://instagram.com/navyaaaa.18?igshid=MzNlNGNkZWQ4Mg==',
        gmail: ''
    },
    {
        name: 'Samya Jain',
        role: 'Treasurer',
        imageSrc: 'images/team -4.png',
        linkedin: '',
        insta: '',
        gmail: ''
    },
    {
        name: 'Dhruv Vijaywergia',
        role: 'Research and Development Head',
        imageSrc: 'images/team -5.png',
        linkedin: '',
        insta: '',
        gmail: ''
    },
    {
        name: 'Chandan Jhanwar',
        role: 'Corporate Head',
        imageSrc: 'images/team -6.png',
        linkedin: '',
        insta: '',
        gmail: ''
    },
    {
        name: 'Prince Kumar Yadav',
        role: 'Logistics and Communications Head',
        imageSrc: 'images/team -7.png',
        linkedin: '',
        insta: '',
        gmail: ''
    },
    {
        name: 'Jhalak Grover',
        role: 'Content Head',
        imageSrc: 'images/team -8.png',
        linkedin: '',
        insta: '',
        gmail: ''
    },
    {
        name: 'Akansha Sinha',
        role: 'Human Resources Head',
        imageSrc: 'images/akansha.jpg',
        linkedin: '',
        insta: '',
        gmail: ''
    },
    {
        name: 'Devanshi Bhardwaj',
        role: 'Graphics Head',
        imageSrc: 'images/devanshi.png',
        linkedin: '',
        insta: '',
        gmail: ''
    },
    {
        name: 'Parth Dubey',
        role: 'Project Director Akshaypatra',
        imageSrc: 'images/parthdubey.jpg',
        linkedin: '',
        insta: '',
        gmail: ''
    },
    {
        name: 'Kavitesh Lodhi',
        role: 'Project Director Swashrit',
        imageSrc: 'images/team -11.png',
        linkedin: '',
        insta: '',
        gmail: ''
    },
    {
        name: 'Aryan Sapra',
        role: 'Project Director Prakrit',
        imageSrc: 'images/team -12.png',
        linkedin: '',
        insta: '',
        gmail: ''
    },


    // Add more testimonial objects here
  ];

  return (
    <div className="testimonial">
      <Container>
        <div class="section-header text-center">
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
