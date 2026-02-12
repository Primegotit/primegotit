import './page2.css'

function Page2() {

    return(
        <>
            <div id='page2'>
                <h1 id='intro-heading'>My skills</h1>
                <div id='page2-container'>
                    <div id='box-container'>

                        <div className='box'>
                            <div className='box-image' ></div>
                            <h3>Graphic Design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adiasdfpisicinasdfg elit. Aut voluptatibus, 
                                ipsum distinctio dolor, ad amet quia vsdafsdero
                                 laborum animi veniam, iste accusantium totam voluptatem </p>
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
                                 laborum animi veniam, iste accusantium totam voluptatem </p>
                            {/* <a href="#">Explore</a> */}

                            <section className='technologies'>
                                <h5>HTML</h5>
                                <h5>CSS</h5>
                                <h5>JavaScript</h5>
                                <h5>React</h5>
                                <h5>MySQL</h5>

                            </section>
                        </div>


                        <div className='box'>
                            <div className='box-image' ></div>
                            <h3>Music Production</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adiasdfpisicinasdfg elit. Aut voluptatibus, 
                                ipsum distinctio dolor, ad amet quia vsdafsdero
                                 laborum animi veniam, iste accusantium totam voluptatem </p>
                            {/* <a href="#">Explore</a> */}

                            <section className='technologies'>
                                <h5>FL Studio</h5>
                                <h5>OBS Studio</h5>
                                <h5>YouTube</h5>

                            </section>
                        </div>

                        



                    </div>
                </div>
            </div>
        </>
    )
}

export default Page2;