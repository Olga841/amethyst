import React from 'react';
import './../styles/Posts.css';



const NewPostForm = () => {
  return (
    <div className="NewPostForm"> 
      <input type="input" placeholder='Write your new post...'/>
      <button>Submit</button>   
    </div>
  );
}

export default NewPostForm;
