import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import LearningPage from './pages/LearningPage';
import Myjourney from './pages/Myjourney';


import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route path="/myjourney" element={<Myjourney />} />
      </Routes>
    </Router>
  );
}

export default App;