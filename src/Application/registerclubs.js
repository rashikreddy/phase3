import React from 'react'
import '../Css/register.css'
import { useState } from 'react'
import axios from 'axios'

import { Link, Navigate } from 'react-router-dom'


function RegisterClubs() {

  const [data, setData] = useState({
    clubname:'',
    description:'',
    
    
  })
  const x = sessionStorage.getItem('userid');

  const handleChange = (e) => {
    setData({...data, [e.target.name]:e.target.value});
  }
  const submitForm = (e) => {
    e.preventDefault();
    const senddata = {
      clubname: data.clubname,
      description: data.description,
      user : x
    }
    // console.log(senddata);
    
    axios.post('http://localhost/register/clubs.php', senddata).then((result)=>{
      if(result.data.message == "failure"){
        alert('Invalid User');
      } else {
        console.log(result.data);
        alert("registered successfully");
        window.open('/clubs', "_self");
      }
    })
    

    
  }

  return (
    <div>
        <div className="login">
                <h1>Register</h1>
                <form onSubmit={submitForm}>
                  <p><input type="text" name="clubname" onChange={handleChange} value={data.clubname} placeholder="Club Name" /></p>
                  
                  <p><input type="text" name="description" value={data.description} placeholder="Description" onChange={handleChange}/></p>

                  <p className="submit"><input type="submit" name="commit" value="Register"/></p>

                </form>
              </div>
    </div>
  )
}

export default RegisterClubs