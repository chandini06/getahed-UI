import React from 'react';
import Banner from '../components/WelcomeBanner';
import AIPrompt from '../components/AIHelpPrompt';
import './Dashboard.css';
import Journeys from '../components/Journeys';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="top-section">
        <Banner />
        <AIPrompt />
        <Journeys/>
      </div>
    </div>
  );
};

export default Dashboard;
