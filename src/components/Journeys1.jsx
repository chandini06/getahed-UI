import React from 'react';
import { FiClock, FiBookOpen, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Journeys1.css';

import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.png';
import card6 from '../assets/card6.png';

const journeyData = [
  {
    image: card1,
    title: 'Write an professional email with help of AI',
  },
  {
    image: card2,
    title: 'Enhance your writing skills with AI - Tools',
  },
  {
    image: card3,
    title: 'Create Beautiful user interface using AI',
  },
  {
    image: card4,
    title: 'Design futuristic logos with AI assistance',
  },
  {
    image: card5,
    title: 'Write effective content for product marketing',
  },
  {
    image: card6,
    title: 'Improve grammar and tone using AI tools',
  },
];

const Journeys1 = () => {
  return (
    <div className="journeys-wrapper1">
      <div className="journeys-section1">
        <div className="journeys-header1">
          <h3>Journeys Made For You</h3>
          <span className="journeys-more1">More &gt;&gt;</span>
        </div>

        <div className="journeys-grid1">
          {journeyData.map((item, index) => (
            <Link to="/course-details" key={index} className="journey-card1">
                          <img src={item.image} alt={item.title} />
                          <p className="card-title1">{item.title}</p>
                          <div className="card-meta1">
                            <span><FiClock /> 2 Hours</span>
                            <span><FiBookOpen /> 10 Modules</span>
                            <span><FiUsers /> 50+</span>
                          </div>
                        </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journeys1;
