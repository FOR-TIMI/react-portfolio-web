import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Logo from '../../assets/e.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
       <article className="container header__container">
         <h5>Hello I'm</h5>
         <h1>Femi-Ladiran Erifeoluwa</h1>
         <h5 className="text-light">Full-stack Developer</h5>
         <CTA/>

         <HeaderSocial/>


         <div className="logo">
           <img className='logo-image' src={Logo} alt="me" />
         </div>

         <a href="#contact" className="scroll__down">Scroll Down</a>
       </article>


    </header>
  )
}

export default Header