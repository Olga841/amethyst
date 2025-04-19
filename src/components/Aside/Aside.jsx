import React from 'react';
import './../styles/Aside.css';


const Aside = () => {
  return (
    <div className="Aside">      
        <ul className="list_aside">
          <li className="item_aside">Services</li>
          <li className="item_aside">My Friends</li>
          <li className="item_aside">My Messages</li>
          <li className="item_aside">My Posts</li>
          <li className="item_aside">My Profile</li>
          <li className="item_aside">-</li>
          <li className="item_aside">Settings</li>
        </ul>     
    </div>
  );
}

export default Aside;
