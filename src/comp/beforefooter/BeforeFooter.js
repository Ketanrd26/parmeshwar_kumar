import React from 'react'
import './BeforeFooter.scss'
import bf_img from "../../assets/about.jpg"

function BeforeFooter() {
  return (
    <>
      <div class="before-footer bg-img-cover">
        <div className='bf-left'>
          <h2>Get in touch!</h2>
      
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='Contact' />
          <textarea type='text' placeholder='Message' />
          <button className='btn'>Submit</button>

          <div className='bf-backgound-img bg-img-contain'></div>
        </div>
        <div className='bf-image'>
          <img src={bf_img} />
        </div>

      </div>
    </>
  )
}

export default BeforeFooter
