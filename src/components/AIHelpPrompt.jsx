import React, { useState, useEffect } from 'react';
import './AIHelpPrompt.css';
import { useNavigate } from 'react-router-dom';
import binocularsIcon from '../assets/binoculars.png';
import aiCharacterIcon from '../assets/ai-character.png';
import arrowIcon from '../assets/arrow-icon.svg';

const AIHelpPrompt = () => {
  const navigate = useNavigate();

  const images = [binocularsIcon, aiCharacterIcon];
  const prompts = [
    'How to export a PDF to PPT using AI?',
    'How to prioritize my projects with help of AI?',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);

  // Rotate images
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // change image every 3 sec
    return () => clearInterval(imageInterval);
  }, []);

  // Rotate prompts
  useEffect(() => {
    const promptInterval = setInterval(() => {
      setCurrentPromptIndex((prevIndex) => (prevIndex + 1) % prompts.length);
    }, 3000); // change prompt every 3 sec
    return () => clearInterval(promptInterval);
  }, []);

  return (
    <div className="ai-help">
      <img
        src={images[currentImageIndex]}
        alt="AI Help"
        className="ai-icon"
      />

      <div className="ai-content">
        <div className="ai-text">
          <h3>Stuck in the grind?</h3>
          <p>
            Get a clearer view with <span className="highlight">Getah’ed AI</span> — ask me anything!
          </p>
        </div>

        <div className="ai-search">
          <input
            type="text"
            placeholder={prompts[currentPromptIndex]}
          />
          <button className="search-btn" onClick={() => navigate('/aipage1')}>
            <img src={arrowIcon} alt="Search" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIHelpPrompt;