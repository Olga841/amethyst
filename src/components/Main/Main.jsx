import React from 'react';
import s from './Main.module.css';
import Aside from '../Aside/Aside';
import Content from './Content/Content';
import Dialogs from '../Dialogs/Dialogs';
import Friends from '../MyFriends/Friends';
import { Routes, Route, BrowserRouter } from "react-router";



const Main = (props) => {
 
  return (
    <BrowserRouter>
      <div className={s.Main}>        
      <Aside/>
      <Routes>
        <Route path="/profile" element={ <Content posts = {props.posts}/>} />
        <Route path="/dialogs" element={ <Dialogs dialogs = {props.dialogs}/>} />
        <Route path="/friends" element={ <Friends friends = {props.friends}/>} />
      </Routes>
    </div>
    </BrowserRouter>        
  );
}

export default Main;
