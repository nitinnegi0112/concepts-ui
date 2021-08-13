import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
const Forgetpass = () => {
  return (
    <div className="card">
      <div className="card-top">
        <img src={logo} alt="" />
        <p>Please enter your user information.</p>
      </div>
      <form action="Submit" className="card-body">
        <p style={{ marginBottom: "10px" }}>
          Don't worry, we'll send you an email to reset your password.
        </p>
        <input type="text" placeholder="Your Email" className="form-control" />

        <button className="btn">Reset Password</button>
      </form>
      <div className="card-footer">
        <p>Don't have an account ?</p>
        <div className="footer-item">
          <Link to="/registration" className="footer-link">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forgetpass;
