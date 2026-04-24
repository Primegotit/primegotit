import './page5.css';
import { FaYoutube } from 'react-icons/fa';
import { IoEnter } from 'react-icons/io5';
import { FaArrowDown } from 'react-icons/fa';

function ModelBox(Render){
    return(
        <>
            <div id='model-box'>
                <div id='model-pic'>
                    <img src={Render.image_src} id='model-img' alt="" />
                </div>
                <br />
                <div id='model-details'>
                    <span>
                        <h1 >{Render.name}</h1>
                        <h3>{Render.creation_date}</h3>

                    </span>
                    <br />
                    <section>
                        <a  href={Render.site_url} target='_blank' id='visit-button'>Visit creation video <FaYoutube style={{ color: 'red', fontSize: '1.7rem' }} /> </a>
                        
                    </section>

                </div>

            </div>

        </>
    )
}

function Page5(){

    return(
        <>
            <div id='page5'>

                <div id='page5-container'>
                    <h3>3D Modelling</h3>


                    <div id='model-content-box'>
                        
                        <ModelBox
                            image_src = "Untitledwww.png"
                            name = "Silence of solitude"
                            creation_date = "14 April 2026"
                            site_url = "https://youtube.com/shorts/bLof_CE92hw?si=8EluIHKXcBj4dTrL"

                        ></ModelBox>


                        <ModelBox
                            image_src = "skull1.png"
                            name = "Thoughts unveiled"
                            creation_date = "23 April 2026"
                            site_url = "https://youtube.com/shorts/bLof_CE92hw?si=8EluIHKXcBj4dTrL"

                        ></ModelBox>
                        

                        <ModelBox
                            image_src = "Untitle23d.png"
                            name = "Design space leak"
                            creation_date = "5 April 2026"
                            site_url = "https://youtube.com/shorts/bLof_CE92hw?si=8EluIHKXcBj4dTrL"

                        ></ModelBox>
                        

                        <ModelBox
                            image_src = "house2.png"
                            name = "Practice makes perfect"
                            creation_date = "19 March 2026"
                            site_url = "https://youtube.com/shorts/H6c_pa8Y_k8?si=EWGHjKKobxeWuPRC"

                        ></ModelBox>

                        <ModelBox
                            image_src = "keyboard.png"
                            name = "Press"
                            creation_date = "27 March 2026"
                            site_url = "https://youtube.com/shorts/bLof_CE92hw?si=8EluIHKXcBj4dTrL"

                        ></ModelBox>

                        <ModelBox
                            image_src = "skull1.png"
                            name = "Thoughts unveiled"
                            creation_date = "23 April 2026"
                            site_url = "https://youtube.com/shorts/bLof_CE92hw?si=8EluIHKXcBj4dTrL"

                        ></ModelBox>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page5;