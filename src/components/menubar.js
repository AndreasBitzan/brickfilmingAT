import React from "react"
import "../styles/global.css"
import "../styles/menubar.scss"
import {Link} from "gatsby"

const alerter = () => {
  var navList = document.getElementById("navList")

  return navList.classList.toggle("openedMenu")
}
const MenuLogo = () => {
  return (
    <div className="Logo">
      <Link to="/">Brickfilms.at</Link>
    </div>
  )
}

const NavList = ({ children }) => {
  return (
    <nav class="navList">
    <div class="navList__content content-container">
      <MenuLogo />
      <input type="checkbox" id="burger-checkbox" class="burger-checkbox" />
      <label for="burger-checkbox" class="navList__burger">
        <span class="navList__burger__bar"></span>
        <span class="navList__burger__bar"></span>
        <span class="navList__burger__bar"></span>
      </label>
      <ul class="navList__content__list">
       {children}
      </ul>
    </div>
    </nav>
  )
}

export default NavList
