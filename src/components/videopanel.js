import React from "react"
import "../styles/videopanel.css"
import { FaYoutube } from "react-icons/fa"

const Videobox = props => {
  return (
    <div className="videoPanel">
      <div className="videoPanel-frame">
        <iframe
          title="Brickfilm"
          className="videoPanel-brickfilm"
          src={props.videoLink}
        />
      </div>

      <div className="videoPanel-infos ">
        <h3 className="infoHeader">{props.heading}</h3>
        <p>{props.children}</p>
        {props.to !== undefined ? (
          <a className="btn btnYoutube" href={props.to}>
            <span>
              <span>
                <span>
                  <FaYoutube /> Youtube
                </span>
              </span>
            </span>
          </a>
        ) : null}
      </div>
    </div>
  )
}
export default Videobox
