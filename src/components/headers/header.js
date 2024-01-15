import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { NavLink, Link } from "react-router-dom";
import Userheader from "./userHeader";



function Header() {
  

const user = useSelector((state) => state.userAuth)
console.log(user.isLoggedIn)

  return (
    <div className="header">
      <Link className="title" to={"/"}><h2>SongsStation</h2></Link>
     <div className="userAuth">
     {!user.isLoggedIn ?( <div className="auth">
        <NavLink className="login" to={"/Login"}>
          Log in
        </NavLink>
        <p className="or">|</p>
        <NavLink  to={"/register"}>
          Sign up
        </NavLink>
      </div>):( <Userheader/>) } 
      </div>
    </div>
  );
}


export default Header;
