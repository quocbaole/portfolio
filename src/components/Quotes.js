import React, { useEffect } from 'react'
import AOS from 'aos'
import canva from './../images/canva.png'
const Quotes = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])
  const redirectToCanva = () => {

    window.open("http://www.canva.com");
  }
  return (
    <div className="quotes">
      <div className="container border-top" data-aos="fade">
        <div className="content">
          <h1 data-aos="fade">"BDALJ ADJ KD LD AKD ADJLD LCCZC ZC OPZCOC ENQEN MKFLCJOZC ZK ZFJFZLFZF KL:FZF"</h1>
          <h3 data-aos="fade">Kelvin</h3>
          <p data-aos="fade">Front End Dev at <button onClick={redirectToCanva}>
            <img src={canva} />
          </button></p>
        </div>
      </div>

    </div>
  )
}

export default Quotes
