import { useDispatch, useSelector } from "react-redux";
import "../assets/css/main.css";
import logo from "../assets/image/argentBankLogo.png";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../store/store";
import { logout } from "../actions/user.action";

export const NavBar = ({ sign }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token, user } = useSelector((state: RootState) => state.auth);
  const [isLogged, setIsLogged] = useState(false);

  /* Change l'etat de isLogged si un token d'auth existe  */
  useEffect(() => {
    if (token !== null) {
      setIsLogged(true);
      navigate("/profile");
    } else {
      setIsLogged(false);
    }
  }, [navigate, token]);

  /* Deconnecte l'utilisateur et change l'etat de isLogged */
  const SignOut = () => {
    dispatch(logout());
    setIsLogged(false);
  };

  return (
    <header>
      <div className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {isLogged ? (
            <div>
              <Link to="/profile" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                {user ? user.firstName : "Loading..."}
              </Link>
              <Link to="/" className="main-nav-item" onClick={SignOut}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </Link>
            </div>
          ) : (
            <Link to="/login" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
