import React from 'react'
import '../Css/services.css'
import exchange from './Images/Exchange.png'
import campus_clubs from './Images/Campus_clubs.png'
import bookstore from './Images/Bookstore.png'
import image from './Images/images.png'
function Services() {
  return (
    <div>
        <h1 style={{textAlign:"center", textTransform:"uppercase", color:"#00bcd4" }}>Our Services</h1>
        <div className="row">
            <div className="column">
                <div className="card">
                    <img src={exchange} alt="Jane" style={{width:'100%'}}/>
                    <div className="container">
                        <h2>Exchange Info with peers</h2>
                    </div>
                </div>
            </div>
    
            <div className="column">
                <div className="card">
                    <img src={campus_clubs} alt="Jane" style={{width:"100%"}}/>
                    <div className="container">
                        <h2>Campus Clubs</h2>
                    </div>
                </div>
            </div>
    
            <div className="column">
                <div className="card">
                    <img src={bookstore} alt="Jane" style={{width:"100%"}}/>
                    <div className="container">
                        <h2>Campus Bookstore</h2>
            
                    </div>
                </div>
            </div>
      
            <div className="column">
                <div className="card">
                    <img src={image} alt="Jane" style={{width:"100%"}}/>
                    <div className="container">
                        <h2>Chat With Business Owners</h2>
            
                    </div>
                </div>
            </div>
    
        </div>
    </div>
  )
}

export default Services