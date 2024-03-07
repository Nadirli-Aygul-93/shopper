import React from 'react'
import "./hero.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { IoMdStar } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import Content from '../Content/Content';
import Galery from '../Galery/Galery';
import Komponentfayl from '../Komponent/Komponent/Komponentfayl';
import Youtube from '../Youtube/Youtube';
import Skyrocket from '../Skyrocket/Skyrocket';




function Hero() {
  return (
    <>
    <div className='container'>
      <div className='hero-left'>
        <h1><span className='sp'>Lau</span><span className='spo'>n</span>ch or <span className='spsc'>scale</span></h1>
        <h1 className='h1o'>your affiliate business</h1>
        <p>Shopper simplifies affiliate marketing for bloggers, creators, affiliate</p>
        <p>marketers, and publishers with its built-in brand partnerships, creative</p>
        <p className='po'>product showcases, and easy link management.</p>
        <div className='but'>
          <button className='bt1 buttonn'>Book a demo</button>
          <button className='bt2 buttonn'>Get started-it's free</button>
        </div>

      </div>
      <div className='hero-right'>
        <img className='img2'  src="https://th.bing.com/th/id/R.8311d041820143dc92beb9ecd9e563dd?rik=6R%2bAU7KNtKWBdg&pid=ImgRaw&r=0" width="600px"/>
      </div>

      <div className='vid'>
      <iframe width="100%" height="100%"  src="https://www.youtube.com/embed/DSDvN76DKaA?si=aXHJHFyGqrIPPHja"
       title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
        gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <div>
        
      </div>
    </div>

    <div className='container2'>
      <div className='h12'><h1 >Trusted by <span className='sp2'>3000+</span><span className='sp3'>  marketers</span>to fuel their affiliate income!</h1></div>
    <div className='slide'>
    <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper" 
      >
        <SwiperSlide className='slide' >
          <div className=' slide1'>
            
              <div className='p1slide'>
               <span className='dot dott'><FaQuoteLeft /></span> <p>I'm absolutely thrilled with Shopper.com! This affiliate platform</p>
                <p>is an absolute breeze to navigate, and it feels like a fun game. I</p>
                <p>can effortlessly build up my collection or shop with loads of</p>
                <p>products and attach my own affiliate links. What's even more</p>
                <p>exciting is that I have the freedom to craft my own descriptions for the products   ...<FaQuoteRight className='dot'/></p></div>
                <div className='detail'>
                  <img src="https://cdn.dribbble.com/users/4915/screenshots/411272/faces2.png" alt="" srcset="" width="100px" height="100px" />
                  <div className='star'>
                    <p className='valentine'>Valentine Lyog</p>
                    <span className='star1'><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></span>
                  </div>

                </div>
  
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div className='slide2'>
            <div className='p2slide'>
           <span className='dot2'><FaQuoteLeft /></span> <p>I'm enjoying Shopper so far. <p>It makes it REALLY easy to make some money from affiliate marketing.</p>
            <p>You can use your own affiliate URLs or their default affiliate programme, as</p> 
            <p>they seem to have a net work and agreements with thousands of online affiliate programmes. </p>
           <p>The best thing about it is how easy it is to ...<FaQuoteRight className='dot2'/></p></p>
            </div>
            <div className='detail'>
              <img src="https://interacnetwork.com/the-content/cream/wp-content/uploads/2021/06/Avatar_KantoSouth_Kenshi-01.png" width="100px" height="100px" />
              <div className='star'>
                <p className='luis'>Luis Porras Wadley</p>
                <span className='star2'><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></span>
              </div>
            </div>

          </div>
        

        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div className='slide3'>
            <div className='p3slide'>
              <span className='dot3'><FaQuoteLeft /></span><p>
              <p>It's super user-friendly! The user experience and interface are really nice.</p>
              <p> If you're in the market for a straightforward affiliate store, Shopper could be a great choice. </p>
              <p>We're also planning to use it for our promotions and vouchers, and we're excited about it!...<FaQuoteRight className='dot3'/></p>
              </p>
            </div>
            <div className='detail'>
              <img src="https://pcbwayfile.s3-us-west-2.amazonaws.com/project/20/11/21/0511132451716.jpg" width="100px" height="100px" />
              <div className='star'>
                <p className='david'>David Kocsys</p>
                <span className='star3'><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></span>
              </div>
            </div>
          </div>
        
        </SwiperSlide>

        </Swiper>
    </div>
     
    </div>

    <Content />
    <Galery />
    <Komponentfayl />
    <Youtube />
    <Skyrocket />
    

    

       
    </>


  )
}

export default Hero