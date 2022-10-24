import React from 'react'
import '../Css/register.css'
function Register() {
  return (
    <div>
        <div className="login">
                <h1>Register</h1>
                <form method="post">
                  <p><input type="text" name="login" value="" placeholder="Username"/></p>
                  <p><input type="password" name="password" value="" placeholder="Password"/></p>
                  <p><input type="email" name="email" value="" placeholder="email" id="email"/></p>
                  
                  <p className="submit"><input type="submit" name="commit" value="Register" onclick="sendEmail()"/></p>
                </form>
              </div>
    </div>
  )
}

export default Register