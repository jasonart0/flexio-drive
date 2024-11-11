// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/flexio_logo.png';
import SearchBar from '../widgets/SearchBar';

const AppHeader = ({ userRole }) => {
  
  return (
    <header className="header">
    <div className="logo">
      <img src={logo} alt="Logo" />
     
    </div>
    <SearchBar />
    <div className="actions">
   
   
      <button className="icon-btn">
        <i className="fas fa-bell"></i>
      </button>
      <button className="icon-btn">
        <i className="fas fa-envelope"></i>
      </button>
      <div className="profile-dropdown">
        <button className="icon-btn">
          <i className="fas fa-user"></i>
        </button>
        <div className="dropdown-content">
          <ul>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  
  );
};

export default AppHeader;
