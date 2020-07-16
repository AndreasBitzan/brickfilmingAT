import React from "react"
import CountUp from "react-countup"



const FilmMetaData = props => {
  let priceChildren = []
  for (let i = 0; i < props.children.length; i++) {
    if (i > 0) {
      priceChildren.push(props.children[i])
    }
  }

  return (
    <div className="filmInfoGrid">
      <div className="filmFrames">
        <CountUp end={props.frames} duration={2} />
        Fotos
      </div>
      <div className="filmDuration">
        <CountUp
          start={2}
          end={props.duration}
          duration={4}
          decimals={2}
          decimal={":"}
        />
        min
      </div>
      <div className="filmYear">
        <strong>Jahr: </strong> {props.year}
      </div>
      <div className="filmProduction">
        <strong>Produktion:</strong> {props.production} Monate
      </div>
      <div className="filmCrew">
        <strong>Mitwirkende: </strong> {props.children[0]}
      </div>
      <div className="filmPrices">{priceChildren}</div>
    </div>
  )
}

export default FilmMetaData
