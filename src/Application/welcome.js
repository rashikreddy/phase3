import React from 'react'
import '../Css/welcome.css'
function Welcome() {
  return (
    <div>
    <div className="img"></div>
    <div className="center">
    <form action="/form/submit" method="GET">
        <input type="text" name="text" className="search" placeholder="Search here!"/>
        <input type="submit" name="submit" className="submit" value="Search"/>
    </form>
    <div className="title">Welcome</div>
    <div className="sub_title">Hi there!</div>
    <div className="sub_title">Welcome to the UTA Market Family!</div>
    </div>
    </div>
  )
}

export default Welcome