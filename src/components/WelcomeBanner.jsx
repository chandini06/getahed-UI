import React, { useState, useEffect } from 'react';
import './WelcomeBanner.css';
import img1 from '../assets/banner1.png';
import img2 from '../assets/banner2.png';
import img3 from '../assets/banner3.png'; // Replace with your actual Figma-exported illustrations

const slides = [
  {
    text: {
      heading: 'Hi Jatin Vincent!',
      sub: "Kickstart your learning adventure. Let’s Getah’ed Together",
    },
    image: img1,
  },
  {
    text: {
      heading: 'Welcome Back!',
      sub: 'Let AI power your next learning sprint.',
    },
    image: img2,
  }, 
  {
    text: {
      heading: 'Keep Going!',
      sub: 'Track your journey and stay consistent.',
    },
    image: img3,
  },
];

const WelcomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const { heading, sub } = slides[currentSlide].text;
  const image = slides[currentSlide].image;

  return (
    <div className="welcome-banner">
      <div className="text-content">
        <h2>{heading}</h2>
        <p>{sub}</p>
      </div>
      <img src={image} alt="Banner Visual" className="banner-image" />
      <div className="slide-progress">
        <div 
          className="slide-progress-bar"
          style={{ width: `${(currentSlide + 1) * (100 / slides.length)}%` }}
        ></div>
</div>
    </div>
  );
};

export default WelcomeBanner;
