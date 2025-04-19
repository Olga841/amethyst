import React from 'react';
import s from './../Main.module.css';
import avatar from "./../../../images/avatar/Avatar.jpg";


const ProfileInfo = () => {
  return (
    <div className={s.ProfileInfo}> 
     <img src={avatar} alt="my_photo" /> 
      <div className={s.UserDataContainer}>
        <div className={s.UserData}>Olga Alekseeva</div>
        <div className={s.UserLocation}>Minsk, Belarus</div>
        <div className={s.UserInfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro autem labore veritatis nihil nostrum modi et expedita. Praesentium deserunt reiciendis quo, exercitationem eligendi a blanditiis porro fugit accusamus inventore nostrum!</div>
      </div>      
    </div>
  );
}

export default ProfileInfo;
