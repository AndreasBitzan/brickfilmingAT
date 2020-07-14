import React from "react"
import "../styles/global.css"
import "../styles/menubar.css"
import {Link} from "gatsby"

const alerter = () => {
  var navList = document.getElementById("navList")

  return navList.classList.toggle("openedMenu")
}
const MenuLogo = () => {
  return (
    <div className="Logo">
      <Link to="/">Brickfilms</Link>
    </div>
  )
}

const NavList = ({ children }) => {
  return (
    <nav className="navListe">
      <MenuLogo />

      <label onClick={() => alerter()} htmlFor="toggle">
        &#9776;
      </label>

      <input type="checkbox" className="toggle" id="toggle"/>

      <ul id="navList">{children}</ul>
    </nav>
  )
}

export default NavList
