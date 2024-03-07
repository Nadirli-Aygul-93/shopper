import React, { useState } from 'react'
import "./Komponentfayl.css"
import { Data } from '../Data/Data'
import { Rest } from '../Rest/Rest'
import { HiChevronDown } from "react-icons/hi2";






const Komponentfayl = () => {

  const [set,setbtn] = useState(false)
  const [btn,setbutn] = useState(false)

  const handle = () => {
    setbtn(!set)
    setbutn(!btn)
  }

  return (

    


    <div className='komponentfayl'>
        <div><h1 className='komponenth1'>Partner with <span className='kk'>30k + b</span><span className='rands'>rands</span>  globally</h1></div>

       
        
        
        <div className='komponentgrid'> 
        {Data.map(item=>(
           <div className='komponentitem'>
           <h3 key={item.h1}>{item.h1}</h3>
         <img src={item.img} width="50px" height="50px"/>
           </div>
        ))}

        

            
            
</div>


<div className='komponent2'>
<button onClick={handle} className={`btn ${btn? `btnn`: ``}`} >show more <HiChevronDown /></button>


<div className={`dis ${set?`diss` : ``}`}>

  {Rest.map(todo=>(

  <div className='showitem'>
    
    <h3>{todo.h2}</h3>
    <img src={todo.img1} width="50px" height="50px" />
  </div>))}
  
</div>

</div>

</div>









    
  )
}

export default Komponentfayl