import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import logo from "../images/Quoc Bao-logos_transparent.png"
const Header = () => {
  const [button, setButton] = useState(false)
  const [navClicked, setNavClicked] = useState(false)
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else setButton(true)
  }
  const closeMobileMenu = () => { }
  useEffect(() => {
    showButton()
  }, [])
  window.addEventListener('resize', showButton)

  const showNav = () => { setNavClicked(true) }
  const hideNav = () => { setNavClicked(false) }

  let navMenuClasses
  navMenuClasses = navClicked ? 'nav-menu nav-menu-active' : 'nav-menu'
  const redirectHandler = projectLink => {

    window.open(`${projectLink}`);
  }
  return (
    <div className="header">
      <div className="container">
        <div className='flex-block'>
          {!button &&
            <button onClick={showNav} lassName='bars-button'>
              <FaBars className="icon" />
            </button>
          }
          <img src={logo} />
          {!button && <div className="place-holder" />}
          {button &&
            <div className="desktop-nav-container">
              <NavLink activeClassName='active-a' exact to='/'>Home</NavLink>
              <NavLink activeClassName='active-a' to='/portfolio'>Portfolio</NavLink>
              <NavLink activeClassName='active-a' to='/cv'>My CV</NavLink>
              <a><button onClick={() => {
                redirectHandler("https://github.com/quocbaole/portfolio")
              }}>View Code</button></a>
              {/* <a href='idnstagram.com'>InstNavLinkgram</a> */}
            </div>
          }
        </div>



        <div className='slider-block'>

          {!button &&
            <div className={navMenuClasses}>
              <button onClick={hideNav} className='close-button'><FaTimes className="icon" /></button>

              <div className="nav-container">
                <button className='nav-button' onClick={hideNav}>
                  <NavLink activeClassName='active-a' exact to='/'>Home</NavLink>
                </button>
                <button className='nav-button' onClick={hideNav}>
                  <NavLink activeClassName='active-a' to='/portfolio'>Portfolio</NavLink>
                </button>
                <button className='nav-button' onClick={hideNav}>
                  <NavLink activeClassName='active-a' to='/cv'> CV</NavLink>
                </button>
              </div>
            </div>
          }
        </div>

      </div>
    </div>
  )
}

export default Header
