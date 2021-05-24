import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "Hi, How are you?", likesCount: "1447" },
        { id: "2", message: "Hi, I'am studing React", likesCount: "4" },
        { id: "3", message: "Hi, I'am studing React", likesCount: "4" },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },
    sidebar: {
      friends: [
        {
          id: "1",
          src:
            "https://th.bing.com/th/id/R7eef2cbae37ca0ae3a50b76597dcc582?rik=0p8EXECLepgkwA&riu=http%3a%2f%2fwww.reed.edu%2freed_magazine%2fsallyportal%2fassets%2fimages%2f2013%2f08%2fSteveJobsHeadshot.jpg&ehk=N5OTfXShJ3noyC42HAAAetqQiUikaazKdiQRG4OIp4g%3d&risl=&pid=ImgRaw",
        },
        {
          id: "2",
          src:
            "https://assets.entrepreneur.com/content/3x2/1300/20161006140655-BillGatesHeadshotCasual.jpeg",
        },
        {
          id: "3",
          src:
            "https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk-1100x733.jpg",
        },
        {
          id: "4",
          src:
            "https://nypost.com/wp-content/uploads/sites/2/2020/07/mark-zuckerberg.jpg?quality=90&strip=all&w=1200",
        },
        {
          id: "5",
          src:
            "https://media4.s-nbcnews.com/j/streams/2013/november/131122/2d9760915-131122_buffett_hmed_0839p.nbcnews-ux-1024-900.jpg",
        },
      ],
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
