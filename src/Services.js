import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faBuilding, faCloud, faShieldAlt, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import './Services.css'; // Import the CSS file

const services = [
    { title: "Custom Software Development", description: "We craft bespoke software tailored to meet the unique challenges and needs of your business, ensuring high performance, scalability, and security.", icon: faCode },
    { title: "Web & Mobile Development", description: "From responsive websites to feature-rich mobile apps, we develop digital experiences that engage users and drive results.", icon: faMobileAlt },
    { title: "Enterprise Solutions", description: "We deliver enterprise-level solutions for automation, productivity enhancement, and seamless operations management.", icon: faBuilding },
    { title: "Cloud Solutions & DevOps", description: "Our cloud computing services enable businesses to leverage scalable, secure, and cost-effective infrastructure, while our DevOps practices ensure efficient deployment and maintenance.", icon: faCloud },
    { title: "Cybersecurity Services", description: "Protecting your digital assets is our priority. We provide end-to-end cybersecurity solutions to safeguard data and ensure compliance.", icon: faShieldAlt },
    { title: "IT Consulting", description: "We help businesses make informed technology decisions by providing strategic IT consulting and support to enhance overall performance and growth.", icon: faHandsHelping },
];

const Services = () => {
    return (
        <Container className='service' id='services'>
            <Row className="mb-5">
                <Col>
                    <div className="heading-container">
                        <h2 className="text-center">Our Services</h2>
                        <div className="heading-line"></div>
                    </div>
                </Col>
            </Row>
            <Row>
                {services.map((service, index) => (
                    <Col md={6} key={index} className="my-4">
                        <Card className="service-card d-flex flex-row align-items-center">
                            {index % 2 === 0 ? (
                                <>
                                    <FontAwesomeIcon icon={service.icon} size="4x" className="text icon mr-4" />
                                    <div>
                                        <Card.Body>
                                            <Card.Title>{service.title}</Card.Title>
                                            <Card.Text>{service.description}</Card.Text>
                                        </Card.Body>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="text-left">
                                        <Card.Body>
                                            <Card.Title>{service.title}</Card.Title>
                                            <Card.Text>{service.description}</Card.Text>
                                        </Card.Body>
                                    </div>
                                    <FontAwesomeIcon icon={service.icon} size="4x" className="text icon ml-4"/>
                                </>
                            )}
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Services;
