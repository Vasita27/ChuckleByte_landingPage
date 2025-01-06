import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingEffect = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Python Programmer", "Front End Developer", "MERN Stack Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(typingRef.current, options);

    return () => {
      typed.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div>
      <span ref={typingRef} className="typing"></span>
    </div>
  );
};

export default TypingEffect;
