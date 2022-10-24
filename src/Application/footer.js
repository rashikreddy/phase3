import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/footer.css'
function Footer() {
  return (
    <div className="footer">
      <li><Link to="/aboutus">About Us</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
  </div>
  )
}

export default Footer