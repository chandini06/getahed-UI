import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Dashboard from './pages/Dashboard';
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
              <Route path="/" element={<Dashboard />} />
              <Route path="/Myjourney" element={<Myjourney />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;