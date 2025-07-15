import React from 'react';
import './LessonsProgress.css';

const LessonsProgress = () => {
  const total = 7;
  const completed = 3;
  const inProgress = 3;
  const notStarted = 1;
  const rings = [
    { label: 'Completed', value: completed, color: '#8733FF', r: 44 },
    { label: 'In-Progress', value: inProgress, color: '#5BB3FF', r: 34 },
    { label: 'Not Started', value: notStarted, color: '#E24C4B', r: 24 },
  ];

  const getStrokeDash = (value, r) => {
    const circumference = 2 * Math.PI * r;
    const percent = (value / total) * circumference;
    return `${percent} ${circumference}`;
  };

  return (
    <div className="lessons-progress-wrapper">
      <div className="lessons-progress-header">
        <h4>Lessons Progress</h4>
        <select className="filter-dropdown">
          <option>This Week</option>
        </select>
      </div>

      <svg className="progress-svg" viewBox="0 0 120 120">

        {rings.map((ring, index) => (
          <circle
            key={index}
            className="bg-ring"
            cx="60"
            cy="60"
            r={ring.r}
          />
        ))}

        {rings.map((ring, index) => (
          <circle
            key={index}
            cx="60"
            cy="60"
            r={ring.r}
            fill="none"
            stroke={ring.color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={getStrokeDash(ring.value, ring.r)}
            strokeDashoffset="0"
            transform="rotate(-90 60 60)"
          />
        ))}
      </svg>

      <div className="progress-legend">
        <div className="legend-item">
          <span className="legend-dot" style={{ background: '#8733FF' }}></span>
          <span className="legend-text">{completed}/{total} Completed</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ background: '#5BB3FF' }}></span>
          <span className="legend-text">{inProgress}/{total} In-Progress</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ background: '#E24C4B' }}></span>
          <span className="legend-text">{notStarted}/{total} Not Started</span>
        </div>
      </div>
    </div>
  );
};

export default LessonsProgress;
