import React from 'react';
import Banner from '../components/WelcomeBanner';
import AIPrompt from '../components/AIHelpPrompt';
import Journeys from '../components/Journeys';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="top-section">
        <Banner />
        <AIPrompt />
        <Journeys />
        <button
          onClick={() => {
            localStorage.setItem('hasStartedLearning', 'true');
            window.location.href = '/learning'; 
          }}
        >
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
