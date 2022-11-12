import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import '../Css/Login.css'
import axios from 'axios';
import { useState } from 'react';
function Login() {


  const [data, setData] = useState({
    email:'',
    password:'',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({...data, [e.target.name]:e.target.value});
  }
  const submitForm = (e) => {
    e.preventDefault();
    const senddata = {
      email: data.email,
      password: data.password

    }
    // console.log(senddata);
    
    axios.post('http://sxd7594.uta.cloud/register/login.php', senddata).then((result)=>{
      if(result.status == 404){
        alert('Invalid User');
      } else {
        console.log(result);
        sessionStorage.setItem('userid',result.data.userid);
        if(result.data.type==='student'){
          navigate('/studentprofile');
        }
        if(result.data.type==='business'){
          navigate('/businessowner');
        }
        if(result.data.type === 'schooladmin'){
          navigate('/admin')
        }
        if(result.data.type === 'superadmin'){
          navigate('/superadmin')
        }
      }
    })
  }


  return (
    <div>
        <div className="login">
      <h1>Login</h1>
      <form onSubmit={submitForm}>
        <p><input type="email" name="email" value={data.email} placeholder="Email" onChange={handleChange} required/></p>
        <p><input type="password" name="password" value={data.password} placeholder="Password" onChange={handleChange} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" minLength="8"/></p>
        <p className="submit"><input type="submit" name="commit" value="Login"/></p>
      </form>
    </div>

    <div className="login-help">
      <p>New User? <Link to="/register">Register Here</Link></p>
      <p>Forgot your password? <Link to="/forgetpassword">Click here to reset it</Link></p>
      </div>
    </div>
  )
}


export default Login;
