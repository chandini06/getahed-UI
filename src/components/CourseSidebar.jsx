import React, { useState } from 'react';
import { ChevronDown, ChevronUp, PlayCircle, PauseCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './CourseSidebar.css';
import proIcon from '../assets/pro-icon.png'; // make sure this is correct

const courseModules = [
  {
    title: 'Module 1 : Copilot for intern / trainee',
    lessons: [
      { title: 'Introduction', duration: '20 min', isPlaying: true },
      { title: 'Draft a formal email to your manager by using copilot', duration: '20 min' },
      { title: 'Reply to a project email from a team member by using copilot', duration: '20 min' },
      { title: 'Final Test', duration: '20 min' },
    ],
  },
  {
    title: 'Module 2 : Copilot for task management',
    lessons: [
      { title: 'Introduction', duration: '20 min', isPlaying: true },
      { title: 'Draft a formal email to your manager by using copilot', duration: '20 min' },
      { title: 'Reply to a project email from a team member by using copilot', duration: '20 min' },
      { title: 'Final Test', duration: '20 min' },
    ],
  },
  {
    title: 'Module 3 : Copilot for Agile Methodology',
    lessons: [
      { title: 'Introduction', duration: '20 min', isPlaying: true },
      { title: 'Draft a formal email to your manager by using copilot', duration: '20 min' },
      { title: 'Reply to a project email from a team member by using copilot', duration: '20 min' },
      { title: 'Final Test', duration: '20 min' },
    ],
  },
  {
    title: 'Module 4 : Copilot for project management',
    lessons: [
      { title: 'Introduction', duration: '20 min', isPlaying: true },
      { title: 'Draft a formal email to your manager by using copilot', duration: '20 min' },
      { title: 'Reply to a project email from a team member by using copilot', duration: '20 min' },
      { title: 'Final Test', duration: '20 min' },
    ],
    isLocked: true,
  },
  {
    title: 'Module 5 : Copilot for File Version Control',
    lessons: [
      { title: 'Introduction', duration: '20 min', isPlaying: true },
      { title: 'Draft a formal email to your manager by using copilot', duration: '20 min' },
      { title: 'Reply to a project email from a team member by using copilot', duration: '20 min' },
      { title: 'Final Test', duration: '20 min' },
    ],
    isLocked: true,
  },
];

const CourseSidebar = () => {
  const [openModules, setOpenModules] = useState([0]); // Module 0 expanded by default
  const navigate = useNavigate();

  const toggleModule = (index) => {
    setOpenModules((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="sidebar-container">
      {courseModules.map((module, index) => (
        <div key={index} className="module-wrapper">
          <div className="module-title" onClick={() => toggleModule(index)}>
            <span>{module.title}</span>

            {/* PRO ICON for locked modules */}
            {module.isLocked && (
              <img
                src={proIcon}
                alt="Pro"
                className="pro-icon"
                onClick={(e) => {
                  e.stopPropagation(); // prevent toggle
                  navigate('/upgrade');
                }}
              />
            )}

            {openModules.includes(index) ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </div>

          {openModules.includes(index) && module.lessons.length > 0 && (
            <div className="lesson-list">
              {module.lessons.map((lesson, i) => (
                <div
                  key={i}
                  className={`lesson-card ${lesson.isPlaying ? 'active' : ''}`}
                >
                  <div className="lesson-header">
                    {lesson.isPlaying ? (
                      <PauseCircle size={18} className="icon" />
                    ) : (
                      <PlayCircle size={18} className="icon" />
                    )}
                    <div>
                      <p className="lesson-title">{lesson.title}</p>
                      <p className="lesson-time">{lesson.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {module.lessons.length === 0 && <hr />}
        </div>
      ))}
    </div>
  );
};

export default CourseSidebar;
