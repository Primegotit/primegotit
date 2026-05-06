import './page4.css'
import { TiArrowRightThick } from "react-icons/ti";
import { SiLevelsdotfyi } from 'react-icons/si';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { CgArrowsExchangeAltV } from 'react-icons/cg';
import { PiMusicNoteFill } from 'react-icons/pi';
import { SiTaichigraphics } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { TbKeyframesFilled } from 'react-icons/tb';
import { IoPeopleSharp } from 'react-icons/io5';
import { TbRotate3D } from 'react-icons/tb';
function Page4() {

    return (
        <>
            <div id='page4'>
                <div id='about-heading'> 
                     <h3>About me 

                    </h3>

                </div>

                <div id='about-me-container'>
                    <div id='about-me-box'>
                        <div id='about-logo-container'>
                            <img src="/primegotit grey scale logo.png" id='text-arrow' />
                            <div id='logo-line'></div>
                        </div>


                        <div id='me-text-container'>
                            <div id='me-text'>
    <p>
        <b>Hie</b>, my name is <b>Promise Siafwiyo</b>, also known as <b>Prime</b> / <i><b>PrimeGotit</b></i>".  
        I am a multidisciplinary digital creator , a <b>3D artist</b>, <b>web developer</b>, and a <b>technology enthusiast</b> with a wide range of skills across the digital space.
        I enjoy building, designing, and experimenting with creative and technical projects, making me a true <b>digital polymath</b>.
    </p>
                        <p>
                            I am currently pursuing a <b>Bachelor's Degree in Computer Science</b> at the <b>National University of Science and Technology in Zimbabwe.</b>
                            I have always had a passion for computers and technology and that interest has continued to grow over the years.
                            I'm also a junior developer and animator at <b><a href="www.rodneytech.co.zw">Pixel Pyre Technologies</a></b> formerly known as Rodneytech,inc, a technology company where i contribute 
                            to both development and creative projects like web development, animation and etc.
                            Since 2024, I have also been a private <b>computer science tutor</b>, mentoring students in programming fundamentals, networking, algorithms and 
                            data structures, operating system fundamentals and other related modules. Through tutoring
                            this experience has strengthened my communication skills, deepened my mastery of core principles and greatly improved my confidence.

                        </p>    

                        <p>My journey into the digital field began with music production, where I first explored creativity
                            through sound design and composition. Over time, that creative curiosity expanded into programming during high school while I was 
                            studying Computer Science. As I advanced, I realized that building meaningful digital experiences requires more than writing code, it demands 
                            an understanding of design, structure, user experience and visual communication. Exploring these interconnected disciplines has shaped my approach to technology, combining 
                            logic, creativity and precision to produce well rounded digital work.<br/>I enjoy creating content across all the disciplines I work, so this website will serve as a complete showcase of my projects, 
                            carefully organized for easier navigation and viewing.
                        </p>

                        <p>One of my long term goals is to become an <b>Ethical Hacker</b>. I am committed to conitnously developing the technical knowledge, discipline and expertise required to achieve that ambition.Tnank you 
                        for taking the time to explore my work and I hope you enjoy the experience.
                         </p>

                        </div>
                            <div id='me-text-line'>
                            </div>
                        </div>
                        
                    </div>

                    <div id='skills-percent-container'>
                        <div id='about2-logo-container'>
                            <div id='logo2-line'></div>

                            <img src="/primegotit grey scale logo.png" id='text2-arrow' alt="" />
                        </div>
                        <h3>Experience levels   
                            {/* <TiArrowRightThick style={{color: 'rgb(116, 116, 116)', marginLeft: '10px', width: '35px', height: '35px'}} ></TiArrowRightThick>  */}
                            <SiLevelsdotfyi style={{color: 'rgb(116, 116, 116)', marginLeft: '10px', width: '35px', height: '35px'}}></SiLevelsdotfyi>
                        </h3>


                        <div className='skill-box'>

                            <div id='skills-name'>
                                <h6> <PiMusicNoteFill className='skills-logos' ></PiMusicNoteFill> Music Production </h6>

                                <h5>Since 2021</h5>
                            </div>

                            <div id='percentbox'>
                                <div id='skill-percent'></div>
                            </div>
                            
                        </div>

                        <div className='skill-box'>
                            <div id='skills-name'>
                                <h6>
                             <SiTaichigraphics className='skills-logos'></SiTaichigraphics>

                                    Graphic Design</h6>
                                <h5>Since 2024</h5>
                            </div>
                            <div id='percentbox'>
                                <div id='skill-percent'></div>
                            </div>
                        </div>


                        <div className='skill-box'>
                            <div id='skills-name'>
                                <h6>
                                    <FaCode className='skills-logos'></FaCode>
                                    Programming</h6>
                                <h5>Since 2023</h5>
                            </div>
                            <div id='percentbox'>
                                <div id='skill-percent'></div>
                            </div>
                        </div>

                        <div className='skill-box'>
                            <div id='skills-name'>
                                <h6>
                                    <FaGlobe className='skills-logos'></FaGlobe>
                                    
                                    Web development</h6>
                                <h5>Since 2026</h5>
                            </div>
                            <div id='percentbox'>
                                <div id='skill-percent'></div>
                            </div>
                        </div>


                        <div className='skill-box'>
                            <div id='skills-name'>
                                <h6>
                                    <TbKeyframesFilled className='skills-logos'></TbKeyframesFilled>
                                    Animation</h6>
                                <h5>Since 2025</h5>
                            </div>
                            <div id='percentbox'>
                                <div id='skill-percent'></div>
                            </div>
                        </div>

                        
                        <div className='skill-box'>
                            <div id='skills-name'>
                                <h6>
                                    <IoPeopleSharp className='skills-logos'></IoPeopleSharp>
                                    Computer Science Tutor</h6>
                                <h5>Since 2023</h5>
                            </div>
                            <div id='percentbox'>
                                <div id='skill-percent'></div>
                            </div>
                        </div>


                        <div className='skill-box'>
                            <div id='skills-name'>
                                <h6>
                                    <TbRotate3D className='skills-logos'></TbRotate3D>                                    
                                    3D Modelling</h6>
                                <h5>Since 2026</h5>
                            </div>
                            <div id='percentbox'>
                                <div id='skill-percent'></div>
                            </div>
                        </div>

                        <div className='skill-box'>
                            <div id='skills-name' style={{display:'flex', justifyContent:'center', marginBottom:'10px', marginTop:'0', paddingTop:'0' }}>
                                <h3 style={{display:'flex', flexDirection:'row'}}>

                                    Languages
                                    <TbRotate3D className='skills-logos'></TbRotate3D>                                    
                                    </h3>

                            </div>

                            <div style={{display:"flex" , flexDirection: "row" , justifyContent:"space-between", flexWrap:'wrap', gap:'10px'}} id='language-div'>
                                <p>English</p>
                                <p>Shona</p>
                                <p>Ndebele</p>
                                <p>Russian</p>
                                {/* <p>Tonga</p> */}
                            </div>
                          
                        </div>

                    </div>
                </div>
            </div>

        
        </>
    )
}

export default Page4;