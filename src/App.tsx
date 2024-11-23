import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          flexShrink: 0,
          borderBottom: "1px solid #333",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "24px", fontWeight: "bold" }}>Coucher</h1>
        <nav style={{ display: "flex", gap: "30px", fontSize: "16px" }}>
          <a
            href="#services"
            style={{
              textDecoration: "none",
              color: "#fff",
              transition: "color 0.3s",
            }}
          >
            Services
          </a>
          <a
            href="#about"
            style={{
              textDecoration: "none",
              color: "#fff",
              transition: "color 0.3s",
            }}
          >
            About Us
          </a>
          <a
            href="#cases"
            style={{
              textDecoration: "none",
              color: "#fff",
              transition: "color 0.3s",
            }}
          >
            Cases
          </a>
          <a
            href="#signup"
            style={{
              textDecoration: "none",
              color: "#fff",
              transition: "color 0.3s",
            }}
          >
            Sign Up
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "40px",
        }}
      >
        {/* Left Section */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <h1 style={{ fontSize: "64px", lineHeight: "1.2", marginBottom: "20px" }}>
            UNLIMITED <br />
            <span style={{ color: "#f0a500" }}>PRETENTIOUS</span> IDEAS
          </h1>
          <p style={{ fontSize: "18px", marginBottom: "20px" }}>
            We provide the full funnel approach for unique business solutions.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            <button
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#f0a500",
                color: "#000",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Explore Solutions
            </button>
            <button
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#fff",
                color: "#000",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Book a Demo Call
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "80%",
              height: "80%",
              backgroundColor: "#d8caff",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {/* Placeholder for Image */}
            <img
              src="/gdgc task.avif" // Ensure the correct relative path
              alt="Business Boost"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "#111",
          borderTop: "1px solid #333",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            flex: 1,
            margin: "0 10px",
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#f76300",
            borderRadius: "12px",
          }}
        >
          <h3 style={{ margin: 0 }}>Unique Business Solutions</h3>
        </div>
        <div
          style={{
            flex: 1,
            margin: "0 10px",
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#ccc",
            borderRadius: "12px",
          }}
        >
          <h3 style={{ margin: 0 }}>Our Case Studies</h3>
        </div>
        <div
          style={{
            flex: 1,
            margin: "0 10px",
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#ffc107",
            borderRadius: "12px",
          }}
        >
          <h3 style={{ margin: 0 }}>700+ Successful Projects</h3>
        </div>
      </footer>
    </div>
  );
};

export default App;
