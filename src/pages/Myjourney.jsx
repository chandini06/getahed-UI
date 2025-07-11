// src/pages/Myjourney.jsx
import React from "react";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import journeyVideo from "../assets/journeymap.mp4";
import ContinueJourney from "../components/ContinueJourney";
import PerformanceStats from "../components/PerformanceStats";
import Journeys2 from "../components/Journeys2";
import "./Myjourney.css";

const MyJourney = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="content-layout" style={{ display: 'flex' }}>
        <Sidebar />
        <div className="myjourney-wrapper w-full p-6">
          <video
            src={journeyVideo}
            autoPlay
            loop
            muted
            playsInline
            className="journey-video"
          />
          <div className="journey-grid">
            <ContinueJourney />
            <PerformanceStats />
          </div>
          <Journeys2 />
        </div>
      </div>
    </div>
  );
};

export default MyJourney;