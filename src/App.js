import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = (props) => {
  
  return (
    <div className="App">
      <Header />
      <Main dialogs = {props.dialogs} posts = {props.posts}/>
    </div>
  );
}

export default App;
