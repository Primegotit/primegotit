import './page2.css'
import { useEffect } from 'react';

import { PiMusicNoteFill } from 'react-icons/pi';
import { SiTaichigraphics } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { TbKeyframesFilled } from 'react-icons/tb';
import { IoPeopleSharp } from 'react-icons/io5';
import { TbRotate3D } from 'react-icons/tb';


function SmallBox(props){

    return(
        <>
            <div className='box' >
                <div className='box-image' >
                    {/* <div id='role-container'><h5>Favorite role 💜</h5></div> */}
                    {props.favorite_container_div}
                </div>
                    {/* <h3>Graphic design</h3> */}
                    <h3>{props.skill_name}</h3>
                    {/* <SiTaichigraphics className='skills-logos2'/> */}
                    <props.skill_logo_code className="skills-logos2"/>
                    <p>{props.skill_description}</p>

                    {/* <a href="#">Explore</a> */}

                    <section className='technologies'>
                        {props.technology1}
                        {props.technology2}
                        {props.technology3}
                        {props.technology4}
                        {props.technology5}

                        {/* <h5>Photoshop</h5>
                        <h5>Illustrator</h5>
                        <h5>Blender</h5> */}

                    </section>
            </div>

        </>
    )

}

function Page2() {

    return(
        <>
            <div id='page2'>
                <h1 id='intro-heading'>Technical Skills  </h1>
                <div id='page2-container'>
                    <div id='box-container'>

                        <SmallBox
                            skill_name = "Graphic Design"  
                            skill_logo_code = {SiTaichigraphics}
                            skill_description = "A creative approach to using visuals, typography and color to communicate ideas and engage viewers."
                            technology1 = {<h5>Photoshop</h5>}
                            technology2 = {<h5>Illustrator</h5>}
                            technology3 = {<h5>Blender</h5>}

                        />

                        <div className='box'>
                            <div className='box-image' ></div>
                            <h3>Web Development</h3>
                            <FaGlobe className='skills-logos2'></FaGlobe>

                            <p>Building interactive and user-friendly websites that blend functionality with design.
                                 </p>
                            {/* <a href="#">Explore</a> */}

                            <section className='technologies'>
                                <h5>HTML</h5>
                                <h5>CSS</h5>
                                <h5>JavaScript</h5>
                                <h5>React</h5>

                            </section>
                        </div>

                        <SmallBox
                            favorite_container_div={<div id='role-container'><h5>Favorite role 💜</h5></div>}
                            skill_name = "Music Production"  
                            skill_logo_code = {PiMusicNoteFill}
                            skill_description = "Crafting and shaping sounds into polished, expressive tracks that resonate."
                            technology1 = {<h5>FL Studio</h5>}
                            technology2 = {<h5>OBS Studio</h5>}
                            technology3 = {<h5>YouTube</h5>}

                        />


                        <div className='box'>
                            <div className='box-image' ></div>
                            <h3>Animation</h3>
                            <TbKeyframesFilled className='skills-logos2'></TbKeyframesFilled>

                            <p>Bringing ideas to life through motion, storytelling and dynamic visuals.
                                  </p>

                            <section className='technologies'>
                                <h5>Moho</h5>
                                <h5>Blender</h5>
                                <h5>Premiere Pro</h5>

                            </section>
                        </div>

                        <div className='box'>
                            <div className='box-image' ></div>
                            <h3>Programming</h3>
                            <FaCode className='skills-logos2'></FaCode>

                            <p>Creating software, applications and systems by writing code that transforms ideas into functional digital solutions.
                                  </p>

                            <section className='technologies'>
                                <h5>Moho</h5>
                                <h5>Blender</h5>
                                <h5>Premiere Pro</h5>

                            </section>
                        </div>

                        
                        <div className='box'>
                            <div className='box-image' ></div>
                            <h3>3D Modelling</h3>
                            <TbRotate3D className='skills-logos2'></TbRotate3D>                                    

                            <p>Designing detailed digital assets that combine creativity with technical precision for interactive media.
                                 </p>

                            <section className='technologies'>
                                <h5>Adobe AE</h5>
                                <h5>Blender</h5>
                                <h5>Premiere Pro</h5>

                            </section>
                        </div>

                        



                    </div>
                </div>
            </div>
        </>
    )
}

export default Page2;