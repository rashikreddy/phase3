import React from 'react'
import '../Css/contact.css'
function Contact() {
  return (
    <div>
        <section className="contact">
    <div className="content">
        <h1>Contact Us</h1>
    </div>
    <div className="container">
        <div className="contactInfo">
        <div className="box">
            <div className="icon"></div>
                <div className="text">
                    <h3>Address</h3>
                    <p>University of texas At Arlington</p>
                    <p>701 South Nedderman Drive</p>
                    <p>Arlington,TX,76010</p>
                </div>
        </div>
        <div className="box">
            <div className="icon"></div>
                <div className="text">
                    <h3>Phone</h3>
                    <p>181-272-2011</p>
                </div>
        </div>
        <div className="box">
            <div className="icon"></div>
                <div className="text">
                    <h3>Email</h3>
                    <p>utmarket@uta.edu</p>
                </div>
        </div>
    </div> 
        <div className="contactform">
            <form>
                <h2>Send Message</h2>
                <div className="inputBox">
                    <input type="text" name="" required="required"/>
                    <span>Full Name</span>
                </div>
                <div className="inputBox">
                    <input type="text" name="" required="required"/>
                    <span>Email</span>
                </div>
                <div className="inputBox">
                    <input type="text" name="" required="required"/>
                    <span>Type your Message...</span>
                </div>
                <div className="inputBox">
                    <input type="submit" name="" value="send"/>
                </div>
            </form>
        </div>
    </div>
</section>
    </div>
  )
}

export default Contact