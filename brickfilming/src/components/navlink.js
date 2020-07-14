import React from "react"
import { Link } from "gatsby"
import { FaHome } from "react-icons/fa"

const Navlink = props => {
  return (
    <li>
      {props.name === "home" ? (
        <Link className={props.isActive ? "activeLink" : ""} to={props.to}>
          <FaHome className="navlinkIcon"/>
        </Link>
      ) : (
        <Link className={props.isActive ? "activeLink" : ""} to={props.to}>
          {props.name}
        </Link>
      )}
    </li>
  )
}

export default Navlink
