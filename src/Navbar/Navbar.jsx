import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa";




function Navbar() {

const[hid,sethid] = useState(false)
function mouse() {
  sethid(true)
}

function mouses() {
  sethid(false)
}
  
 
 

  return (
    <div className='navbar'>
        <div className='image'>
       <Link to = "/">
        <img src="src/assets/shopper.svg" alt="" srcset="" width="30px"/>
       </Link>
        </div>
        <ul className='nav-menu'>
            <li><Link style={{color : 'grey'}} to="/features" >Features</Link></li>
            <li><Link style={{color : 'grey'}} to ="/wordplugin">WordPressPlugin</Link></li>
           <ul className='navmenu'onMouseEnter={mouse} onMouseLeave={mouses}  >
           <li >Resources </li>
            <li><FaAngleDown /></li>
            </ul >
{hid&&( <div className="nvblock"><div className='nvdet'><div>
  <h1>Live Webinars</h1>
  <p>Join us for our upcoming live<br/> webinars, where you'll find a wealth <br/>of valuable insights essential for <br/> your success.</p>
  </div>
  <div>
    <h1>Blog</h1>
    <p>Expand your marketing knowledge <br/> with detailed tutorials and case <br/> studies.</p>
  </div>
  <div>
    <h1>Help</h1>
    <p>Learn how to use Shopper - packed <br/> with tutorials, tips and best<br/> practices.</p>
  </div></div>
  </div>)}
        </ul>
        <div className='but'>
            <Link to ="/signup"><button className='login'>Log In</button></Link>
            <button className='red'>Get started-it"s free</button>
        </div>
    </div>
  )
}

export default Navbar