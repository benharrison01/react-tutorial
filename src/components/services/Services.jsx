import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer...</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Service 1</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>hello world</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>hello world</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>hello world</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>hello world</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Service 2</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>hello world</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>hello world</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>hello world</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>hello world</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Service 3</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>hello world</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>hello world</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>hello world</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>hello world</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services