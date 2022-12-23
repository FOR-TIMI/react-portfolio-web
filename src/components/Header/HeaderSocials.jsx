import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiCodewars} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/erifeoluwa-femi-ladiran/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/for-timi" target="_blank"><FaGithub/></a>
        <a href="https://www.codewars.com/users/timicodes" target="_blank"><SiCodewars/></a>
    </div>
    )
}

export default HeaderSocials