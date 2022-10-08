import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer_logo'>Thanks for visiting...</a>
  
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer_socials">
      <a href="https://www.instagram.com/bh.climbs/" target="_blank"><FiInstagram/></a>
      <a href="https://www.linkedin.com/in/ben-harrison-1b8a5b193/" target="_blank"><BsLinkedin></BsLinkedin></a>
        <a href="https://github.com/benharrison01" target="_blank"><BsGithub/></a>
   
    </div>
   </footer>

  )
}

export default Footer