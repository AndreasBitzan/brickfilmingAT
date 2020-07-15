import React from "react"
import Img from "gatsby-image"
import "../styles/contentBox.css"

const ContentBox = props => {
  return (
    <div className="content-box">
      <Img alt="Brickfilm Bild" className="content-box-img" fluid={props.imgData} />
      <h3 className="content-box-title">{props.title}</h3>
      <p className="content-box-text">{props.children}</p>
    </div>
  )
}

export default ContentBox
