import React from 'react'
import '../Css/register.css'
import { useState } from 'react'
import axios from 'axios'

import { Link, Navigate } from 'react-router-dom'


function Register() {

  const [data, setData] = useState({
    name:'',
    email:'',
    password:'',
    type:'',
    
  })

  const handleChange = (e) => {
    setData({...data, [e.target.name]:e.target.value});
  }
  const submitForm = (e) => {
    e.preventDefault();
    const senddata = {
      name: data.name,
      email: data.email,
      password: data.password,
      type: data.type

    }
    // console.log(senddata);
    
    axios.post('http://sxd7594.uta.cloud/register/register.php', senddata).then((result)=>{
      if(result.data.message == "failure"){
        alert('Invalid User');
      } else {
        console.log(result.data);
        alert("registered successfully");
        window.open('/login', "_self");
      }
    })
  }

  return (
    <div>
        <div className="login">
                <h1>Register</h1>
                <form onSubmit={submitForm}>
                  <p><input type="text" name="name" onChange={handleChange} value={data.name} placeholder="Name" /></p>

                  <p><input type="email" name="email" value={data.email} placeholder="Email" onChange={handleChange}/></p>

                  <p><input type="password" name="password" value={data.password} placeholder="Password" id="password" onChange={handleChange}/></p>
                  
                  <p><input type="text" name="type" value={data.type} placeholder="Type" id="type" onChange={handleChange}/></p>

                  <p className="submit"><input type="submit" name="commit" value="Register"/></p>

                </form>
              </div>
    </div>
  )
}

export default Register