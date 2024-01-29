import React from "react";
import logo from '../assets/img/argentBankLogo.png'
import { Footer } from './Footer';
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (<>
    <nav className="main-nav">
      <Link className="main-nav-logo" to='/' >
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to='/sign-in'>
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          {/* PLACEHOLDER DUE TO STATIC SITE */}
          <Link className="sign-in-button" to='/user/:id' >
            Sign In
          </Link>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
    <Footer />

  </>);
};

