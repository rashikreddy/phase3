import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../Css/header.css'
import logo from './Images/Main_Logo.png'
import isLoggedin from './Login'
export default function Header() {
  const x = sessionStorage.getItem('userid');
const update = () => {
  sessionStorage.removeItem("userid");
  sessionStorage.clear()

}
  return (
    <div className="topnav" id="myTopnav">
        <Link to="/">
        <img src={logo} alt="logo" className="logo" />
        </Link>
        <Link to="/">Welcome</Link>
        <Link to="/aboutus">About Us</Link>
         <Link to="/services">Services</Link>
         {
          
          x == true ? (<><Link to="/login">Login</Link></>):(<><Link to="/Login" onClick={update()}>Logout</Link></>)
         }
         <a href='http://rxg1534.uta.cloud/home/' target={'_blank'}>Blog</a>
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