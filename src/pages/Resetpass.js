import React from "react";
import logo from "../assets/images/logo.png";


const Resetpass = () => {
  return (
    <div className="card">
      <div className="card-top">
        <img src={logo} alt="" />
        <p>Please enter details to reset password.</p>
      </div>
      <form action="Submit" className="card-body  width-full">
        <input type="email" placeholder="Your Email" className="form-control" />

        <input
          type="text"
          placeholder="Old Password"
          className="form-control"
        />
        <input
          type="text"
          placeholder="New Password"
          className="form-control"
        />
        <button className="btn">Confirm</button>
      </form>
     
    </div>
  );
};

export default Resetpass;
