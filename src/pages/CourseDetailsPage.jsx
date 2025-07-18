import React from 'react';
import AINavbar from '../components/AINavbar';
import CourseSidebar from '../components/CourseSidebar';
import CourseMainContent from '../components/CourseMainContent';
import './CourseDetailsPage.css';

const CourseDetailsPage = () => {
  return (
    <div className="course-page-layout">
      <AINavbar />
      <div className="course-body">
        <CourseSidebar />
        <CourseMainContent />
      </div>
    </div>
  );
};

export default CourseDetailsPage;
