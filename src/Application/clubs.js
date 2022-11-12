import React from 'react'
import '../Css/clubs.css'
import add from './Images/Add_new.png'
import bookstore from './Images/Bookstore.png'
import campus_clubs from './Images/Campus_clubs.png'
import remove from './Images/Remove.png'
import join from './Images/join_club.jpeg'
import leave from './Images/leave_club.png'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
function click(){
    Navigate('  /registerclubs')
}


function Clubs() {
    const [data, setData] = useState({
        da : {}
      })
      axios.get('http://sxd7594.uta.cloud/register/getclubs.php').then((result)=>{
        // console.log(result)
        setData({
          da : result.data
        })  
        console.log(data.da)
        // var x = Object.keys(result).length
        // for (let index = 0; index < x; index++) {
        //   console.log('x')
        //   elements.push(<div className="column">
        //   <div className="card">
        //     <img src={Ipad} alt="Jane" style={{width:"100%"}}/>
        //     <div className="container">
        //       <h2>Ipad</h2>
        //       <p className="title">2nd generation for $240</p>
        //       <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              
        //     </div>
        //   </div>
        // </div>)
          
        // }
        // console.log(elements)
      });
      const x = Object.keys(data.da).length;
      const elements = () => {
         const row = []
         for (var i=0;i<data.da.length;i++){
          row.push(<div className="column">
             <div className="card">
               
               <div className="container">
                <h2>{data.da[i]["name"]}</h2>
                <h4>{data.da[i]["description"]}</h4>
                 
               </div>
             </div>
           </div>)
         }
         console.log(data.da)
         return row;
      }
  return (
    <div>

        <div className="row" style={{marginBottom: "10rem"}}>
        <div>
            {
              elements()
            }
        </div>
            {/* <div className="column">
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
            </div> */}
        <a href='./registerclubs'>
            <div className="column" >
                <div className="card">
                    <img src={add} alt="Jane" style={{width:"100%"}}/>
                    <div className="container">
                        <h2>Add to a club</h2>
        
                    </div>
                </div>
            </div>
            </a>
  
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