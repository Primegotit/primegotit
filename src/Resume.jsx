import './Resume.css';
function Achieve_box(Details){
    return(
        <>
            <div id='achievement-box'>
                <a  href={Details.image} rel='noopener noreffer' target='_blank'><img src={Details.path} alt="" /></a>
                {/* <div>
                    <h3>{Details.course_provider}</h3>
                    <h4>{Details.course_name}</h4>
                </div>
                 */}
            </div>
        </>
    )
}
function Resume(){
    return(
        <>
            <video autoPlay muted loop id="bg-video" >
                <source src="/backvideo.mp4" type="video/mp4"/>
            </video>
            <div id='resume_page'>
                <div id='resume-page-container'>
                    <h3>Achievements</h3>
                    <div id="resume-marquee">
                        <div id='resume-page-content-box' >

                            <Achieve_box path="/courses/aws1.png" image="/courses/aws1.png" ></Achieve_box>
                            <Achieve_box path="/courses/coursera1.png" image="/courses/coursera1.png" ></Achieve_box>
                            <Achieve_box path="/courses/aws2.png" image="/courses/aws2.png"></Achieve_box>
                            <Achieve_box path="/courses/coursera2.png" image="/courses/coursera2.png"></Achieve_box>
                            <Achieve_box path="/courses/cisco1.png" image="/courses/cisco1.png"></Achieve_box>

                            <Achieve_box path="/courses/aws1.png" image="/courses/aws1.png" ></Achieve_box>
                            <Achieve_box path="/courses/coursera1.png" image="/courses/coursera1.png" ></Achieve_box>
                            <Achieve_box path="/courses/aws2.png" image="/courses/aws2.png"></Achieve_box>
                            <Achieve_box path="/courses/coursera2.png" image="/courses/coursera2.png"></Achieve_box>
                            <Achieve_box path="/courses/cisco1.png" image="/courses/cisco1.png"></Achieve_box>

                        </div>
                        <div id='horizontal-line'>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Resume;