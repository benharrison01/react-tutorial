import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The skills I have...</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className='experience_frontend'>
            <h3>Frontend Development</h3>
            <div className="experience_content">
              <article className='experience_details'>
                {/* can i replace all this better as there's a lot of repeated code */}
                <BsPatchCheckFill className="experience_details-icon"/>
                <div>
                <h4>HTML</h4>
                <small className="text-light">foo</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className="experience_details-icon"/>
                <div>
                <h4>CSS</h4>
                <small className="text-light">bar</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className="experience_details-icon"/>
                <div>
                <h4>JavaScript</h4>
                <small className="text-light">foo</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className="experience_details-icon"/>
                <div>
                <h4>Java</h4>
                <small className="text-light">bar</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className="experience_details-icon"/>
                <div>
                <h4>C</h4>
                <small className="text-light">fum</small>
                </div>
              </article>
            </div>
        </div>

        <div className='experience_backend'>
          <h3>Backend Development</h3>
            <div className="experience_content">
              <article className='experience_details'>
                <BsPatchCheckFill className="experience_details-icon"/>
                <div>
                <h4>Python</h4>
                <small className="text-light">foooooooooooo foooo fooo foooooooooo foo fooooo fooo fooo foooooo fooooo foooooooo fooooo fo foo fooooo foooooo</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className="experience_details-icon"/>
                <div>
                <h4>C</h4>
                <small className="text-light">foo foooo fooo foo foo fooooo fooo fooo foooooo fooooo foooooooo fooooo fo foo fooooo foooooo</small>
                </div>
              </article>

            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience