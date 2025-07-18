import React, { useState } from 'react';
import './JourneyTabs.css';
import { Link } from 'react-router-dom';
import { FiClock, FiBookOpen, FiUsers } from 'react-icons/fi';
import made1 from '../assets/Journeycard1.png';
import made2 from '../assets/Journeycard2.png';
import made3 from '../assets/Journeycard3.png';
import made4 from '../assets/Journeycard4.png';
import made5 from '../assets/Journeycard5.png';
import made6 from '../assets/Journeycard6.png';
import made7 from '../assets/Journeycard7.png';

import img1 from '../assets/card1.png';
import img2 from '../assets/card2.png';
import img3 from '../assets/card3.png';
import img4 from '../assets/card4.png';
import img5 from '../assets/card5.png';
import img6 from '../assets/card6.png';
import img7 from '../assets/card3.png';

import hands1 from '../assets/Journeycard8.png';
import hands2 from '../assets/Journeycard9.png';
import hands3 from '../assets/Journeycard10.png';
import hands4 from '../assets/Journeycard11.png';
import hands5 from '../assets/Journeycard12.png';
import hands6 from '../assets/Journeycard13.png';

const JourneyTabs = () => {
  const [activeTab, setActiveTab] = useState('made');

  const journeysData = {
    made: [
      { image: made1, title: 'Explore the potential of AI in healthcare' },
      { image: made2, title: 'Discover the impact of AI on e-commerce' },
      { image: made3, title: 'Unlock creativity with AI-generated art' },
      { image: made4, title: 'Optimize business processes with AI automation' },
      { image: made5, title: 'Implement AI in customer service for efficiency' },
      { image: made6, title: 'AI in agriculture: Revolutionizing farming practices' },
      { image: made7, title: 'AI ethics and responsible innovation in technology' },
    ],
    skill: [
      { image: img1, title: 'Write a professional email with help of AI' },
      { image: img2, title: 'Enhance your writing skills with AI - Tools' },
      { image: img3, title: 'Create Beautiful user interface using AI' },
      { image: img4, title: 'Master AI-powered digital marketing strategies' },
      { image: img5, title: 'Design futuristic logos with AI assistance' },
      { image: img6, title: 'Learn advanced AI techniques for data analysis' },
      { image: img7, title: 'Craft powerful presentations using AI' },
    ],
    hands: [
      { image: hands1, title: 'Write a professional email with help of AI' },
      { image: hands2, title: 'Enhance your writing skills with AI - Tools' },
      { image: hands3, title: 'Create Beautiful user interface using AI' },
      { image: hands4, title: 'Master AI-powered digital marketing strategies' },
      { image: hands5, title: 'Design futuristic logos with AI assistance' },
      { image: hands6, title: 'Learn advanced AI techniques for data analysis' },
    ]
  };

  return (
    <div className='journey-tabs-wrapper'>
      <div className="journey-tabs-container">
        <div className="tab-buttons">
          <button
            className={activeTab === 'made' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('made')}
          >
            Made For You
          </button>
          <button
            className={activeTab === 'skill' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('skill')}
          >
            Skill Up Journeys
          </button>
          <button
            className={activeTab === 'hands' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('hands')}
          >
            Hand’s On Experience
          </button>
        </div>

        <div className="tab-content">
          <div className="tab-section">
            {journeysData[activeTab].map((journey, index) => (
              <Link to="/course-details" key={index} className="journeytab-cardd">
                                        <img src={journey.image} alt={journey.title} />
                                        <p className="journeytab-card-title">{journey.title}</p>
                                        <div className="journeytab-card-meta">
                                          <span><FiClock /> 2 Hours</span>
                                          <span><FiBookOpen /> 10 Modules</span>
                                          <span><FiUsers /> 50+</span>
                                        </div>
                                      </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyTabs;
