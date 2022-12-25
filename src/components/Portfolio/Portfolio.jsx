import React from 'react'
import './portfolio.css'

const Portfolio = () => {

  const projects = [ 
    { 
      name : "Starship",
      deployedLink: "https://still-cliffs-68409.herokuapp.com/dashboard/app",
      image: require('../../assets/starship.png')
    },
    {
      name : "weBlog",
      deployedLink: "https://bloggersintech.herokuapp.com/login",
      image: require('../../assets/weBlog.png')
    },
    {
      name:"BERG-Maps",
      deployedLink: "https://for-timi.github.io/BERG-Maps/",
      image: require('../../assets/berg.png')
    },
    {
      name: "AutoAuto",
      deployedLink: "https://stormy-wildwood-35895.herokuapp.com/",
      image: require('../../assets/autoAuto.png')
    },
    
    {
      name:"AwesomeEditorPWA",
      deployedLink: "https://salty-everglades-36024.herokuapp.com/",
      image: require('../../assets/text-editor.png')
    },
    {
      name:"react-portfolio",
      deployedLink: "https://for-timi.github.io/react-portfolio/",
      image: require('../../assets/portfolio.png')
    }
  ]


  return (
    <section id='portfolio'>
        <h5>My most recent projects</h5>
        <h2>My Portfolio</h2>

        <div className="container portfolio__container">

         { 
          projects.map( ({name,image,deployedLink}) => (
          <article className='portfolio__item' key={name}>
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