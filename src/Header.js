import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/signin">Sign In</Link></li>
      <li><Link to="/signout">Sign Out</Link></li>
      <li><Link to="/signup">Sign Up</Link></li>
      <hr/>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/application">Application</Link></li>
      <li><Link to="/agreement">Lease Agreement</Link></li>
      

    </ul>
  );
}

export default Header;
