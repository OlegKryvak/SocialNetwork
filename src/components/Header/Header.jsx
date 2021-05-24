import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://th.bing.com/th/id/OIP.jN5mt5Nm407wkTXXJlI3hgHaC3?pid=Api&rs=1" />


      <div className={s.login}>
        {
          props.isLogged? props.login
          :<NavLink to='/login'>Login</NavLink>
        }
        
      </div>

      {/* <div className={s.login}><NavLink to='/login'>Login</NavLink></div> */}

    </header>
  )
}

export default Header;