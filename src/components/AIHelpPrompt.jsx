import React from 'react';
import './AIHelpPrompt.css';
import binocularsIcon from '../assets/binoculars.png';
import arrowIcon from '../assets/arrow-icon.svg';

const AIHelpPrompt = () => {
  return (
    <div className="ai-help">
      <img src={binocularsIcon} alt="AI Help" className="ai-icon" />

      <div className="ai-content">
        <div className="ai-text">
          <h3>Stuck in the grind?</h3>
          <p>
            Get a clearer view with <span className="highlight">Getah’ed AI</span> — ask me anything!
          </p>
        </div>

        <div className="ai-search">
          <input type="text" placeholder="How to export a PDF to PPT using AI?" />
          <button className="search-btn">
            <img src={arrowIcon} alt="Search" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIHelpPrompt;
