import React from 'react'
import '../Css/posts.css'
function Posts() {
  return (
    <div>
        <div className="row" style={{width: "100%",height: "100%",marginBottom: "10rem"}}>

<div className="column">
  <div className="card">
    <img src="Images/Iphone.png" alt="Jane" style={{width:"100%"}}/>
    <div className="container">
      <h2>Iphone</h2>
      <p className="title">Iphone 13 for $500</p>
      
    </div>
  </div>
</div>

 <div className="column">
  <div className="card">
    <img src="Images/Add_new.png" alt="Jane" style={{width:"100%"}}/>
    <div className="container">
      <h2>Add New Product</h2>
      
    </div>
  </div>
</div>

<div className="column">
  <div className="card">
   <img src="Images/Remove.png" alt="Jane" style={{width:"100%"}}/>
    <div className="container">
      <h2>Remove Product</h2>
      
    </div>
  </div>
</div>
<div className="column">
  <div className="card">
   <img src="Images/Return.png" alt="Jane" style={{width:"100%"}}/>
    <div className="container">
      <h2>Return Product</h2>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default Posts