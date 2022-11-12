import React from 'react'
import '../Css/admin.css'
import { Link } from 'react-router-dom'
import dashboard from './Images/Dashboard2.png'
import { useState } from 'react'
import axios from 'axios'
function Admin() {
  const s = true;
  const [data, setData] = useState({
    name:'',
    email:'',
    
  })
  
  const x = sessionStorage.getItem('userid');
    console.log(x);
     axios.post('http://localhost/register/admin.php', x).then((result)=>{
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
                <img src={dashboard} />
            </div>

        </div>
    </div>
  )
}

export default Admin