
import React from 'react'

import { Button, Container }  from 'react-bootstrap';
import { BsFillHouseDoorFill } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { MdWebAsset } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



export const Home = () => {
  return (
    <>

{/* Header */}

        <header id="header" className="d-flex justify-content-center">

            <nav id="navbar" className="navbar nav-menu">
                <ul>
                    <li><a href="#hero" className="nav-link scrollto active"><BsFillHouseDoorFill/> <span>Home</span></a></li>
                    <li><a href="#about" className="nav-link scrollto"><GoPerson/> <span>Info</span></a></li>
                    <li><a href="#portfolio" className="nav-link scrollto"><MdWebAsset/><span>Portafolio</span></a></li>
                    <li><a href="#services" className="nav-link scrollto"><CiMail/> <span>Servicios</span></a></li>
                    <li><a href="#contact" className="nav-link scrollto"> <CiMail/> <span>Contacto</span></a></li>
                </ul>
            </nav>
            {/* .nav-menu */}
        </header>

{/* End Header */}

{/* Herro Section */}

    <Container id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay="100">
            <h1>JAVIERA VENEGAS CASTILLO</h1>
            <p>Soy <span className="typed" data-typed-items="Desarrollador full-stack Js, Arquitecta"></span></p>
            <div className="social-links">
                <a href="https://github.com/JaviVenegas" className="gitHub"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/javiera-venegas-castillo-37084612a/" className="linkedin"><FaLinkedinIn /></a>

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

                <div className="row">
                <div className="col-lg-4">
                    <img src= "/assets/img/profile-img.png" className="img-fluid" alt=""/> 
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content">
                    <h3>Desarrollador full-stack.</h3>
                    <p className="fst-italic"> Como arquitecta y desarrolladora full stack, busco potenciar ambas disciplinas que he desarrollado a lo largo de mi carrera. Desde la arquitectura, destaco mi capacidad para dialogar con clientes, levantar requerimientos y diseñar soluciones alineadas a sus necesidades, gestionando luego el trabajo colaborativo con los equipos técnicos para llevar los proyectos a cabo. Por otro lado, como desarrolladora, cuento con sólidos conocimientos en tecnologías actuales que me permiten aportar con soluciones innovadoras y eficientes. </p>
                    <div className="row">
                    <div className="col-lg-6">
                        <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Arquitecta</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Universidad:</strong> <span>Universidad de Chile</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Disponibilidad</span></li>
                        </ul>
                    </div>
                    </div>
                    <p> Como desarrolladora full stack, mi objetivo es proporcionar un servicio integral que abarque tanto el desarrollo del front-end como del back-end, garantizando soluciones completas y eficientes para mis clientes.</p>
                    </div>
                </div>
            </div>
        </Container>
        


{/* End About Section */}

 {/* Factos Section */}
        <Container id="facts" className="facts">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Experiencia</h2>
                    <p>Con menos de un año de experiencia en el desarrollo web y cinco años dedicados a la arquitectura, he cultivado una trayectoria profesional que fusiona la creatividad técnica y la visión estratégica. </p>
                </div>

            <div className="row">

            <div className="col-lg-3 col-md-6">
                <div className="count-box">
                <i className="bi bi-emoji-smile"></i>
                <span data-purecounter-start="0" data-purecounter-end="1" data-purecounter-duration="1" className="purecounter"></span>
                <p>Teimpo en mundo del desarrollo</p>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div className="count-box">
                <i className="bi bi-journal-richtext"></i>
                <span data-purecounter-start="0" data-purecounter-end="3" data-purecounter-duration="1" className="purecounter"></span>
                <p>Proyectos</p>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                <i className="bi bi-headset"></i>
                <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="1" className="purecounter"></span>
                <p>Horas de Soporte</p>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                <i className="bi bi-award"></i>
                <span data-purecounter-start="0" data-purecounter-end="2" data-purecounter-duration="1" className="purecounter"></span>
                <p>Awards</p>
                </div>
            </div>

            </div>

            </div>
        </Container>
        
{/* End Facts Section */}

{/*} Skills Section */}

        <Container id="skills" className="skills section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Habilidades </h2>
                <p>Como desarrolladora full stack, estoy versada en una amplia gama de herramientas que abarcan tanto el desarrollo del front-end como del back-end, así como la gestión eficiente de proyectos y la colaboración en equipos de desarrollo. Aquí hay una descripción más detallada de las herramientas que manejo:</p>

                <div className="row skills-content">

                <div className="col-lg-6">

                    <div className="progress">
                    <span className="skill">HTML <i className="val">60%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>

                    <div className="progress">
                    <span className="skill">CSS <i className="val">40%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>

                    <div className="progress">
                    <span className="skill">JavaScript <i className="val">45%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>

                </div>

                <div className="col-lg-6">

                    <div className="progress">
                    <span className="skill">PHP <i className="val">40%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>

                    <div className="progress">
                    <span className="skill">WordPress/CMS <i className="val">30%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>

                    <div className="progress">
                    <span className="skill">Photoshop <i className="val">95%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>

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
            <h2>Portafolio</h2>
            <p> A continuación, te presento algunos de los portales web que he desarrollado a lo largo de mi carrera como desarrolladora full stack.</p>
            </div>

            <div className="row">
            <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                <ul id="portfolio-flters">
                <li data-filter=".filter-web">Web</li>
                </ul>
            </div>
            </div>

            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                {/* <img src="assets/img/portfolio/portal 1 .png" className="img-fluid" alt="">  */}
                <div className="portfolio-info">
                    <h4>Web</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                    <a href="assets/img/portfolio/portal 1 .png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                {/* <img src="assets/img/portfolio/Portal 2.png" className="img-fluid" alt="">  */}
                <div className="portfolio-info">
                    <h4>Web</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                    <a href="assets/img/portfolio/Portal 2.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                    <img 
                    src="assets/img/portfolio/Portal 3.png" 
                    className="img-fluid" alt=""/> 
                <div className="portfolio-info">
                    <h4>Web</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                    <a href="assets/img/portfolio/Portal 3.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

{/* End Portafolio Section */}

 {/* Services Section */}
        <section id="services" className="services">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>Servicios</h2>
            <p>A continuación, encontrarás algunos de los servicios a los que puedes acceder para obtener más detalles. Para otros servicios, no dudes en ponerte en contacto a través del formulario que se proporciona a continuación.</p>
            </div>

            <div className="row">

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box iconbox-blue">
                <div className="icon">
                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                    </svg>
                    <i className="bx bxl-dribbble"></i>
                </div>
                <h4><a href="">Diseño personalizado</a></h4>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon-box iconbox-orange ">
                <div className="icon">
                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
                    </svg>
                    <i className="bx bx-file"></i>
                </div>
                <h4><a href="">Soporte continuo</a></h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon-box iconbox-pink">
                <div className="icon">
                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"></path>
                    </svg>
                    <i className="bx bx-tachometer"></i>
                </div>
                <h4><a href="">Analisis</a></h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                </div>
            </div>
            </div>
        </div>
        </section>
 {/* End Services Section */}   
 
 {/* Services Contacto */}
        <Container id="services" className="services">
           


            <div className="section-title">
                <h2>Contacto</h2>
            </div>

            <div className="row">
            <div className="col-lg-6">
                        <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Mail:</strong> <span>javieravenegas.arch@gmail.com</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Cell:</strong> <span>+56 9 6675 3867</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Ciudad:</strong> <span>Elidoro Yañez 1049, Providencia,Santiago, Chile</span></li>
                        </ul>
                    </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box iconbox-blue">
                <div className="icon">
                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                    </svg>
                    <i className="bx bxl-dribbble"></i>
                </div>
                <h4><a href="">Diseño personalizado</a></h4>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                </div>
            </div>

            </div>
        </Container>
 {/* End Services Contacto */}   
 

    </main>
    

{/* End main */}

{/* Footer */}

    <footer id="footer">
        <div className="container">
        <h3>JAVIERA VENEGAS CASTILLO</h3>
        <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
        
        <div className="social-links">   
            <a href="https://github.com/JaviVenegas" className="gitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/javiera-venegas-castillo-37084612a/" className="linkedin"><FaLinkedinIn /></a>
        </div>
        <div className="copyright">
            &copy; Copyright <strong><span>JVcv</span></strong>. All Rights Reserved
        </div>
        </div>
    </footer>
    

{/* End Footer */}



    </>
)
}



