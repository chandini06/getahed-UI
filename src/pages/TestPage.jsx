import React from "react";
import AINavbar from "../components/AINavbar";
import CourseSidebar from "../components/CourseSidebar";
import FinalTest from "../components/FinalTest";
import "./TestPage.css";

const TestPage = () => (
  <div className="test-page-root1">
    <AINavbar />
    <div className="test-page-layout1">
      <CourseSidebar />
      <main className="test-page-content1">
        <FinalTest />
      </main>
    </div>
  </div>
);

export default TestPage;
