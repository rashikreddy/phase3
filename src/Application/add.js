import React from 'react'
import '../Css/add.css'
function Add() {
  return (
    <div>
        <div className="row" style={{marginBottom:"10rem"}}>
  <div className="column">
    <div className="card">
      <img src="Images/Ipad.png" alt="Jane" style={{width:"100%"}}/>
      <div className="container">
        <h2>Ipad</h2>
        <p className="title">2nd generation for $240</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="Images/Iphone.png" alt="Jane" style={{width:"100%"}}/>
      <div className="container">
        <h2>Iphone</h2>
        <p className="title">Iphone 13 for $500</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        
      </div>
    </div>
  </div>

   <div className="column">
    <div className="card">
      <img src="Images/Add_new.png" alt="Jane" style={{width:"100%"}}/>
      <div className="container">
        <h2>Add New Ads</h2>
        
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
     <img src="Images/Remove.png" alt="Jane" style={{width:"100%"}}/>
      <div className="container">
        <h2>Remove Ads</h2>
        
      </div>
    </div>
  </div>

</div>
    </div>
  )
}

export default Add