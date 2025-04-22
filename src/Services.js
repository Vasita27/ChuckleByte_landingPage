import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC, faCubes, faFileCode ,faDatabase} from '@fortawesome/free-solid-svg-icons';
import { FaPython, FaJava, FaReact } from 'react-icons/fa'; // Updated icon

import './Services.css';

const skills = [
    {
        title: "Python",
        description: "Intermediate level Python programmer with knowledge in libraries like NumPy, Pandas, Matplotlib, etc.",
        icon: FaPython,
        link: "#projects", // Updated link to go to team section
        isReactIcon: true
    },
    {
        title: "Beginner Java",
        description: "Fundamental understanding of Java syntax, loops, conditionals, and basic OOP concepts.",
        icon: FaJava,
        link: "#projects", // Updated link to go to team section
        isReactIcon: true
    },
    {
        title: "Basic C Programming",
        description: "Certified in basic C programming, with knowledge of loops, conditionals, and functions.",
        icon: faC,
        link: "#projects", // Updated link to go to team section
        isReactIcon: false
    },
    {
        title: "HTML, CSS, and JavaScript",
        description: "Strong foundation in building responsive web designs using HTML, CSS, and JavaScript.",
        icon: faFileCode,
        link: "#projects", // Updated link to go to team section
        isReactIcon: false
    },
    {
        title: "MERN Stack",
        description: "Proficient in building full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
        icon: FaReact,
        link: "#projects", // Updated link to go to team section
        isReactIcon: true
    },
    {
        title: "SQL",
        description: "Proficient in SQL for database management, querying, and optimization.",
        icon: faDatabase, // New FontAwesome icon for SQL
        link: "#projects", // Updated link to go to team section
        isReactIcon: false
    },
    {
        title: "REST APIs",
        description: "Worked with REST APIs for data retrieval and manipulation in web applications.",
        icon: faCubes,
        link: "#projects", // Updated link to go to team section
        isReactIcon: false
    },
    {
        title: "React Native (Novice)",
        description: "Basic understanding of React Native for mobile app development.",
        icon: FaReact,
        link: "#projects", // Updated link to go to team section
        isReactIcon: true
    }
];

const Skills = () => {
    return (
        <Container className='skills' id='skills'>
            <Row className="mb-5">
            <Col>
        <div className="heading-container">
            <div className="heading-line left"></div>
            <h2 className="text-center">My Skills</h2>
            <div className="heading-line right"></div>
        </div>
    </Col>
            </Row>
            <Row>
                {skills.map((skill, index) => (
                    <Col md={6} key={index} className="my-4">
                        <Card className="skill-card d-flex flex-row align-items-center">
                            {index % 2 === 0 ? (
                                <>
                                    {skill.isReactIcon ? (
                                        <skill.icon size={64} className="text icon mr-4" />
                                    ) : (
                                        <FontAwesomeIcon icon={skill.icon} size="4x" className="text icon mr-4" />
                                    )}
                                    <div>
                                        <Card.Body>
                                            <Card.Title>{skill.title}</Card.Title>
                                            <Card.Text>{skill.description}</Card.Text>
                                            <Button style={{backgroundColor:"#1f4a8d",width:"150px"}} href={skill.link}>
                                                See Projects
                                            </Button>
                                        </Card.Body>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="text-left">
                                        <Card.Body>
                                            <Card.Title>{skill.title}</Card.Title>
                                            <Card.Text>{skill.description}</Card.Text>
                                            <Button style={{backgroundColor:"#1f4a8d",width:"150px"}} href={skill.link}>
                                               See Projects
                                            </Button>
                                        </Card.Body>
                                    </div>
                                    {skill.isReactIcon ? (
                                        <skill.icon size={64} className="text icon ml-4" />
                                    ) : (
                                        <FontAwesomeIcon icon={skill.icon} size="4x" className="text icon ml-4" />
                                    )}
                                </>
                            )}
                        </Card>
                    </Col>
                ))}
            </Row>  
        </Container>
    );
};

export default Skills;
