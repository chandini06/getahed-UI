<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

>>>>>>> eaf498d52d50677c0d457de01f5363c608d3f58c
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Dashboard from './pages/Dashboard';
<<<<<<< HEAD
import LearningPage from './pages/LearningPage';
=======
import Myjourney from './pages/Myjourney';

>>>>>>> eaf498d52d50677c0d457de01f5363c608d3f58c
import './App.css';

function App() {
  return (
    <Router>
      <div className="main-layout">
        <Navbar />
<<<<<<< HEAD
        <div className="content-layout">
          <Sidebar />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/learning" element={<LearningPage />} />
              

=======
        <div className="content-layout" style={{ display: 'flex' }}>
          <Sidebar />
          <div className="page-content w-full p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Myjourney" element={<Myjourney />} />
>>>>>>> eaf498d52d50677c0d457de01f5363c608d3f58c
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
