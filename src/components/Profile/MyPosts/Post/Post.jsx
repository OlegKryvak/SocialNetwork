import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
 
  return (
     
          <div className={s.item}>
            <img src="https://vignette.wikia.nocookie.net/jamescameronsavatar/images/a/ab/Neytiri_nazachema.jpg/revision/latest?cb=20100501195742"/>
            {props.message}
            <div>
              Liked {props.likes}
            </div>
          </div>
          

    
  )
}

export default Post;