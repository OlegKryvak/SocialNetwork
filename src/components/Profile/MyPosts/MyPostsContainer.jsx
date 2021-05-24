import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile-reducer'
import MyPosts from "./MyPosts";

import {connect} from "react-redux";


let mapStateToProps = (state)=>{
  return{
    profilePage: state.profilePage,
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
  }
}

let mapDispatchToProps = (dispatch)=>{
  return{
    updateNewPostText: (text)=>{
      dispatch(updatePostTextActionCreator(text))
    },
    addPost: ()=>{
      dispatch(addPostActionCreator());
    }
  }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;