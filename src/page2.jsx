import './page2.css'
import { useEffect } from 'react';



function Page2() {

    return(
        <>
            <div id='page2'>
                <h1 id='intro-heading'>Technical Skills  </h1>
                <div id='page2-container'>
                    <div id='box-container'>

                        <div className='box' >
                            <div className='box-image' ></div>
                            <h3>Graphic Design</h3>
                            <p>A creative approach to using visuals, typography and color to communicate ideas and engage viewers.
                                 </p>
                            {/* <a href="#">Explore</a> */}

                            <section className='technologies'>
                                <h5>Photoshop</h5>
                                <h5>Illustrator</h5>
                                <h5>Blender</h5>

                            </section>
                        </div>

                        <div className='box'>
                            <div className='box-image' ></div>
                            <h3>Web Development</h3>
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


                        <div className='box'>
                            <div className='box-image' >
                                <div id='role-container'><h5>Favorite role 💜</h5></div>

                            </div>
                            <h3>Music Production</h3>
                            <p>Crafting and shaping sounds into polished, expressive tracks that resonate.
                                  </p>
                            {/* <a href="#">Explore</a> */}

                            <section className='technologies'>
                                <h5>FL Studio</h5>
                                <h5>OBS Studio</h5>
                                <h5>YouTube</h5>

                            </section>
                        </div>


                        <div className='box'>
                            <div className='box-image' ></div>
                            <h3>Animation</h3>
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