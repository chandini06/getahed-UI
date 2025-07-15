import React from 'react';
import './AINavbar.css';
import profilePic from '../assets/profile.jpg';
import searchIcon from '../assets/search-icon.svg';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AINavbar = () => {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: '24px' }}> 
      <div className="navbar1">
        <div className="logo1" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '18px',
              cursor: 'pointer',
              color: '#2a0b57',
              padding: 0,
            }}
          >
            <FaArrowLeft />
          </button>
          <span style={{ fontSize: '18px', fontWeight: '600', color: '#2a0b57' }}>
            GetAh’ed AI
          </span>
        </div>

        <div className="search-container1">
          <input type="text" className="search-bar1" placeholder="Search..." />
          <button className="search-button1">
            <img src={searchIcon} alt="Search" className="search-icon" />
          </button>
        </div>

        <div className="profile-box1">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className="profile-info1">
            <div className="profile-name1">Jatin Vincent</div>
            <div className="profile-email1">jatinvincent@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AINavbar;
