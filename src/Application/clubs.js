import React from 'react'
import '../Css/clubs.css'
function Clubs() {
  return (
    <div>
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

            <div className="column">
                <div className="card">
                    <img src="Images/Add_new.png" alt="Jane" style={{width:"100%"}}/>
                    <div className="container">
                        <h2>Add to a club</h2>
        
                    </div>
                </div>
            </div>
  
            <div className="column">
                <div className="card">
                    <img src="Images/Remove.png" alt="Jane" style={{width:"100%"}}/>
                    <div className="container">
                        <h2>Drop from a Club</h2>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                    <img src="Images/join-club.jpeg" alt="Jane" style={{width:"100%"}}/>
                    <div className="container">
                        <h2>Join Club</h2>
                    </div>
                </div>
  </div>
  <div className="column">
    <div className="card">
     <img src="Images/leave_club.png" alt="Jane" style={{width:"100%"}}/>
      <div className="container">
        <h2>Leave Club</h2>
      </div>
    </div>
  </div>

</div>

    </div>
  )
}

export default Clubs