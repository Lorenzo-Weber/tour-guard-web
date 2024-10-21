import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <header>
      <nav>
        <p>"LOGO"</p>
        <ul>
            <Link to="/landing"><li>Home</li></Link>
            <Link to="/login"><li>Login</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
