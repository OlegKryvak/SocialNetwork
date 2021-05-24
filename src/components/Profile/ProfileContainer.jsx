import React from 'react';

import * as axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer'
import { withRouter } from 'react-router';
class ProfileContainer extends React.Component {
  componentDidMount() {
    
    let userID = this.props.match.params.userID;
    if(!userID){
      userID=2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userID).then(response => {
      this.props.setUserProfile(response.data);

    })
  }
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}
let userDataContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(userDataContainer);