import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './ContactForm.css'; // Import the CSS file

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendClick = () => {
    const subject = "Contact Form Submission";
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Container id="contact" className="py-5">
        <Row className="justify-content-center">
        <div className='heading-container'>
        <h2 className="text-center">Contact Us</h2></div>
        <Col md={7}>
          <div className='image'>
          <img src='./styles/contact.svg' height={"300px"}></img>
          </div>
          </Col>
          <Col md={5} className='form'>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label style={{color:"#2F65AD" , fontSize:"25px"}}>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='inputs'
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label style={{color:"#2F65AD" , fontSize:"25px"}}>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='inputs'
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label style={{color:"#2F65AD" , fontSize:"25px"}}>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className='inputs'
                />
              </Form.Group> <br></br>
              <Button style={{backgroundColor:"#2F65AD"}} type="button" onClick={handleSendClick}>
                Send
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={6} className="text-center">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
  );
};

export default ContactForm;
