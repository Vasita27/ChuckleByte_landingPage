import React, { useEffect, useRef, useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const aboutUsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimated(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
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
          <div className="bars" style={{ position: "relative", left: "50px" }}>
            {[
              { skill: "Python", level: 75 },
              { skill: "C", level: 30 },
              { skill: "Java", level: 30 },
              { skill: "HTML, CSS, JavaScript", level: 75 },
              { skill: "MERN", level: 50 },
              { skill: "SQL", level: 75 },
              { skill: "REST APIs", level: 65 },
              { skill: "React Native", level: 30 },
            ].map(({ skill, level }, index) => (
              <div key={index} style={{ marginBottom: "20px" }}>
                <h5>{skill}</h5>
                <div className="progress" style={{ width: '50%' }}>
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    style={{ width: `${level}%`, backgroundColor: '#2F65AD' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block">
          <div className={`svg-container ${isAnimated ? 'animate' : ''}`}>
            <img src="./styles/aboutUs.svg" alt="About Us" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
