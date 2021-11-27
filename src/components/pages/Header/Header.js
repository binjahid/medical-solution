import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useFirebase from "../../../hooks/useFirebase";
import logo from "../../../images/logo/cover.png";
import "./Header.css";
const Header = () => {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/home">
            Medical Solution
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              {!user?.email ? (
                <div className="d-flex">
                  <li className="nav-item customli">
                    <Link className="nav-link custom-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item  customli">
                    <Link className="nav-link" to="/Signup">
                      Signup
                    </Link>
                  </li>
                </div>
              ) : (
                <div className="d-flex">
                  <p className="displayName">{user.displayName}</p>
                  <button className="btn" onClick={logout}>
                    Sing Out
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
