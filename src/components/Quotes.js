import React from 'react'
import canva from './../images/canva.png'
const Quotes = () => {
  const redirectToCanva = () => {

    window.open("http://www.canva.com");
  }
  return (
    <div className="quotes">
      <div className="container border-top">
        <div className="content">
          <h1 >"BDALJ ADJ KD LD AKD ADJLD LCCZC ZC OPZCOC ENQEN MKFLCJOZC ZK ZFJFZLFZF KL:FZF"</h1>
          <h3>Kelvin</h3>
          <p>Front End Dev at <button onClick={redirectToCanva}>
            <img src={canva} />
          </button></p>
        </div>
      </div>

    </div>
  )
}

export default Quotes
