import React from 'react'
import '../Css/clubs.css'
import add from './Images/Add_new.png'
import bookstore from './Images/Bookstore.png'
import campus_clubs from './Images/Campus_clubs.png'
import remove from './Images/Remove.png'
import join from './Images/join_club.jpeg'
import leave from './Images/leave_club.png'
function Clubs() {
  return (
    <div>
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

            <div className="column">
                <div className="card">
                    <img src={add} alt="Jane" style={{width:"100%"}}/>
                    <div className="container">
                        <h2>Add to a club</h2>
        
                    </div>
                </div>
            </div>
  
            <div className="column">
                <div className="card">
                    <img src={remove} alt="Jane" style={{width:"100%"}}/>
                    <div className="container">
                        <h2>Drop from a Club</h2>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                    <img src={join} alt="Jane" style={{width:"100%"}}/>
                    <div className="container">
                        <h2>Join Club</h2>
                    </div>
                </div>
  </div>
  <div className="column">
    <div className="card">
     <img src={leave} alt="Jane" style={{width:"100%"}}/>
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