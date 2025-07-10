import React from "react";
import "./PerformanceStats.css";
import { FaClock, FaHourglassHalf } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import LessonsProgress1 from '../components/LessonsProgress1';

const PerformanceStats = () => {
  return (
    <div className="performance-container">
      <div className="performance-header">
        <h2 className="performance-heading">Your Performance</h2>
        <select className="filter-dropdown">
          <option>This Week</option>
        </select>
      </div>

      <div className="performance-stats-row">
        {/* Learning Time Card */}
        <div className="performance-card">
          <div className="icon-circle">
            <FaClock className="stat-icon" />
          </div>
          <h3 className="stat-value">43 Hours</h3>
          <p className="stat-subtext">Learning time</p>
        </div>

        {/* Average/Day Card */}
        <div className="performance-card">
          <div className="icon-circle">
            <FaHourglassHalf className="stat-icon" />
          </div>
          <h3 className="stat-value">1.5 Hours</h3>
          <p className="stat-subtext">Average/Day</p>
        </div>
      </div>
      <LessonsProgress1 />
    </div>
  );
};

export default PerformanceStats;
