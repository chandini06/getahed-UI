import React from "react";
import AINavbar from "../components/AINavbar";
import CourseSidebar from "../components/CourseSidebar";
import FinalTest from "../components/FinalTest";
import "./TestPage.css"; // Import the CSS provided below

const TestPage = () => (
  <div className="test-page-root">
    <AINavbar />
    <div className="test-page-layout">
      <CourseSidebar />
      <main className="test-page-content">
        <FinalTest />
      </main>
    </div>
  </div>
);

export default TestPage;
