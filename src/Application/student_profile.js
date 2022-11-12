import React from 'react'
import '../Css/student_profile.css'
import { useLocation } from 'react-router-dom'
import {Link} from 'react-router-dom'
import user from './Images/Userimage.png'
import axios from 'axios'
import { useState } from 'react'


function Student_Profile() {
  
  let s = true;

 const [data, setData] = useState({
  name:'',
  email:'',
  
})

const x = sessionStorage.getItem('userid');
if(s){

  console.log(x);
   axios.post('http://sxd7594.uta.cloud/public_html/studentprofile.php', x).then((result)=>{
        console.log(result.data);
        
         setData({
          name:result.data.name,
          email:result.data.email
         })
      })
    }

  return (


    <div>
        <div className="row">
            <div className="side">
                <div>
                    
                    
                    
                    <img src={user} style={{height:"150px"}}/><br></br>
                </div>
                
                <li> <Link to="/posts">Products</Link></li><br></br>
                
                <li> <Link to="/clubs">Clubs</Link></li><br></br>
                
                <li> <Link to="/cart">Cart</Link></li><br></br>
                
                <li> <Link to="/ads">Ads</Link></li><br></br>
                
                <li> <Link to="/contact">Chat</Link></li><br></br>


            </div>
            <div className="main">
            
            
            <li><h3>Name:{data.name}</h3></li> <br/>
            <li><h3>Major</h3></li> <br></br>
            <li><h3>About</h3></li>     <br></br>
            
            <li><h4>Student Id </h4></li> <br></br>
            <li><h4>Mobile Number</h4></li> <br></br>
            <li><h4>Email id:{data.email}</h4></li> <br></br>
            </div>
        </div>
    </div>
  )
}

export default Student_Profile