import React, { useState } from 'react'
import '../Css/add.css'
import Ipad from './Images/Ipad.png'
import Iphone from './Images/Iphone.png'
import add from './Images/Add_new.png'
import remove from './Images/Remove.png'
import axios from 'axios'
import Contact from './contact'




 function Add() {
  const [data, setData] = useState({
    da : {}
  })
  axios.get('http://localhost/register/getadds.php').then((result)=>{
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
     return row;
  }
  return (
    <div>
        <div className="row" style={{marginBottom:"10rem"}}>
          <div>
            {
              elements()
            }
        </div>
  {/* <div className="column">
    <div className="card">
      <img src={Ipad} alt="Jane" style={{width:"100%"}}/>
      <div className="container">
        <h2>Ipad</h2>
        <p className="title">2nd generation for $240</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src={Iphone} alt="Jane" style={{width:"100%"}}/>
      <div className="container">
        <h2>Iphone</h2>
        <p className="title">Iphone 13 for $500</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        
      </div>
    </div>
  </div> */}

   <div className="column">
    <a href='/createadd'>
    <div className="card">
      <img src={add} alt="Jane" style={{width:"100%"}}/>
      <div className="container">
        <h2>Add New Ads</h2>
        
      </div>
    </div>
    </a>
  </div>
  
  <div className="column">
    <div className="card">
     <img src={remove} alt="Jane" style={{width:"100%"}}/>
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