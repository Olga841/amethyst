import React from 'react';
import './../styles/Main.css';
import bg from "./../images/bg/bg_image.jpg";
import ProfileInfo from './ProfileInfo';
import NewPostForm from './NewPostForm';


const Content = () => {
  return (
    <div className="Content"> 
      <img src={bg} alt="bg" /> 
      <ProfileInfo/>
      <div className="ContentLine"></div>
      <NewPostForm/>
    </div>
  );
}

export default Content;
