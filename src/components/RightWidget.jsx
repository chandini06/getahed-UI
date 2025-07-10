import React from 'react';
import './RightWidget.css';
import { FiSend } from 'react-icons/fi';
import { FaFire } from 'react-icons/fa';
import PerformanceStats1 from '../components/PerformanceStats1';
import LessonsProgress from '../components/LessonsProgress';


const RightWidget = () => {
  return (
    <div className="right-widget">
      <div className="ask-box">
        <div className="avatar-circle"></div>
        <p className="ask-title">
          Ask me anything, I’m here to help you to <span className="highlight">Getah’ed</span>
        </p>
        <div className="ask-input">
          <input type="text" placeholder="How to export a PDF to PPT using AI?" />
          <button className="send-btn"><FiSend /></button>
        </div>
      </div>

      <div className="streak-box">
        <h4 className="streak-title">Your Daily Streak</h4>
        <div className="streak-days">
          {['Mon', 'Tue', 'Wed', 'Thru', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
            <div className="day-item" key={day}>
              <div className={`day-circle ${idx < 2 ? 'active' : ''}`}>
                {idx < 2 && <FaFire className="fire-icon" />}
              </div>
              <span className="day-label">{day}</span>
            </div>
          ))}
        </div>
        <div className="streak-footer">
          <FaFire className="streak-fire" />
          <span className="streak-count">2 / 7 days Streak</span>
        </div>
        <div className="streak-progress">
          <div className="streak-fill" style={{ width: '25%' }}></div>
        </div>
        <div className="streak-percent">25%</div>
      </div>
      <PerformanceStats1 />
      <LessonsProgress />
    </div>
  );
};

export default RightWidget;
