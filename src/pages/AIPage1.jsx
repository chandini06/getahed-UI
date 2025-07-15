import React from 'react';
import './AIPage1.css';
import { FaArrowRight } from 'react-icons/fa';
import AINavbar from '../components/AINavbar';

const AIPage1 = () => {
  return (
    <div className="ai-page">
      <AINavbar /> 

      <div className="ai-body">
        <h4 className="centered-title">GetAh’ed AI</h4>
        <div className="ai-avatar"></div>

        <div className="ai-input-wrapper">
          <input
            type="text"
            className="ai-input"
            placeholder="Ask me any thing to Getah’ed"
          />
          <button className="ai-send-button">
            <FaArrowRight />
          </button>
        </div>

        <div className="suggested-questions">
          <button>How to make PPT with the help of AI?</button>
          <button>How to prioritise my projects with help of AI?</button>
          <button>What are the journeys to get promoted?</button>
          <button>What are the Journeys for the interns in Data Science?</button>
        </div>
      </div>
    </div>
  );
};

export default AIPage1;
