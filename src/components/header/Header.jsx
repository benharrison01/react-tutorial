import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ben.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Ben Harrison</h1>
        <h5 className="text-light">A final year Computer Science student at the University of Birmingham</h5>
        <CTA/>
        <HeaderSocials/>
        
        <div className="me">
          <img SRC={ME} alt="Photo of me"/>
        </div>
        
        <a href="#contact" className='scroll_down'>Scroll down</a>

      </div>
    </header>
  )
}

export default Header