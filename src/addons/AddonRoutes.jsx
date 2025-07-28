// src/addons/AddonRoutes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import your addon pages
import AddonDashboard from './pages/AddOnDashboard';
import Login from './pages/Login';
import AddonSignup from './pages/Signup';
import MentorChat from './pages/MentorChat';
import MockInterview from './pages/MockInterview';
import Account from './pages/Account';
import Results from "./pages/Results";
import Performance from './pages/Performance';
import UserManagement from "./pages/UserManagement";
import BotManagement from "./pages/BotManagement";
import Reports from "./pages/Reports";

const AddonRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/addons/login" />} />
      <Route index element={<Navigate to="/addons/login" />} />

      <Route path="dashboard" element={<AddonDashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<AddonSignup />} />
      <Route path="mentor" element={<MentorChat />} />
      <Route path="interview" element={<MockInterview />} />
      <Route path="account" element={<Account />} />
      <Route path="results" element={<Results />} />
      <Route path="performance" element={<Performance />} />
      <Route path="admin/users" element={<UserManagement />} />
      <Route path="admin/bots" element={<BotManagement />} />
      <Route path="admin/reports" element={<Reports />} />
    </Routes>
  );
};

export default AddonRoutes;
