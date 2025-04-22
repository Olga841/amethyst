import React from 'react';
import s from './Main.module.css';
import Aside from '../Aside/Aside';
import Content from './Content/Content';
import Dialogs from '../Dialogs/Dialogs';



const Main = () => {
  return (
    <div className={s.Main}>        
        <Aside/>
        <Dialogs/>
    </div>
  );
}

export default Main;
