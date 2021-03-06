import React from "react"
import "../styles/infopanel.css"
import Img from "gatsby-image"
import { Link } from "gatsby"
import config from "react-reveal/globals"
import Bounce from "react-reveal/Bounce"
import Fade from "react-reveal/Fade"

config({ ssrFadeout: true })

class Infobox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayFirst: true,
    }
    this.changetoSecond = this.changetoSecond.bind(this)
    this.changetoFirst = this.changetoFirst.bind(this)
    this.togglePicture = this.togglePicture.bind(this)
  }

  changetoSecond() {
    this.setState({ displayFirst: false })
  }
  changetoFirst() {
    this.setState({ displayFirst: true })
  }
  togglePicture() {
    if (this.state.displayFirst) {
      this.setState({ displayFirst: false })
    } else {
      this.setState({ displayFirst: true })
    }
  }

  render() {
    if (this.props.type === "picture") {
      return (
        <div className="infoPanel">
          {this.props.isTitleLeft ? null : (
            <Img
              alt="Brickfilmen"
              style={{ zIndex: "2" }}
              className="alignLeft"
              fluid={this.props.imgData}
            />
          )}
          {this.props.isTitleLeft ? (
            <Bounce left delay={1}>
              <div
                className={[
                  "infoBox",
                  this.props.isTitleLeft ? "alignLeft" : "alignRight",
                ].join(" ")}
              >
                <h3 className="infoHeader">{this.props.heading}</h3>
                <p>{this.props.children}</p>
                {this.props.to !== undefined ? (
                  <Link to={this.props.to}>Entdecken</Link>
                ) : null}
              </div>
            </Bounce>
          ) : (
            <Bounce right delay={1}>
              <div
                className={[
                  "infoBox",
                  this.props.isTitleLeft ? "alignLeft" : "alignRight",
                ].join(" ")}
              >
                <h3 className="infoHeader">{this.props.heading}</h3>
                <p>{this.props.children}</p>
                {this.props.to !== undefined ? (
                  <Link to={this.props.to}>Entdecken</Link>
                ) : null}
              </div>
            </Bounce>
          )}
          {this.props.isTitleLeft ? (
            <Img
              alt="Brickfilmen"
              fluid={this.props.imgData}
              className="alignRight"
            />
          ) : null}
        </div>
      )
    } else if (this.props.type === "video") {
      return (
        <div className="infoPanel">
          {this.props.isTitleLeft ? null : (
            <div className="videoFrame">
              {" "}
              <iframe
                title="Brickfilm"
                src={this.props.videoLink}
                frameborder="0"
              />{" "}
            </div>
          )}

          <div
            className={[
              "infoBox",
              this.props.isTitleLeft ? "alignLeft" : "alignRight",
            ].join(" ")}
          >
            <h3 className="infoHeader">{this.props.heading}</h3>
            <p>{this.props.children}</p>
            {this.props.to !== undefined ? (
              <Link to={this.props.to}>Entdecken</Link>
            ) : null}
          </div>

          {this.props.isTitleLeft ? (
            <div className="videoFrame">
              {" "}
              <iframe
                title="Brickfilm"
                src={this.props.videoLink}
                frameborder="0"
              />{" "}
            </div>
          ) : null}
        </div>
      )
    } else if (this.props.type === "moving") {
      if (!this.props.isTitleLeft) {
        return (
          <div className="infoPanel">
            {this.state.displayFirst ? (
              <div
                className="alignLeft"
                onClick={() => this.togglePicture()}
                onMouseOver={() => this.changetoSecond()}
                onMouseLeave={() => this.changetoFirst()}
                onTouchStart={() => this.togglePicture()}
                
              >
                <Img
                  alt="Brickfilmen"
                  style={{ zIndex: "2" }}
                  fluid={this.props.imgData}
                />
              </div>
            ) : (
              <div
                className="alignLeft"
                onClick={() => this.togglePicture()}
                onMouseOver={() => this.changetoSecond()}
                onMouseLeave={() => this.changetoFirst()}
                onTouchStart={() => this.togglePicture()}
                
              >
                <Fade>
                  <Img
                    alt="Brickfilmen"
                    style={{ zIndex: "2" }}
                    fluid={this.props.imgData2}
                  />
                </Fade>
              </div>
            )}
            <Bounce right delay={1}>
              <div className="infoBox alignRight">
                <h3 className="infoHeader">{this.props.heading}</h3>
                <p>{this.props.children}</p>
                {this.props.to !== undefined ? (
                  <Link to={this.props.to}>Entdecken</Link>
                ) : null}
              </div>
            </Bounce>
          </div>
        )
      } else {
        return (
          <div className="infoPanel">
            <Bounce left delay={1}>
              <div className="infoBox alignLeft">
                <h3 className="infoHeader">{this.props.heading}</h3>
                <p>{this.props.children}</p>
                {this.props.to !== undefined ? (
                  <Link to={this.props.to}>Entdecken</Link>
                ) : null}
              </div>
            </Bounce>

            {this.state.displayFirst ? (
              <div
                className="alignRight"
                onClick={() => this.togglePicture()}
                onMouseOver={() => this.changetoSecond()}
                onMouseLeave={() => this.changetoFirst()}
                onTouchStart={() => this.togglePicture()}
                
              >
                <Img
                  alt="Brickfilmen"
                  style={{ zIndex: "2" }}
                  fluid={this.props.imgData}
                />
              </div>
            ) : (
              <div
                className="alignRight"
                onClick={() => this.togglePicture()}
                onMouseOver={() => this.changetoSecond()}
                onMouseLeave={() => this.changetoFirst()}
                onTouchStart={() => this.togglePicture()}
                
              >
                <Fade>
                  <Img
                    alt="Brickfilmen"
                    style={{ zIndex: "2" }}
                    fluid={this.props.imgData2}
                  />
                </Fade>
              </div>
            )}
          </div>
        )
      }
    } else {
      return <div className="infoPanel" />
    }
  }
}

export default Infobox
