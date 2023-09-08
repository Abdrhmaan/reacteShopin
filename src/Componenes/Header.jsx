import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='item'>
         <Link to="/" className='logo'>Logo</Link>
        <div className='nav-item'>
        <Link to="/">HOME</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/shop">shop</Link>
    
          
        </div>
        <Link to="/rigester" className='rigestar'> signup</Link>
    </div>
  )
}

export default Header