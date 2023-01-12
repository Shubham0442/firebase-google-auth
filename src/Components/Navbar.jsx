import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div style={{ display: "flex", gap: "15px"}}>
             <Link to={"/"}>Home</Link>
             <Link to={"/signup"}>Signup</Link>
             <Link to={"/login"}>Login</Link>
        </div>
    </div>
  )
}

export default Navbar