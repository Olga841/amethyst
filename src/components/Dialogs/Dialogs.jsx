import React from 'react';
import s from './Dialogs.module.css';
import avatar from './../../images/avatar/Avatar.jpg';
import DialogItem from './Dialog/DialogItem';




const Dialogs = () => {
  return (
    <div className={s.Dialogs}>        
        <div className={s.Dialogs_wrapper}>
          <div className={s.Dialogs_search}>
            <input type="text" className={s.input} />
            <button className={s.button}>Search</button>
          </div>
          <DialogItem avatar={avatar} userData="Olga Alekseeva" message="Lorem" date="today" time="11:24"/>
          {/* <DialogItem/>
          <DialogItem/>
          <DialogItem/> */}
        </div>
    </div>
  );
}

export default Dialogs;
