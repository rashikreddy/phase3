import React from 'react'
import '../Css/aboutus.css'
function Aboutus() {
  return (
    <div>
        <section className="contact">
        <div className="content">
        </div>
        <div className="container">
            <div className="contactInfo">
                <div className="box">
                    <div className="icon"></div>
                        <div className="text">
                            <h2>ABOUT US</h2>
                            <p>Welcome to the center of college life in maverick Country at the University of Texas at Arlington</p>
                        </div>
                </div>
            </div> 
            <div className="contactform">
                <form>
                    <div className="f1">
                        <div className="icon"></div> 
                        <img src="Images/About_us_image.jpeg" alt="icon" className="icon" />
                    </div>
                    <div className="inputBox">
                        <input type="text" name="" required="required"/>
                        <h2>Business Hours</h2>
                        <p> Monday :- 7am-10pm</p>
                        <p> Tuesday :- 7am-10pm</p>
                        <p> Wednesday :- 7am-10pm</p>
                        <p> Thursday :- 7am-10pm</p>
                        <p> Friday :- 7am-10pm</p>
                        <p> Saturday :- 7am-10pm</p>
                        <p> Sunday :- 7am-10pm</p>
                        <p> Closed for all University Holidays</p>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Aboutus