import React from 'react';
import './WelcomeBanner.css';
import bannerImage from '../assets/banner-image.png'; 

const WelcomeBanner = () => {
  return (
    <div className="welcome-banner">
      <div className="text-content">
        <h2>Hi Jatin Vincent!</h2>
        <p>Kickstart your learning adventure. Let’s Getah’ed Together</p>
      </div>
      <img src={bannerImage} alt="Banner Visual" className="banner-image" />
    </div>
  );
};

export default WelcomeBanner;
