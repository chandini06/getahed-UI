import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrainCog, User, Settings } from 'lucide-react'; // Import User and Settings for clarity
import './TopNav.css';

function TopNav({ isAuthPage = false }) {
  const location = useLocation();

  return (
    <header className="dashboard-navbar">
      <div className="logo-section">
        <BrainCog size={24} className="logo-icon" />
        <span className="app-name">AI Mentor</span>
      </div>
      <div className="user-section">
        {isAuthPage ? (
          <>
            <Link 
              to="/addons/login" 
              className={`nav-btn ${location.pathname === '/addons/login' ? 'active' : ''}`}
            >
              Login
            </Link>
            <Link 
              to="/addons/signup" 
              className={`nav-btn ${location.pathname === '/addons/signup' ? 'active' : ''}`}
            >
              Signup
            </Link>
          </>
        ) : (
          <Link to="/addons/account" className="account-icon-btn" title="Account Settings">
            <User size={24} /> {/* Changed to User icon for account */}
          </Link>
        )}
      </div>
    </header>
  );
}

export default TopNav;