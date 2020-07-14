import React from "react"
import Slider from "react-slick"
import "../styles/slidebox.css"
import ReactResizeDetector from "react-resize-detector"

class SimpleSlider extends React.Component {
  settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
  }

  constructor(props) {
    super(props)

    this.state = {
      countSlides: 3,
    }
    this.updateSlidesCount = this.updateSlidesCount.bind(this)
  }

  updateSlidesCount() {
    if (window.innerWidth < 500 && this.state.countSlides === 3) {
      this.setState({ countSlides: 2 })
    } else if (window.innerWidth > 500 && this.state.countSlides === 2) {
      this.setState({ countSlides: 3 })
    }
  }

  render() {
    return (
      <div className="sliderBox">
        <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={() => this.updateSlidesCount()}
        />
        <Slider {...this.settings} slidesToShow={this.state.countSlides}>
          {this.props.children}
        </Slider>
      </div>
    )
  }
}

export default SimpleSlider
