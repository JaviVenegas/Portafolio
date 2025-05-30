


import { Button, Container, Row, Col }  from 'react-bootstrap';
import { BsFillHouseDoorFill } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { MdWebAsset } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5"; 
import profileImg from '/images/profile-img.png'; // Ruta relativa si está dentro de src
import htmlImg from '/images/html.png';
import cssImg from '/images/css.png';
import jsImg from '/images/JavaScript.png';
import reactImg from '/images/react.png';
import bootstrapImg from '/images/bootstrap.png';
import nodeImg from '/images/Node.png';
import postgresImg from '/images/PostgreSQL.png';




import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Proyectos from '../components/Proyectos';




export const Home = () => {
    useEffect(() => {
        const element = document.querySelector('.typed');
        const items = element.getAttribute('data-typed-items').split(','); // Dividir el texto por coma
        const options = {
          strings: items,
          typeSpeed: 50,
          backSpeed: 25,
          backDelay: 1000,
          loop: true,
        };
    
        const typed = new Typed('.typed', options);
    
        return () => {
          typed.destroy();
        };
      }, []);


  return (
    <>

{/* Header */}

        <header id="header" className="d-flex justify-content-center">

            <nav id="navbar" className="navbar nav-menu">
                <ul>
                    <li><a href="#hero" className="nav-link scrollto active"><BsFillHouseDoorFill/> <span>Home</span></a></li>
                    <li><a href="#about" className="nav-link scrollto"><GoPerson/> <span>Info</span></a></li>
                    <li><a href="#portfolio" className="nav-link scrollto"><MdWebAsset/><span>Portafolio</span></a></li>
                    <li><a href="#contacto" className="nav-link scrollto"><CiMail/> <span>Contacto</span></a></li>
                </ul>
            </nav>
            {/* .nav-menu */}
        </header>

{/* End Header */}

{/* Herro Section */}

    <Container id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay="100"> 
            <h1>JAVIERA VENEGAS CASTILLO</h1>
            <p style={{fontSize:"30px"}}> I am <span className="typed" data-typed-items="Full Stack Developer, Architect, Proyect Manager"></span></p>
            <div className="social-links">
                <a href="https://github.com/JaviVenegas" className="gitHub"><FaGithub style={{fontSize:"45px"}} /></a>
                <a href="https://www.linkedin.com/in/javiera-venegas-castillo-37084612a/" className="linkedin"><FaLinkedinIn style={{fontSize:"45px"}} /></a>

            </div>
            <div className=" descarga-cv">
                <a href= "/documents/CV_Javiera_Venegas_español.pdf" download="CV_JAVIERA_VENEGAS_CASTILLO.pdf" className=" btn-primary py-5"> <Button > Descargar curriculum</Button> </a>     
                <a href= "/documents/CV_Javiera_Venegas_ingles.pdf" download="CV_JAVIERA_VENEGAS_CASTILLO.pdf" className="btn-primary pt-3"> <Button > Download resume </Button> </a>     
            </div>
            
        </div>
    </Container>
     {/* End Herro Section */}

    <main id="main">

 {/* About Section */}

        <div id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                <h2>Info</h2>
                </div>

                <Row className= "contenedor-info">
                    <Col sm={12} lg={6}  className= "box">
                        <img src= {profileImg} style={{width:"100%"}} alt=""/> 
                    </Col>
                    <Col className= "box" >
                        <h3> Full Stack Developer/Architect</h3>
                        <p className="fst-italic"> Architect transitioning into Full Stack Development, with six years of experience leading multidisciplinary teams, engaging with users, designing housing solutions, and coaching. Recognized for strong communication skills, customer service, innovation, and a goal-oriented mindset. Recently completed a Full Stack Development bootcamp in JavaScript and am eager to apply my problem-solving abilities and design-thinking approach to the IT industry. Looking for opportunities to grow and contribute as a developer.  </p>
                        <div>
                            <div >
                                <h3> Education</h3>
                                <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Full Stack Developer JavaScript:</strong> <span> Academia Desafio Latam - 2025</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong> Architect:</strong> <span>Universidad de Chile - 2020</span></li>
                                </ul>
                                <h3> Courses</h3>
                                <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong> The Project Management Course:</strong> <span> udemy</span></li>
                                </ul>
                                <h3> Langueges   </h3>
                                <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>English:</strong> <span> fluent (11 years)</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong> Spanish:</strong> <span>Native</span></li>
                                </ul>
                                <h3> Interests / Hobbies </h3>
                                <ul>
                                <li ><i className="bi bi-chevron-right"></i>🌱 Love learning about plants and gardening</li>
                                <li><i className="bi bi-chevron-right"></i>💪 Enjoy going to the gym every morning</li>
                                <li><i className="bi bi-chevron-right"></i>🎶 I like discovering fun activities in the city, such as concerts, restaurants, and expos</li>
                                
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        


{/* End About Section */}

 

{/*} Skills Section */}

        <Container id="skills" className="skills section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Tech stack </h2>
                <p>As a full-stack developer, I am well-versed in a wide range of tools covering both front-end and back-end development, as well as efficient project management and collaboration within development teams. Here is a more detailed description of the tools I use:</p>

                <div className=" imagenes-skills">
                    <div className="progress">
                        <img   src = {htmlImg} style={{width:"50px", height:"50px"}} />
                        <span className="skill">HTML </span>
                    </div>

                    <div className="progress">
                        <img  src = {cssImg} style={{width:"50px", height:"50px"}} />
                        <span className="skill">CSS</span>
                    </div>

                    <div className="progress">
                        <img  src = {jsImg} style={{width:"50px", height:"50px"}} />
                        <span className="skill">JavaScript</span>
                    </div>

                    <div className="progress">
                        <img  src = {reactImg} style={{width:"50px", height:"50px"}} />
                        <span className="skill">React JS</span>
                    </div>

                    <div className="progress">
                        <img   src = {bootstrapImg} style={{width:"50px", height:"50px"}} />
                        <span className="skill">Bootstrap</span>
                    </div>

                    <div className="progress">
                        <img  src = {nodeImg} style={{width:"70px", height:"50px"}} />
                        <span className="skill">Node.js</span>
                    </div>

                    <div className="progress">
                        <img  src = {postgresImg} style={{width:"50px", height:"50px"}} />
                        <span className="skill">PostgreSQL</span>
                    </div>
                </div>

            </div>
            </div>
        </Container>

 {/* End Skills Section */}


 {/* Portafolio Section */}
        <section id="portfolio" className="portfolio section-bg">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>Portfolio</h2>
            <p> Here are some of the web portals developed throughout my career as a full-stack developer.</p>
            </div>

            <div id="proyectos" className=" proyectos row">
                <Proyectos/>

                </div>

        </div>
        </section>

{/* End Portafolio Section */}

 {/* Services Contacto */}
        <section id="contacto" className="contacto">
           
            <div className="section-title">
                <h2>Contact</h2>
            </div>
            <Row className = "justify-content-center">
                <Col xs = {12} md={6} lg ={4}>    
                    <div className="info">
                        <div className="email d-flex align-items-center mb-3">
                            <p className= "icono " size={20} > <CiMail /> </p> 
                            <div className="correo">
                                <h4>E-mail:</h4>
                                <p> javieravenegas.arch@gmail.com</p>
                            </div>
                        </div>
                        <div className="phone d-flex align-items-center">
                            <p className= "icono " size={20} > <IoPhonePortraitOutline /> </p>
                            <div className="telefono">
                                <h4>Cell:</h4>
                                <p>+56 9 6675 3867</p>
                            </div>
                        </div>
                    </div>

                    
                </Col>
            </Row>
        </section>
 {/* End Services Contacto */}   
 

    </main>
    

{/* End main */}

{/* Footer */}

    <footer id="footer">
        <div className="container">
        <h3>JAVIERA VENEGAS CASTILLO</h3>
        <p>Recently completed a Full Stack Development bootcamp in JavaScript and am eager to apply my problem-solving abilities and design-thinking approach to the IT industry. Looking for opportunities to grow and contribute as a developer.</p>
        
        <div className="social-links">   
            <a href="https://github.com/JaviVenegas" className="gitHub p-2"><CiMail /> </a>
            <a href="https://github.com/JaviVenegas" className="gitHub p-2"><IoPhonePortraitOutline /></a>
            <a href="https://github.com/JaviVenegas" className="gitHub p-2"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/javiera-venegas-castillo-37084612a/" className="linkedin"><FaLinkedinIn /></a>
        </div>
        <div className="copyright">
            &copy; Copyright <strong><span>Javiera Venegas Castillo</span></strong>. All Rights Reserved
        </div>
        </div>
    </footer>
    

{/* End Footer */}



    </>
)
}
