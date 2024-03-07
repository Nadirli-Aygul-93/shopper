import React, { useState } from 'react'
import "./Youtube.css"
import { FcNext } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { MdOutlineGif } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";


function Youtube() {

    const[us,setus] = useState(false)
    const[sec,setsec] = useState(false)
    const[first,setfirst] = useState(true)

const talkk = () => {
    if(us == true) {
        setus(false)
    }else {
        setus(true)
    }
};

const hand = () => {
    if(sec == true) {
        setsec(false)
    }else {
        setsec(true)
    }
    if(first == true) {
        setfirst(false)
    }else {
        setfirst(true)
    }

    
}
   
    
   

   
  return (
    <div className='youtube'>
        <div className='youtubeh1'><h1>We are here <span className='youtubespan'>to hel</span><span className='spanyoutube2'>p you</span> every step of the way</h1></div>
        <div className='youtubegalery'>
            <div className='youtubeitem'>
                <div className='youtubewords'>
                    <h1>Let's grow together</h1>
                    <p>Our team is always a click away to support your growth every step of the way.</p>
                </div>
                
                    <div className='youtubeimg1'><img src="https://th.bing.com/th/id/OIP.KMJXWEreRy1FTyLWjODenQHaE8?rs=1&pid=ImgDetMain" width="370px" height="400px"   /></div>
                <button className='butonyoutube1' onClick={talkk}>Talk to us</button>
            </div>
            <div className='youtubeitem youtubeitem2'>
                <div className='youtubewords2'>
                    <h1>Youtube step-by-step guides</h1>
                    <p>Follow along with our step-by-step guides</p>
                </div>
                
                   <div className='youtubeimg2'> <img  src="https://th.bing.com/th?id=OIF.ZIHOp1lSjY6%2fbV4gCo5Y1A&rs=1&pid=ImgDetMain" width="100%" height="190px"/></div>
                <button className='butonyoutube2'>Go to tutorials</button>
            </div>
        </div> 

        {
          us&&  (
                <div className='orange'>
                   {
                    first&&(
                        <div >
                        <h1>kjkes</h1>
                        <button onClick={hand}>send</button>
                    </div>
                    )
                   }
                   {
                    sec&&(
                        <div>
                        <h1>jkfkejfsk</h1>
                        <span>dhkmf</span>
                    </div>
                    )
                   }
                </div>
            )
        }
        
          
</div>
        )

 
  
}

export default Youtube