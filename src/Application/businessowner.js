import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/businessowner.css'
function BusinessOwner() {
  return (
    <div>
        <div className="row">
            <div className="side">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <li> <Link to="/posts">Add/Delete Products</Link></li>
                <br></br>
                <li> <Link to="/ads">Ads</Link></li>
                <br></br>
                <li><Link to="/contact">Chat</Link></li>
            </div>
  
            <div className="main">
                <br></br>
                <br></br>
                <br></br>
                <li> <Link to="/dashboards">Dashboards</Link></li>

                <img src="Images/Dashboard.png" />
            </div>
        </div>
    </div>
  )
}

export default BusinessOwner