import React from 'react'
import '../Css/register.css'
import { useState } from 'react'
import axios from 'axios'

import { Link, Navigate } from 'react-router-dom'


function CreateAdd() {

  const [data, setData] = useState({
    name:'',
    description:''

    
    
  })
  const x = sessionStorage.getItem('userid');

  const handleChange = (e) => {
    setData({...data, [e.target.name]:e.target.value});
  }
  const submitForm = (e) => {
    e.preventDefault();
    const senddata = {
      name: data.name,
      description: data.description,
      user : x
    }
    // console.log(senddata);
    
    axios.post('http://localhost/register/posts.php', senddata).then((result)=>{
      if(result.data.message == "failure"){
        alert('Invalid User');
      } else {
        console.log(result.data);
        alert("registered successfully");
        window.open('/ads', "_self");
      }
    })
    

    
  }

  return (
    <div>
        <div className="login">
                <h1>Register</h1>
                <form onSubmit={submitForm}>
                <p><input type="text" name="name" onChange={handleChange} value={data.name} placeholder="Name" /></p>

                  <p><input type="text" name="description" onChange={handleChange} value={data.description} placeholder="description" /></p>

                  <p className="submit"><input type="submit" name="commit" value="Register"/></p>

                </form>
              </div>
    </div>
  )
}

export default CreateAdd