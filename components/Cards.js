import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';
import { Cardsdata } from '@/constants';
import Link from 'next/link';
import '@/app/globals.css'; // Import your custom CSS file

function Cards() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="testimonial mt-13">
      <Container>
        <div className=" flex items-center justify-center flex-col mx-auto pt-13">
          <h3 className="font-bold text-2xl text-[#fdbe33]">  Meet Our Team</h3>
          <p className="text-[#4A4C70] text-5xl text-center letter-wider font-semibold px-13 py-7 ">
            Awesome guys behind Prayan <span className='block p-2'>Foundation</span>
          </p>
        </div>
        <Row>
          {Cardsdata.map((card, index) => (
            <Col
              lg={3}
              md={6}
              key={index}

            >
              <div
                className={`card relative shadow-lg overflow-hidden m-2 flex justify-center flex-col items-center`}
                style={{ width: '18rem' }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={card.imageSrc}
                  className="card-img-top"
                  alt="..."
                  id="member-img"
                />
                <div className={` rounded-lg bg-black opacity-75 shadow-lg absolute w-[80%] flex p-4 text-white flex-col justify-center items-center hover-info transition-all duration-300 ${hoveredIndex === index ? 'top-[210px]' : 'top-[270px] '
                  }`}>
                  <h2 className="font-bold text-md">{card.name}</h2>
                  <p className="text-sm text-center">{card.role}</p>
                  <div className="flex justify-center gap-3 mb-2 mt-4 items-center">
                    <Link href="#" className="transition-transform duration-300 text-[30px] hover:scale-110 shadow-lg text-red-500">
                      <FaInstagram />
                    </Link>
                    <Link href="#" className="transition-transform duration-300 text-[30px] hover:scale-110 shadow-lg text-sky-500">
                      <FaLinkedinIn />
                    </Link>
                    <Link href="#" className="transition-transform duration-300 text-[30px] hover:scale-110 shadow-lg text-green-500">
                      <FaMailBulk />
                    </Link>
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