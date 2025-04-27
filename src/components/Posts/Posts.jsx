import React from "react";
import s from "./Posts.module.css";
import PostItem from "./PostItem/PostItem";
import avatar from "./../../images/avatar/Avatar.jpg";


const Posts = () => {

  let posts = [
    {
      postId: 1,
      message: "hfhdzghjp;lkyutrdsfghujio[/.kjhgfdxfghjkl",
    },
    {
      postId: 2,
      message: "456",
    },
    {
      postId: 3,
      message: "789",
    },
  ];

  return (
    <div className={s.Posts}>
      {posts.map(post => <PostItem message={post.message} avatar={avatar} />)};
      {/* <PostItem message={posts[0].message} avatar={avatar} />
      <PostItem message={posts[1].message} avatar={avatar} />
      <PostItem message={posts[2].message} avatar={avatar} /> */}
    </div>
  );
};

export default Posts;
