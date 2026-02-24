import './page3.css'
import { IoEnter } from 'react-icons/io5';

function MyBox(){
    return(
        <>

            <div id='web-box'>

                <div id='web-image-container'>
                    <div id='web-image-src-text'>

                    </div>

                    <div id='web-image-tech-stack'>
                        <ul>
                            <li>Visual Studio</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Vite</li>
                            <li>React</li>

                        </ul>
                    </div>

            
                </div>

                <div id='web-image-text'>
                    <div id='heading-con1'>
                        <h1>Kostic</h1>
                        <div id='heading-line'></div>
                        <h5>2024</h5>
                    </div>
                    <br />

                    <h4>Built for business, designed for ease.</h4>
                    <p>
                        Kostic is a smart, simple POS system built to keep your business moving. 
                        From sales to stock, it gives you tools you need without the clutter. Fast checkouts, easy tracking and everything you need in one clean POS system.
                    </p>
                    <div id='visit-container'>

                        <div id='logo-with-line-con'>
                            <img src="/primegotit logo green big 2.png" id='my-logo-small' />

                        </div>

                        <div id='visit-button-container'> 
                            <a href="#" id='visit-button'>Visit <IoEnter id='visit-button-image'></IoEnter> </a>
                        </div>

                    </div>
                    
                </div>

            </div>
        </>
    )
}

function Page3(){

    return (
        <>
            <div id='page3'>
                <h3>Web Development</h3>

                <div>
                    
                </div>
                <MyBox></MyBox>   



            </div>
        </>
    )
}

export default Page3;