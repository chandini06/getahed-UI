import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.svg';
import profilePic from '../assets/profile.jpg';
import searchIcon from '../assets/search-icon.svg'; 

const Navbar = () => {
  return (
    <div className="navbar">
  <img src={logo} alt="Logo" className="logo" />
  <div className="search-container">
    <input type="text" className="search-bar" placeholder="Search..." />
    <button className="search-button">
      <img src={searchIcon} alt="Search" className="search-icon" />
    </button>
  </div>
  <div className="profile-box">
    <img src={profilePic} alt="Profile" className="profile-pic" />
    <div className="profile-info">
      <div className="profile-name">Jatin Vincent</div>
      <div className="profile-email">jatinvincent@gmail.com</div>
    </div>
  </div>
</div>

  );
};

export default Navbar;
