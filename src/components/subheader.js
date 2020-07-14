import React from "react"
import "../styles/subheader.css"

export default props => {
  if (props.id !== undefined) {
    return (
      <h2 className="subHeader" id={props.id}>
        {props.title}
      </h2>
    )
  } else {
    return <h2 className="subHeader">{props.title}</h2>
  }
}
