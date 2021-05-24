import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

  let postsElements = props.posts.map(p => {
    return <Post message={p.message} likes={p.likesCount} />
  })
  let newPostElement = React.createRef();

  const onPostAdd = () => {
    props.addPost();

  }

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);

  }

  return (
    <div className={s.content}>
      <div>
        <h3>My Posts</h3>
        <div>
          <div>
            <textarea placeholder="Type post" onChange={onPostChange} ref={newPostElement}
              value={props.newPostText} />
          </div>
          <div>
            <button onClick={onPostAdd}>Add post</button>
          </div>
        </div>
        <div className={s.posts}>
          {postsElements}
        </div>

      </div>

    </div>
  )
}

export default MyPosts;