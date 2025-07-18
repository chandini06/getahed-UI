import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import LearningPage from './pages/LearningPage';
import Myjourney from './pages/Myjourney';
import UpgradeToPro from './pages/UpgradeToPro';
import AIPage1 from './pages/AIPage1'; 
import ExploreJourneys from './pages/ExploreJourneys';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route path="/myjourney" element={<Myjourney />} />
        <Route path="/upgrade" element={<UpgradeToPro />} />
        <Route path="/aipage1" element={<AIPage1 />} />
        <Route path="/ExploreJourneys" element={<ExploreJourneys />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
