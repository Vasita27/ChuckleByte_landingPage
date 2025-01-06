import React from 'react';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import Skills from './Services';
import Projects from "./Team"
import Testimonials from './Testimonials';
import Contact from './Contact';
import Success from "./Services"
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Achievements from './Testimonials';
import Experience from './Experience';
function App() {
    return (
        <div className="App">
            <HeroSection />
            <Experience/>
            <AboutUs/>
            <Success/>
            <Projects/>
            <Testimonials/>
            <Contact/>
        </div>
    );
}

export default App;
