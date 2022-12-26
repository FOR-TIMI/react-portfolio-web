import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiCodewars} from 'react-icons/si'

import 'aos/dist/aos.css'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a data-aos="slide-down" data-aos-duration="750"  href="https://www.linkedin.com/in/erifeoluwa-femi-ladiran/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a data-aos="slide-down" data-aos-duration="550" href="https://github.com/for-timi" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a data-aos-duration="350" data-aos="slide-down"  data-aos-anchor=".header__socials"  href="https://www.codewars.com/users/timicodes" target="_blank" rel="noreferrer"><SiCodewars/></a>
    </div>
    )
}

export default HeaderSocials