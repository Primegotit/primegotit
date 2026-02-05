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

                <main>

                    <div id='my-content'>
                        <h1 id='intro-text'>Who Am I ?</h1>
                        <h2>Promise Siafwiyo</h2>
                        <p>There are a lot of words i can use to describe myself but all i will say is I am an <b>Interdisciplinary specialist.</b> Join me in my journey to becoming a better technophile, here you can view all of my projects. </p>
                        <section id='skills-container'>
                            <a href="#" className='skills'>What am I ?</a>
                            <a href="#" className='skills'>Music producer</a>
                            <a href="#" className='skills'>Animator</a>
                            <a href="#" className='skills'>Graphic designer</a>
                            <a href="#" className='skills'>Private tutor</a>
                            <a href="#" className='skills'>Video editor</a>
                            <a href="#" className='skills'>Aspiring hacker</a>
                            <a href="#" className='skills'>Programmer</a>
                            {/* <a href="#" className='skills'>Anatagonist</a> */}
                            <a href="#" className='skills'>Greyscale lover</a>
                            
                            
                        </section>

                        <section >
                            <a href="#" id='view-work-btn' >View my work <TiArrowRightThick style={{color: 'white', marginLeft: '10px', width: '35px', height: '35px'}}/></a>
                        </section>


                    </div>
                    

                    <div id='my-picture'>
                        <img id='me' src="promise big image 2.png" alt="" />
                        {/* <video muted loop autoPlay playsInline></video> */}

                    </div>
                </main>



            </div>
        </>
    )

}

export default Page1;