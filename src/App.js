import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import LearningPage from './pages/LearningPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="main-layout">
        <Navbar />
        <div className="content-layout">
          <Sidebar />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/learning" element={<LearningPage />} />
              

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
