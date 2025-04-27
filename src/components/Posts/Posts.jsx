import React from "react";
import s from "./Posts.module.css";
import PostItem from "./PostItem/PostItem";
import avatar from "./../../images/avatar/Avatar.jpg";


const Posts = (props) => {  
  
  return (
    <div className={s.Posts}>
      {props.posts.map(post => <PostItem message={post.message} avatar={avatar} />)};
      {/* <PostItem message={posts[0].message} avatar={avatar} />
      <PostItem message={posts[1].message} avatar={avatar} />
      <PostItem message={posts[2].message} avatar={avatar} /> */}
    </div>
  );
};

export default Posts;
