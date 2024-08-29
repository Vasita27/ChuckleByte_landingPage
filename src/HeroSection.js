import React from "react";
import "./HeroSection.css";
import TabletSlider from "./TabletSlider"; // Assuming TabletSlider is a component for the moving images inside the tablet

const HeroSection = () => {
  return (
    <section className="hero-section">
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <img src="./styles/download.png" alt="Logo" className='logo' height='70px'/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#about" style={{color:" #2f65ad" , fontSize:"20px"}}><b>AboutUs</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#services" style={{color:" #2f65ad" , fontSize:"20px"}}><b>Services</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#team" style={{color:" #2f65ad" , fontSize:"20px"}}><b>Our Team</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#testimonials" style={{color:" #2f65ad" , fontSize:"20px"}}><b>Testimonials</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact"style={{color:" #2f65ad" , fontSize:"20px"}}><b>Contact Us</b></a>
        </li>
      </ul>
    </div>
  </div>
</nav>


      <div className="hero-content">
        <div className="background"></div>
        <div className="content slide-in-left">
        <div className="animated-box">
                <b style={{color:"#2F65AD"}}>"Innovating with Purpose – Empowering Future Technologies."</b>
            </div>
          <h1 style={{fontSize:"60px",color:"white"}} className="header">Bruton Technologies</h1>
          <p style={{color:"white"}}>
          Whether you are a business seeking cutting-edge technology solutions, or a tech professional looking for an exciting opportunity to grow, BRUTON Technologies is the place for you. Our dynamic and inclusive environment fosters creativity, innovation, and professional growth, making us a trusted partner in the digital transformation journey.
          </p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-btn">Sign Up</button>
          </div>
          <div className="button-group">
            <button className="learn-more-btn">Learn More</button>
            <button className="contact-btn">Contact</button>
          </div>
        </div>
        <TabletSlider className="slide-in-right" />
      </div>
    </section>
  );
};

export default HeroSection;
