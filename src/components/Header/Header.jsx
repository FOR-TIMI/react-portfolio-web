import React from 'react'
import './header.css'
import CTA from './CTA'
import Logo from '../../assets/e.png'
import HeaderSocial from './HeaderSocials'

import 'aos/dist/aos.css'

const Header = () => {


  return (
    <header>
       <article className="container header__container">
         <h5 data-aos="fade-up" data-aos-anchor=".header__container" data-aos-duration="1200" >Hello I'm</h5>
         <h1 data-aos="fade-up" data-aos-anchor=".header__container" data-aos-duration="1000" >Erifeoluwa Femi-Ladiran</h1>
         <h5 data-aos="fade-up" data-aos-anchor=".header__container" data-aos-duration="900" className="text-light">Full-stack Software Developer</h5>
         <CTA/>

         <HeaderSocial />


         <div className="logo">
           <img className='logo-image' data-aos="slide-up" data-aos-anchor=".logo"  data-aos-duration="1400" src={Logo} alt="me" />
         </div>
        
        
         <a href="#contact"  className="scroll__down">Scroll Down {'>>'} </a>
       </article>


    </header>
  )
}

export default Header