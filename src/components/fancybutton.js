import React from "react"
import "../styles/fancybutton.scss"

const FancyButton = (props) => {
  return (
    <a href={props.to} title={props.text} class="btn">
      <span>
        <span>
          <span>{props.text}</span>
        </span>
      </span>
    </a>
  )
}

export default FancyButton
