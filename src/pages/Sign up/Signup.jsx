import  React, { useState } from 'react';
import "./Signup.css"
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";





function Signup() {
  
 




return (

    <div className='coontainer'>
        
        <form>
            <h3>Sign up</h3>
            <div className='formname'>
                <input type="text" placeholder='First name' />
                <input type="text" placeholder='Last name' />

            </div>
            <div className='loginp'> 
                <input type="email" placeholder='Email' />
            </div>
            <div className='loginp'>
                <input type="password" placeholder='Choose a password' />
            </div>
            <button className='logbut'>Get Started</button>
        </form>

        <div className='p'>
            <p>By creating account you accept our <Link to = "https://www.shopper.com/terms"><span className='loglink'> Terms of Service</span>
             </Link><br/> and <Link to = "https://www.shopper.com/privacy"><span className='loglink'>Privacy Policy</span></Link>
            </p>
        </div>

        <div className='logline'>
            <div className='logline1'></div>
            <p>or Sign up with</p>
            <div className='logline1'></div>
        </div>

        <div className='loggbut'><FcGoogle  className='logic'/><Link to = "">Sign up with Google</Link> </div>
        <div className='loggbut'><ImFacebook2 className='logic' /><Link to = "">Sign up with Facebook</Link></div>
    
    
        
    </div>)
    }
  


export default Signup