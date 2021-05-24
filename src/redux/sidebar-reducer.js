const addPost = "ADD-POST";
const addMessage = "ADD-MESSAGE";
const upDateNewPostText = "UPDATE-NEW-POST-TEXT";
const upDateNewMessageText = "UPDATE-NEW-MESSAGE-TEXT";

let initializedState = {
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
};

let sidebarReducer = (state = initializedState, action) => {
  let stateCopy = {...state}
  return stateCopy;
};
export default sidebarReducer;
