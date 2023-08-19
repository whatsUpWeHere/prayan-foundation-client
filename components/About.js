'use client'
import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Col } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaLinkedinIn, FaInstagram, FaMailBulk } from 'react-icons/fa';
// import './mem-card.css'
import TestimonialSection from '@/components/TestimonialSection';
import CountUp from 'react-countup';
import Cards from '@/components/Cards';



function About() {
  return (
    <div>
      <Row>
        <Col md={4} >
          <Image
            rounded
            src={'./images/About.png'}
            alt="me"
            left
          />
        </Col>
        <Col md={8}>
          <Tabs
            defaultActiveKey="about"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="about" title="About">
              “PRAYAN FOUNDATION, a non-governmental organization registered under NITI AAYOG, was founded by a group of motivated undergraduate students led by Mr. Parth Ojha, who is recognized as the recipient of the President of India Award in field of Social Service.
              Our primary objective is to create the positive change we envision for the world. We strongly believe that a fulfilling life involves serving others, and we carry this belief with love, compassion, and kindness in our hearts every day.
              Prayan Foundation is committed to realizing the goals of India@75, guided by the esteemed Prime Minister of India. Initially, we launched three central projects—Project Akshaypatra, Project Swashrit, and Project Prakrit—that garnered participation from students across Delhi University.
              Subsequently, we decentralized our efforts by establishing individual umbrella units in colleges to extend our support to more individuals in need. Our organization has a strong presence in Delhi University, with units in more than 14 prominent colleges. In addition to that, we also have units in 5+ campus across the nation extending & serving our sense of selfless service.
              With a functional strength of 500+ members, we have a dedicated team of individuals working towards our goals. Alongside our members, we also have a large network of volunteers, with more than 2000 individuals actively contributing to our cause. Together, we strive to make a positive impact in our communities and society.
            </Tab>
            <Tab eventKey="mission" title="Misson">
              Prayan Foundation is dedicated for creating a sustainable and inclusive society by promoting women empowerment, generating employment opportunities, ensuring children's welfare, addressing mental health concerns, protecting animal rights, enhancing food security and distribution, raising environmental awareness, advocating for personal hygiene and sanitation, and providing compassionate care for the elderly.
              Through community engagement and resource mobilization, Prayan Foundation endeavors to create a lasting impact on individuals' lives and society as a whole. Together, we can build a world that values empowerment, compassion, and the well-being of all living beings.
            </Tab>
            <Tab eventKey="vision" title="Vison">
              We aim at creation of society where every individual, regardless of age, gender, or background, is empowered, supported, and given the opportunity to lead a fulfilling life.
              At Prayan Foundation, our vision is to build a world where all individuals, regardless of their background or circumstances, can live in peace, dignity, and prosperity.
              We are committed to aligning our efforts with the United Nations Sustainable Development Goals (SDGs) and other international conventions alongwith the ideas of  Honorable Prime Minister of India@75 to create a lasting impact on a global scale.
              Our vision encompasses the following key principles: Sustainable Development, Gender Equality and Women's Empowerment, Climate Action and Environmental Stewardship, Prayan Foundation aspires to be a driving force in promoting sustainable development, social justice, and global harmony.
              Through collaboration with stakeholders, governments, and other NGOs, we seek to create transformative change and a brighter future for generations to come.
            </Tab>
          </Tabs>
        </Col>
      </Row>
      <Parallax bgImage={'./images/facts.jpg'} strength={500} style={{ height: '400px', width: '100%' }}>
        <div className='facts' style={{ height: '400px', width: '100%' }}>
          <h1 style={{ textAlign: 'center', paddingTop: '150px', color: 'white' }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="facts-item">
                    <i className="flaticon-home"></i>
                    <div className="facts-text">
                      <h3 className="facts-plus">
                      <CountUp start={0} end={20} duration={2.5} />+
                      </h3>
                      <p>Colleges</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="facts-item">
                    <i className="flaticon-charity"></i>
                    <div className="facts-text">
                      <h3 className="facts-plus" style={{strength:'500', font:'50px'}} >
                      <CountUp start={0} end={2000} duration={2.5} />+
                      </h3>
                      <p>Volunteers</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="facts-item">
                    <i className="flaticon-kindness"></i>
                    <div className="facts-text">
                      <h3 className="facts-plus">
                      <CountUp start={0} end={1000000} duration={2.5} />+
                      </h3>
                      <p>Our Goal to Serve People</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="facts-item">
                    <i className="flaticon-kindness"></i>
                    <div className="facts-text">
                      <h3 className="facts-plus">
                      <CountUp start={0} end={20000} duration={2.5} />
                      </h3>
                      <p>People Served till now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </h1>
        </div>
      </Parallax>
      <Container >
        <Cards/>
      </Container>
      <TestimonialSection/>
    </div>
  )
}

export default About
