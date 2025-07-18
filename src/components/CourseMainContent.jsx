import React, { useEffect, useState } from 'react';
import './CourseMainContent.css';
import avatarImg from '../assets/profile.jpg'; // Adjust path if needed
import Coursebanner from './Coursebanner';
const CourseMainContent = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchedReviews = [
      {
        id: 1,
        name: 'Rohan',
        title: 'Graphic Designer',
        rating: 5,
        text: "I've been consistently impressed with the quality of service provided. Very detailed and responsive. Highly recommended!",
        avatar: avatarImg,
      },
      {
        id: 2,
        name: 'Sneha',
        title: 'UI/UX Designer',
        rating: 5,
        text: 'The course was well-structured and easy to follow. I gained a lot of practical knowledge.',
        avatar: avatarImg,
      }
    ];
    setReviews(fetchedReviews);
  }, []);

  return (
    <div className="course-main-content">
      {/* Video */}
      <div className="video-container">
        <video controls poster="https://dummyimage.com/800x400/edeaf0/fff.png&text=Course+Preview">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Course Info */}
      <h3>Course Details</h3>
      <div className="details-section">
        <div className="detail-card">
          <h4>Modules</h4>
          <p>10 modules</p>
        </div>
        <div className="detail-card">
          <h4>Duration</h4>
          <p>56h 28m</p>
        </div>
        <div className="detail-card">
          <h4>Participants</h4>
          <p>500+</p>
        </div>
        <div className="detail-card">
          <h4>Assignments</h4>
          <p>8</p>
        </div>
      </div>

      {/* Description */}
      <div className="description-section">
        <h3>Description</h3>
        <div className="description-box">
          <p><strong>Welcome to the course 👋</strong></p>
          <p>
            Hi! I am Thomas Wayne, your React.js instructor. I am super happy to help you understand the core basics and advanced topics of React.
          </p>
          <p>
            In this course, we will cover basic as well as advanced topics, a full-on guide to help you understand React in-depth.
          </p>
        </div>
      </div>

      {/* Reviews */}
      <div className="reviews-section">
        <h3>Reviews</h3>
        <div className="reviews-container">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <div className="review-header">
                <img src={review.avatar} alt="user avatar" />
                <div>
                  <h4>{review.name}</h4>
                  <p>{review.title}</p>
                </div>
              </div>
              <p className="stars">{'★'.repeat(review.rating)}</p>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Coursebanner />
    </div>
  );
};

export default CourseMainContent;
