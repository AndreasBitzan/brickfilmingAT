import React from "react"
import "../styles/interactiveBox.css"
import { FaCameraRetro } from "react-icons/fa"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Animation1 from "../static/animation1.mp4"
import Animation2 from "../static/animation2.mp4"
import Animation3 from "../static/animation3.mp4"
import Animation4 from "../static/animation4.mp4"
import Gehen from "../static/gehen.mp4"

const InteractiveWindow = props => {
  return (
    <div className="infoWindow interactivePicGrid">
      <h2>Animation</h2>
      <p>
        Bei Stop Motion wird ein Bild geschossen, die Figur etwas bewegt und
        danach wieder ein Foto gemacht. Wenn man diese Bilder dann schnell
        hintereinander abspielt, entsteht eine Animation, ähnlich wie bei einem
        Daumenkino. Probier's doch einfach gleich mal aus:
      </p>

      <div
        className={
          props.btnIsActive ? "btnInteractive" : "btnInteractiveBlocked"
        }
        onClick={() => props.onClick(1)}
      >
        {props.caption} <br />
        <FaCameraRetro />
      </div>
      <div
        className="btnInteractive btnRestart"
        onClick={() => props.onClick(props.restartStep)}
      >
        Neu starten
      </div>
    </div>
  )
}

const InteractivePictures = props => {
  return (
    <div className="picPanel interactiveVidGrid">
      <h2>Das Foto</h2>
      <Img
        loading="eager"
        fadeIn={false}
        alt="Der aktuelle Frame"
        fluid={props.data}
      />
    </div>
  )
}
const InteractiveVideos = props => {
  return (
    <div className="picPanel interactiveVidGrid">
      <h2>Die Animation</h2>
      <video
        className="interactiveVideo"
        autoPlay
        onEnded={() => props.onEnded()}
      >
        <source src={props.videoName} type="video/mp4" />
      </video>
    </div>
  )
}

class InteractiveBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentStep: 0,
      btnIsActive: true,
    }
    this.handleClick = this.handleClick.bind(this)
    this.activateButton = this.activateButton.bind(this)
  }
  getCurrentImg() {
    let images = [
      this.props.data.bild1.childImageSharp.fluid,
      Animation1,
      this.props.data.bild2.childImageSharp.fluid,
      Animation2,
      this.props.data.bild3.childImageSharp.fluid,
      Animation3,
      this.props.data.bild4.childImageSharp.fluid,
      Animation4,
      this.props.data.bild5.childImageSharp.fluid,
      Gehen,
      this.props.data.bild6.childImageSharp.fluid,
    ]
    return images[this.state.currentStep]
  }
  handleClick(i) {
    let actStep = this.state.currentStep
    actStep = actStep + 1
    if (i === 0) {
      actStep = 0
    }

    if (this.state.currentStep === 10) {
      actStep = 0
    }
    this.setState({ currentStep: actStep })
    this.setState({ btnIsActive: false })
  }
  activateButton() {
    // alert("ENDED" + this.state.btnIsActive);
    this.setState({ btnIsActive: true })
    this.handleClick(this.state.currentStep)
  }

  render() {
    if (this.state.currentStep % 2 !== 0) {
      return (
        <div className="interactiveBox" id="3">
          <InteractiveWindow
            btnIsActive={this.state.btnIsActive}
            caption="Warte..."
            currentStep={this.state.currentStep}
            restartStep={0}
            onClick={this.handleClick}
          />
          <InteractiveVideos
            onEnded={this.activateButton}
            videoName={this.getCurrentImg()}
          />
        </div>
      )
    } else {
      return (
        <div className="interactiveBox" id="3">
          <InteractiveWindow
            btnIsActive={true}
            caption="Mach ein Foto"
            currentStep={this.state.currentStep}
            restartStep={0}
            onClick={this.handleClick}
          />
          <InteractivePictures
            step={this.state.currentStep}
            data={this.getCurrentImg()}
          />
        </div>
      )
    }
  }
}

export default ({ props }) => (
  <StaticQuery
    query={graphql`
      query {
        bild1: file(relativePath: { eq: "animation/bild1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bild2: file(relativePath: { eq: "animation/bild2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bild3: file(relativePath: { eq: "animation/bild3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bild4: file(relativePath: { eq: "animation/bild4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bild5: file(relativePath: { eq: "animation/bild5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bild6: file(relativePath: { eq: "animation/bild6.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <InteractiveBox props={props} data={data} />}
  />
)
