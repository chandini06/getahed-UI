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
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
     <ul className="sidebar-links">
  <li><div className="link-content"><FaTachometerAlt /> Dashboard</div></li>
  <li><div className="link-content"><FaBook /> My Journey</div></li>
  <li><div className="link-content"><FaUserGraduate /> Explore Journeys</div></li>
  <li><div className="link-content"><FaChartBar /> Analytics</div></li>
  <li><div className="link-content"><FaCertificate /> Certificates</div></li>
  <li><div className="link-content"><FaCogs /> Hands-on Experience</div></li>
  <li><div className="link-content"><FaBell /> Notifications</div></li>
  <li><div className="link-content"><FaQuestionCircle /> Help</div></li>
  <li><div className="link-content"><FaSignOutAlt /> Log out</div></li>
</ul>
    <div className="upgrade-box">
        <div className="upgrade-text">
          <h4>Upgrade<br></br>to Pro</h4>
          <p>Get 1 month free on <br></br> annual subscription</p>
          <a href="#">Upgrade Today!</a>
        </div>
        <img src={upgradeImg} alt="Upgrade to Pro" className="upgrade-img" />
      </div>
    </div>
  );
};

export default Sidebar;
