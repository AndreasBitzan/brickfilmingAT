import React from "react"
import "../styles/dropdownlink.css"

const DropDown = (props) => {
  return (
    <li className="dropdown">
        <button className={props.isActive ? "activeLink dropbtn" : "dropbtn"}>{props.name}</button>
        <div className="dropdown-content">
            {props.children}
        </div>
    </li>
  )
}

export default DropDown
