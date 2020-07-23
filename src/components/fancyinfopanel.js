import React from "react"
import "../styles/infopanel.css"
import BackgroundImage from "gatsby-background-image"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"

const Infobox = props => {
  if (props.imgData !== undefined) {
    return (

        <BackgroundImage Tag="section" fluid={props.imgData} className="bgImg">

            <div className="textTextWindow">{props.children}</div>

        </BackgroundImage>

    )
  } else {
    return <div className="textTextWindow">{props.children}</div>
  }
}

export default Infobox
