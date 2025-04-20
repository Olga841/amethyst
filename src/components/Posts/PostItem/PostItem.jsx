import React from 'react';
import s from './PostItem.module.css';
import like from "./../../../images/icons/like.png";
import comment from "./../../../images/icons/comment.png";
import share from "./../../../images/icons/share.png";

const PostItem = (props) => {
  return (
    <div className={s.PostItem}>
      <div className={s.PostItem_wrapper}>
        <img src={props.avatar} alt="avatar" className={s.PostItem_img} />
        <div className={s.PostItem_text}>{props.message}</div>
        <div className="PostItem_icons">
          <img src={like} alt="like" className="PostItem_icon" />
          <img src={comment} alt="comments" className="PostItem_icon" />
          <img src={share} alt="share" className="PostItem_icon" />
        </div>
      </div>
    </div>
  );
}

export default PostItem;
