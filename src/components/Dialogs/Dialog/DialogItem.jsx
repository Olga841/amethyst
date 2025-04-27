import React from 'react';
import s from './DialogItem.module.css';

const DialogItem = (props) => {
  return (
    <div className={s.DialogItem}>        
      <div className={s.DialogItem_container}>
        <img src={props.avatar} alt="avatar" className={s.DialogItem_avatar} />
        <div className={s.DialogItem_wrapper}>
          <div className={s.DialogItem_UsedData}>{props.userData}</div>
          <div className={s.DialogItem_message}>{props.message}</div>
        </div>
        <div className={s.DialogItem_DateTime}>{props.date} {props.time}</div>
      </div>
      <div className={s.DialogItem_AfterLine}></div>
    </div>
  );
}

export default DialogItem;
