import React from 'react'
import '../Css/admin.css'
import { Link } from 'react-router-dom'
function Admin() {
  return (
    <div>
        <div className="row">
            <div className="side">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <li> <Link to="Posts.html">Manage Posts</Link></li>
                <br></br>  
                <li> <Link to="studentprofile2.html">Manage Students</Link></li>
                <br></br>
                <li> <Link to="BusinessOwn2.html">Manage Businuess Owners</Link></li>
                <br></br>
                <li> <Link to="Clubs2.html">Manage clubs</Link></li>
                <br></br>
            </div>
  
            <div className="main">
                <br></br>
                <br></br>
                <br></br>
                <li><Link to="Dashboards.html">Dashboard</Link></li>
                <img src="Images/Dashboard2.png" />
            </div>

        </div>
    </div>
  )
}

export default Admin