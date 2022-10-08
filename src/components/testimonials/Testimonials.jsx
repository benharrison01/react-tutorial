import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/ben.jpg'
import AVATAR2 from '../../assets/ben.jpg'
import AVATAR3 from '../../assets/ben.jpg'
import AVATAR4 from '../../assets/ben.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVATAR1,
    name: 'Elliot Alderson',
    review: "Foo"
  },
  {
    avatar: AVATAR2,
    name: 'Tyrell Wellick',
    review: "Bar"
  },
  {
    avatar: AVATAR3,
    name: 'Darleen Alderson',
    review: "Baz"
  },
  {
    avatar: AVATAR4,
    name: 'Whiterose',
    review: "Foo"
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>What people say about me...</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review}, index)=>{
            return (
            <SwiperSlide key={index} className='testimonial'>
              <div className="client_avatar">
                <img src={avatar} alt="Avatar"/>
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>{review}</small>
          </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials