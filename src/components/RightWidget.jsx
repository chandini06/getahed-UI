import React, { useState, useEffect } from 'react';
import './RightWidget.css';
import arrowIcon from '../assets/arrow-icon.svg';
import { FaFire } from 'react-icons/fa';
import PerformanceStats1 from '../components/PerformanceStats1';
import LessonsProgress from '../components/LessonsProgress';
import { useNavigate } from 'react-router-dom';

import avatarImg from '../assets/ai-character.png'; 

const promptList = [
  'How to export a PDF to PPT using AI?',
  'How to summarize articles with AI?',
  'Give me daily productivity tips using AI',
  'How to create presentation using AI tools?'
];

const RightWidget = () => {
  const navigate = useNavigate();

  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [avatarVisible, setAvatarVisible] = useState(true);

  
  useEffect(() => {
    const promptInterval = setInterval(() => {
      setCurrentPromptIndex((prev) => (prev + 1) % promptList.length);
    }, 3000);
    return () => clearInterval(promptInterval);
  }, []);

 
  useEffect(() => {
    const avatarInterval = setInterval(() => {
      setAvatarVisible((prev) => !prev);
    }, 3000);
    return () => clearInterval(avatarInterval);
  }, []);

  return (
    <div className="right-widget1">
      <div className="ask-box1">
  <div className="avatar-circle1">
    {avatarVisible && (
      <img src={avatarImg} alt="AI Avatar" className="avatar-inside1" />
    )}
  </div>

  <p className="ask-title1">
    Ask me anything, I’m here to help you to <span className="highlight1">Getah’ed</span>
  </p>

  <div className="ask-input1">
    <input
      type="text"
      placeholder={promptList[currentPromptIndex]}
    />
    <button className="send-btn1" onClick={() => navigate('/aipage1')}>
      <img src={arrowIcon} alt="Send" className="send-icon1" />
    </button>
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
