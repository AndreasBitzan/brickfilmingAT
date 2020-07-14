import React from "react"
import "../styles/infopanel.css"
import BackgroundImage from "gatsby-background-image"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"

const Infobox = props => {
  if (props.imgData !== undefined) {
    return (
      <ParallaxProvider>
        <BackgroundImage Tag="section" fluid={props.imgData} className="bgImg">
          <Parallax y={[-30, 20]} tagOuter="figure">
            <div className="textTextWindow">{props.children}</div>
          </Parallax>
        </BackgroundImage>
      </ParallaxProvider>
    )
  } else {
    return <div className="textTextWindow">{props.children}</div>
  }
}

export default Infobox
