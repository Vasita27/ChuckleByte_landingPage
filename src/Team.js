import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./Team.css";

const projects = [
    {
        title: "Movie Recommendation System",
        description: "A movie recommendation system working on a large database of movies with all the required information like title, director, genre, keywords, etc. Python libraries like pandas for data pre-processing, sklearn for cosine similarity, and NLTK for natural language processing are used.",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*cG6U1qstYDijh9bPL42e-Q.jpeg",
        skills: "Python, Computer Science, Machine Learning, PyCharm",
        link: "https://drive.google.com/drive/folders/19tr0aLCJRcB1FazX7zRL_WOMX-60bC9K?usp=sharing"
    },
    {
        title: "Blood Transfusion Prediction Model",
        description: "A blood transfusion prediction model made using Watson Studio, leveraging Auto AI. It is integrated into a website using APIs.",
        image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202305/ibm-2-sixteen_nine.jpg",
        skills: "CSS, Node.js, Machine Learning, REST APIs, Postman API",
        link: "https://blood-frontend.onrender.com/"
    },
    {
        title: "Audio Summarizer using Google Chrome built-in APIs",
        description: "AudioSummarizer is an innovative tool that extracts insights from audio files by providing an overview and key points of their content. It uses Chrome's built-in API - Summarizer and modifies it to summarize audio files with basic use of Flask.",
        image: "https://developer.chrome.com/static/docs/ai/built-in-apis/images/cover.png",
        skills: "HTML, APIs, Flask, Node.js, Express",
        link: "https://github.com/Vasita27/GoogleAI"
    },
    {
        title: "ChuckleByte Technologies: Full Stack Website",
        description: "A full-stack website for ChuckleByte Technologies. It contains dark and light themes, internship registration, and miscellaneous details.",
        image: "https://jaro-website.s3.ap-south-1.amazonaws.com/2024/03/Features-of-Mern-stack-development-services-You-Should-Know-768x397-1.png",
        skills: "Bootstrap, CSS, DBMS, GitHub, HTML5, JavaScript, MongoDB, Node.js, OOP, REST APIs, React.js, Express",
        link: "https://final-task-chucklebyte-qohm.vercel.app/"
    },
    {
        title: "Quiz Application",
        description: "A quiz application where users can add quizzes, edit and delete them, play quizzes created by others, and receive instant feedback on their scores.",
        image: "https://repository-images.githubusercontent.com/182525249/aadd7a80-54fe-11eb-9872-ccd06b8789b6",
        skills: "Bootstrap, GitHub, CSS, DBMS, HTML5, JavaScript, MongoDB, Node.js, OOP, React.js, Express",
        link: "https://github.com/Vasita27/AspireNex-quiz"
    },
    {
        title: "Customer Churn Prediction Model",
        description: "A machine learning model to predict customer churn accurately, aiming to minimize customer attrition by identifying at-risk customers early.",
        image: "https://www.retently.com/wp-content/uploads/2015/11/leading-causes-of-churn-1.png",
        skills: "Python, Machine Learning, Data Analysis, Pandas, Scikit-learn",
        link: "https://github.com/Vasita27/churn_prediction_model"
    },
    {
        title: "Customer Segmentation by K Means Clustering",
        description: "A machine learning model using K Means Clustering to segment customers based on their preferences. A detailed report has been attached, with links to code and outputs.",
        image: "https://www.omniconvert.com/wp-content/uploads/2024/05/customer-behaviour-segmentation.webp",
        skills: "Python, Machine Learning, Data Analysis, Pandas, K Means Clustering",
        link: "https://drive.google.com/file/d/1H4Oe17JpnjPoz1bNMjqMpsC3wFZykSUr/view?usp=sharing"
    }
];

const Projects = () => {
    const [showCards, setShowCards] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('projects');
            const position = section.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 0) {
                setShowCards(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="projects" className="py-5">
            <Container className="projects-container">
                <Row className="mb-5">
                    <Col>
                        <div className="heading-container">
                            <div className="heading-line left"></div>
                            <h2 className="text-center">My Projects</h2>
                            <div className="heading-line right"></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {projects.map((project, index) => (
                        <Col xs={12} sm={6} md={4} lg={4} key={index} className="mb-4">
                            <Card className={`text-center project-card ${showCards ? 'pop-up' : ''}`}>
                                <Card.Img variant="top" src={project.image} className="project-image" />
                                <Card.Body className="body">
                                    <Card.Title className="title">{project.title}</Card.Title>
                                    <Card.Text className="description">{project.description}</Card.Text> 
                                    <Card.Text className="skills">
                                        <strong>Skills:</strong> {project.skills}
                                    </Card.Text><br></br>
                                    {project.title==="Customer Segmentation by K Means Clustering" && (
                                        <a href={project.link} className="btn btn-primary">Project Report</a>
                                    )}
                                    {project.title!=="Customer Segmentation by K Means Clustering" && (
                                         <a href={project.link} className="btn btn-primary">Website/Github Repository</a>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
