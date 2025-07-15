// src/pages/LearningPage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ContinueJourney1 from '../components/ContinueJourney1';
import RightWidget from '../components/RightWidget'; 
import Journeys1 from '../components/Journeys1';
import downimg from '../assets/downimg.png';

import './LearningPage.css';

const LearningPage = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="content-layout" style={{ display: 'flex' }}>
        <Sidebar />
        <div className="learning-page-content w-full p-6">
          <div className="learning-layout">
            <div className="left-content">
              <ContinueJourney1 />
              <Journeys1 />
            </div>
            <RightWidget />
          </div>

          <div className="bottom-image-wrapper">
            <img src={downimg} alt="Down Image" className="bottom-full-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;