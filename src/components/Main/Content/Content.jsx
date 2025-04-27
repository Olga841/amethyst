import React from 'react';
import s from './../Main.module.css';
import bg from "./../../../images/bg/bg_image.jpg";
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import NewPostForm from '../NewPostForm/NewPostForm';
import Posts from '../../Posts/Posts';


const Content = (props) => {
  return (
    <div className={s.Content}> 
      <img src={bg} alt="bg" className={s.Content_img}/> 
      <ProfileInfo/>
      <div className={s.ContentLine}></div>
      <NewPostForm/>
      <Posts posts={props.posts}/>
    </div>
  );
}

export default Content;
