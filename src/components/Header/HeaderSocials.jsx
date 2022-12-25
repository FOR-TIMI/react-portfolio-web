import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiCodewars} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/erifeoluwa-femi-ladiran/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/for-timi" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.codewars.com/users/timicodes" target="_blank" rel="noreferrer"><SiCodewars/></a>
    </div>
    )
}

export default HeaderSocials