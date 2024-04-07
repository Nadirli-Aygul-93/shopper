import React, { useState } from 'react'
import "./Wordplugin.css"
import { GoChevronUp } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";

function Wordplugin() {

const[stt,setstt] = useState(false)
const[stwo,setstwo] = useState(false)
const[sthree,sethree] = useState(false)
const[stforth,setstforth] = useState(false)
const[stfifth,setstfifth] = useState(false)
function handle() {
    setstt(stt => !stt)
}

function handletwo() {
    setstwo(stwo => !stwo)
}

function handlethree() {
    sethree(sthree => !sthree)
}

function handleforth() {
    setstforth(stforth => !stforth)
}
function handlefifth() {
    setstfifth(stfifth => !stfifth)
}
let nonefifth = stfifth ? 'block' : '' ;
let noneforth = stforth ? 'block' : '' ;
let nonethree = sthree ? 'block' : '' ;
let nonetwo = stwo ? 'block' : '' ;
let none = stt ? 'block' : '' ;


  return (
    <div className='word'>
        <div className='wordwords'>
            <h1>Here's Why Shopper is The <span className='all'>Best Wordpress</span> <span className='rands'>Affiliate Plugin </span> Out There</h1>
            <div className='wordp'>
                <p>Shopper is the easiest and most powerful affiliate plugin for bloggers. Here are the features that make Shopper the</p>
                <p className='wordp2'>most incredible and user-friendly WordPress plugin for creators.</p>
            </div>
        </div>
        <div className='wordtable'>
            <div className='wordrow'>
                <div className='wordc'>
                <div className='wordcolumn'>
                    <div ><img src="https://cdn.shopper.com/next_assets/wp-landing/brands-dark-2.svg"/></div>
                    <div className='worddet'>
                        <h4>30,000+ Brands To Collaborate</h4>
                        <p>Create a free account to instantly promote & earn from millions of high-quality products from over 30,000 brands!</p>
                    </div>
                </div>
                </div>
               <div className='wordc'> <div className='wordcolumn'>
                    <div>
                        <img src="https://cdn.shopper.com/next_assets/wp-landing/link-management-dark-2.svg" />
                    </div>
                    <div>
                        <h4>Easy Link Management</h4>
                        <p>Say goodbye to the hassle 
                        of managing multiple affiliate links by organizing all your links in one place,
                         making it easy to keep track of all.</p>
                    </div>
                </div></div>

            </div>
            <div className='wordrow'>
                <div className='wordc'>
                <div className='wordcolumn'>
                    <div><img src="https://cdn.shopper.com/next_assets/wp-landing/api-access-dark-2.svg" /></div>
                    <div>
                        <h4>API Access</h4>
                        <p>Easily integrate your Shopper links with other tools<br/> and platforms that you use,which means you can <br/> promote products across a wide range of platforms.</p>
                    </div>
                </div>
                </div>
                <div className='wordc'>
                <div className='wordcolumn'>
                    <div>
                        <img src="https://cdn.shopper.com/next_assets/wp-landing/product-dsiplays-dark-2.svg" />
                    </div>
                    <div>
                        <h4>High-converting Product displays</h4>
                        <p>Choose from our pre-designed product displays
                             that are proven to generate 25% more sales - 
                             which means more earnings with the same traffic.</p>
                    </div>
                </div>
                </div>

            </div>
            <div className='wordrow'>
                <div className='wordc'>
                <div className='wordcolumn'>
                    <div>
                        <img src="https://cdn.shopper.com/next_assets/wp-landing/link-break-dark-2.svg" />
                    </div>
                    <div>
                        <h4>Link Break Alerts</h4>
                        <p>Get instant notifications whenever your
                             links stop working, so that you can fix them immediately
                              and never miss out on a single sale.</p>
                    </div>
                </div>
                </div>
               <div className='wordc'>
               <div className='wordcolumn'>
                    <div>
                        <img src="https://cdn.shopper.com/next_assets/wp-landing/amazon-dark-2.svg" />
                    </div>
                    <div>
                        <h4>
Amazon link localization
</h4>
                        <p>Automatically send your customers to their local
                             Amazon store based on their location, 
                             which means a better user experience & more sales.</p>
                    </div>
                </div>
               </div>

            </div>
           
        </div>

        <div className='resources'>
            <div className='resorword'>
                <h1>Frequently<span className='all'> Asked Questions </span><span className='rands'>and Resources</span></h1>
                <div className='resorwordp'>
                    <p>Do you have a question about Shopper? See the list below for our most frequently asked questions. If your</p>
                    <p>question is not listed here, then please contact us.</p>
                </div>
            </div>
           <div  className='resor'>                                                                   
             <div className='resorul'>
                <div className='resorli1'>
                    <div className='resorp'>
                        <p  className="resorp1" onClick={handle}>Is Shopper.com SEO-friendly?</p>
                        <div className='fontp'>
                        <p className={`resorpnone${none}`}>Shopper.com follows SEO best practices by incorporating
                             structured data, 
                            semantic alt text, and indexable content, making it highly SEO-friendly.</p>
                        </div>
                    </div>
                    <div>
                   <span className='resoric1'> <GoChevronUp /></span>
                   <span className='resoric2'><GoChevronDown /></span>

                    </div>
                   
                </div>
                <div className='line'></div>
                
                
            </div>
            
            <div className='resorul'>
                <div className='resorli1'>
                    <div className='resorp'>
                        <p className='resorp1' onClick={handletwo}>Who can benefit more from Shopper.com?</p>
                       <div className='fontp'>
                       <p className={`resorpnone${nonetwo}`}>Shopper.com follows SEO best practices by incorporating structured data,
                             semantic alt text, and indexable content, making it highly SEO-friendly.</p>
                       </div>
                    </div>
                    <div>
                   <span className='resoric1'> <GoChevronUp /></span>
                   <span className='resoric2'><GoChevronDown /></span>

                    </div>
                    
                </div>
                <div className='line'></div>
                
            </div>
            
            <div className='resorul'>
                <div className='resorli1'>
                    <div className='resorp'>
                        <p className='resorp1' onClick={handlethree}>How do I get started with Shopper?</p>
                       <div className='fontp'> <p className={`resorpnone${nonethree}`}>To get started with Shopper.com, 
                            you can refer to our Getting Started page, which contains all the necessary information and instructions.</p></div>
                    </div>
                    <div>
                   <span className='resoric1'> <GoChevronUp /></span>
                   <span className='resoric2'><GoChevronDown /></span>

                    </div>
                </div>
                <div className='line'></div>
                
                
            </div>
           
            <div className='resorul'>
                <div className='resorli1'>
                    <div className='resorp'>
                        <p className='resorp1' onClick={handleforth}>How can I contact Shopper.com's customer support?</p>
                       <div className='fontp'> <p className={`resorpnone${noneforth}`}>If you have any queries or require assistance, you can contact our customer support team via email at 
                            hello@shopper.com or through our social media channels such as Twitter (@shopperdotcom) and Instagram (@theshopperdotcom).</p></div>
                    </div>
                    <div>
                   <span className='resoric1'> <GoChevronUp /></span>
                   <span className='resoric2'><GoChevronDown /></span>

                    </div>
                </div>
                <div className='line'></div>
            </div>
            
            <div className='resorul'>
                <div className='resorli1'>
                    <div className='resorp'>
                        <p className='resorp1' onClick={handlefifth}>How do I get started with Shopper?</p>
                       <div className='fontp'> <p className={`resorpnone${nonefifth}`} >To get started with Shopper.com, 
                            you can refer to our Getting Started page, which contains all the necessary information and instructions.</p></div>
                    </div>
                    <div>
                   <span className='resoric1'> <GoChevronUp /></span>
                   <span className='resoric2'><GoChevronDown /></span>

                    </div>
                </div>
                <div className='line'></div>
            </div>
           
           </div>
        </div>
    </div>
  )
}

export default Wordplugin