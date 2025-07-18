import React from 'react';
import backpackerImg from '../assets/backpacker.png'; // update path as needed
import mountainImg from '../assets/mountain.png';     // update path as needed
import './Coursebanner.css';

const JourneyBanner = () => (
  <div className="journey-banner">
    <img
      src={backpackerImg}
      alt="Backpacker with guitar"
      className="journey-left-img"
      draggable="false"
    />
    <div className="journey-center-content">
      <div className="journey-text">
        <span>
          <strong>Our journey starts!</strong> Have fun by learning<br />
          and climbing together.
        </span>
      </div>
      <button className="journey-btn">Let's Begin The Journey</button>
    </div>
    <img
      src={mountainImg}
      alt="Mountain model"
      className="journey-right-img"
      draggable="false"
    />
  </div>
);

export default JourneyBanner;
