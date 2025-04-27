import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {
    postId: 1,
    message: "hfhdzghjp;lkyutrdsfghujio[/.kjhgfdxfghjkl",
  },
  {
    postId: 2,
    message: "456",
  },
  {
    postId: 3,
    message: "789",
  },
];

let dialogs = [
  {id: 1, userData: "Olga", message: "Lorem ipsum", date: "today", time: "11:24"},
  {id: 2, userData: "Sveta", message: "Lorem ipsum", date: "yesterday", time: "11:24"},
  {id: 3, userData: "Olesya", message: "Lorem ipsum", date: "yesterday", time: "14:18"},
  {id: 4, userData: "Ksyusha", message: "Lorem ipsum", date: "2 days ago", time: null },
  {id: 5, userData: "Liza", message: "Lorem ipsum", date: "2 days ago", time: null},
  {id: 6, userData: "Natasha", message: "Lorem ipsum", date: "last week", time: null},
  {id: 7, userData: "Andrey", message: "Lorem ipsum", date: "last week", time: null},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts = {posts} dialogs={dialogs}/>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
