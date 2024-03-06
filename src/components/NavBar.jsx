import '../assets/css/main.css';
import logo from '../assets/img/argentBankLogo.png'
import React from 'react';
import { Link } from "react-router-dom";

export const NavBar = ({ sign }) => {
  return (<div className="main-nav">
    <Link className="main-nav-logo" to='/' >
      <img
        className="main-nav-logo-image"
        src={logo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
    <div>
      {sign ? <Link className="main-nav-item" to='/sign-in'>
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
        : <>
          <Link className="main-nav-item" to='/user/:id'>
            <i className="fa fa-user-circle"></i>
            Tony
          </Link>
          <Link className="main-nav-item" to='/'>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </>
      }
    </div>
  </div>)
}
