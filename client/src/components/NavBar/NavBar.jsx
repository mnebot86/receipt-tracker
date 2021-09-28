import { Link } from "react-router-dom";
import './NavBar.css'

import React from 'react';

const NavBar = () => {
  return (
    <div className='nav'>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/add'>Add</Link>
      <Link to='/logout'>Logout</Link>
    </div>
  );
};

export default NavBar;


