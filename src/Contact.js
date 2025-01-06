import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import './ContactForm.css'; // Import the CSS file

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendClick = () => {
    const subject = "Contact Form Submission";
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // Gmail compose URL format
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${process.env.REACT_APP_MY_MAIL}&su=${encodedSubject}&body=${encodedBody}`;

    window.open(gmailLink, "_blank");
  };

  return (
    <Container id="contact" className="py-5">
      <Row className="justify-content-center">
        <div className='heading-container'>
          <h2 className="text-center">Contact Me</h2>
        </div>
        <Col md={7}>
          <div className='image'>
            <img src='./styles/contact.svg' height={"300px"} alt="contact illustration" />
          </div>
        </Col>
        <Col md={5} className='form'>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label style={{ color: "#2F65AD", fontSize: "25px" }}>My Name</Form.Label>
              <Form.Control
                type="text"
                value={'Vasita Puppala'}
                onChange={(e) => setName(e.target.value)}
                className='inputs'
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label style={{ color: "#2F65AD", fontSize: "25px" }}>My Email address</Form.Label>
              <Form.Control
                type="email"
                value={"vasita2711@gmail.com"}
                onChange={(e) => setEmail(e.target.value)}
                className='inputs'
              />
            </Form.Group>
            
            <br />
            <Button style={{ backgroundColor: "#2F65AD" }} type="button" href='https://mail.google.com/mail/u/0/#inbox?compose=new'>
              Open mail
            </Button>
          </Form>
        </Col>
      </Row>
      
      {/* External Links Section */}
      <Row className="justify-content-center mt-5">
        <Col md={6} className="text-center">
          <h3>External Links</h3>
          <div className="social-icons">
            <a href="https://github.com/Vasita27" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub/>
            </a>
            <a href="https://www.linkedin.com/in/vasita-puppala-955123252/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/__vasitaaa__/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
          </div>
          {/* Resume Download Button */}
          <Button 
            variant="" 
            href="https://drive.google.com/file/d/1KUN_HyzSI7AUq4q_5PEJamAnOvW39FQV/view?usp=sharing" // Make sure your resume is in the public folder
            target="_blank"
            className="mt-3"
            style={{backgroundColor:"#2F65AD",width:"150px",color:"white"}}
          >
            📄 Resume
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
