import React from 'react'

function ForgetPassword() {
  return (
    <div>
        <div className="login">
            <h1>Forget Password</h1>
            <form method="post" action="">
              <p><input type="Email" name="login" value="" placeholder="Email"/></p>
              <p className="submit"><input type="submit" name="commit" value="Send Email"/></p>
            </form>
        </div>
    </div>
  )
}

export default ForgetPassword