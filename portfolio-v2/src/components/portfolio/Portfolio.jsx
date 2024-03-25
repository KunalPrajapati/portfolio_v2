import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/projects/grocery-app.png'
import IMG2 from '../../assets/projects/NewsApp.png'
import IMG3 from '../../assets/projects/youtube.png'
import IMG4 from '../../assets/projects/ecomzy.png'
import IMG5 from '../../assets/projects/gifGen.png'
import IMG6 from '../../assets/projects/Weather.png'


const data=[
  {
    id:1,
    image: IMG2,
    title: 'NewsApp using React Native',
    github: 'https://github.com/KunalPrajapati/NewsApp/tree/main/Minor%20Project',
    demo : 'https://github.com/KunalPrajapati/NewsApp/tree/main/Minor%20Project'
    
  },
  {
    id:2,
    image: IMG1,
    title: 'Grocery App using React Native',
    github: 'https://github.com/KunalPrajapati/grocery-app',
    demo : 'https://github.com/KunalPrajapati/grocery-app'
    
  },

  {
    id:3,
    image: IMG3,
    title: 'Youtube Clone',
    github: 'https://github.com/KunalPrajapati/youtube',
    demo : 'https://github.com/KunalPrajapati/youtube'
    
  },

  {
    id:4,
    image: IMG4,
    title: 'E-commerce Web App',
    github: 'https://github.com/KunalPrajapati/shoppingCart',
    demo : 'https://react-shopping-cartapp.netlify.app/'
    
  },

  {
    id:5,
    image: IMG5,
    title: 'Chrome Extension',
    github: 'https://github.com/KunalPrajapati/GifGenerator-',
    demo : 'https://github.com/KunalPrajapati/GifGenerator-'
    
  },

  {
    id:6,
    image: IMG6,
    title: 'Weather App',
    github: 'https://github.com/KunalPrajapati/weatherApp',
    demo : 'https://kunals-weatherapp.netlify.app/'
    
  }

]

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>


      <div className='container portfolio__container'>
      {
        data.map(({id, image, title , github, demo})=>{
          return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} className='rounded '></img>
            </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
              <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
           </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default portfolio