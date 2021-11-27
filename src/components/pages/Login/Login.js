import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { SignInUsingGoogle, handlePassword, handleEmail, logInUser } =
    useAuth();
  return (
    <div className="custom-login-bg py-5">
      <div className="mx-auto custom-width">
        <h1 className="custom-login-header">Medical Solution</h1>
        <div className="bg-light p-5 d-flex flex-column justify-content-center">
          <h3 className="mb-3">Sign in</h3>
          <div>
            <button
              onClick={SignInUsingGoogle}
              className="btn btn-primary me-3 px-5"
            >
              {" "}
              <i class="fab fa-google me-2"></i>Google
            </button>
            {/* <button className='btn btn-primary px-5'><i class="fab fa-github me-2"></i>Github</button> */}
          </div>
          <div class="input-group my-3">
            <span class="input-group-text" id="basic-addon1">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              type="email"
              required
              class="form-control"
              placeholder="Username or Email"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onBlur={handleEmail}
            />
          </div>
          <div class="input-group my-3">
            <span class="input-group-text" id="basic-addon1">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              type="password"
              class="form-control"
              required
              placeholder="Password"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onBlur={handlePassword}
            />
          </div>
          <p className="text-primary text-end">
            <small>Forgot your password?</small>
          </p>
          <button className="btn btn-primary me-3" onClick={logInUser}>
            Sign in
          </button>
        </div>
        <p className="text-light custom-ancor mb-5">
          Registering to this website, you accept our{" "}
          <Link to="/terms">Terms of use</Link> and our{" "}
          <Link to="/privacy">Privacy policy</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
