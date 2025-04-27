import React from "react";
import s from "./Friends.module.css";
import FriendItem from "./Friend/Frienditem";

const Friends = (props) => {
  return (
    <div className={s.Friends}>
      <input type="input" placeholder="Search" />
      <button>Search</button>
      <FriendItem friends = {props.friends}/>
    </div>
  );
};

export default Friends;
