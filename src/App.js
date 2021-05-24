import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Music from "./components/Music/Music";
import Navigation from "./components/Navigation/Navigation";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navigation store={props.store} />
        <div className="app-wrapper_content">
          <Route
            path="/profile/:userID?"
            render={() => (
              <ProfileContainer  />
            )}
          />

          <Route
            path="/dialogs"
            render={() => (
              <DialogsContainer store={props.store}/>
            )}
          />
          <Route path="/users" render={() => (
              <UsersContainer/>
          )}/>
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
