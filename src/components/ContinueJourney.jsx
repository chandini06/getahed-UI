import React from "react";
import "./ContinueJourney.css";
import { FaClock, FaUsers, FaBookOpen } from "react-icons/fa";
import CourseCard1 from "../assets/CourseCard1.png";
import CourseCard2 from "../assets/CourseCard2.png";

const ContinueJourney = () => {
  const courses = [
    {
      id: 1,
      image: CourseCard1,
      title: "Optimise your workflow with help of AI",
      duration: "2 Hours",
      modules: "10 Modules",
      learners: "50+",
      progress: 45,
    },
    {
      id: 2,
      image: CourseCard2,
      title: "Create Beautiful user interface using AI",
      duration: "2 Hours",
      modules: "10 Modules",
      learners: "50+",
      progress: 75,
    },
  ];

  return (
    <div className="continue-journey-container">
      <h2 className="continue-title">Continue Your Journey</h2>
      <div className="course-card-wrapper">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} className="course-image" />
            <h3 className="course-title">{course.title}</h3>
            <div className="course-info">
              <span><FaClock /> {course.duration}</span>
              <span><FaBookOpen /> {course.modules}</span>
              <span><FaUsers /> {course.learners}</span>
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${course.progress}%` }}
              ></div>
              <span className="progress-percent">{course.progress}%</span>
            </div>
            <button className="resume-button">Resume Learning</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueJourney;
