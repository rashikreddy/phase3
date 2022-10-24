import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../Css/header.css'
import logo from './Images/Main_Logo.png'
export default function Header() {
  return (
    <div className="topnav" id="myTopnav">
        <Link to="/">
        <img src={logo} alt="logo" className="logo" />
        </Link>
        <Link to="/">Welcome</Link>
        <Link to="/aboutus">About Us</Link>
         <Link to="/services">Services</Link>
         <Link to="/Login">Login/Register</Link>
         <Outlet/>
          <a href="javascript:void(0);" className="icon" onClick={myFunction}></a>
        
    <i className="fa fa-bars"></i>
  
    </div>
  )
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }