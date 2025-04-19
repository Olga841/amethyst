import React from 'react';
import s from './Aside.module.css';


const Aside = () => {
  return (
    <div className={s.Aside}>      
        <ul className={s.list_aside}>
          <li className={s.item_aside}>Services</li>
          <li className={s.item_aside}>My Friends</li>
          <li className={s.item_aside}>My Messages</li>
          <li className={s.item_aside}>My Posts</li>
          <li className={s.item_aside}>My Profile</li>
          <li className={s.item_aside}>-</li>
          <li className={s.item_aside}>Settings</li>
        </ul>     
    </div>
  );
}

export default Aside;
