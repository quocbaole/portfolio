import React from 'react'
import ig1 from '../images/ig1.png'
import ig2 from '../images/ig2.png'
import ig3 from '../images/ig3.png'
import ig4 from '../images/ig4.png'
import ig5 from '../images/ig5.png'
import arrow from '../images/arrow.svg'

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1>_tum.5420_</h1>
        <div className="flex-block">
          <a href="https://www.instagram.com/_tum.5420_/"><img src={ig1} alt="ig1" /></a>
          <a href="https://www.instagram.com/_tum.5420_/"><img src={ig2} alt="ig2" /></a>
          <a href="https://www.instagram.com/_tum.5420_/"> <img src={ig3} alt="ig3" /></a>
          <a href="https://www.instagram.com/_tum.5420_/"><img src={ig4} alt="ig4" /></a>
          <a href="https://www.instagram.com/_tum.5420_/"> <img src={ig5} alt="ig5" /></a>
        </div>
        <div className="call-block">
          <a href="https://www.instagram.com/_tum.5420_/" >
            <div className="call">
              <p>DESCRIBE YOUR PROJECT</p>
              <h1>Call<br /> Quoc Bao</h1>
              <img src={arrow} alt="arrow" />
            </div>
          </a>
        </div>
      </div>
    </div >
  )
}

export default Contact
