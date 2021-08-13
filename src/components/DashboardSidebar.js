import React from "react";

import "./DashboardSidebar.css";
import {useHistory } from 'react-router-dom';
const DashboardSidebar = () => {
  const history = useHistory();
 
  const data = [
    {
      id: 1,
      link: '/dashboard',
      text: "Dashboard",
    },
    {
      id: 2,
      link: '/',
      text: "Login",
    },
    {
      id: 3,
      link: '/registration',
      text: "Sign up page",
    },
    { id: 4, link: '/forgetpass', text: "Forgot Password" },
    { id: 5, link: '/resetpass', text: "Reset Password" },
    
  ];
  return (
    <div className="dashboard-sidebar">
      <h4 className='sidebar-heading'>PAGES</h4>
      <ul>
        {data.map((item) => {

          return (
            <li className={`sidebar-menu-item ${item.link ==='/dashboard' ? 'active' :''}`} key={item.id}>
              <p onClick={()=>history.push(item.link)}>{item.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
