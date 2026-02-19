import './page2.css'
import { useEffect } from 'react';



function Page2() {

    return(
        <>
            <div id='page2'>
                <h1 id='intro-heading'>My Skills  </h1>
                <div id='page2-container'>
                    <div id='box-container'>

                        <div className='box' onClick={() => windows.location.href = './page4.jsx'}>
                            <div className='box-image' ></div>
                            <h3>Graphic Design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adiasdfpisicinasdfg elit. Aut voluptatibus, 
                                ipsum distinctio dolor, ad amet quia vsdafsdero
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
                            <p>Lorem ipsum dolor sit amet, consectetur adiasdfpisicinasdfg elit. Aut voluptatibus, 
                                ipsum distinctio dolor, ad amet quia vsdafsdero
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
                            <p>Lorem ipsum dolor sit amet, consectetur adiasdfpisicinasdfg elit. Aut voluptatibus, 
                                ipsum distinctio dolor, ad amet quia vsdafsdero
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
                            <p>Lorem ipsum dolor sit amet, consectetur adiasdfpisicinasdfg elit. Aut voluptatibus, 
                                ipsum distinctio dolor, ad amet quia vsdafsdero
                                  </p>

                            <section className='technologies'>
                                <h5>Moho</h5>
                                <h5>Blender</h5>
                                <h5>Premiere Pro</h5>

                            </section>
                        </div>

                        <div className='box'>
                            <div className='box-image' ></div>
                            <h3>Video editing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adiasdfpisicinasdfg elit. Aut voluptatibus, 
                                ipsum distinctio dolor, ad amet quia vsdafsdero
                                  </p>

                            <section className='technologies'>
                                <h5>Moho</h5>
                                <h5>Blender</h5>
                                <h5>Premiere Pro</h5>

                            </section>
                        </div>

                        
                        <div className='box'>
                            <div className='box-image' ></div>
                            <h3>Computer Science</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adiasdfpisicinasdfg elit. Aut voluptatibus, 
                                ipsum distinctio dolor, ad amet quia vsdafsdero
                                 </p>

                            <section className='technologies'>
                                <h5>Moho</h5>
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