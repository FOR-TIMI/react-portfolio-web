import React from 'react'
import './footer.css'
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import {SiCodewars} from 'react-icons/si'

const Footer = () => {
  return (
   <footer>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#reviews">Reviews</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>


    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/erifeoluwa-femi-ladiran/"><BsLinkedin/></a>
      <a href="https://www.instagram.com/for_timi/"><BsInstagram/></a>
      <a href="https://www.codewars.com/users/timicodes/"><SiCodewars/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Femi-Ladiran Erifeoluwa. All rights reserved</small>
    </div>
   </footer>
  )
}

export default Footer