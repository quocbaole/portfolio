import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styledcomponent from '../images/styledcomponent.png'
import reactmeals from '../images/reactmeals.png'
const Projects = () => {
  return (
    <div className="projects">
      <div className="container border-top">
        <h1>My Latest Projects</h1>
        <div className="carousel">


          <Carousel
            infiniteLoop={true}
            showStatus={false}
            showArrows={false}
            showThumbs={false}
            dynamicHeight={false}
          >
            <div>
              <div className="item">
                <div className="buttons">

                  {/* <button>View code</button>
                  <button>View page</button> */}
                </div>
                <img src={styledcomponent} />

              </div>
              {/* <p >Legend 1</p> */}
            </div>
            <div>
              <img src={reactmeals} />
              {/* <p >React Meals</p> */}
            </div>


          </Carousel>
        </div>
      </div>

    </div>
  )
}

export default Projects
