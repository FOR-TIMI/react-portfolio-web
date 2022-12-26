import React from 'react'
import './portfolio.css'

const Portfolio = () => {

  const projects = [ 
    { 
      name : "Starship",
      deployedLink: "https://still-cliffs-68409.herokuapp.com/dashboard/app",
      image: require('../../assets/starship.png'),
      fadeDuration:'1000'
    },
    {
      name : "weBlog",
      deployedLink: "https://bloggersintech.herokuapp.com/login",
      image: require('../../assets/weBlog.png'),
      fadeDuration:'1100'
    },
    {
      name:"BERG-Maps",
      deployedLink: "https://for-timi.github.io/BERG-Maps/",
      image: require('../../assets/berg.png'),
      fadeDuration:'1200'
    },
    {
      name: "AutoAuto",
      deployedLink: "https://stormy-wildwood-35895.herokuapp.com/",
      image: require('../../assets/autoAuto.png'),
      fadeDuration:'1300'
    },
    
    {
      name:"AwesomeEditorPWA",
      deployedLink: "https://salty-everglades-36024.herokuapp.com/",
      image: require('../../assets/text-editor.png'),
      fadeDuration:'1400'
    },
    {
      name:"react-portfolio",
      deployedLink: "https://for-timi.github.io/react-portfolio/",
      image: require('../../assets/portfolio.png'),
      fadeDuration:'1500'
    }
  ]


  return (
    <section id='portfolio'>
        <h5 data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration='700'>My most recent projects</h5>
        <h2 data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration='900'>My Portfolio</h2>

        <div className="container portfolio__container">

         { 
          projects.map( ({name,image,deployedLink, fadeDuration}) => (
          <article className='portfolio__item' key={name} data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration={fadeDuration}>
              <div className="portfolio__item-image">
                  <img src={image} alt={`${name} app Screenshot`} />
              </div>
              <h3>{name}</h3>

              <div className="portfolio__item-cta">
                <a className='btn' 
                  href={`https://github.com/FOR-TIMI/${name}`}
                  target='_blank'
                  rel="noreferrer"
                >GitHub</a>
                <a className='btn btn-primary' 
                  href={deployedLink}
                  target='_blank'
                  rel="noreferrer"
                >Live Demo</a>
              </div>
          </article>
           ))
         }

        </div>
    </section>
  )
}

export default Portfolio