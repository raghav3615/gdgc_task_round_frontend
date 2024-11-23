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
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "40px 20px",
          backgroundColor: "#000",
          borderTop: "1px solid #333",
          gap: "20px",
        }}
      >
        {/* Left Section */}
<div
  style={{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "0px 20px",
    gap: "5px",
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

  {/* Buttons Section */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    }}
  >
    {["WEB ANALYTICS", "EMAIL MARKETING", "SEO 2.0"].map((item, index) => (
      <button
        key={index}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          color: "#fff",
          border: "2px solid #fff",
          borderRadius: "20px",
          backgroundColor: "transparent",
          cursor: "pointer",
          textAlign: "center",
          fontWeight: "bold",
          transition: "all 0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#fff";
          e.currentTarget.style.color = "#000";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "#fff";
        }}
      >
        {item}
      </button>
    ))}
  </div>
</div>


        {/* Right Section */}
        <div
          style={{
            display: "flex",
            flex: 2,
            gap: "5px",
            justifyContent: "space-between",
          }}
        >
          {["UNIQUE BUSINESS SOLUTIONS", "OUR CASE STUDIES", "SUCCESSFUL PROJECTS"].map(
            (text, index) => (
              <div
                key={index}
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "20px",
                  backgroundColor: ["#ff6000", "#ddd", "#ffc400"][index],
                  color: "#000",
                  borderRadius: "12px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {text.split(" ").map((line, idx) => (
                  <span key={idx}>{line}</span>
                ))}
                {index === 2 && (
                  <div
                    style={{
                      marginTop: "10px",
                      fontSize: "64px",
                      fontWeight: "bold",
                    }}
                  >
                    700+
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </footer>
    </div>
  );
};

export default App;
