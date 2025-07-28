import React from 'react';
import './Sidebar.css';
import upgradeImg from '../assets/upgrade-pro.png';

import {
  FaTachometerAlt,
  FaBook,
  FaUserGraduate,
  FaChartBar,
  FaCertificate,
  FaCogs,
  FaBell,
  FaSignOutAlt,
  FaQuestionCircle,
  FaPuzzlePiece
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'; 

const Sidebar = () => {
  const location = useLocation(); 
  const currentPath = location.pathname;

  return (
    <div className="sidebar">
      <ul className="sidebar-links">
        <li className={currentPath === '/dashboard' ? 'active-link' : ''}>
          <Link to="/dashboard" className="link-content">
            <FaTachometerAlt /> Dashboard
          </Link>
        </li>

        <li className={currentPath === '/Myjourney' ? 'active-link' : ''}>
          <Link to="/Myjourney" className="link-content">
            <FaBook /> My Journey
          </Link>
        </li>
        <li className={currentPath === '/ExploreJourneys' ? 'active-link' : ''}>
          <Link to="/ExploreJourneys" className="link-content">
            <FaUserGraduate /> Explore Journeys
          </Link>
        </li>
        <li className={currentPath.startsWith('/addons') ? 'active-link' : ''}>
          <Link to="/addons/login" className="link-content">
            <FaPuzzlePiece /> Add-ons
          </Link>
        </li>
        <li>
          <div className="link-content">
            <FaChartBar /> Analytics
          </div>
        </li>
        <li>
          <div className="link-content">
            <FaCertificate /> Certificates
          </div>
        </li>
        <li>
          <div className="link-content">
            <FaCogs /> Hands-on Experience
          </div>
        </li>
        <li>
          <div className="link-content">
            <FaBell /> Notifications
          </div>
        </li>
        <li>
          <div className="link-content">
            <FaQuestionCircle /> Help
          </div>
        </li>
        <li>
          <div className="link-content">
            <FaSignOutAlt /> Log out
          </div>
        </li>
      </ul>

     <Link to="/upgrade" className="upgrade-link-wrapper">
  <div className="upgrade-box">
    <div className="upgrade-text">
      <h4>Upgrade<br />to Pro</h4>
      <p>Get 1 month free on <br /> annual subscription</p>
      <span className="upgrade-cta">Upgrade <br></br>Today!</span>
    </div>
    <img src={upgradeImg} alt="Upgrade to Pro" className="upgrade-img" />
  </div>
</Link>
    </div>
  );
};

export default Sidebar;
