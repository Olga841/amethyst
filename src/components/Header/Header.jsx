import React from 'react';
import './../styles/Header.css';
import logotype from'./../images/logo/logo.svg';

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img src={logotype} alt="logo" />
        <span>Amethyst</span>
      </div>
      <nav className="nav">
        <ul className="list">
          <li className="item">Our News </li>
          <li className="item">logIn </li>
          <li className="item">Contacts</li>
          <li className="item">About</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
