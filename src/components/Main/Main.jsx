import React from 'react';
import s from './Main.module.css';
import Aside from '../Aside/Aside';
import Content from './Content/Content';
import Dialogs from '../Dialogs/Dialogs';
import { Routes, Route, BrowserRouter } from "react-router";



const Main = () => {
  return (
    <BrowserRouter>
      <div className={s.Main}>        
      <Aside/>
      <Routes>
        <Route path="/profile" element={<Content />} />
        <Route path="/dialogs" element={<Dialogs />} />
      </Routes>
    </div>
    </BrowserRouter>        
  );
}

export default Main;
