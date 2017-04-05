import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/signin">Sign In</Link></li>
      <hr/>
      <li><Link to="/application">Application</Link></li>

    </ul>
  );
}

export default Header;
