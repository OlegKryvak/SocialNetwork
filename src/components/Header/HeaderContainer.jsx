import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
  componentDidMount() {
    
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
    })
      .then(response => {
        if(response.data.resultCode ===0){
          let {login, id, email}= response.data.data;
          this.props.setAuthUserData(login, id, email)
        }
        
       
      })
  }

  render() {

    return (
      <Header {...this.props} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isLogged: state.auth.isLogged,
  }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);