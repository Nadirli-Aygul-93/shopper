import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='footerfirst'>
          <div className='footerfirstwords'>
            <p>Book a demo</p>
            <p>Partnerships</p>
            <p>Niche finder tool</p>
          </div>
          <div className='footerfirsticon'>
            <span>
              <img src="src/assets/shopper.svg" width="30px" height="40px" className='iconimg' />
              <h1>Shopper</h1>

            </span>
            <div className='footerfirsticonp'>
              <p>© 2024 Shopper.com |</p>
              <p>Privacy policy |</p>
              <p>Terms of service</p>
            </div>
          </div>
        </div>
        <div className='footersecond'>
          <div className='footercontact'>
            <p>About us |</p>
            <p>Contact us |</p>
            <p>Support</p>
          </div>
          <div className='footericons'>
            <FaFacebook />
            <FaYoutube />
            <FaLinkedin />
            <RiTwitterXFill />
            <IoLogoInstagram />
          </div>

        </div>
    </div>
  )
}

export default Footer