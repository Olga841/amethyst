import React from 'react';
import './../styles/Main.css';
import Aside from './Aside';
import Content from './Content';


const Main = () => {
  return (
    <div className="Main">        
        <Aside/>
        <Content/>
    </div>
  );
}

export default Main;
