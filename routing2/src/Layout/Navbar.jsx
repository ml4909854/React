import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <Link className='nav' to="/">Home</Link>
        <Link className='nav' to="/about">About</Link>
        <NavLink className="nav" to="/cart">Cart</NavLink>
        <NavLink className="nav" to="/contact">Contact</NavLink>
        <NavLink className="nav" to="/dashboard">Dashboard</NavLink>
    </div>
  )
}

export default Navbar