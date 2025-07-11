import React from "react";
import journeyVideo from "../assets/journeymap.mp4";
import ContinueJourney from "../components/ContinueJourney";
import PerformanceStats from "../components/PerformanceStats";
import Journeys2 from "../components/Journeys2";
import "./Myjourney.css";

const MyJourney = () => {
  return (
    <div className="myjourney-wrapper">
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
      <Journeys2/>
    </div>
  );
};

export default MyJourney;
