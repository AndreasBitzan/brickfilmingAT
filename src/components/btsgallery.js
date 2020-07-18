import React from "react"
import Img from "gatsby-image"
import "../styles/btsgallery.scss"

const btsgallery = props => {
  return (
    <section className="btsgallery">

      {props.images.edges.map(image => {
        return (
          <div className="btsgallery__picture">
            <Img
              fluid={image.node.childImageSharp.fluid}
              alt="Behind the Scenes bild"
            />
          </div>
        )
      })}
    </section>
  )
}

export default btsgallery
