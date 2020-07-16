import React from "react"
import { Link, graphql } from "gatsby"
import Template from "../components/template"
import Header from "../components/header"
import SubHeader from "../components/subheader"
import SEO from "../components/seo"
import InfoPanel from "../components/infopanel"
import SliderBox from "../components/slidebox"
import SingleSlide from "../components/singleslide"
import FancyInfoPanel from "../components/fancyinfopanel"
import InfoWindow from "../components/infowindow"
import Fade from "react-reveal/Fade"
import Highlightreel from "../static/BestOfWeb.mp4"
const IndexPage = props => {
  return (
    <Template>
      <SEO title="Home" />
      <Header
        type="video"
        video="/BestOfWeb.mp4"
        isTitleLeft={true}
        firstLine="A&M Studios"
        secondLine="Brickfilms"
        btnTitle="Entdecken"
        loadingImg={props.data.preview.childImageSharp.fluid}
      />
      <SubHeader title="Was ist ein Brickfilm??" id="entdecken" />
      <InfoPanel
        type="picture"
        isTitleLeft={false}
        heading="Ein Geduldsspiel"
        imgData={props.data.imageOne.childImageSharp.fluid}
        to="/howtobrickfilm"
      >
        Brickfilme sind Filme, die mit der Stop Motion Technik gedreht werden.
        Der Name leitet sich vom englischen "Brick", also Baustein ab. Aus
        vielen Bildern entsteht eine flüssige Animation. Für eine Sekunde Film
        sind dabei ca. 15 Bilder notwendig! Erfahre hier mehr darüber, wie ein
        Film entsteht!
      </InfoPanel>

      <SubHeader title="Unsere Filme" id="242" />
      <SliderBox>
        <SingleSlide
          imgData={props.data.slider1.childImageSharp.fluid}
          link="https://www.youtube.com/watch?v=HNeL8xOAewY"
        />
        <SingleSlide
          imgData={props.data.slider2.childImageSharp.fluid}
          link="https://www.youtube.com/watch?v=4jvMesae8Dk"
        />
        <SingleSlide
          imgData={props.data.slider3.childImageSharp.fluid}
          link="https://www.youtube.com/watch?v=-mEviW2DZyU"
        />
        <SingleSlide
          imgData={props.data.slider4.childImageSharp.fluid}
          link="https://www.youtube.com/watch?v=bqDodFboKxs"
        />
        <SingleSlide
          imgData={props.data.slider5.childImageSharp.fluid}
          link="https://www.youtube.com/watch?v=-Vuz0xVFeuQ"
        />
      </SliderBox>
      <SubHeader title="Workshops / Kontakt" />

      <FancyInfoPanel imgData={props.data.bgImg.childImageSharp.fluid}>
        <Fade bottom delay={200}>
          <InfoWindow heading="Wir machen Workshops!" to="workshops">
            <p>
              Neben unseren Filmen halten wir auch gelengentlich Workshops ab.
              Dabei bringen wir Kindern und Jugendlichen das Brickfilmen bei. Ob
              normale Gehanimationen oder Fortgeschrittene Bewegungen, für jeden
              ist etwas dabei. Erfahre hier mehr wie wo und vor allem wann.
            </p>
          </InfoWindow>
        </Fade>
        <Fade bottom delay={200}>
          <InfoWindow
            heading="Kontaktiere uns!"
            text="This is a test"
            to="kontakt"
          >
            <p>
              Wir stehen gerne für jegliche Art von Fragen zur Verfügung. Sei es
              eine Frage zum Brickfilmen, eine Workshops Anfrage oder eine
              Kontaktaufnahme bezüglich einer Zusammenarbeit! Einfach hier
              klicken.
            </p>
          </InfoWindow>
        </Fade>
      </FancyInfoPanel>
    </Template>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "production1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    preview: file(relativePath: { eq: "preview.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slider1: file(relativePath: { eq: "thumbnails/endangered.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slider2: file(relativePath: { eq: "thumbnails/roll.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slider3: file(relativePath: { eq: "thumbnails/mordindermanege.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slider4: file(relativePath: { eq: "thumbnails/timeforsale.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slider5: file(relativePath: { eq: "thumbnails/riptide.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slider6: file(relativePath: { eq: "thumbnails/knighttimes.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    bgImg: file(relativePath: { eq: "bgImg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
