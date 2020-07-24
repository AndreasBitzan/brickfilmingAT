import React from "react"
import { Link } from "gatsby"
import "../styles/infocard.scss"
import FancyButton from "../components/fancybutton"
const InfoWindow = props => {
  return (
    <div className="infocard">
      <h3 className="infocard__heading">{props.heading}</h3>
      <p className="infocard__content">
      {props.children}
        </p>
      {props.to !== undefined ? <div className="infocard__link"> <FancyButton  to={props.to} text="Entdecken"/> </div>: null}
    </div>
  )
}

export default InfoWindow
