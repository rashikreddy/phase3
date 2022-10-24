import React from 'react'
import '../Css/student_profile.css'
import {Link} from 'react-router-dom'
function Student_Profile() {
  return (
    <div>
        <div className="row">
            <div className="side">
                <div>
                    
                    
                    
                    <img src="Images/Userimage.png" style={{height:"150px"}}/><br></br>
                </div>
                
                <li> <Link to="/posts">Products</Link></li><br></br>
                
                <li> <Link to="/clubs">Clubs</Link></li><br></br>
                
                <li> <Link to="/cart">Cart</Link></li><br></br>
                
                <li> <Link to="/ads">Ads</Link></li><br></br>
                
                <li> <Link to="/contact">Chat</Link></li><br></br>


            </div>
            <div className="main">
            
            
            <li><h3>Name</h3></li> <br/>
            <li><h3>Major</h3></li> <br></br>
            <li><h3>About</h3></li>     <br></br>
            
            <li><h4>Student Id </h4></li> <br></br>
            <li><h4>Mobile Number</h4></li> <br></br>
            <li><h4>Email id</h4></li> <br></br>
            </div>
        </div>
    </div>
  )
}

export default Student_Profile