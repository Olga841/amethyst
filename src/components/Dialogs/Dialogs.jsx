import React from "react";
import s from "./Dialogs.module.css";
import avatar from "./../../images/avatar/Avatar.jpg";
import DialogItem from "./Dialog/DialogItem";

const Dialogs = (props) => {
  return (
    <div className={s.Dialogs}>
      <div className={s.Dialogs_wrapper}>
        <div className={s.Dialogs_search}>
          <input type="text" className={s.input} />
          <button className={s.button}>Search</button>
        </div>
        {props.dialogs.map((d) => (
          <DialogItem
            avatar={avatar}
            userData={d.userData}
            message={d.message}
            date={d.date}
            time={d.time}
          />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
