import React from "react"
import Img from "gatsby-image"
import "../styles/filmdataBox.css"
import Fade from "react-reveal/Fade"
import {FaArrowLeft, FaArrowUp} from "react-icons/fa"
import ReactResizeDetector from "react-resize-detector"

const Minifigure = props => {
  return (
    <div className="minifigure" onClick={() => props.onClick()}>
      <Img  className={`bottom ${props.awake ? "awake" : ""}`}  loading="eager" fadeIn="false" alt="Eine Minifigur mit geshlossenen Augen" fluid={props.imgAsleep} />
      <Img className={`top`} loading="eager" fadeIn="false" alt="Eine Minifigur mit offenen Augen" fluid={props.imgAwake} />

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

       <Minifigure  imgAwake={this.props.imgAwake} imgAsleep={this.props.imgAsleep} awake={this.state.awake}
                    onClick={this.handleClick} />

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
