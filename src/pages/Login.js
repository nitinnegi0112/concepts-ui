import React from "react";
import logo from "../assets/images/logo.png";

import { Link,useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <div className="card">
      <div className="card-top">
        <img src={logo} alt="" />
        <p>Please enter your user information.</p>
      </div>
      <form action="Submit" className="card-body width-full">
        <input type="text" placeholder="Username" className="form-control" />

        <input type="text" placeholder="Password" className="form-control" />

        <div className="form-checkbox">
          <input type="checkbox" /><span> </span>
          <span>Remember me</span>
        </div>

        <button className="btn" onClick={()=>history.push('/dashboard')}>Sign in</button>
      </form>
      <div className="card-footer">
        <div className="footer-item">
          <Link to="/registration" className="footer-link">
            Create an account
          </Link>
        </div>

        <div className="footer-item">
          <Link to="forgetpass" className="footer-link">
            Forgot Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
