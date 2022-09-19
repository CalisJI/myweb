import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import ButtonSidebar from './ButtonSidebar'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
        <ButtonSidebar/>
        <button>ttt</button>
        </div>
        <div className='rightSide'>
          
            <Link to="/" className='items'>Home</Link>
            <Link to="/project" className='items'>Project</Link>
            <Link to="/about" className='items'>About</Link>
            <Link to="/contact" className='items'> Contact</Link>
        </div>
    </div>
  )
}

export default Navbar