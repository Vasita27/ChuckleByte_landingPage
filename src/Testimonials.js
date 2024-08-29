import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './Testimonials.css'; // Import the CSS file

const testimonials = [
  { quote: "BRUTON Technologies transformed our business.", name: "Client A" },
  { quote: "Top-notch services and support.", name: "Client B" },
  { quote: "Top-notch services and support.", name: "Client C" },
  { quote: "Top-notch services and support.", name: "Client D" },
];

const Testimonials = () => {
  return (
    <Container id="testimonials" className="py-5">
      <div className='heading-container'>
        <h2 className="text-center">Testimonials</h2></div>
      <Container>
        <div className='row'>
          <div className='col-md-8 col-sm-6 forMargin'>
        <Carousel interval={1500}>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                <Col md={8} className="testimonial-item">
                  <blockquote className="blockquote text-center">
                    <p className="mb-4">“{testimonial.quote}”</p>
                    <footer className="blockquote-footer">
                      <span className="client-name">{testimonial.name}</span>
                    </footer>
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