import React from "react";

import { Link } from "react-router-dom";
const Registration = () => {
  return (
    <div className="card">
      <div className="card-top flex-start">
        <h3 style={{color:"#3d405c" , marginBottom:'5px'}}>Registrations Form</h3>
        <p >Please enter your user information.</p>
      </div>
      <form action="Submit" className="card-body">
        <input type="text" placeholder="Username" className="form-control" />

        <input type="email" placeholder="E-mail" className="form-control" />
        <input
          type="password"
          placeholder="Password"
          className="form-control"
        />
        <input type="text" placeholder="Confirm" className="form-control" />

        <button className="btn">Register My Account</button>
        <div className="form-checkbox">
          <input type="checkbox" /> <span> </span>
          <span>
            By creating an account, you agree the{" "}
            <a href="#" className="footer-link">
              terms and conditions
            </a>
          </span>
        </div>
        <button className="btn btn-fb">Facebook</button>
        <button className="btn btn-tw">Twitter</button>
      </form>
      <div className="footer-item flex-start">
          <p>Already member?</p>
        <Link to="/" className="footer-link link">
          Login here.
        </Link>
      </div>
    </div>
  );
};

export default Registration;
