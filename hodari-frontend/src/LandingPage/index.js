import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import Inotalogo from '../images/inota.png'

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  return (
    <div className="landing-page">
      <div className="logo-container">
        <div className="logo">
       <img src={Inotalogo} alt='inota logo'></img>
        </div>
      </div>
      <p className="welcome-text">
        Welcome to <span className="highlight">INOTA</span>, a system that is going<br />
        to help you credit score your clients.
      </p>
      <button className="get-started-btn" onClick={handleGetStarted}>Get Started</button>
    </div>
  );
};

export default LandingPage;