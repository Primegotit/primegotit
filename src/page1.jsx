import { useState } from 'react'
import './page1.css'


function Page1() {

    return(
        <>
            <div id='page1'>

                <nav>
                    <section><img src="/primegotit logo blue big.png" alt="" /><h3>Primegotit</h3></section>

                    <ul>
                        <li><a href="#" className='hover-link'>Home</a></li>
                        <li><a href="#" className='hover-link'>Services</a></li>
                        <li><a href="#" className='hover-link'>About me</a></li>
                        <li><a href="#" className='hover-link'>Contact me</a></li>

                    </ul>

                    <section><img  id='more-icon' src="/menu burger-icon.png" alt="" /></section>
                </nav>

                <main>

                    <div>

                    </div>
                    

                    <div>
                        <img src="" alt="" />
                    </div>
                </main>

            </div>
        </>
    )

}

export default Page1;