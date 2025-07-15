import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import AIPrompt from '../components/AIHelpPrompt';
import JourneyTabs from '../components/JourneyTabs';
import JourneyBanner from '../assets/JourneyBanner.png'; 
import './ExploreJourneys.css';

const ExploreJourneys = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="content-layout" style={{ display: 'flex' }}>
        <Sidebar />
        <div className="ExploreJourneys-container w-full p-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh' }}>
          <div>
            <AIPrompt />
            <JourneyTabs />
          </div>

          <div className="JourneyBanner-image">
            <img src={JourneyBanner} alt="Explore More Banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreJourneys;
