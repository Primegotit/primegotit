import { useState } from 'react'
import './page1.css'
import { TiArrowRightThick } from "react-icons/ti";
import { FaBars, FaTimes } from "react-icons/fa";   



function Page1() {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <>
            <video autoPlay muted loop id="bg-video" >
                <source src="/backvideo.mp4" type="video/mp4"/>
            </video>
            <div id='page1'>
                

                <nav>
                    <a href="#page1" id='logo-section'><img src="/primegotit logo green big 3.png" alt="Prime Logo" /><h3>Prime</h3></a>

                    <ul className={menuOpen ? 'nav-active' : ''}>
                        <li><a href="#page1" className='hover-link' onClick={() => setMenuOpen(false)}>Home</a></li>
                        <li><a href="#page4" className='hover-link' onClick={() => setMenuOpen(false)}>About me</a></li>
                        <li><a href="#page2" className='hover-link' onClick={() => setMenuOpen(false)}>Services</a></li>
                        <li><a href="#page3" className='hover-link' onClick={() => setMenuOpen(false)}>Projects</a></li>
                        <li><a href="#page5" className='hover-link' onClick={() => setMenuOpen(false)}>3D Art</a></li>
                        <li><a href="#resume_page" className='hover-link' onClick={() => setMenuOpen(false)}>Achievements</a></li>
                        <li><a href="#contact" className='hover-link' onClick={() => setMenuOpen(false)}>Contact me</a></li>
                    </ul>

                    <section>
                        <button 
                            id="more-icon-btn" 
                            onClick={() => setMenuOpen(!menuOpen)} 
                            aria-label="Toggle navigation menu"
                        >
                            {menuOpen ? <FaTimes id='more-icon'/> : <FaBars id='more-icon'/>}
                        </button>
                    </section>
                </nav>

                <div id='main'>

                        <div id='my-content'>

                            <section id='content-box'>
                                
                                <h1 id='intro-text'>Who Am I ? </h1>
                                <h2 class="gradient-text">Promise Siafwiyo</h2>
                                <p>I thrive at the intersection of diverse fields. As an <b>Interdisciplinary Specialist</b>, I don't just use technology. I bridge the gap between complex ideas and functional reality. Explore my portfolio to see how I build, break and evolve. </p>
                                <section id='skills-container'>
                                    <a href="#" className='skills'>Christian</a>
                                    <a href="#" className='skills'>Visionary</a>
                                    <a href="#" className='skills'>Learner</a>
                                    <a href="#" className='skills'>Minimalist</a>
                                    <a href="#" className='skills'>Geek</a>
                                    <a href="#" className='skills'>Creator</a>
                                    <a href="#" className='skills'>Aspiring hacker</a>
                                    <a href="#" className='skills'>Programmer</a>
                                    <a href="#" className='skills'>Monochrome lifestyle</a>
                                    <a href="#" className='skills'>Coder</a>
                                    <a href="#" className='skills'>Designer</a>

                                    
                                    
                                </section>

                                <section >
                                    {/* <a href="#" id='view-work-btn' >View my work <TiArrowRightThick style={{color: 'white', marginLeft: '10px', width: '35px', height: '35px'}}/></a> */}
                                    <a href="#" id='view-work-btn' >  
                                        <div id='about-logos-container'>
                                            <img src="/primegotit logo green big 2.png" id='text-arrows' alt="" />
                                            <div id='logos-line'></div>

                                            <img src="/primegotit logo green big 2.png" id='text-arrows' alt="" />

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