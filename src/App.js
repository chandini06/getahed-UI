import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Dashboard from './pages/Dashboard';
import LearningPage from './pages/LearningPage';
import Myjourney from './pages/Myjourney';

import './App.css';

function App() {
  return (
    <Router>
      <div className="main-layout">
        <Navbar />

        <div className="content-layout" style={{ display: 'flex' }}>
          <Sidebar />
          <div className="page-content w-full p-6">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/learning" element={<LearningPage />} />
              <Route path="/myjourney" element={<Myjourney />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
