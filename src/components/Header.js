import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { FaBars, FaCross, FaTimes } from "react-icons/fa"
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

  return (
    <div className="header">
      <div className="container">
        {!button && <button onClick={showNav}><FaBars className="icon" /></button>
        }
        <img src={logo} />
        <div className="place-holder" />
        <div className={navMenuClasses}>
          <button onClick={hideNav}><FaTimes className="icon" /></button>
          <div className="nav-container">
            <a>Home</a>
            <a>Education and Experience</a>
            <a>Contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
