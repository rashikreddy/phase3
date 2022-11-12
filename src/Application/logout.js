import React from 'react'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Logout() {
    sessionStorage.removeItem("userid");
    sessionStorage.clear()
}

export default Logout