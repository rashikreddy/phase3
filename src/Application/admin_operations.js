import React from 'react'
import {Link} from 'react-router-dom'
import dashboard from './Images/Dashboard.png'
function Admin_Operations() {
  return (
    <div>
        <div className="row" style={{marginBottom: "10rem;"}}>
  <div className="side">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    <li> <Link to="/student-operations">Manage Students</Link></li>
    <br></br>
    <li> <Link to="/businessowner-operations">Manage Businuess Owners</Link></li>
    <br></br>
    <li> <Link to="/clubs-operations">Manage clubs</Link></li>
    <br></br>
    <li>
      <Link to="/contact">Chat</Link>
    </li>

</div>
  
 <div className="main">
    <br></br>
    <br></br>
    <br></br>
    <li> <Link to="/dashboards">Dashboard</Link></li>
    <img src={dashboard} /><br></br>
        <button className="button button1">Remove</button>
    </div>

</div>
    </div>
  )
}

export default Admin_Operations