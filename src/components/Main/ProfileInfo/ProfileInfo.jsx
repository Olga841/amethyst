import React from 'react';
import './../styles/Main.css';
import avatar from "./../images/avatar/Avatar.jpg";


const ProfileInfo = () => {
  return (
    <div className="ProfileInfo"> 
     <img src={avatar} alt="my_photo" /> 
      <div className="UserDataContainer">
        <div className="UserData">Olga Alekseeva</div>
        <div className="UserLocation">Minsk, Belarus</div>
        <div className="UserInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro autem labore veritatis nihil nostrum modi et expedita. Praesentium deserunt reiciendis quo, exercitationem eligendi a blanditiis porro fugit accusamus inventore nostrum!</div>
      </div>      
    </div>
  );
}

export default ProfileInfo;
