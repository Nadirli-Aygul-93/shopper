import React, { useState } from 'react'
import "./Youtube.css"

import { FaHandsClapping } from "react-icons/fa6";
import { GrFormNext } from "react-icons/gr";
import { LuHome } from "react-icons/lu";
import { TbMessageSearch } from "react-icons/tb";
import { MdGif } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";


function Youtube() {

  const [first,setfirst] = useState(true)
  const [second,setsecond] = useState(false)
  const[orng,setorng] = useState(false)

  const orange = () => {
    if(orng == false) {
        setorng(true)
    }else {
        setorng(false)
    }
  }
  
    
const hand = ()=> {
    if(first==true){
        setfirst(false)
    }else {
        setfirst(true)
    }

    setsecond(!second)

    
    
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
                <button className='butonyoutube1' onClick={orange}>Talk to us</button>
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
        orng&&(
            <div className='orange'>
    
       {
        first&&(

            <div>
                <div className='orimg'>
            <img src="https://static.intercomassets.com/avatars/5673800/square_128/Nina-1691508407.png" width="50px" height="50px" />
        </div>
        <div className='orwords'>
            <h1>Hi There<FaHandsClapping className='orwordsic'/></h1>
            <h1>How can help you?</h1>
        </div>
        <div className='orsend'>
            <div>
            <button onClick={hand}>Send us message</button>
            <p>We will back later</p>
            </div>
            <button><GrFormNext /></button>

        </div>
        <div className='orfoot'>
            <div className='home'>
                <span className='orichome'><LuHome /></span>
                <p>Home</p>
            </div>
            <div className='messages'>
                <span className='oricmessages'><TbMessageSearch /></span>
                <p>Messages</p>
            </div>

        </div>
            </div>

        )
       }
       

       
            <div className={`ornone${second? `orblock` : ``}`} >

        <h1>We will be back later</h1>
        <div className='ortextarea'></div>
       <div className='orinput' >
       <input type="text" placeholder='write a reply ...' />
       <span><MdGif />
       <FaRegSmile />
       <ImAttachment /></span>


       </div>


       </div>
        
       </div>
        
        )
       }
          
</div>
        )

 
  
}

export default Youtube