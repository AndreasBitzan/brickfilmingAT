import React from "react"
import "../styles/global.css"
import "../styles/menubar.scss"
import {Link} from "gatsby"


const MenuLogo = () => {
  return (
    <div className="Logo">
      <Link to="/">Brickfilm.at</Link>
    </div>
  )
}

const NavList = ({ children }) => {
  return (
    <nav className="navList">
    <div className="navList__content content-container">
      <MenuLogo />
      <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
      <label htmlFor="burger-checkbox" className="navList__burger">
        <span className="navList__burger__bar"></span>
        <span className="navList__burger__bar"></span>
        <span className="navList__burger__bar"></span>
      </label>
      <ul className="navList__content__list">
       {children}
      </ul>
    </div>
    </nav>
  )
}

export default NavList
