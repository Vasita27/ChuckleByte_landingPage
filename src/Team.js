import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./Team.css";

const projects = [
    {
        title: "Realtime AI Powered exercise evaluation app for squats and pushups using MediaPipe",
        description: "A real-time browser-based fitness app uses MediaPipe Pose Landmarker for pose detection and Three.js for 3D visual feedback, evaluating squats and push-ups by identifying incorrect postures. It also features image-based analysis to assess form accuracy from static images.",
        image: "https://api.bigsteptech.com/uploads/11_2_da6244fba7.png",
        skills: "HTML, CSS, JavaScript, Three.js, MediaPipe",
        link: "https://vasita27.github.io/Real_Time_AI_Powered_Exercise_Evaluation/"
    },
    {
        title: "Traque : Streamlining college bus operations",
        description: "Traque is a real-time bus tracking and management app designed for students, faculty, parents, and admins to monitor routes, track live bus locations, and manage transport services efficiently. It also features chat, announcements, payment tracking, and bus pass renewal functionalities.",
        image: "https://www.milesight-iot.com/wp-content/uploads/2019/04/bus-tracking.png",
        skills: "React Native, Node.js, Express, MongoDB, HTML, CSS, Google Maps API, HERE Maps API, Socket.io",
        link: "https://github.com/orgs/Mini-Project2711/repositories"
    },
    {
        title: "Haven : Your virtual safe space",
        description: "A mental wellness app featuring personalized journaling, mood capsules, and mood-based chat channels. Includes an AI assistant with speech support and tailored responses. Features an affirmation mirror that gives real-time feedback on spoken affirmations.",
        image: "https://www.hillphysicians.com/wp-content/uploads/2024/01/JAN-MentalWellness-2048x1363.jpg",
        skills: "React, Node.js, Express, MongoDB, HTML, CSS, Gemini API, Google AI Studio",
        link: "https://github.com/orgs/SudheeVYRTual/repositories"
    },
    {
        title: "ChuckleByte Technologies: Full Stack Website",
        description: "A full-stack website for ChuckleByte Technologies. It contains dark and light themes, internship registration, and miscellaneous details.",
        image: "https://jaro-website.s3.ap-south-1.amazonaws.com/2024/03/Features-of-Mern-stack-development-services-You-Should-Know-768x397-1.png",
        skills: "Bootstrap, CSS, DBMS, GitHub, HTML5, JavaScript, MongoDB, Node.js, OOP, REST APIs, React.js, Express",
        link: "https://final-task-chucklebyte-qohm.vercel.app/"
    },
    {
        title: "Blog Website",
        description: "A basic blog website with JWT-based authentication where users can read blogs and content creators can publish their own. It also features a section for trending and latest blogs.",
        image: "https://www-static.cdn-one.com/cmsimages/en_what-is-a-blog-1.png",
        skills: "React.js, Node.js, Express, MongoDB, HTML, CSS",
        link: "https://github.com/Vasita27/BlogWebsite"
    },
    {
        title: "Dr.Docs : An AI Powered Document Retrieval System",
        description: "An AI based document retrieval system, which takes in user's natural language query , converts it into an embedding and then parses through the previous uploaded documents' embeddings to perform a similarity check. FAISS is used for indexing for efficiency purposes. Additional features like Q & A with a document, integration of google drive and related online resources retrieval is also done.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiRCRhz2aEYQuZNr6IDR4whr6YQmKwSvNIlw&s",
        skills: "Python, FAISS, MERN, Google Drive API, SERP API, Gemini API, OpenClip Model ",
        link: "https://github.com/HackIndiaDAO/HackIndia-Spark-6-2025-DAO"
    },
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
