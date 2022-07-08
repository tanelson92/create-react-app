import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink exact to="/About">About</NavLink></li>
      <li><NavLink exact to="/Teachers">Teachers</NavLink></li>
      <li><NavLink exact to="/Courses">Courses</NavLink></li>
    </ul>    
  </header>
);

export default Header;