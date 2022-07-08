import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { setter } from "../api";

const Header = ({}) => {
  const [userLogIn, setUserLogIn] = useState(null);
  const setter= ()=>{
   const localToken= localStorage.getItem('token')
    console.log(localToken)
    if(localToken){setUserLogIn(true)} else {setUserLogIn(false)}
 }

 useEffect(setter)

function logout(){localStorage.clear(

  setUserLogIn(false)
)

}
  return (
    <header className="siteheader">
      <h1>Welcome To Stranger's Things</h1>

      {userLogIn ? (
        <>
          <Link to="/" className="current">
            POSTS
          </Link>
          <Link to="/profile" className="current">
            PROFILE
          </Link>
          <Link to="/login">LOG OUT</Link>
          <Link to="/register" className="current">
            REGISTER
          </Link>
          <button id="logout" onClick={logout}>Log Out</button>
        
        </>
      ) : (
        <>
          <Link to="/" className="current">
            POSTS
          </Link>
          <Link to="/profile" className="current">
            PROFILE
          </Link>
          <Link to="/login">LOG IN</Link>
          <Link to="/register" className="current">
            REGISTER
          </Link>
        </>
      )}
    </header>
  );
};
export default Header;
