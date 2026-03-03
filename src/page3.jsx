import './page3.css'
import { IoEnter } from 'react-icons/io5';

function MyBox(Creation){


    return(
        <>

            <div id='web-box'>
                <div id='web-image-container' style={{
                
                        background : Creation.site_image,
                        backgrounPosition: "center",
                        backgroundSize: "contain",
                        backgroundAttachment: "scroll",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        height: "380px",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "spaceBetween",
                        padding: "10px 30px",

                    }}>
                    <div id='web-image-src-text'>

                    </div>

                    <div id='web-image-tech-stack'>
                        <ul>
                            {Creation.tech1}
                            {Creation.tech2}
                            {Creation.tech3}
                            {Creation.tech4}
                            {Creation.tech5}
                            {Creation.tech6}
                            {Creation.tech7}



                        </ul>
                    </div>

            
                </div>

                <div id='web-image-text'>
                    <div id='heading-con1'>
                        <h1>{Creation.name}</h1>
                        <div id='heading-line'></div>
                        <h5>{Creation.date}</h5>
                    </div>
                    <br />

                    <h4>{Creation.slogan}</h4>
                    <p>
                        {Creation.description}
                    </p>
                    <div id='visit-container'>

                        <div id='logo-with-line-con'>
                            <img src={Creation.image_src} id='my-logo-small' />

                        </div>

                        <div id='visit-button-container'> 
                            <a href={Creation.site_url} id='visit-button'>Visit <IoEnter id='visit-button-image'></IoEnter> </a>
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

                <div id='all-page3-container'>

                    <div id='move-left-container'>

                    </div>

                    <div id='all-web-box-container'>
                        {/* <MyBox 
                                site_image = "linear-gradient(180deg,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0), black), url(kosticpic.png)"
                                name="Kostic" 
                                date="2024" 
                                slogan="Built for business, designed for ease." 
                                description="Kostic is a smart, simple POS system built to keep your business moving. 
                                From sales to stock, it gives you tools you need without the clutter. Fast checkouts, 
                                easy tracking and everything you need in one clean POS system."
                                tech1 = {<li>Visual Studio</li>}
                                tech2 = {<li>HTML</li>}
                                tech3 = {<li>PHP</li>}
                                tech4 = {<li>Javascript</li>}
                                tech5 = {<li>PHP</li>}
                                image_src = "/primegotit logo green big 2.png"                        
                                site_url = "#"
                                >
                                    
                                    
                        </MyBox>    */}

                        <MyBox 
                                site_image = "linear-gradient(180deg,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0), black), url(trackwaypic.png)"
                                name="Trackway" 
                                date="2024" 
                                slogan="Where algorithms meet the road." 
                                description="Plan, optimize and track your deliveries in seconds. 
                                With real time apps and intelligent route calculation, Trackway gets you from Point A to Point B the fastest way possible."

                                tech1 = {<li>Visual Studio</li>}
                                tech2 = {<li>HTML</li>}
                                tech3 = {<li>Javascript</li>}
                                tech4 = {<li>Vite</li>}
                                tech5 = {<li>React</li>}
                                image_src = "/trackway.png"                        
                                site_url = "#"
                                >
                                    
                                    
                        </MyBox>
                    </div>
   


                    <div id='move-right-container'>

                    </div>

                    
                </div>



            </div>
        </>
    )
}

export default Page3;