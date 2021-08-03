import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap.min.css';   

// import Carousel from 'react-bootstrap/Carousel' 

import Slide1 from '../images/slide_1_2_2000x600.jpg'
import Slide2 from '../images/slide_30_2000x600.jpg'
import Slide3 from '../images/slide21_1_2000x600.jpg'


import Main1 from '../images/div1.jpg'
import Main2 from '../images/div2.jpg'
import Navbar from './navbar'

import Main3 from '../images/div3.jpg'



import './home.css'
const Home = () => {
    return (

        <>




            <nav class="navbar nav_div_inside  navbar-expand-lg navbar-light bg-white">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <h1 class="logo"><span>B</span>lack <span>A</span>cademy</h1>
                    </a>
                    <button class="navbar-toggler toggle_button " type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon toggle_icon"></span>
                    </button>
                    <div class="collapse  navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto px-4 nav_ul">
                            <li class="nav-item nav_lis ">
                                <a class="nav-link " href="#">Home</a>
                            </li>
                            <li class="nav-item nav_lis">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item nav_lis">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    PROGRAMS
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Artifical Intelligence</a></li>
                                    <li><a class="dropdown-item" href="#">Web Development</a></li>
                                    <li><a class="dropdown-item" href="#">Cloud Computing</a></li>
                                </ul>
                            </li>
                            <li class="nav-item nav_lis">
                                <a class="nav-link" href="/signin">Sign In</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>










            <div class="main_content ">
                <img class="u_smoky bg-transparent" src="https://xpressrow.com/html/kinter/img/shape/section-notch-top.png" alt="" />

                <img class="l_smoky bg-transparent" src="https://xpressrow.com/html/kinter/img/shape/section-notch-top.png" alt="" />



            </div>


            <div class="container mt-5 mb-5 d-flex flex-column text-center">
                <h1 class="main_headings ">Welcome To <span>B</span>lack <span>A</span>cademy</h1>
                <p class="mt-3 para">Being a student comes with great rewards, but with everything that requires work, there are
                    undoubtedly challenges as well. These motivational quotes for students are here to give you that extra push when
                    you need it most.</p>



                <p class="mt-3 para"> The skills you learn and the pressure you face as a student will better prepare you to succeed
                    both in school and in life. That’s why the quotes are followed by some useful tips to help you get over the
                    challenging aspects that come with being a student.</p>

            </div>





            <div class="container d-flex mt-5 ">

                <div class="row align-items-center justify-content-around justify-content-center ">

                    <div class="col-lg-4 col-md-10 col-sm-6 py-3">
                        <div class="card mb-3 mx-auto" >
                            <div class="row g-0">
                                <div class="col-md-1 card_inside">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Web Development</h5>
                                        <p class="card-text">Web development is involved in the creation of a website. Typically it refers to
                                            the coding and programming side of web site production as opposed to the web design side. It
                                            encompasses everything from a simple page of HTML text to complex, feature-rich applications designed
                                            to be accessed from various Internet-connected devices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-10 col-sm-6 py-3">
                        <div class="card mb-3 mx-auto" >
                            <div class="row g-0">
                                <div class="col-md-1 card_inside">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Artificial Intelligence</h5>
                                        <p class="card-text">Artificial intelligence (AI) refers to the simulation of human intelligence in
                                            machines that are programmed to think like humans and mimic their actions. The term may also be
                                            applied to any machine or anyother device related to computer science that exhibits traits associated
                                            with a human mind such as learning and problem-solving.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-10 col-sm-6 py-3">
                        <div class="card mb-3 mx-auto">
                            <div class="row mx-auto g-0">
                                <div class="col-md-1 card_inside">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Cloud Computing</h5>
                                        <p class="card-text">Simply put, cloud computing is the delivery of computing services—including
                                            servers, storage, databases, networking, software, analytics, and intelligence—over the Internet (“the
                                            cloud”) to offer faster innovation, flexible resources, and economies of scale. You typically pay only
                                            for cloud services you use, and scale as your business needs change.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>







            <div class="container d-flex ">
                <div class="row d-flex ">
                    <div class="col-lg-5 col-md-9 col-sm-11">
                        <div class="first">
                            <h3>INFORMATION TECHNOLOGY</h3>
                        </div>
                        <p>Information technology (IT) involves the study and application of computers and any type of
                            telecommunications that store, retrieve, study, transmit, manipulate data and send information. Information
                            technology involves a combination of hardware and software that is used to perform the essential tasks that
                            people need and use on the everyday basis.</p>
                        <p> Most IT professionals work with an organization and technically understand what they need in order to meet
                            their needs, showing them what the current technology is that is available to perform their required tasks,
                            then their current implementing technology in the setup, or creating a whole new set up. Information
                            technology in today’s world understates the scope of the critical career field. There is much-unexpected
                            importance of Information Technology.</p>
                        <p> Since we live in the “world of information”, information technology has become a part of our daily lives. In
                            the coming decades, many corporations will create so-called “IT departments” to manage computer technologies
                            related to their business. </p>

                    </div>
                    <div class="col-lg-7 col-md-9 col-sm-11">
                        <img width="100%" height="100%"
                            src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            alt="" />
                    </div>
                </div>
            </div>
            <br />




            <div class="container d-flex ">
                <div class="row d-flex ">
                    <div class="col-lg-5 col-md-9 col-sm-11">
                        <div class="first">
                            <h3>IT in E-Commerce</h3>

                        </div>


                        <p>Information technology has the power to develop the industry and transform how business is run. Internet in business is used for information exchange, media promotion, electronic mail, mailing lists, dialogue, discussions, consulting with consumers online. There are two electronic commerce applications, namely: business-to-consumer and business-to-business commerce. Information technology has the power to develop the industry and transform how business is run. The main obstacle in the use of information technology is the enormous cost of making an online network and supplying devices. The use of information technology plays an important role in trade and national economic growth to achieve public welfare.</p>

                        <p>In today’s advanced technological environment, the field of IT is very large; those who work in the field
                            are computer hardware and software designers, computer engineers, and specialists who maintain large
                            computer networks and database systems. IT professionals maintain databases for organizations and make
                            sure that they are up to date and run smoothly. They resolve problems with the computers on their network
                            by installing and maintaining the programs that run on them, monitoring overall system health and resolving
                            problems such as computer viruses so that they do not spread quickly and cause network-wide system
                            crashes</p>
                    </div>
                    <div class="col-lg-7 col-md-9 col-sm-11">
                        <img width="100%" height="100%"
                            src="https://cdmginc.com/wp-content/uploads/2020/12/intelligent-retail-ecommerce-solutions.jpg"
                            alt="" />
                    </div>
                </div>
            </div>

            <div class="footer_class five_boxes list_items text-secondary">
                <div class="row">
                    <div class="col">
                        <ul class="list-unstyled listing ">
                            <li>
                                <h5 class="text-white">POPULAR COURSES</h5>
                            </li>

                            <li><a class="text-grey fw-bold" href="#">Web Development</a></li>
                            <li><a class="text-grey fw-bold" href="#">Artificial Intelligence</a></li>
                            <li><a class="text-grey fw-bold" href="#">Cloud Computing</a></li>

                        </ul>
                    </div>

                    <div class="col">
                        <ul class="list-unstyled listing">
                            <li>
                                <h5 class="text-white"> SALIENT FEATURES</h5>
                            </li>

                            <li><a class="text-grey fw-bold" href="#"> A.C. CLASSROOMS</a></li>
                            <li><a class="text-grey fw-bold" href="#"> SPACIOUS CLASSES</a></li>
                        </ul>
                    </div>



                    <div class="col">
                        <ul class="list-unstyled listing">
                            <li>
                                <h5 class="text-white">KINTER</h5>
                            </li>
                            <li><a class="text-grey fw-bold" href="#">Help</a></li>
                            <li><a class="text-grey fw-bold" href="#">Sitemap</a></li>
                            <li><a class="text-grey fw-bold" href="#">Legal & Privacy information</a></li>
                        </ul>

                    </div>
                    <div class="col">
                        <ul class="list-unstyled listing">
                            <li>
                                <h5 class="text-white">FOLLOW US</h5>
                            </li>
                            <li><a class="text-grey fw-bold" href="#">Facebook</a></li>
                            <li><a class="text-grey fw-bold" href="#">Twitter</a></li>
                            <li><a class="text-grey fw-bold" href="#">Instagram</a></li>
                        </ul>

                    </div>
                

                </div>

            </div>




        </>
    )

}

export default Home