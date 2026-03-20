import './page3.css'
import { IoEnter } from 'react-icons/io5';
import { FaArrowDown } from 'react-icons/fa';

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
                        height: "350px",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "spaceBetween",
                        justifySelf :"center",
                        padding: "20px 30px",
                        margin:"0px auto",
                        
                        
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
                            <img src={Creation.image_src} id='my-logo-small' />

                    </div>
                    <br />

                    <h4>{Creation.slogan}</h4>
                    <p>
                        {Creation.description}
                    </p>
                    <div id='visit-container'>

                        <div id='logo-with-line-con'>
                        <h5>{Creation.date}</h5>

                        </div>

                        <div id='visit-button-container'> 
                            <a  href={Creation.site_url} target='_blank' id='visit-button'>Visit <IoEnter id='visit-button-image'></IoEnter> </a>
                        </div>

                    </div>
                    
                </div>

            </div>
        </>
    )
}

function VisitPortfolio(){
    return(
        <>
            <div id='view-portfolio-container'>
                <div id='all-web-logos'>

                    <img src="/primegotit logo green big 2.png" alt="" />

                    <img src="/trackway.png" alt="" />
                    <img src="/primegotit logo green big 2.png" alt="" />

                    <img src="/POS system.png" alt="" />

                    <img src="/primegotit logo green big 2.png" alt="" />
                    <img src="/logo7.png" alt="" />

                    <img src="/offiCIAL website1_logo.png" alt="" />



                </div>
                <p><b>View full web development portfolio</b></p>
                <a href="#">Ok</a>
            </div>
        </>
    )
}

function Page3(){

    return (
        <>
            <div id='page3'>
   
                <div id='page3-intro'>
                    <h3>Web Development</h3>

                </div>

                <div id='page3-instructions'>

                </div>



                <div id='all-page3-container'>
                    <div id='page3-line'></div>
       
                    <div id='all-web-box-container'>
                        <MyBox 
                                site_image = "linear-gradient(180deg,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0), black), url(kosticpic.png)"
                                name="Kostic" 
                                date="2026" 
                                slogan="Built for business, designed for ease." 
                                description="Kostic is a smart, simple POS system built to keep your business moving. 
                                From sales to stock, it gives you tools you need without the clutter. Fast checkouts, 
                                easy tracking and everything you need in one clean POS system."
                                tech1 = {<li>Visual Studio</li>}
                                tech2 = {<li>HTML</li>}
                                tech3 = {<li>PHP</li>}
                                tech4 = {<li>Javascript</li>}
                                tech5 = {<li>PHP</li>}
                                image_src = "/logo7.png"                        
                                site_url = "https://kostic.vercel.app/"
                                >
                                    
                                    
                        </MyBox>   
                        <div id='box-down-arrow'>
                            <FaArrowDown id='d-arrow'/>
                        </div>
                        <MyBox 
                                site_image = "linear-gradient(180deg,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0), black), url(trackwaypic.png)"
                                name="Trackway" 
                                date="2026" 
                                slogan="Where algorithms meet the road." 
                                description="Plan, optimize and track your deliveries in seconds. 
                                With real time apps and intelligent route calculation, Trackway gets you from Point A to Point B the fastest way possible."

                                tech1 = {<li>Visual Studio</li>}
                                tech2 = {<li>HTML</li>}
                                tech3 = {<li>Javascript</li>}
                                tech4 = {<li>Vite</li>}
                                tech5 = {<li>React</li>}
                                image_src = "/trackway.png"                        
                                site_url = "https://trackwayapp.vercel.app/"
                            >         
                                    
                        </MyBox>

                        <br />
                        <VisitPortfolio/>
                        
                        <br />
                    </div>
   
                    
                </div>



            </div>
        </>
    )
}

export default Page3;