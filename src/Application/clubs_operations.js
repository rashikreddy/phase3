import React from 'react'
import '../Css/clubs_operations.css'
function Clubs_Operations() {
  return (
    <div className="row" style={{marginBottom: "10rem"}}>
  <div className="column">
    <div className="card">
      <img src="Images/Bookstore.png" alt="Jane" style={{width:"100%"}}/>
      <div className="container">
       <h2>Bookstore Club</h2>
        
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="Images/Campus_clubs.png" alt="Jane" style={{width:"100%"}}/>
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