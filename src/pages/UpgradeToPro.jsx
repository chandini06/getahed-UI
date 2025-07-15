import React from 'react';
import './UpgradeToPro.css';
import { useNavigate } from 'react-router-dom';
const UpgradeToPro = () => {
  const navigate = useNavigate();

  return (
    <div className="upgrade-wrapper">
      <button className="close-button" onClick={() => navigate(-1)}>✕</button>

      <div className="content-container">
        <h2 className="upgrade-heading">Upgrade to Pro</h2>

        <div className="toggle-plan">
          <button className="toggle-btn active">Monthly</button>
          <button className="toggle-btn">Yearly</button>
        </div>

        <div className="plan-card">
          <div className="plan-left">
            <img src={require('../assets/upgrade-individual.png')} alt="Individual" className="plan-image" />
            <div className="plan-info">
              <h3>Individual</h3>
              <p className="users">1 User</p>
              <p className="desc">
                For mid-market companies with 50 to 1000 employees seeking to elevate team capabilities.
              </p>
              <ul className="features">
                <li>Analytics dashboard for skill attainment</li>
                <li>Ensure smooth onboarding for learners</li>
                <li>Flexible invoice options</li>
              </ul>
            </div>
          </div>

          <div className="plan-right">
            <h3 className="price">₹ 2,250</h3>
            <p className="per-user">/user per month</p>
            <button className="upgrade-button">Upgrade Now</button>
            <p className="note">
              Discount available for annual plan. <a href="#">Contact Us</a> to learn more.
            </p>
          </div>
        </div>

        <div className="plan-card">
          <div className="plan-left">
            <img src={require('../assets/upgrade-team.png')} alt="Team Plan" className="plan-image" />
            <div className="plan-info">
              <h3>Team</h3>
              <p className="users">5+ Users</p>
              <p className="desc">
                For mid-market companies with 50 to 1000 employees seeking to elevate team capabilities.
              </p>
              <ul className="features">
                <li>Analytics dashboard for skill attainment</li>
                <li>Ensure smooth onboarding for learners</li>
                <li>Flexible invoice options</li>
              </ul>
            </div>
          </div>

          <div className="plan-right">
            <h3 className="price">₹ 10,250</h3>
            <p className="per-user">/user per month</p>
            <button className="upgrade-button">Upgrade Now</button>
            <p className="note">
              Discount available for annual plan. <a href="#">Contact Us</a> to learn more.
            </p>
          </div>
        </div>
      </div>

      <img
        src={require('../assets/upgrade-pro.png')}
        alt="Upgrade Mascot"
        className="upgrade-mascot"
      />
    </div>
  );
};

export default UpgradeToPro;
