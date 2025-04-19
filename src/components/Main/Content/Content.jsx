import React from 'react';
import s from './../Main.module.css';
import bg from "./../../../images/bg/bg_image.jpg";
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import NewPostForm from '../NewPostForm/NewPostForm';


const Content = () => {
  return (
    <div className={s.Content}> 
      <img src={bg} alt="bg" /> 
      <ProfileInfo/>
      <div className={s.ContentLine}></div>
      <NewPostForm/>
    </div>
  );
}

export default Content;
