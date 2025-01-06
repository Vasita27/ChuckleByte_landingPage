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
        <div className="container about-us-container" id="levels" style={{ marginTop: "60px" }} ref={aboutUsRef}>
            <div className="about-us-heading">
                <h2>Level of Skills</h2>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="about-us">
                        <p className="about-us-paragraph d-md-none">
                            Our mission is to revolutionize technology through innovation. We aim to be a global leader in technological advancements while valuing integrity, innovation, and excellence.
                        </p>
                        <div className="content-container">
                            <div className="squares-container">
                                
                            </div>
                            <div className="info-box-container">
                            <section className="container">
      <br />
      <div className="bars" style={{position:"relative",left:"50px"}}>
        <div>
          <h5>Python</h5>
          <div className="progress" role="progressbar" aria-label="Python skill level" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '75%', backgroundColor:' #2F65AD' }}></div>
          </div>
        </div>
        <br />
        <div>
          <h5>C</h5>
          <div className="progress" role="progressbar" aria-label="C skill level" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '30%', backgroundColor:' #2F65AD'}}></div>
          </div>
        </div>
        <br />
        <div>
          <h5>Java</h5>
          <div className="progress" role="progressbar" aria-label="Java skill level" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '30%', backgroundColor:' #2F65AD' }}></div>
          </div>
        </div>
        <br />
        <div>
          <h5>HTML, CSS, JavaScript</h5>
          <div className="progress" role="progressbar" aria-label="HTML, CSS, JavaScript skill level" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '75%', backgroundColor:' #2F65AD' }}></div>
          </div>
        </div>
        <br />
        <div>
          <h5>MERN</h5>
          <div className="progress" role="progressbar" aria-label="MERN skill level" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '50%',backgroundColor:' #2F65AD'}}></div>
          </div>
        </div>
        <br />
        <div>
          <h5>SQL</h5>
          <div className="progress" role="progressbar" aria-label="SQL skill level" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '75%', backgroundColor:' #2F65AD' }}></div>
          </div>
        </div>
        <br />
      </div>
    </section>
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
