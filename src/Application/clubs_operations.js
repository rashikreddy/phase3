import React from 'react'
import '../Css/clubs_operations.css'
import bookstore from './Images/Bookstore.png'
import campus_clubs from './Images/Campus_clubs.png'
function Clubs_Operations() {
  return (
    <div className="row" style={{marginBottom: "10rem"}}>
  <div className="column">
    <div className="card">
      <img src={bookstore} alt="Jane" style={{width:"100%"}}/>
      <div className="container">
       <h2>Bookstore Club</h2>
        
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src={campus_clubs} alt="Jane" style={{width:"100%"}}/>
      <div className="container">
        <h2>Campus Club</h2>
        
      </div>
    </div>
  </div>
<br></br>
    <button className="button button1">Remove</button>

</div>

  )
}

export default Clubs_Operations