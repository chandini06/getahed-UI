import React, { useState } from 'react';
import './AIPage1.css';
import { FaArrowRight, FaRobot } from 'react-icons/fa';
import AINavbar from '../components/AINavbar';
import userAvatar from '../assets/profile.jpg'; // adjust path if needed

const AIPage1 = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const handleSend = () => {
    if (inputText.trim()) {
      const userMessage = { text: inputText, sender: 'user' };
      setMessages(prev => [...prev, userMessage]);
      setInputText('');
      setIsThinking(true);

      // Simulate AI response after 1 second
      setTimeout(() => {
        const aiResponse = {
          text: getAIResponse(userMessage.text),
          sender: 'ai'
        };
        setMessages(prev => [...prev, aiResponse]);
        setIsThinking(false);
      }, 1000);
    }
  };

  // Dummy AI response generator
  const getAIResponse = (question) => {
    if (question.toLowerCase().includes('ppt')) return 'Sure! I can guide you in making a great AI-powered PPT.';
    if (question.toLowerCase().includes('prioritise')) return 'Start with the most urgent and important tasks!';
    if (question.toLowerCase().includes('promoted')) return 'Explore leadership and skill upgrade journeys!';
    if (question.toLowerCase().includes('data science')) return 'You can start with beginner Data Science Intern journeys!';
    return "That's an interesting question! Let me think...";
  };

  return (
    <div className="ai-page">
      <AINavbar />

      <div className="ai-body">
        <h4 className="centered-title">GetAh’ed AI</h4>

        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              {msg.sender === 'ai' && (
                <FaRobot className="avatar ai-icon" aria-label="AI robot icon" />
              )}
              <span className="message-text">{msg.text}</span>
              {msg.sender === 'user' && (
                <img src={userAvatar} alt="User" className="avatar" />
              )}
            </div>
          ))}
          {isThinking && (
            <div className="chat-message ai">
              <FaRobot className="avatar ai-icon" aria-label="AI robot icon thinking" />
              <span className="message-text">...</span>
            </div>
          )}
        </div>

        <div className="ai-input-wrapper">
          <input
            type="text"
            className="ai-input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask me anything to Getah’ed"
          />
          <button className="ai-send-button" onClick={handleSend}>
            <FaArrowRight />
          </button>
        </div>

        <div className="suggested-questions">
          <button onClick={() => setInputText("How to make PPT with the help of AI?")}>
            How to make PPT with the help of AI?
          </button>
          <button onClick={() => setInputText("How to prioritise my projects with help of AI?")}>
            How to prioritise my projects with help of AI?
          </button>
          <button onClick={() => setInputText("What are the journeys to get promoted?")}>
            What are the journeys to get promoted?
          </button>
          <button onClick={() => setInputText("What are the Journeys for the interns in Data Science?")}>
            What are the Journeys for the interns in Data Science?
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIPage1;
