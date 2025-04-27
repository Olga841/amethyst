import React from 'react';
import s from './Aside.module.css';
import { NavLink } from 'react-router';


const Aside = () => {
  return (
    <div className={s.Aside}>      
        <ul className={s.list_aside}>
          <li className={s.item_aside}><NavLink to="/services" className={({ isActive }) =>  isActive ? s.active : undefined }>Services</NavLink></li>
          <li className={s.item_aside}><NavLink to="/friends" className={({ isActive }) =>  isActive ? s.active : undefined }>My Friends</NavLink></li>
          <li className={s.item_aside}><NavLink to="/dialogs" className={({ isActive }) =>  isActive ? s.active : undefined }>My Messages</NavLink></li>
          <li className={s.item_aside}><NavLink to="/profile" className={({ isActive }) =>  isActive ? s.active : undefined }>My Profile</NavLink></li>
          <li className={s.item_aside}>-</li>
          <li className={s.item_aside}><NavLink to="/settings" className={({ isActive }) =>  isActive ? s.active : undefined }>Settings</NavLink></li>
        </ul>     
    </div>
  );
}

export default Aside;
