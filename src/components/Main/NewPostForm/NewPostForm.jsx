import React from 'react';
import s from './Posts.module.css';



const NewPostForm = () => {
  return (
    <div className={s.NewPostForm}> 
      <input type="input" placeholder='Write your new post...'/>
      <button>Submit</button>   
    </div>
  );
}

export default NewPostForm;
