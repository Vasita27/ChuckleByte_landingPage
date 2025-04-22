import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './Testimonials.css'; // Import the CSS file

const testimonials = [
  { 
    quote: "Published a Chrome extension that instantly defines words.",
    name: <a href='https://chrome.google.com/webstore/detail/lofhmfodifdllaikpoohfjecfoaondff' target="_blank" rel="noopener noreferrer" style={{ color: '#133E87', textDecoration: 'none' }}>View Extension</a>
  },
  { 
    quote: "Achieved Top 1% certification in C from NPTEL.",
    name: <a href='https://drive.google.com/file/d/1afAxMRP92ho8Zf5CPi_i3eCu4wAiDoh7/view' target="_blank" rel="noopener noreferrer" style={{ color: '#133E87', textDecoration: 'none' }}>View Certificate</a>
  },
  { 
    quote: "Won an interstate hackacthon in web development domain held at CBIT.",
    name: <a href='https://www.linkedin.com/posts/vasita-puppala-955123252_hackathonwinner-webdevelopment-ai-activity-7309259280799449090-rS3p?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5PZ5EBx5-wm4OKH3_Y0gRqcs5jqEGzfk0' target="_blank" rel="noopener noreferrer" style={{ color: '#133E87', textDecoration: 'none' }}>View Achievement</a>
  },
  { 
    quote: "Made it to the top10 in HackIndia, Telangana, among 500 participants.",
    name: <a href='https://www.linkedin.com/posts/srishti-turki-7a4510266_hackathon-hackindia-cbit-ugcPost-7317220728188162049-2Jbl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5PZ5EBx5-wm4OKH3_Y0gRqcs5jqEGzfk0' target="_blank" rel="noopener noreferrer" style={{ color: '#133E87', textDecoration: 'none' }}>View Achievement</a>
  },
  { 
    quote: "Junior Coordinator at Communicando, Literary Club of CBIT.",
    name: ""
  },
  { 
    quote: "Senior Coordinator at Communicando, Literary Club of CBIT.",
    name: ""
  },
  { 
    quote: "Junior Coordinator at CBIT Open Source Community.",
    name: ""
  },
  { 
    quote: "Secured 946th rank in TS EAMCET.",
    name: ""
  },
  { 
    quote: "Secured 1024th rank in AP EAMCET.",
    name: ""
  },
];

const Testimonials = () => {
  return (
    <Container className="py-5">
      <div className='heading-container'>
        <h2 className="text-center">Achievements</h2></div>
      <Container>
        <div className='row' id="achievements">
          <div className='col-md-8 col-sm-6 forMargin'>
        <Carousel interval={1500}>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                <Col md={8} className="testimonial-item">
                  <blockquote className="blockquote text-center">
                    <p className="mb-4">“{testimonial.quote}” <br></br><br></br> {testimonial.name}
                    </p>
                  </blockquote>
                  
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel></div>
        <div className='col-md-4 col-sm-6'>
          <div className='image'>
            <img src="./styles/testimonials.svg" height={"300px"}></img>
          </div>
        </div>
        </div>
      </Container>
    </Container>
  );
};

export default Testimonials;