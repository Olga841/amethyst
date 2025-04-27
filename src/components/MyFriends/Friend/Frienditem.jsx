import React from "react";
import s from "./FriendItem.module.css";
import avatar from "./../../../images/avatar/2.png";

const FriendItem = (props) => {
  return (
    <div className={s.Friend_container}>
      <div className={s.Friend_wrapper}>
        <img src={avatar} alt="photo" className={s.Friend_avatar} />
        <div className={s.Friend_data_container}>
          <div className={s.Friend_data}>
            `${props.name} + ' ' + {props.surname}`
          </div>
          <div className={s.Friend_description}>{props.descr}</div>
        </div>
        <button className={s.Friend_button}>Write</button>
      </div>
        <div className={s.Friend_AfterLine}></div>
    </div>
  );
};

export default FriendItem;
