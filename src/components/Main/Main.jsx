import React from 'react';
import './../styles/Main.css';
import Aside from '../Aside/Aside';
import Content from './Content/Content';


const Main = () => {
  return (
    <div className="Main">        
        <Aside/>
        <Content/>
    </div>
  );
}

export default Main;
