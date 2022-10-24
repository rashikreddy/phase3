import React from 'react'
import {Link} from 'react-router-dom'
import '../Css/studentprofile_operations.css'
function StudentProfile_Operations() {
  return (
    <div>
        <div className="row" style={{marginBottom: "10rem"}}>
  <div className="side">
    <div>
        <br/>
        <br/>
        <br/>
        <img src="Images/Userimage.png" style={{height:"150px"}}/></div>
        <br/>
    <li> <Link to="/posts">Products</Link></li>
    <br/>
    <li> <Link to="/clubs">Clubs</Link></li>
    <br/>
    <li> <Link to="/cart">Cart</Link></li>
    <br/>
    <li> <Link to="/ads">Ads</Link></li>
    <br/>
    <li> <Link to="/contact">Chat</Link></li>


  </div>
  <div className="main">
    <br/>
    <br/>
    <br/> <br/>
    <li><h3>Name</h3></li> <br/>
    <li><h3>Major</h3></li> <br/>
    <li><h3>About</h3></li>   <br/>  

     <br/>
      <br/>
       <br/>

<li><h4>Student Id </h4></li> <br/>
    <li><h4>Mobile Number</h4></li> <br/>
    <li><h4>Email id</h4></li> <br/>
   
<button className="button button1">Remove</button>



    
</div>
</div>
    </div>
  )
}

export default StudentProfile_Operations