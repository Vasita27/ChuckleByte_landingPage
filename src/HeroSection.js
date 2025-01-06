import React from "react";
import "./HeroSection.css";
import TabletSlider from "./TabletSlider";
import TypingEffect from "./TypingEffect"; 
import profile from "./images/MyProfessionalPhoto.jpeg"

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg custom-navbar">
  <div className="container-fluid">
    <img
      src="https://cdn-icons-png.freepik.com/512/4945/4945750.png"
      alt="Logo"
      className="logo"
      height="50px"
    />
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" style={{display:"none"}}></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav align-items-center">
        <li className="nav-item">
          <a className="nav-link" href="#experience">Experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#levels">Skill Levels</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#achievements">Achievements</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact Me</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



      {/* Hero Section Content */}
      <div className="hero-content">
        <div className="background"></div>
        <div className="content slide-in-left">
          <div className="animated-box">
            <b style={{ color: "#2F65AD" }}>
              <h2>
                Hello, I am Vasita Puppala, a{" "}
                <span>
                  <TypingEffect />
                </span>
              </h2>
            </b>
          </div>
          <h1 style={{ fontSize: "60px", color: "white" }} className="header">
          
          </h1>
          <p style={{ color: "white" }}> <br></br>
          I am an undergraduate student pursuing Computer Science and Engineering at Chaitanya Bharathi Institute of Technology,Hyderabad.

I love exploring technologies and I'm into teamwork and collaboration as it allows me to share and gain knowledge. I spend my time in tech by coding @leetcode and developing projects to expand my knowledge into various domains.

Outside tech, I love dancing. Music soothes me.
          </p>
          <img src={profile} height="300px" width="250px" className="myimage" style={{borderRadius:"10%"}}></img>
          
        </div>
        <TabletSlider className="slide-in-right" />
        
      </div>
    </section>
  );
};

export default HeroSection;
