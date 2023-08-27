import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';
import { Ourcabinet } from '@/constants';
import Link from 'next/link';
import '@/app/globals.css'; // Import your custom CSS file
import Image from 'next/image';

function CabinetCards() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="testimonial mt-13">
      <Container>

        <Row>
          {Ourcabinet.map((card, index) => (
            <Col
              lg={3}
              md={6}
              key={index}

            >
              <div
                className={`card relative shadow-lg overflow-hidden m-2 flex gap-2 justify-center flex-col items-center mx-auto`}
                style={{ width: '16rem' }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={card.imageSrc}
                  className="card-img-top"
                  alt="..."
                  id="member-img"
                  width={300}
                  height={300}
                />
                <div className={` rounded-lg bg-black opacity-75 shadow-lg absolute w-[80%] flex p-4 pb-6 text-white flex-col justify-center items-center hover-info transition-all duration-300 ${hoveredIndex === index ? 'top-[127px]' : 'top-[181px] '
                  }`}>
                  <p className="font-bold text-[0.875rem]">{card.name}</p>
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

export default CabinetCards;