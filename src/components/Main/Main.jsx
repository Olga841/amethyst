import React from 'react';
import s from './Main.module.css';
import Aside from '../Aside/Aside';
import Content from './Content/Content';


const Main = () => {
  return (
    <div className={s.Main}>        
        <Aside/>
        <Content/>
    </div>
  );
}

export default Main;
