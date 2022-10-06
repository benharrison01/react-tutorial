import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.png'
import img2 from '../../assets/portfolio2.png'
import img3 from '../../assets/portfolio3.png'
import img4 from '../../assets/portfolio4.jfif'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.png'


const data = [
  {
    id:1,
    image:img1,
    title:"Maze Solver",
    github:"https://github.com",
    demo:"https://github.com"
  },
  {
    id:2,
    image:img2,
    title:"Maze Solver",
    github:"https://github.com",
    demo:"https://github.com"
  },
  {
    id:3,
    image:img3,
    title:"Maze Solver",
    github:"https://github.com",
    demo:"https://github.com"
  },
  {
    id:4,
    image:img4,
    title:"Maze Solver",
    github:"https://github.com",
    demo:"https://github.com"
  },
  {
    id:5,
    image:img5,
    title:"Maze Solver",
    github:"https://github.com",
    demo:"https://github.com"
  },
  {
    id:6,
    image:img6,
    title:"Maze Solver",
    github:"https://github.com",
    demo:"https://github.com"
  }
]


const Portfolio = () => {
  return (
    <section id='porfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container"> {
        data.map(({id,image,title,github,demo}) => {
          return (
            <article key={id} className='portfolio_item'>

              <div className="portfolio_item-image">
                <img src={image} alt={title}/>
              </div>

              <h3>{title}</h3>

              <div className='portfolio_item-cta'>
                <a href={github} className='btn' target="_blank">Github</a>
                <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
              </div>

        </article>
          )
        })
      }   
      </div>
    </section>
  )
}

export default Portfolio