import React, { useEffect, useState } from 'react';
import './AddOnDashboard.css';
import { Link } from 'react-router-dom';
import { MessageSquare, UserCheck, Clock, Settings, Users2, BarChart2 } from 'lucide-react';
import TopNav from '../components/TopNav';

function AddOnDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userRole, setUserRole] = useState('user'); 

  useEffect(() => {
    
    const role = localStorage.getItem('userRole') || 'user';
    setUserRole(role);
  }, []);

  useEffect(() => {
    async function fetchStats() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/api/stats');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError('Failed to load stats');
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  const renderStat = (value) => {
    if (loading) return '...';
    if (error) return '–';
    if (value === undefined || value === null) return '–';
    return value;
  };

  return (
    <div className="addon-dashboard-wrapper">
      <TopNav />

      <div className="addon-dashboard-stats">
        <div className="addon-stat-card">
          <p>Total Chats</p>
          <div className="addon-stat-content">
            <h3>{renderStat(stats?.totalChats)}</h3>
            <MessageSquare className="addon-stat-icon" color="#3366ff" />
          </div>
        </div>
        <div className="addon-stat-card">
          <p>Mock Interviews</p>
          <div className="addon-stat-content">
            <h3>{renderStat(stats?.mockInterviews)}</h3>
            <UserCheck className="addon-stat-icon" color="#28a745" />
          </div>
        </div>
        <div className="addon-stat-card">
          <p>Hours Mentored</p>
          <div className="addon-stat-content">
            <h3>{renderStat(stats?.hoursMentored)}</h3>
            <Clock className="addon-stat-icon" color="#9b2cf3" />
          </div>
        </div>
      </div>

      <main className="addon-dashboard-main">
        <div className="addon-mode-options">
          <div className="addon-mode-card mentor">
            <div className="addon-card-header">
              <MessageSquare className="addon-icon" size={22} />
              <h3>Mock Mentor Chat</h3>
            </div>
            <p>Get personalized career guidance and advice from your AI mentor</p>
            <p className="addon-label-title">Popular Topics:</p>
            <div className="addon-labels">
              <span className="addon-label blue">Career Growth</span>
              <span className="addon-label green">Skill Development</span>
              <span className="addon-label purple">Leadership</span>
            </div>
            <Link to="/addons/mentor" className="addon-primary-btn">Start Mentoring Session</Link>
          </div>

          <div className="addon-mode-card interview">
            <div className="addon-card-header">
              <UserCheck className="addon-icon" size={22} />
              <h3>Mock Interview</h3>
            </div>
            <p>Practice interviews with realistic scenarios and get instant feedback</p>
            <p className="addon-label-title">Interview Types:</p>
            <div className="addon-labels">
              <span className="addon-label green">Technical</span>
              <span className="addon-label orange">Behavioral</span>
              <span className="addon-label red">Case Study</span>
            </div>
            <Link to="/addons/interview" className="addon-secondary-btn">Start Interview Practice</Link>
          </div>

          
{userRole === 'admin' && (
  <div className="addon-admin-cards-wrapper">
    <div className="addon-mode-card admin">
      <div className="addon-card-header">
        <Users2 className="addon-icon" size={22} />
        <h3>User Management</h3>
      </div>
      <p>Manage users: create, block, reset passwords</p>
      <Link to="/addons/admin/users" className="addon-primary-btn">Go to User Management</Link>
    </div>

    <div className="addon-mode-card admin">
      <div className="addon-card-header">
        <Settings className="addon-icon" size={22} />
        <h3>Bot Preset Management</h3>
      </div>
      <p>Create or modify mentor/interview bot templates</p>
      <Link to="/addons/admin/bots" className="addon-secondary-btn">Manage Bots</Link>
    </div>

    <div className="addon-mode-card admin">
      <div className="addon-card-header">
        <BarChart2 className="addon-icon" size={22} />
        <h3>Reports & Logs</h3>
      </div>
      <p>View user reports, bot analytics, and system logs</p>
      <Link to="/addons/admin/reports" className="addon-secondary-btn">View Reports</Link>
    </div>
  </div>
)}

        </div>
      </main>
    </div>
  );
}

export default AddOnDashboard;
