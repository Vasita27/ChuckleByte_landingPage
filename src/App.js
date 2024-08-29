import React from 'react';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import Services from './Services';
import Team from './Team';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <div className="App">
            <HeroSection />
            <AboutUs/>
            <Services/>
            <Team/>
            <Testimonials/>
            <Contact/>
        </div>
    );
}

export default App;
