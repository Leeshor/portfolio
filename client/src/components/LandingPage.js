import React, {useEffect, useRef} from 'react'
import downArrow from '../svg/downArrow.svg'
import Aos from "aos";
import "aos/dist/aos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import ContactSection from './ContactSection'
import "./LandingPage.css"


function LandingPage() {

   
    const projectSection = useRef(null);
   
    useEffect(() => {
        Aos.init({duration:2000});
       }, []) 

    const goToProjectSection = () => window.scrollTo({top: projectSection.current.offsetTop, behavior: "smooth"})

    const date = new Date().getFullYear();

       return (
        <div>
        <div className="hero_section">
        <div className="hero_container">
        <img className="hero_image"  src="../img/avatar.jpg" alt="Avatar"/>
        <h1 className="hero_header">I'm Lee</h1>
        <h2 class="hero_message">A full stack web developer</h2>
        <img className="hero_arrow" src={downArrow} alt="" onClick={goToProjectSection}/>
        </div>
        </div>
        <div className="about_me_section">
        <div className="about_me_content">
        <h2>Hi I'm <span className="about_me_content_name">Lee</span>, a web developer based in the Devon area of the UK.</h2>
        <h3>I have had a strong interest in programming since the start of 2019 and self-
        taught in front-end and back-end web development. I have been mainly focusing on the Javascript route, and also gained skills in Php and WordPress.  
        I am looking for a full-time position and would like to grow into a company to work as part of a team, which I would find highly satisfying. 
        If you would like to get in touch then please scroll to the bottom of the page and contact me in your preferred way. I would like to hear from you. 
        </h3>
        </div>
        <div className="about_me_content_footer">
        <h2 data-aos="fade-up">Competent in the following frameworks and libraries.</h2>
        <div data-aos="fade-up" className="about_me_content_footer_icons">
        <FontAwesomeIcon icon={['fab', 'sass']} className="about_me_footer_icon" size="3x" color="#d57ca9"/>
        <FontAwesomeIcon icon={['fab', 'js']} className="about_me_footer_icon" size="3x" color="#efd81d"/>
        <FontAwesomeIcon icon={['fab', 'react']} className="about_me_footer_icon" size="3x" color="#65c7e1"/>
        <FontAwesomeIcon icon={['fab', 'node-js']} className="about_me_footer_icon" size="3x" color="#639860"/>
        <FontAwesomeIcon icon={['fab', 'php']} className="about_me_footer_icon" size="3x" color="#7377ad"/>
        <FontAwesomeIcon icon={['fab', 'wordpress']} className="about_me_footer_icon" size="3x" color="#1d8ac7"/>
        </div>
        </div>
        </div>
        <div className="project_section" ref={projectSection}>
        <h1>My Projects</h1>
        <div className="project_section_projects project_section_column_reverse">
        <Link to="/chat-app">
        <img data-aos="zoom-in" className="project_section_thumbnail" src="../img/chat_room.jpg" alt="Chat" />
        </Link>
        <h3>I built a chat-app project with Socket io in Node JS to implement a web socket connection, with customer service in mind.
        Create a room with an ID and then share the ID with people to join the same live chat room.
        Happy chatting!</h3>
        </div>
        <div className="project_section_projects">
        <h3 className="project_section_text_align">Everyone is prone to a slice of cake, right? I created an eCommerce react project with Firebase to implement user authentication.
        Add and remove products from your cart as you please with the subtotal being automatically re-calculated, 
        then checkout with your account.</h3>
         <Link to="/ecommerce">
        <img data-aos="zoom-in" className="project_section_thumbnail project_section_thumbnail_latter" src="../img/ecommerce_thumbnail.jpg" alt="Ecommerce" />
        </Link>
        </div>
        </div>
        <ContactSection/>
         <div className="footer_section">
        <h5>Copyright<span> &copy;</span>
         {date} <span className="footer_section_copyright"> by Lee Shortland</span></h5>
        </div>
        </div>
    )
}

export default LandingPage
