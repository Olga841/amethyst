import React from 'react';
import s from './../Main.module.css';
import avatar from "./../../../images/avatar/Avatar.jpg";

let user = {
  userId: 1,
  userName: "Olga Alekseeva",
  userLocation: 
  {
    country: "Belarus",
    city: "Minsk"
  },
  userInfo: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores tempore facere voluptas voluptate recusandae! Veniam repellat quos nihil sed quo, nemo vel numquam accusantium repellendus adipisci maxime ipsum expedita qui.",
}

const ProfileInfo = () => {
  return (
    <div className={s.ProfileInfo}> 
     <img src={avatar} alt="my_photo" /> 
      <div className={s.UserDataContainer}>
        <div className={s.UserData}>{user.userName}</div>
        <div className={s.UserLocation}>{user.userLocation.country}, {user.userLocation.city}</div>
        <div className={s.UserInfo}>{user.userInfo}</div>
      </div>      
    </div>
  );
}

export default ProfileInfo;
