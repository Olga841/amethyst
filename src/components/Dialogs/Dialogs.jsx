import React from 'react';
import s from './Dialogs.module.css';
import avatar from './../../images/avatar/Avatar.jpg';
import DialogItem from './Dialog/DialogItem';




const Dialogs = () => {
  let dialogs = [
    {id: 1, userData: "Olga", message: "Lorem ipsum", date: "today", time: "11:24"},
    {id: 2, userData: "Sveta", message: "Lorem ipsum", date: "yesterday", time: "11:24"},
    {id: 3, userData: "Olesya", message: "Lorem ipsum", date: "yesterday", time: "14:18"},
    {id: 4, userData: "Ksyusha", message: "Lorem ipsum", date: "2 days ago", time: null },
    {id: 5, userData: "Liza", message: "Lorem ipsum", date: "2 days ago", time: null},
    {id: 6, userData: "Natasha", message: "Lorem ipsum", date: "last week", time: null},
    {id: 7, userData: "Andrey", message: "Lorem ipsum", date: "last week", time: null},
  ]
  return (
    <div className={s.Dialogs}>        
        <div className={s.Dialogs_wrapper}>
          <div className={s.Dialogs_search}>
            <input type="text" className={s.input} />
            <button className={s.button}>Search</button>
          </div>
          {dialogs.map(d => <DialogItem avatar={avatar} userData={d.userData} message={d.message} date={d.date} time={d.time}/>)}
        </div>
    </div>
  );
}

export default Dialogs;
