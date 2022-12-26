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
         <h5 data-aos="fade-down" data-aos-duration="650" >Hello I'm</h5>
         <h1 data-aos="fade-down" data-aos-duration="550" >Erifeoluwa Femi-Ladiran</h1>
         <h5 data-aos="fade-down" data-aos-once data-aos-duration="400" className="text-light">Full-stack Software Developer</h5>
         <CTA/>

         <HeaderSocial data-aos="fade-in"/>


         <div className="logo">
           <img className='logo-image' data-aos="fade-up" src={Logo} alt="me" />
         </div>

         <a href="#contact"  className="scroll__down">Scroll Down {'>>'} </a>
       </article>


    </header>
  )
}

export default Header