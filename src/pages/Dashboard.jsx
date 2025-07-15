// src/pages/Dashboard.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Banner from '../components/WelcomeBanner';
import AIPrompt from '../components/AIHelpPrompt';
import Journeys from '../components/Journeys';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="content-layout" style={{ display: 'flex' }}>
        <Sidebar />
        <div className="dashboard-container w-full p-6">
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
      </div>
    </div>
  );
};

export default Dashboard;