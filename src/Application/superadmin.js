import React from 'react'
import {Link} from 'react-router-dom'
import '../Css/superadmin.css'
import user from './Images/Userimage.png'
function SuperAdmin() {
  return (
    <div>
        <div class="row" style={{marginBottom: "10rem"}}>
  <div class="side">
    <div>
        <br/>

        <img src={user} style={{height:"150px"}}/></div>
        <br/>
    <li> <Link to="/admin-operations">Manage Admins</Link></li>
    <br/>
    <li> <Link to="/businessowner-operations">Manage Business owner</Link></li>
    <br/>
    <li> <Link to="/studentprofile-operations">Manage Students</Link></li>
     <br/>
     <li> <Link to="/contact">Chat</Link></li>



  </div>
  <div class="main">
    <br/>
    <br/>
    <br/>
    <li> <Link to="dashboards">Dashboard</Link></li>
    <img src="Images/Dashboard.png" /><br/>
        <button class="button button1">Remove</button>
    </div>
</div>
</div>
 
  )
}

export default SuperAdmin