import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className=" container footer-container mt-3 d-flex">
        <div className="col-md-6 col-lg-6  align-items-center d-flex justify-content-center">
          <div className="">
            &copy; 2021 All Right Reserved By{" "}
            <span className="footer-title">Medical Solution</span>{" "}
          </div>
        </div>
        <div className="col-md-6 col-lg-6 align-items-center d-flex justify-content-center">
          <div className="footer-link-container">
            <Link>Terms & Conditions</Link>
            <Link>Privacy Policy</Link>
            <Link>Chat & Support</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
