import React from "react"
import Img from "gatsby-image"

const SingleSlide = ({ imgData, link }) => {
  return (
    <div className="sliderContent">
      {link !== undefined ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Img alt="Behind the Scenes Bild" fluid={imgData} />
        </a>
      ) : (
        <Img alt="Behind the Scenes Bild" fluid={imgData} />
      )}
    </div>
  )
}

export default SingleSlide
