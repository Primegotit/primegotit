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

                        
                        <SmallBox
                            skill_name = "Web Development"  
                            skill_logo_code = {FaGlobe}
                            skill_description = "Building interactive and user-friendly websites that blend functionality with design."
                            technology1 = {<h5>HTML</h5>}
                            technology2 = {<h5>CSS</h5>}
                            technology3 = {<h5>JavaScript</h5>}
                            technology4 = {<h5>React</h5>}


                        />

                        <SmallBox
                            skill_name = "Music Production"  
                            skill_logo_code = {PiMusicNoteFill}
                            skill_description = "Crafting and shaping sounds into polished, expressive tracks that resonate."
                            technology1 = {<h5>FL Studio</h5>}
                            technology2 = {<h5>OBS Studio</h5>}
                            technology3 = {<h5>YouTube</h5>}

                        />

                       <SmallBox
                            skill_name = "Animation"  
                            skill_logo_code = {TbKeyframesFilled}
                            skill_description = "Bringing ideas to life through motion, storytelling and dynamic visuals."
                            technology1 = {<h5>Moho</h5>}
                            technology2 = {<h5>Blender</h5>}
                            technology3 = {<h5>Premiere Pro</h5>}

                        />

                        <SmallBox
                            skill_name = "Programming"  
                            skill_logo_code = {FaCode}
                            skill_description = "Creating software, applications and systems by writing code that transforms ideas into functional digital solutions."
                            technology1 = {<h5>VS Code</h5>}
                            technology2 = {<h5>Visual Studio</h5>}
                            technology3 = {<h5>PyCharm</h5>}
                            technology4 = {<h5>CLion</h5>}


                        />

                        <SmallBox
                            favorite_container_div={<div id='role-container'><h5>Favorite role 🖤</h5></div>}

                            skill_name = "3D Modelling"  
                            skill_logo_code = {TbRotate3D}
                            skill_description = "Designing detailed digital assets that combine creativity with technical precision for interactive media."
                            technology1 = {<h5>Adobe AE</h5>}
                            technology2 = {<h5>Blender</h5>}
                            technology3 = {<h5>Premiere Pro</h5>}


                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Page2;