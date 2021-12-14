import React, { useEffect } from 'react'
import quocbao from '../images/quocbao2.JPG'
import fpt from '../images/fpt.png'
import udemy from '../images/udemy.png'
import cybersoft from '../images/cybersoft.png'
import AOS from 'aos'
const Overall = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])
  return (
    <div className="overall" >
      <div className="container">
        <div data-aos="fade" className="title">
          <h1 >Le Quoc Bao</h1>
          <h1>Front End Developer</h1>
          <h1>Japanese Interpreter </h1>
        </div>
        <div className="flex-block" >
          <div className="image" data-aos="fade">
            <img src={quocbao} alt="image" />
          </div>
          <div className="text">
            <div className="item" data-aos="fade">
              <h4>BIOGRAPHY</h4>
              <p>Student at FPT University. I'm Bao, a senior of Japanese department, and
                interested in making Webs. </p><p>
                Inspired to be a Front End developer.
              </p>
            </div>
            <div className="item" data-aos="fade">
              <h4>CONTACT</h4>
              <p>Da Lat, Vietnam</p>
              <p>quocbaole5420@gmail.com</p>
              <p>+84 889 210 454</p>
            </div>
            <div className="item" data-aos="fade">
              <h4>SERVICES</h4>
              <p>Front End Developing</p>
              <p>Japanese Interpretation</p>
            </div>
          </div>
          <div className="numbers">
            <div className="item" data-aos="fade">
              <h4>YEARS OF EXPERIENCE</h4>
              <h1> less than 1 </h1>
            </div>
            <div className="item" data-aos="fade">
              <h4>SATISFITATION CLIENTS</h4>
              <h1> 100% </h1>
            </div>
            <div className="item" data-aos="fade">
              <h4>PROJECTS DONE</h4>
              <h1> 3 </h1>
            </div>
            <div className="item" data-aos="fade">
              <h4>CLIENTS ON WORLDWIDE</h4>
              <h1> 1 </h1>
            </div>
          </div>
        </div>

        <div className="logos" data-aos="fade">
          <img src={fpt} alt="fpt-logo" />
          <img src={udemy} alt="udemy-logo" />
          <img src={cybersoft} alt="cybersoft-logo" />
        </div>
      </div>
    </div>
  )
}

export default Overall
