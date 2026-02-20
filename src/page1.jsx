import { useState } from 'react'
import './page1.css'
import { TiArrowRightThick } from "react-icons/ti";


function Page1() {

    return(
        <>
            <div id='page1'>

                <nav>
                    <section id='logo-section'><img src="/primegotit logo green big 2.png" alt="" /><h3>Prime</h3></section>

                    <ul>
                        <li><a href="#" className='hover-link'>Home</a></li>
                        <li><a href="#" className='hover-link'>Services</a></li>
                        <li><a href="#" className='hover-link'>About me</a></li>
                        <li><a href="#" className='hover-link'>Contact me</a></li>

                    </ul>

                    <section><img  id='more-icon' src="/menu burger-icon.png" alt="" /></section>
                </nav>

                <div id='main'>

                        <div id='my-content'>

                            <section id='content-box'>
                                
                                <h1 id='intro-text'>Who Am I ? 💀</h1>
                                <h2>Promise Siafwiyo</h2>
                                <p>I thrive at the intersection of diverse fields. As an <b>Interdisciplinary Specialist</b>, I don't just use technology. I bridge the gap between complex ideas and functional reality. Explore my portfolio to see how I build, break and evolve. </p>
                                <section id='skills-container'>
                                    <a href="#" className='skills'>My interests</a>
                                    <a href="#" className='skills'>Music</a>
                                    <a href="#" className='skills'>Programming</a>
                                    <a href="#" className='skills'>God - Faith driven</a>
                                    <a href="#" className='skills'>Skeletons</a>
                                    <a href="#" className='skills'>Anime</a>
                                    <a href="#" className='skills'>Aspiring hacker</a>
                                    <a href="#" className='skills'>Programmer</a>
                                    {/* <a href="#" className='skills'>Anatagonist</a> */}
                                    <a href="#" className='skills'>Greyscale pictures</a>
                                    <a href="#" className='skills'>Designer</a>

                                    
                                    
                                </section>

                                <section >
                                    {/* <a href="#" id='view-work-btn' >View my work <TiArrowRightThick style={{color: 'white', marginLeft: '10px', width: '35px', height: '35px'}}/></a> */}
                                    <a href="#" id='view-work-btn' >  
                                        <div id='about-logos-container'>
                                            <img src="/primegotit grey scale logo.png" id='text-arrows' alt="" />
                                            <div id='logos-line'></div>

                                            <img src="/primegotit grey scale logo.png" id='text-arrows' alt="" />

                                        </div>
                                    </a>

                                </section>

                            </section>
                        </div>
                        

                        <div id='my-picture'>

                            <img id='me' src="promise big image 2.png"   alt="" />
                            {/* <video muted loop autoPlay playsInline></video> */}

                        </div>
                </div>



            </div>
        </>
    )

}

export default Page1;