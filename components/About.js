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
import { FaLinkedinIn, FaInstagram, FaMailBulk } from 'react-icons/fa';
import '@/styles/mem-card.css';
import CountUp from 'react-countup';
import TestimonialSection from '@/components/TestimonialSection';
import Cards from '@/components/Cardsdata';
import { NGO_about_mission_vision } from '@/constants';
import {about, facts} from '@/assets'

function About() {
  return (
    <div>
      <Row>
        <Col md={4} >
          <Image
            rounded
            src={about}
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
            {NGO_about_mission_vision.map((item, index) => {
              return (
                <Tab key={index} eventKey={item.eventKey} title={item.title}>
                  {item.content}
                </Tab>
              )
            })}
          </Tabs>
        </Col>
      </Row>
      <Parallax bgImage={facts} strength={500} style={{ height: '400px', width: '100%' }}>
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
                      <h3 className="facts-plus" style={{ strength: '500', font: '50px' }} >
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
        <Cards />
      </Container>
      <TestimonialSection />
    </div>
  )
}

export default About
