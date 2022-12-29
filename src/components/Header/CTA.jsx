import React from 'react'
import CV from '../../assets/CV.pdf'


const CTA = () => {
  return (
        <div className="cta">
            <a data-aos="fade-right" href={CV} download className='btn'>Resume</a>
            <a data-aos="fade-left" href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
    )
}

export default CTA
