import './page4.css'
import { TiArrowRightThick } from "react-icons/ti";
import { SiLevelsdotfyi } from 'react-icons/si';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { CgArrowsExchangeAltV } from 'react-icons/cg';

function Page4() {

    return (
        <>
            <div id='page4'>
                <div id='about-heading'> 
                     <h3>About me 

                    </h3>
                    {/* <BsFillPersonLinesFill style={{color: 'rgb(116, 116, 116)', marginLeft: '10px', width: '35px', height: '35px'}}></BsFillPersonLinesFill> */}

                </div>

                <div id='about-me-container'>
                    <div id='about-me-box'>
                        <div id='about-logo-container'>
                            <img src="/primegotit logo green big 2.png" id='text-arrow' />
                            <div id='logo-line'></div>
                        </div>


                        <div id='me-text-container'>
                            <div id='me-text'>
                                <p><b>Hello</b>, my name is <b>Promise Siafwiyo</b> also known as <b>Prime</b> and I go by the music 
                        producer tag "<i><b>PrimeGotit</b></i>". I am a multidisciplinary digital creator, something of a jack all trades and perhaps a master of one or two.

                        </p>
                            {/* <CgArrowsExchangeAltV  id='text-arrow'></CgArrowsExchangeAltV> */}
                        <p>
                            I am currently pursuing a <b>Bachelor's Degree in Computer Science</b> at the <b>National University of Science and Technology in Zimbabwe.</b>
                            I have always had a passion for computers and technology and that interest has continued to grow over the years.
                            I'm also a junior developer and animator at <b><a href="www.rodneytech.co.zw">Rodneytech,inc</a></b>, a technology company where i contribute 
                            to both development and creative projects like animation and etc.
                            Since 2024, I have also been a private <b>computer acience tutor</b>, mentoring students in programming fundamentals, networking, algorithms and 
                            data structures, operating system fundamentals and other related modules. Through tutoring
                            this experience has strengthened my communication skills, deepened my mastery of core principles and greatly improved my confidence.

                        </p>    
                            {/* <CgArrowsExchangeAltV  id='text-arrow'></CgArrowsExchangeAltV> */}

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

                            <img src="/primegotit logo green big 2.png" id='text2-arrow' alt="" />
                        </div>
                        <h3>Experience levels   
                            {/* <TiArrowRightThick style={{color: 'rgb(116, 116, 116)', marginLeft: '10px', width: '35px', height: '35px'}} ></TiArrowRightThick>  */}
                            <SiLevelsdotfyi style={{color: 'rgb(116, 116, 116)', marginLeft: '10px', width: '35px', height: '35px'}}></SiLevelsdotfyi>
                        </h3>


                        <div className='skill-box'>
                            <div id='skills-name'>
                                <h6>Music Production</h6>
                                <h5>Since 2021</h5>
                            </div>
                            <div id='percentbox'>
                                <div id='skill-percent'></div>
                            </div>
                        </div>

                        <div className='skill-box'>
                            <div id='skills-name'>
                                <h6>Graphic Design</h6>
                                <h5>Since 2024</h5>
                            </div>
                            <div id='percentbox'>
                                <div id='skill-percent'></div>
                            </div>
                        </div>


                        <div className='skill-box'>
                            <div id='skills-name'>
                                <h6>Programming</h6>
                                <h5>Since 2023</h5>
                            </div>
                            <div id='percentbox'>
                                <div id='skill-percent'></div>
                            </div>
                        </div>

                        <div className='skill-box'>
                            <div id='skills-name'>
                                <h6>Web development</h6>
                                <h5>Since 2026</h5>
                            </div>
                            <div id='percentbox'>
                                <div id='skill-percent'></div>
                            </div>
                        </div>


                        <div className='skill-box'>
                            <div id='skills-name'>
                                <h6>Animation</h6>
                                <h5>Since 2025</h5>
                            </div>
                            <div id='percentbox'>
                                <div id='skill-percent'></div>
                            </div>
                        </div>

                        
                        <div className='skill-box'>
                            <div id='skills-name'>
                                <h6>Computer Science Tutor</h6>
                                <h5>Since 2023</h5>
                            </div>
                            <div id='percentbox'>
                                <div id='skill-percent'></div>
                            </div>
                        </div>


                        <div className='skill-box'>
                            <div id='skills-name'>
                                <h6>3D Modelling</h6>
                                <h5>Since 2026</h5>
                            </div>
                            <div id='percentbox'>
                                <div id='skill-percent'></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        
        </>
    )
}

export default Page4;