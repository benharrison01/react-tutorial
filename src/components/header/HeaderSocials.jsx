import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/ben-harrison-1b8a5b193/" target="_blank"><BsLinkedin></BsLinkedin></a>
        <a href="https://github.com/benharrison01" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials