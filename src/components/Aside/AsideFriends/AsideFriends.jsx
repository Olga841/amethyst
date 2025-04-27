import React from "react";
import s from "./Aside.module.css";
import avatar from "./../../images/avatar/3.png";

const AsideFriends = () => {
  return (
    <div className={s.aside_friends}>
      <div className={s.aside_friends_contaner}>
        <img src={avatar} alt="photo" className={s.aside_friends_img} />
        <div className={s.aside_friends_name}>Natasha</div>
      </div>
      <div className={s.aside_friends_contaner}>
        <img src={avatar} alt="photo" className={s.aside_friends_img} />
        <div className={s.aside_friends_name}>Liza</div>
      </div>
      <div className={s.aside_friends_contaner}>
        <img src={avatar} alt="photo" className={s.aside_friends_img} />
        <div className={s.aside_friends_name}>Ksu</div>
      </div>
    </div>
  );
};

export default AsideFriends;
