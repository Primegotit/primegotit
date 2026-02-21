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
                            <img src="/primegotit logo green big 2.png" id='text-arrow' alt="" />
                            <div id='logo-line'></div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                             Fugit totam amet cumque accusamus unde nostrum rem
                              tempore alias, ipsam blanditiis. Lorem ipsum dolor sit amet 
                              consectetur, adipisicing elit. Vero fugiat qui deleniti quod 
                              corporis odio, explicabo, pariatur perspiciatis enim asperiores
                               aut quae repellat quibusdam rem consectetur inventore iure,

                                magni accusamus.

                        </p>
                            {/* <CgArrowsExchangeAltV  id='text-arrow'></CgArrowsExchangeAltV> */}
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Labore suscipit ducimus voluptas officiis nulla non debitis,
                             at odit laboriosam doloremque laborum iure aperiam expedita vel
                              fuga deleniti! Repellendus, iusto. Praesentium mollitia 
                              itaque nulla sit rem deleniti possimus eveniet aut, voluptatibus officiis
                               veritatis tempora modi non illum eos ad corrupti alias. 
                            perferendis qui! Ex ipsam explicabo necessitatibus expedita iusto nobis, sed odio esse! Sint, vitae tenetur!
                            
                        </p>    
                            {/* <CgArrowsExchangeAltV  id='text-arrow'></CgArrowsExchangeAltV> */}

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                             Fugit totam amet cumque accusamus unde nostrum rem
                              tempore alias, ipsam blanditiis. Lorem ipsum dolor sit amet 
                              consectetur, adipisicing elit. Vero fugiat qui deleniti quod 
                              corporis odio, explicabo, pariatur perspiciatis enim asperiores
                               aut quae repellat quibusdam rem consectetur inventore iure,

                                magni accusamus.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Sunt cum, enim sapiente sint quia harum excepturi iure 
                                blanditiis in quisquam ab voluptatum exercitationem, vel 
                                tenetur, laborum aliquid ipsam? Similique obcaecati ducimus, 
                                facere dolore quaerat reiciendis soluta numquam magnam quos 
                                dolorem delectus quidem illum, excepturi alias illo modi quasi
                                 perferendis fuga cupiditate natus eos expedita accusamus 
                                 nesciunt quis! Doloribus aspernatur praesentium voluptas 
                                 quam nemo soluta, blanditiis excepturi iusto eaque obcaecati
                                  optio mollitia. Id ab doloribus voluptatum ex dicta
                                 voluptatibus alias officiis magni, ad molestias, delectus error suscipit. Facilis quod ea veniam!

                        </p>
                    </div>
                    <div id='skills-percent-container'>
                        <div id='about-logo-container'>
                            <img src="/primegotit logo green big 2.png" id='text-arrow' alt="" />
                            <div id='logo-line'></div>
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