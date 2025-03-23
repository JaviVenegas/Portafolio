


import { Button, Container }  from 'react-bootstrap';
import { BsFillHouseDoorFill } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { MdWebAsset } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5"; 
import { CiLocationOn } from "react-icons/ci";
import profileImg from '/images/profile-img.png'; // Ruta relativa si está dentro de src


import proyectos from "../components/Proyectos";


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
            <p style={{fontSize:"30px"}}>Soy <span className="typed" data-typed-items="Desarrollador full-stack Js, Arquitecta"></span></p>
            <div className="social-links">
                <a href="https://github.com/JaviVenegas" className="gitHub"><FaGithub style={{fontSize:"45px"}} /></a>
                <a href="https://www.linkedin.com/in/javiera-venegas-castillo-37084612a/" className="linkedin"><FaLinkedinIn style={{fontSize:"45px"}} /></a>

            </div>
            <div className=" descarga-cv my-5">
                <a href= "/documents/CV_Javiera_Venegas_español.pdf" download="CV_JAVIERA_VENEGAS_CASTILLO.pdf" className="btn btn-primary pt-3"> <Button > Descargar curriculum</Button> </a>     
                <a href= "/documents/CV_Javiera_Venegas_ingles.pdf" download="CV_JAVIERA_VENEGAS_CASTILLO.pdf" className="btn btn-primary pt-3"> <Button > Download resume </Button> </a>     
            </div>
            
        </div>
    </Container>
     {/* End Herro Section */}

    <main id="main">

 {/* About Section */}

        <Container id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                <h2>Info</h2>
                </div>

                <div className= "row contenedor-info">
                    <div className="col-lg-4 d-flex justify-content-center align-items-center">
                        <img src= {profileImg} style={{width:"100%", height:"100%"}}  className="img-fluid" alt=""/> 
                    </div>
                    <div>
                        <h3>Desarrollador full-stack.</h3>
                        <p className="fst-italic"> Como arquitecta y desarrolladora full stack, busco potenciar ambas disciplinas que he desarrollado a lo largo de mi carrera. Desde la arquitectura, destaco mi capacidad para dialogar con clientes, levantar requerimientos y diseñar soluciones alineadas a sus necesidades, gestionando luego el trabajo colaborativo con los equipos técnicos para llevar los proyectos a cabo. Por otro lado, como desarrolladora, cuento con sólidos conocimientos en tecnologías actuales que me permiten aportar con soluciones innovadoras y eficientes. </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Arquitecta</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Universidad:</strong> <span>Universidad de Chile</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Desafio Latam:</strong> <span> Desarrolladora Full Stack Js</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Disponibilidad</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        


{/* End About Section */}

 

{/*} Skills Section */}

        <Container id="skills" className="skills section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Tech stack </h2>
                <p>Como desarrolladora full stack, estoy versada en una amplia gama de herramientas que abarcan tanto el desarrollo del front-end como del back-end, así como la gestión eficiente de proyectos y la colaboración en equipos de desarrollo. Aquí hay una descripción más detallada de las herramientas que manejo:</p>

                <div className="row skills-content">

                <div className="col-lg-6">

                    <div className="progress">
                    <span className="skill">HTML </span>
                    </div>

                    <div className="progress">
                    <span className="skill">CSS</span>
                    </div>

                    <div className="progress">
                    <span className="skill">JavaScript</span>
                    </div>

                    <div className="progress">
                    <span className="skill">React JS</span>
                    </div>

                    <div className="progress">
                    <span className="skill">Bootstrap</span>
                    </div>

                    <div className="progress">
                    <span className="skill">Node.js</span>
                    </div>

                    <div className="progress">
                    <span className="skill">PostgreSQL</span>
                    </div>
                    <div className="progress">
                    <span className="skill">PostgreSQL</span>
                    </div>
                    <div className="progress">
                    <span className="skill">PostgreSQL</span>
                    </div>

                </div>

            </div>

            </div>
            </div>
        </Container>

 {/* End Skills Section */}


 {/* Portafolio Section */}
        <Container id="portfolio" className="portfolio section-bg">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>Portafolio</h2>
            <p> A continuación, te presento algunos de los portales web que he desarrollado a lo largo de mi carrera como desarrolladora full stack.</p>
            </div>

            <div id="proyectos" className="row">
                <Proyectos/>

                </div>

        </div>
        </Container>

{/* End Portafolio Section */}

 {/* Services Contacto */}
        <div id="contacto" className="contacto">
           
            <div className="section-title">
                <h2>Contacto</h2>
            </div>
            <div className="col-lg-4">
            <div className="info">
                <div className="email">
                    <CiMail className= "icono"size={24} />
                    <div className="correo">
                        <h4>Email:</h4>
                        <p> javieravenegas.arch@gmail.com</p>
                    </div>
              </div>

              <div className="phone">
                <IoPhonePortraitOutline className= "icono"  />
                <div className="telefono">
                    <h4>Teléfono:</h4>
                    <p>+56 9 6675 3867</p>
                </div>
              </div>
              <div className="d-flex align-items-center ">
              <CiLocationOn className= "icono" size={24}/>
            
                <div className="direccion">
                    <h4>Direccion:</h4>
                    <p>Eliodoro Yañez 1421, Providencia, Santiago</p>
                </div>
              </div>
              
            </div>
          </div>

        </div>
 {/* End Services Contacto */}   
 

    </main>
    

{/* End main */}

{/* Footer */}

    <footer id="footer">
        <div className="container">
        <h3>JAVIERA VENEGAS CASTILLO</h3>
        <p>Recién titulada del Bootcamp de Desarrollo Full Stack JavaScript, en búsqueda de mi primera oportunidad laboral como desarrolladora.</p>
        
        <div className="social-links">   
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



