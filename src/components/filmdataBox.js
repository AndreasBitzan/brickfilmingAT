import React from "react"
import Img from "gatsby-image"
import "../styles/filmdataBox.css"
import Fade from "react-reveal/Fade"
import {FaArrowLeft, FaArrowUp} from "react-icons/fa"
import ReactResizeDetector from "react-resize-detector"

const Minifigure = props => {
  return (
    <div className="minifigure" onClick={() => props.onClick()}>
      <Img alt="Eine Minifigur mit geshlossenen Augen" fluid={props.imgData} />
    </div>
  )
}
class FilmInfo extends React.Component {

  constructor(props){
    super(props)

    this.state={
      arrowUp: false,
    }
    this.changeArrowDirection=this.changeArrowDirection.bind(this);
  }

  changeArrowDirection(){
    
    if(window.innerWidth < 605){
      this.setState({arrowUp: true})
    }
    if(window.innerWidth>610){
      this.setState({arrowUp: false})
    }
  }

  render(){
  if (this.props.heading !== undefined) {
    return (
      <div className="filmwrapper">
        <h3 className="filmHeading">{this.props.heading}</h3>
        {this.props.children}
      </div>
    )
  } else {
    return (
      <ReactResizeDetector
      handleWidth
      onResize={() => this.changeArrowDirection()}
      >
      <div className="filmInfo">
        <h2>Aufwecken für Informationen!</h2>
        {this.state.arrowUp ?
        <div className="clickMe">
          <p>Berühre mich</p>
          <FaArrowUp></FaArrowUp>
        </div>
        :
        <div className="clickMe">
        <p>Klick mich</p>
        <FaArrowLeft></FaArrowLeft>
      </div>
        }
      </div>
      </ReactResizeDetector>
    )
  }
}
}

class Filmbox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      awake: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if (this.state.awake) {
      this.setState({ awake: false })
    } else {
      this.setState({ awake: true })
    }
  }
  render() {
    return (
      <div className="filmBox">
        {this.state.awake ? (
          <Minifigure
            imgData={this.props.imgAwake}
            onClick={this.handleClick}
          />
        ) : (
          <Minifigure
            imgData={this.props.imgAsleep}
            onClick={this.handleClick}
          />
        )}

        {this.state.awake ? (
          <FilmInfo heading={this.props.heading}>
            <Fade duration={2000}>{this.props.children}</Fade>
          </FilmInfo>
        ) : (
          <FilmInfo />
        )}
      </div>
    )
  }
}

export default Filmbox
