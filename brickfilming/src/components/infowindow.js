import React from "react"
import { Link } from "gatsby"

const InfoWindow = props => {
  return (
    <div className="fancyInfoWindow">
      <h3 className="infoHeader">{props.heading}</h3>
      {props.children}
      {props.to !== undefined ? <Link to={props.to}>Entdecken</Link> : null}
    </div>
  )
}

export default InfoWindow
