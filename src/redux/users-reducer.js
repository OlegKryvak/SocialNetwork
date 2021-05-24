const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let initializedState = {
  users: [],
  pageSize: 20,
  totalCount: 0,
  currentPage: 1,
  isFetching: true,
};

let usersReducer = (state = initializedState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(el => {
          if (el.id === action.userId) {
            return { ...el, followed: true };
          }
          return el;
        })
      }
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(el => {
          if (el.id === action.userId) {
            return { ...el, followed: false };
          }
          return el;
        })
      }
    }

    case SET_USERS: {
      return { ...state, users: action.users }
    }
    case SET_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_COUNT: {
      return { ...state, totalCount: action.count}
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching}
    }
    default: return state;
  }

};
export const follow = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unfollow = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  }
}

export const setCurrentPage = (currentPage) => {
  return{
    type: SET_PAGE, 
    currentPage
  }  
};
export const setUsersTotalCount = (totalCount) => {
  return{
    type: SET_TOTAL_COUNT, 
    count: totalCount,
  }  
};
export const togleIsFetching = (isFetching) => {
  return{
    type: TOGGLE_IS_FETCHING, 
    isFetching: isFetching,
  }  
};

export default usersReducer;

