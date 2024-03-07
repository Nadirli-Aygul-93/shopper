import React from 'react'
import "./Galery.css"
import { PiArrowUpRightBold } from "react-icons/pi";


function Galery() {
  return (
    <div className='galery'>
      <div><h1>An <span className='all'>all</span><span className='in'>-in-one</span> affiliate marketing platform</h1></div>
<div className='grid'>
  <div className='grid1'>
    <div className='gridetail'>
      <h2 className='h2red'>Link break alerts</h2>
      <h2 >Stay alert, stay active</h2>
      <p>Get notified instantly about broken links, ensuring a</p>
      <p>seamless user experience, trust, and higher earnings.</p>
    </div>
    <div className='gridimg'>
      <img src="https://cdn.shopper.com/next_assets/landing/Home-page-notifications.gif" width="100%" height="400px" />
    </div> 
  </div>
  <div className='grid1'>
    <div className='gridetail'>
      <h2 className='h2violet'>Amazon link localization</h2>
      <h2 >Link globally, earn locally</h2>
      <p>Direct international visitors to their local Amazon stores,</p>
      <p>unlocking higher commissions and shopper satisfaction.</p>
    </div>
    <div className='gridimg'>
      <img src="https://cdn.shopper.com/next_assets/landing/Home-page-country-flags.gif" width="100%" height="400px" />
      
    </div> 
   </div>
  <div className='grid1'>
    <div className='gridetail'>
      <h2 className='h2violet'>Turbocharge with third-party apps</h2>
      <h2 >Unleash the power of integration</h2>
      <p>Integrate analytics, email management, marketing, and</p>
      <p>retargeting apps for data-driven insights, effective</p>
      <p>campaigns, and retargeting strategies.</p>
    </div>
    <div className='gridimg'>
      <img src="https://cdn.shopper.com/next_assets/landing/Home-page-apps.gif" width="100%" height="400px" />
    </div> 
   </div>
  <div className='grid1'>
    <div className='gridetail'>
      <h2 className='h2red'>High-performing product displays</h2>
      <h2 >Showcase for success</h2>
      <p>Get notified instantly about broken links, ensuring a</p>
      <p>seamless user experience, trust, and higher earnings.</p>
    </div>
    <div className='gridimg'>
      <img src="https://cdn.shopper.com/next_assets/landing/Home-page-product-displays.gif" width="100%" height="400px" />
    </div> 
  </div></div>

  <button className='redbuton'>Explore more features   <PiArrowUpRightBold /></button>
    </div>
  )
}

export default Galery