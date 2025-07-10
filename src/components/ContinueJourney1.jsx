import React from "react";
import "./ContinueJourney1.css";
import { FaClock, FaUsers, FaBookOpen } from "react-icons/fa";
import CourseCard1 from "../assets/CourseCard1.png";
import CourseCard2 from "../assets/CourseCard2.png";

const ContinueJourney1 = () => {
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
    <div className="continue-journey-container1">
      <h2 className="continue-title1">Continue Your Journey</h2>
      <div className="course-card-wrapper1">
        {courses.map((course) => (
          <div className="course-card1" key={course.id}>
            <img src={course.image} alt={course.title} className="course-image1" />
            <h3 className="course-title1">{course.title}</h3>
            <div className="course-info1">
              <span><FaClock /> {course.duration}</span>
              <span><FaBookOpen /> {course.modules}</span>
              <span><FaUsers /> {course.learners}</span>
            </div>
            <div className="progress-bar-container1">
              <div
                className="progress-bar1"
                style={{ width: '${course.progress}%' }}
              ></div>
              <span className="progress-percent1">{course.progress}%</span>
            </div>
            <button className="resume-button1">Resume Learning</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ContinueJourney1;