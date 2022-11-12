import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/businessowner.css'
import dashboard from './Images/Dashboard2.png'
import { useState } from 'react'
import axios from 'axios'
function BusinessOwner() {
  const s = true;
  const [data, setData] = useState({
    name:'',
    email:'',
    
  })
  
  const x = sessionStorage.getItem('userid');
    console.log(x);
     axios.post('http://localhost/register/businessowner.php', x).then((result)=>{
          console.log(result.data);
          if(s){
           setData({
            name:result.data.name,
            email:result.data.name
           })
           s=false;
          }
        })
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

                <img src={dashboard} />
            </div>
        </div>
    </div>
  )
}

export default BusinessOwner