import React from "react";
import s from "./Posts.module.css";
import PostItem from "./PostItem/PostItem";
import avatar from "./../../images/avatar/Avatar.jpg";

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
const Posts = () => {
  return (
    <div className={s.Posts}>
      <PostItem message={posts[0].message} avatar={avatar} />
      <PostItem message={posts[1].message} avatar={avatar} />
      <PostItem message={posts[2].message} avatar={avatar} />
    </div>
  );
};

export default Posts;
