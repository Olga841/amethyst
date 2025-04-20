import React from 'react';
import s from './Posts.module.css';
import PostItem from './PostItem/PostItem';
import avatar from './../../images/avatar/Avatar.jpg';

const Posts = () => {
  return (
    <div className={s.Posts}>
      <PostItem message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dignissimos harum ratione nobis! Sapiente nobis voluptate nisi animi tempora tempore fugiat beatae excepturi error eveniet, quae cumque at nulla tenetur!" avatar={avatar}/>
      <PostItem message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dignissimos harum ratione nobis! Sapiente nobis voluptate nisi animi tempora tempore fugiat beatae excepturi error eveniet, quae cumque at nulla tenetur!" avatar={avatar}/>
      <PostItem message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dignissimos harum ratione nobis! Sapiente nobis voluptate nisi animi tempora tempore fugiat beatae excepturi error eveniet, quae cumque at nulla tenetur!" avatar={avatar}/>
    </div>
  );
}

export default Posts;
