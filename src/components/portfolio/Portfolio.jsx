import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.png'


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
    image:img1,
    title:"[Placeholder 1]",
    github:"https://github.com",
    demo:"https://github.com"
  },
  {
    id:3,
    image:img1,
    title:"[Placeholder 2]",
    github:"https://github.com",
    demo:"https://github.com"
  },
  {
    id:4,
    image:img1,
    title:"[Placeholder 3]",
    github:"https://github.com",
    demo:"https://github.com"
  },
  {
    id:5,
    image:img1,
    title:"[Placeholder 4]",
    github:"https://github.com",
    demo:"https://github.com"
  },
  {
    id:6,
    image:img1,
    title:"[Placeholder 5]",
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