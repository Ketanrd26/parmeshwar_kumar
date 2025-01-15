import React from 'react'
import "./Blog.scss"
import { SlCalender } from "react-icons/sl";
const Blog = () => {
  return (
    <>
      <div className='parent blog-parent'>
        <div className='cont blog-cont'>
          <div className='blog-top'>
            <p className="tagline" >
              <span></span>
              Blog
            </p>
            <h2>
              Dive in to our blog
            </h2>
            <p>Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet Ipsum long established fact that a reader will be distracted by the readable.</p>
          </div>

          <div className='blog-bottom'>
            <div className='blog-box bg-img-cover'>
              <div className='full-img bg-img-cover'></div>
              <div className='date'>
                <SlCalender />
                <span> January 12, 2025</span>
              </div>
              <div className='text'>
                <h4>Yoga For better sleep and health</h4>
                <p>when an unknown printer took a galley of type galley of type</p>
              </div>
            </div>



          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
