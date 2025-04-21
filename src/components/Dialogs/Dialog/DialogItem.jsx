import React from 'react';
import s from './Dialogs.module.css';



const Dialogs = () => {
  return (
    <div className={s.Dialogs}>        
        <div className={s.Dialogs_wrapper}>
          <div className={s.Dialogs_search}>
            <input type="text" className={s.input} />
            <button className={s.button}>Search</button>
          </div>
          <Dialog/>
          <Dialog/>
          <Dialog/>
          <Dialog/>
        </div>
    </div>
  );
}

export default Dialogs;
