import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'




function Navbar() {
  return (
    <div className='navbar'>
        <div className='image'>
       <Link to = "/hero">
        <img src="src/assets/shopper.svg" alt="" srcset="" width="30px"/>
       </Link>
        </div>
        <ul className='nav-menu'>
            <li><Link to="/" >Features</Link></li>
            <li><Link to ="/wordpressplugin">WordPressPlugin</Link></li>
            <li><Link to='/pricing'>Pricing</Link></li>
            <li><Link to ="/resources">Resources</Link></li>
        </ul>
        <div className='but'>
            <button className='login'>Log In</button>
            <button className='red'>Get started-it"s free</button>
        </div>
    </div>
  )
}

export default Navbar