const SET_USER_DATA = 'SET_USER_DATA';

let initializedState = {
  login: null,
  id: null,
  email: null,
  isLogged: false,
};

let authReducer = (state = initializedState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {

      return {
        ...state,
        ...action.data,
        isLogged: true,
      };
    }
    default: return state;
  }

};
export const setAuthUserData = (login, id, email) => {
  return {
    type: SET_USER_DATA,
    data: {
      login,
      id,
      email
    }
  };
};

export default authReducer;
