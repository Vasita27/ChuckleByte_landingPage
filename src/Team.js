import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./Team.css"

const teamMembers = [
    { name: "Bill Clinton", role: "CEO", image: "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=" },
    { name: "Jane Smith", role: "CTO", image: "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=" },
    { name: "Mike Johnson", role: "Lead Developer", image: "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=" },
];

const Team = () => {
    return (
        <section id="team" className="py-5">
            <Container className='teamrow'>
                <div className='heading-container'>
                <h2 className="text-center">Our Team</h2></div>
                <Row>
                    {teamMembers.map((member, index) => (
                        <Col md={4} key={index} className="whole mb-4">
                            <Card className="text-center card">
                                <Card.Img variant="top" src={member.image} />
                                <Card.Body className='bodyy'>
                                    <Card.Title className='title'>{member.name}</Card.Title>
                                    <Card.Text className='position'>{member.role}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Team;
