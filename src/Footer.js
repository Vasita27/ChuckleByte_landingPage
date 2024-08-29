import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <Container>
                <Row>
                    <Col md={6}>
                        <p>&copy; 2024 BRUTON Technologies. All Rights Reserved.</p>
                    </Col>
                    <Col md={6} className="text-md-right">
                        <a href="#home" className="text-white ml-2">Home</a>
                        <a href="#about-us" className="text-white ml-2">About Us</a>
                        <a href="#services" className="text-white ml-2">Services</a>
                        <a href="#contact" className="text-white ml-2">Contact</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
