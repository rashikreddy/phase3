import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/businessowner.css'
function BusinessOwner_Operations() {
  return (
    <div>
        <div className="row" style={{marginBottom: "10rem;"}}>
            <div className="side">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <li> <Link to="/posts">Add/Delete Products</Link></li>
                <br></br>
                <li> <Link to="/ads">Ads</Link></li>
                <br></br>
                <li> <Link to="/contact">Chat</Link></li>

            </div>
  
            <div className="main">
                <br></br>
                <br></br>
                <br></br>
                <li> <Link to="/dashboards">Dashboard</Link></li>
                <img src="Images/Dashboard.png" />
                <br></br>
                <button className="button button1">Remove</button>
            </div>

        </div>
    </div>
  )
}

export default BusinessOwner_Operations