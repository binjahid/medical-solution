import React from "react";
// import "./Banner.css";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className="banner-container">
        <div className="banner-info-container">
          <h3 className="banner-title">Leadin the way in medical Excellence</h3>
          <p style={{ width: "400px", color: "white" }}>
            earn grater grass for food. place for advice and every other thing
            you need
          </p>
          <button className="btn btn-primary">Take Appoinment</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
