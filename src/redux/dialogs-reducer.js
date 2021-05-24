const addMessage = "ADD-MESSAGE";
const upDateNewMessageText = "UPDATE-NEW-MESSAGE-TEXT";

let initializedState = {
  messages: [
    { message: "Hi", id: "1" },
    { message: "Hello", id: "2" },
    { message: "Hello", id: "3" },
    { message: "Hello", id: "4" },
  ],
  newMessageText: "",
  dialogs: [
    { name: "Oleg", id: "1" },
    { name: "Steve", id: "2" },
    { name: "Bill", id: "3" },
    { name: "Elon", id: "4" },
    { name: "Mark", id: "5" },
    { name: "Joseph", id: "6" },
  ],
};

let dialogsReducer = (state = initializedState, action) => {


  switch (action.type){
    case addMessage:{
      let body = state.newMessageText
      return {
        ...state,
        newMessageText: "",
        messages: [...state.messages, {message: body, id: 5}],

      };
    }

    case upDateNewMessageText: {
           return {...state,
          newMessageText: action.updatedMessage,
      }
    }
    default: return state;
  }

};
export const addMessageActionCreator = () => {
    return {
      type: addMessage,
    };
  };
  
  export const updateMessageTextActionCreator = (text) => {
    return {
      type: upDateNewMessageText,
      updatedMessage: text,
    };
  };
export default dialogsReducer;
