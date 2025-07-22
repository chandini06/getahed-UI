import React from "react";
import "./PerformanceStats1.css";
import { FaClock, FaHourglassHalf } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const PerformanceStats1 = () => {
  return (
    <div className="performance-container1">
      <div className="performance-header1">
        <h2 className="performance-heading1">Your Performance</h2>
        <select className="filter-dropdown1">
          <option>This Week</option>
        </select>
      </div>

      <div className="performance-stats-row1">
        <div className="performance-card1">
          <div className="icon-circle">
            <FaClock className="stat-icon" />
          </div>
          <h3 className="stat-value">43 Hours</h3>
          <p className="stat-subtext">Learning time</p>
        </div>

        <div className="performance-card1">
          <div className="icon-circle">
            <FaHourglassHalf className="stat-icon" />
          </div>
          <h3 className="stat-value">1.5 Hours</h3>
          <p className="stat-subtext">Average/Day</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceStats1;