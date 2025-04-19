import React from 'react';
import s from './Header.module.css';
import logotype from'./../../images/logo/logo.svg';

const Header = () => {
  return (
    <div className={s.Header}>
      <div className={s.logo}>
        <img src={logotype} alt="logo" />
        <span>Amethyst</span>
      </div>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.item}>Our News </li>
          <li className={s.item}>logIn </li>
          <li className={s.item}>Contacts</li>
          <li className={s.item}>About</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
