import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const { handleEmail, handlePassword, registerUser, SignInUsingGoogle } =
    useAuth();
  return (
    <div className="custom-login-bg py-5">
      <div className="mx-auto custom-width">
        <h1 className="custom-login-header">Medical Solution</h1>
        <div className="bg-light p-5 pt-3 d-flex flex-column justify-content-center mb-5 mt-5">
          <h3 className="my-4">Sign Up</h3>
          <div>
            <button
              className="btn btn-primary me-3 px-5"
              onClick={SignInUsingGoogle}
            >
              {" "}
              <i class="fab fa-google me-2"></i>
              Google
            </button>
          </div>
          <div class="input-group my-2 mt-3">
            <span class="input-group-text" id="basic-addon1">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group my-2">
            <span class="input-group-text" id="basic-addon1">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              aria-label="Username"
              required
              aria-describedby="basic-addon1"
              onBlur={handleEmail}
            />
          </div>
          <div class="input-group my-2 mb-3">
            <span class="input-group-text" id="basic-addon1">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              aria-label="Username"
              aria-describedby="basic-addon1"
              required
              onBlur={handlePassword}
            />
          </div>

          <button className="btn btn-primary me-3" onClick={registerUser}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
