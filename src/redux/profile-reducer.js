const addPost = "ADD-POST";
const upDateNewPostText = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initializedState = {
  posts: [
    { id: "1", message: "Hi, How are you?", likesCount: "1447" },
    { id: "2", message: "Hi, I'am studing React", likesCount: "4" },
    { id: "3", message: "Hi, I'am studing React", likesCount: "4" },
  ],
  newPostText: "",
  profile: null
};

let profileReducer = (state = initializedState, action) => {
  switch (action.type){
    case addPost:{
      let body = state.newPostText;
       return {...state,
        posts: [{id: "4", message: body, likesCount: 0},...state.posts],
        newPostText: "",
      };
    }
    case upDateNewPostText: {
        return {...state,
        newPostText: action.newText
      }
    }
    case SET_USER_PROFILE:{
      return {...state, profile: action.profile}
    }
    default:
      return state;
  }

};
export const addPostActionCreator = () => {
  return {
    type: addPost,
  };
};
export const updatePostTextActionCreator = (text) => {
  return {
    type: upDateNewPostText,
    newText: text,
  };
};
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  };
};
export default profileReducer;
