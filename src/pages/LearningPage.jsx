import React from 'react';
import ContinueJourney1 from '../components/ContinueJourney1';
import RightWidget from '../components/RightWidget'; 
import Journeys1 from '../components/Journeys1';
import downimg from '../assets/downimg.png'; // ✅ Import image

import './LearningPage.css';

const LearningPage = () => {
  return (
    <>
      <div className="learning-layout">
        <div className="left-content">
          <ContinueJourney1 />
          <Journeys1 />
        </div>
        <RightWidget />
      </div>

      {/* ✅ Bottom Image */}
      <div className="bottom-image-wrapper">
        <img src={downimg} alt="Down Image" className="bottom-full-image" />
      </div>
    </>
  );
};

export default LearningPage;
