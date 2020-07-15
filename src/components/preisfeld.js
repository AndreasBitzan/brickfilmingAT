import React from "react"
import { FaAward, FaTrophy } from "react-icons/fa"
import "../styles/preisfeld.css"
import Flip from "react-reveal/Flip"

const Preisfeld = props => {
  return (
    <div className="inlinePrice">
      <Flip bottom>
        <div className="preisfeld">
          {props.won === true ? (
            <span className="preisfeld-icon">
              <FaTrophy />
            </span>
          ) : (
            <span className="preisfeld-icon">
              <FaAward />
            </span>
          )}
          <div className="preisfeld-placing">{props.placing}</div>
          <div className="preisfeld-eventName">{props.event}</div>
        </div>
      </Flip>
    </div>
  )
}

export default Preisfeld
