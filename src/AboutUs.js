import React, { useEffect, useRef, useState } from 'react';
import './AboutUs.css'; // Import the CSS file

const AboutUs = () => {
    const [selectedInfo, setSelectedInfo] = useState('Mission');
    const [isAnimated, setIsAnimated] = useState(false);
    const aboutUsRef = useRef(null);

    const handleSquareClick = (info) => {
        setSelectedInfo(info);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsAnimated(true);
                        observer.unobserve(entry.target); // Stop observing once animated
                    }
                });
            },
            {
                threshold: 0.1 // Adjust threshold as needed
            }
        );

        if (aboutUsRef.current) {
            observer.observe(aboutUsRef.current);
        }

        return () => {
            if (aboutUsRef.current) {
                observer.unobserve(aboutUsRef.current);
            }
        };
    }, []);

    return (
        <div className="container about-us-container" id="about" style={{ marginTop: "60px" }} ref={aboutUsRef}>
            <div className="about-us-heading">
                <h2>About Us</h2>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="about-us">
                        <p className="about-us-paragraph d-md-none">
                            Our mission is to revolutionize technology through innovation. We aim to be a global leader in technological advancements while valuing integrity, innovation, and excellence.
                        </p>
                        <div className="content-container">
                            <div className="squares-container">
                                <div className="square" onClick={() => handleSquareClick('Mission')}>
                                    Mission
                                </div>
                                <div className="square" onClick={() => handleSquareClick('Vision')}>
                                    Vision
                                </div>
                                <div className="square" onClick={() => handleSquareClick('Values')}>
                                    Values
                                </div>
                                <div className="square" onClick={() => handleSquareClick('Programs')}>
                                    Programs
                                </div>
                            </div>
                            <div className="info-box-container">
                                <div className={`info-box ${selectedInfo ? 'visible' : ''}`}>
                                    {selectedInfo === 'Mission' && <p>At BRUTON Technologies, our approach is client-centric and results-driven. We believe in building long-term relationships with our clients through continuous collaboration, transparency, and excellence in service delivery. By employing industry best practices and staying ahead of technology trends, we ensure that our solutions not only meet current needs but also adapt to future growth.</p>}
                                    {selectedInfo === 'Vision' && <p>At BRUTON Technologies, we pride ourselves on being a trailblazer in the world of software development and digital transformation. Founded with the vision to empower businesses and individuals alike, our mission is to deliver intelligent, scalable, and user-centric technology solutions that help clients thrive in the fast-paced digital age.

We specialize in designing, developing, and deploying a wide range of custom software solutions that cater to the diverse needs of businesses, startups, and enterprises. Our expertise spans across a broad spectrum of industries, helping us to deliver tailored solutions that provide high value and measurable results.
</p>}
                                    {selectedInfo === 'Values' && <p>Innovation: Constantly pushing boundaries and embracing new technologies to provide state-of-the-art solutions.
<br></br>Quality: Delivering exceptional work that meets the highest standards of excellence.<br></br>
Collaboration: Working closely with clients and team members to achieve outstanding results.<br></br>
Integrity: Upholding honesty, transparency, and trust in all aspects of our work.<br></br>
Growth: Encouraging continuous learning and development for both our team and clients.</p>}
                                    {selectedInfo === 'Programs' && <p> Whether you are a business seeking cutting-edge technology solutions, or a tech professional looking for an exciting opportunity to grow, BRUTON Technologies is the place for you. Our dynamic and inclusive environment fosters creativity, innovation, and professional growth, making us a trusted partner in the digital transformation journey.</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block">
                    <div className={`svg-container ${isAnimated ? 'animate' : ''}`}>
                        <img src='./styles/aboutUs.svg' alt="About Us" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
