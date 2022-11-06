import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/Login.css'
function Login() {
  return (
    <div>
        <div className="login">
      <h1>Login</h1>
      <form action="/studentprofile">
        <p><input type="text" name="login" value={email} placeholder="Username or Email" required/></p>
        <p><input type="password" name="password" value={password} placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" minlength="8"/></p>
        <p className="submit"><input type="submit" name="commit" value="Login" onClick={login()}/></p>
        <p>username:dummy@domain.com</p>
        <p>password:DummyD@1234</p>
      </form>
    </div>

    <div className="login-help">
      <p>New User? <Link to="/register">Register Here</Link></p>
      <p>Forgot your password? <Link to="/forgetpassword">Click here to reset it</Link></p>
      </div>
    </div>
  )
}
var email;
var password;
var isLoggedin=false;
function login(){
  if(email=='dummy@domain.com' && password=='DummyD@1234'){
    isLoggedin=true;
    return <Link to='/studentprofile'></Link>
  }

}

export default Login;
