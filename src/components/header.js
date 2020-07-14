import React from "react"
import "../styles/header.css"
import { Textfit } from "react-textfit"
import "../../node_modules/video-react/dist/video-react.css"
import { Player, ControlBar, PlayToggle } from "video-react"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import AnchorLink from "react-anchor-link-smooth-scroll"

const HeaderPlayer = props => {
  return (
    <div
      className={[
        "video",
        props.isRight ? "rightStyleVideo" : "leftStyleVideo",
      ].join(" ")}
    >
      <div className={props.displayVideo ? "videoLoaded" : "loadingImg"}>
        <Img alt="Ein Haus aus Lego bei Nacht" fluid={props.loadingImg} />
      </div>

      <Player
        id="TEST"
        autoPlay
        loop
        playsInline
        fluid={true}
        muted
        controls={false}
        src={props.video}
        type="video/mp4"
        onPlay={() => props.onPlay()}
      >
        <ControlBar autoHide={true} disableDefaultControls={true}>
          <PlayToggle />
        </ControlBar>
      </Player>
    </div>
  )
}

const Title = props => {
  return (
    <div className="titleContent">
      <h1>
        <Textfit mode="single">
          <span className="firstLine">{props.firstLine}</span>
        </Textfit>
        <Textfit mode="single" forceSingleModeWidth={true}>
          <span className="secondLine">{props.secondLine}</span>
        </Textfit>
      </h1>
      {props.btnTitle !== undefined ? (
        <AnchorLink offset="60" href="#entdecken">
          {props.btnTitle}
        </AnchorLink>
      ) : null}
    </div>
  )
}

class PageHeader extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayVideo: false,
    }
    this.showVideo = this.showVideo.bind(this)
  }

  showVideo() {
    this.setState({ displayVideo: true })
  }

  render() {
    if (this.props.type === "video") {
      return (
        <header className="gridHeader">
          {/* SOLL DER TITEL LINKS PLATZIERT WERDEN; WIRD DER PLAYER RECHTS PLATZIERT */}
          {this.props.isTitleLeft ? null : (
            <HeaderPlayer
              video={this.props.video}
              isRight={false}
              loadingImg={this.props.loadingImg}
              onPlay={this.showVideo}
              displayVideo={this.state.displayVideo}
            />
          )}

          <section
            className={[
              "titleSection",
              this.props.isTitleLeft ? "leftStyleTitle" : "rightStyleTitle",
            ].join(" ")}
          >
            <Title
              firstLine={this.props.firstLine}
              secondLine={this.props.secondLine}
              btnTitle={this.props.btnTitle}
            />
          </section>

          {this.props.isTitleLeft ? (
            <HeaderPlayer
              video={this.props.video}
              isRight={true}
              loadingImg={this.props.loadingImg}
              onPlay={this.showVideo}
              displayVideo={this.state.displayVideo}
            />
          ) : null}
        </header>
      )
    }
    if (this.props.type === "image") {
      return (
        <header className="gridHeader">
          {this.props.isTitleLeft ? null : (
            <Img alt="Titelbild" fluid={this.props.imgData} className="leftStyleVideo" />
          )}
          <section
            className={[
              "titleSection",
              this.props.isTitleLeft ? "leftStyleTitle" : "rightStyleTitle",
            ].join(" ")}
          >
            <Title
              firstLine={this.props.firstLine}
              secondLine={this.props.secondLine}
              btnTitle={this.props.btnTitle}
            />
          </section>
          {this.props.isTitleLeft ? (
            <Img alt="Titelbild" fluid={this.props.imgData} className="rightStyleVideo" />
          ) : null}
        </header>
      )
    }

    if (this.props.type === "fullscreen") {
      return (
        <header className="fullscreenHeader">
          <BackgroundImage
            fluid={this.props.imgData}
            className="fullscreenImg"
          />

          <h1 className="fullscreenTitle">{this.props.title}</h1>
          {this.props.layer1 !== undefined ? (
            <Img imgStyle={{ pointerEvents: 'none' }} alt="Die Kulisse" className="imgLayer layer1" fluid={this.props.layer1} />
          ) : null}
          {this.props.layer2 !== undefined ? (
            <Img alt="Der Vordergrund der Kulisse" className="imgLayer layer2" fluid={this.props.layer2} />
          ) : null}
          {this.props.leftTo !== undefined ? (
            <AniLink
              className="arrowLink"
              swipe
              top="entry"
              direction="right"
              bg="#1A2835"
              entryOffset={100}
              duration={1}
              to={this.props.leftTo}
            >
              <FaArrowAltCircleLeft className="leftArrow" />
            </AniLink>
          ) : null}
          {this.props.rightTo !== undefined ? (
            <AniLink
              className="arrowLink"
              swipe
              top="entry"
              entryOffset={100}
              duration={1}
              direction="left"
              to={this.props.rightTo}
            >
              <FaArrowAltCircleRight className="rightArrow" />
            </AniLink>
          ) : null}
          {this.props.year !== undefined ? (
            <h3 className="yearInfo">{this.props.year}</h3>
          ) : null}
        </header>
      )
    } else {
      return <header />
    }
  }
}
export default PageHeader