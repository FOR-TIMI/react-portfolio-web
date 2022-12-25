import React from 'react'
import './about.scss'
import { FaAward, FaTelegramPlane } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { BsClipboardCheck } from 'react-icons/bs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Brand Svg icons
import {
  faNode,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <section id='about'>
      <h5>Unlock the mysteries of me</h5>
      <h2>About me</h2>

      <div className="container about__container">
      <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#3C873A" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            
            {/* Experience  */}
            <article className="about__card">
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>4+ years Experience</small>
            </article>

            {/* Collaborators  */}
            <article className="about__card">
                <FiUsers className='about__icon'/>
                <h5>Collaborators</h5>
                <small>30+ Worldwide</small>
            </article>

            {/* Projects  */}
            <article className="about__card">
                <BsClipboardCheck className='about__icon'/>
                <h5>Projects</h5>
                <small>50+ Completed projects</small>
            </article>
          </div>

           <p>
              Hello, There. I'm Femi-Ladiran Erifeoluwa but everyone calls me Timi. <br />
              I am a Full-Stack software Developer that specializes in building creative and intuitive full stack web applications.
              <br />
            A soccer, piano, and outdoor activity enthusiast. interested in building full stack applications and working on ambitious projects and positive people. Let's build something useful together
           </p>

           <a href='#contact' className='btn btn-primary'>Let's chat <FaTelegramPlane/></a>
        </div>
      </div>
    </section>
  )
}

export default About