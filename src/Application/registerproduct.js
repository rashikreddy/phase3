import React from 'react'
import '../Css/register.css'
import { useState } from 'react'
import axios from 'axios'

import { Link, Navigate } from 'react-router-dom'


function RegisterProduct() {

  const [data, setData] = useState({
    productid:'',
    productname:'',
    price:''

    
    
  })
  const x = sessionStorage.getItem('userid');

  const handleChange = (e) => {
    setData({...data, [e.target.name]:e.target.value});
  }
  const submitForm = (e) => {
    e.preventDefault();
    const senddata = {
      id: data.productid,
      name: data.productname,
      price: data.price,
      user : x
    }
    // console.log(senddata);
    
    axios.post('http://sxd7594.uta.cloud/register/products.php', senddata).then((result)=>{
      if(result.data.message == "failure"){
        alert('Invalid User');
      } else {
        console.log(result.data);
        alert("registered successfully");
        window.open('/posts', "_self");
      }
    })
    

    
  }

  return (
    <div>
        <div className="login">
                <h1>Register</h1>
                <form onSubmit={submitForm}>
                <p><input type="text" name="productid" onChange={handleChange} value={data.productid} placeholder="Product ID" /></p>

                  <p><input type="text" name="productname" onChange={handleChange} value={data.productname} placeholder="Product Name" /></p>
                  
                  <p><input type="text" name="price" value={data.price} placeholder="Price" onChange={handleChange}/></p>

                  <p className="submit"><input type="submit" name="commit" value="Register"/></p>

                </form>
              </div>
    </div>
  )
}

export default RegisterProduct