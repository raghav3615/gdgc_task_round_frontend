import 'react';
import { ArrowRight } from 'lucide-react';
import './App.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo-container">
          <div className="logo"></div>
          <span>COUCHER</span>
        </div>

        <div className="nav-links">
          <a href="#services">SERVICES</a>
          <a href="#about">ABOUT US</a>
          <a href="#cases">CASES</a>
          <div className="sign-up">
            <span>SIGN UP</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </nav>
      <div className="white-line"></div> {/* Thin white line below navbar */}

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

            <div className="white-line"></div> {/* Thin white line below text */}

            <div className="solutions-text">
              <h2 className="left">OUR SOLUTIONS</h2>
              <p className="right">WE PROVIDE THE FULL FUNNEL APPROACH</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <div className="card purple-card">
            <div className="business-boost-image">
              <img
                src="/gdgc task.avif"
                alt="Business boost"
                className="boost-background-image"
              />
            </div>
            <div className="card-content">
              <div className="boost-text">
                <p>
                  YOUR
                  <br />
                  BUSINESS
                  <br />
                  BOOST
                </p>
              </div>
              <button className="demo-button">
                Book Demo Call
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid Section */}
      <div className="bottom-grid">
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "20px",
          }}
        >
          {/* Play Button with Text */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* Play Button */}
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="black"
                viewBox="0 0 16 16"
              >
                <path d="M4.5 3.5v9l7-4.5-7-4.5z" />
              </svg>
            </div>

            {/* Text */}
            <div style={{ color: "#fff" }}>
              <p style={{ fontSize: "1rem", margin: 0 }}>Let's See</p>
              <p style={{ fontSize: "1.2rem", margin: 0, fontWeight: "bold" }}>
                How We Did It
              </p>
            </div>
          </div>

          <div className="services-list">
            <button>WEB ANALYTICS</button>
            <button>EMAIL MARKETING</button>
            <button>SEO 2.0</button>
          </div>
        </div>

        <div className="feature-cards">
          <div className="card orange-card">
            <div>
              <h3>UNIQUE</h3>
              <h3>BUSINESS SOLUTIONS</h3>
            </div>
            <div className="circle-icon"></div>
          </div>

          <div className="card gray-card">
            <div className="case-studies">
              <ArrowRight size={70} />
              <h3>OUR CASE</h3>
              <h3>STUDIES</h3>
            </div>
          </div>

          <div className="card yellow-card">
            <div>
              <h3>
                SUCCESSFUL
                <br />
                PROJECTS
              </h3>
              <div className="projects-number">
                700<sup>+</sup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
