import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBriefcase } from 'react-icons/fa'; // Icon for the experience section
import './Experience.css'; // Import the CSS file for styling

const Experience = () => {
  return (
    <Container id="experience" className="py-5">
      <Row className="justify-content-center">
        <Row className="mb-5">
                    <Col>
                <div className="heading-container">
                    <div className="heading-line left"></div>
                    <h2 className="text-center">Experience</h2>
                    <div className="heading-line right"></div>
                </div>
            </Col>
                    </Row>
        <Col md={2} className="text-center">
          <div className="icon-container">
            <FaBriefcase size={50} style={{ color: "#fff" }} />
          </div>
        </Col>
        <Col md={8}>
          <div className="experience-content">
            <h3 style={{ color: "#2F65AD" }}>ChuckleByte Technologies</h3>
            <p>
              <strong>Web Development Intern | Remote</strong> <br />
              <em>Aug 2024 – Sep 2024</em>
            </p>
            <p>
              During my internship at ChuckleByte Technologies, I had the opportunity to work on various exciting projects:
              <ul>
                <li>Created a sample landing page for a product launch.</li>
                <li>Designed a landing page for an example company.</li>
                <li>Developed a full-stack website for ChuckleByte Technologies using the MERN stack: React.js for UI, Node.js/Express.js for the backend, and MongoDB for data storage.</li>
                <li>Named Web Developer of the Month – August 2024.</li>
              </ul>
              Throughout the internship, I learned valuable management skills and enhanced my web development capabilities.
            </p>
          </div>
        </Col>
        <Col md={2}>
          
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
