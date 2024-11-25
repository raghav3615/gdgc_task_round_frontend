// src/pages/LandingPage.tsx
import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import './App.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo-container">
          <div className="logo"></div>
          <span>OUCHER</span>
        </div>
        
        <div className="nav-links">
          <a href="#services">SERVICES</a>
          <a href="#about">ABOUT US</a>
          <a href="#cases">CASES</a>
          <div className="sign-up">
            <span>SIGN UP</span>
            <ArrowRight />
          </div>
        </div>
      </nav>

      <div className="main-content">
        {/* Left Column */}
        <div className="left-column">
          <div className="hero-section">
            <h1>
              UNLIMITED
              <br />
              PRETENTIOUS
              <br />
              <div className="ideas-row">
                <div className="avatar-group">
                  <div className="avatar avatar-1"></div>
                  <div className="avatar avatar-2"></div>
                  <div className="avatar avatar-3"></div>
                </div>
                IDEAS
              </div>
            </h1>

            <div className="solutions-text">
              <h2>OUR SOLUTIONS</h2>
              <p>WE PROVIDE THE FULL<br />FUNNEL APPROACH</p>
            </div>

            <div className="bottom-actions">
              <button className="play-button">
                <Play />
                <span>
                  Let's See
                  <br />
                  How We Did It
                </span>
              </button>
              
              <div className="services-list">
                <button>WEB ANALYTICS</button>
                <button>EMAIL MARKETING</button>
                <button>SEO 2.0</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          {/* Purple Card */}
          <div className="card purple-card">
            <div className="card-content">
              <div>
                <p>YOUR</p>
                <p>BUSINESS</p>
                <p>BOOST</p>
              </div>
              <button className="demo-button">
                Book Demo Call
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="small-cards">
            {/* Orange Card */}
            <div className="card orange-card">
              <div>
                <p>UNIQUE</p>
                <p>BUSINESS SOLUTIONS</p>
              </div>
              <div className="circle-icon"></div>
            </div>

            {/* Gray Card */}
            <div className="card gray-card">
              <div className="case-studies">
                <p>OUR CASE</p>
                <p>STUDIES</p>
                <ArrowRight size={16} />
              </div>
            </div>

            {/* Yellow Card */}
            <div className="card yellow-card">
              <h3>700<sup>+</sup></h3>
              <p>SUCCESSFUL</p>
              <p>PROJECTS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;