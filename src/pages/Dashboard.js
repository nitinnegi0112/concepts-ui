import React from "react";
import avatar1 from "../assets/images/avatar-1.jpg";
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardBody from "../components/DashboardBody";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faTh } from "@fortawesome/free-solid-svg-icons";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="navbar-left">
          <a href="">Concept</a>
        </div>
        <div className="navbar-right">
        <div class="navbar-right-search">  
        <input
            type="text"
            placeholder="Search.."
            
          /></div>
        

          <div className="navbar-right-icons">
            <div>
              <FontAwesomeIcon icon={faBell} size="1x" color="#71748d" />
            </div>
            <div>
              <FontAwesomeIcon icon={faTh} size="1x" color="#71748d" />
            </div>
            <div className="avatar">
              <img src={avatar1} alt="" />
            </div>
          </div>
        </div>
      </nav>
      <div className='dashboard-content'>
      <DashboardSidebar></DashboardSidebar>
      <DashboardBody></DashboardBody>

      </div>
    </div>
  );
};

export default Dashboard;
