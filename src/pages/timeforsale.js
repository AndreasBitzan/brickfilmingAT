import React from "react"
import Header from "../components/header"
import SubHeader from "../components/subheader"
import Template from "../components/template"
import { graphql } from "gatsby"
import FilmdataBox from "../components/filmdataBox"
import Preisfeld from "../components/preisfeld"
import Videobox from "../components/videopanel"
import FilmMetaData from "../components/filmmetadata"
import SEO from "../components/seo"
import BtsGallery from "../components/btsgallery"

const Content = props => {

  return (
    <Template isActive="filme">
      <SEO title="Time for $ale - Steinerei 2014" />

      <Header
        type="fullscreen"
        imgData={props.data.timeforsale.childImageSharp.fluid}
        layer1={props.data.layer1.childImageSharp.fluid}
        title="Time for $ale"
        // leftTo="/roll"
        year="< 2014 >"
      />
      <SubHeader title="Informationen" />

      <FilmdataBox
        heading="Time for $ale"
        imgAwake={props.data.awake.childImageSharp.fluid}
        imgAsleep={props.data.asleep.childImageSharp.fluid}
      >
        <FilmMetaData frames="3872" duration="6" year="2014" production="4">
          Alexander Leitner, Andreas Bitzan, Thomas Leitner, Michael Bitzan, Jan Münter, Klaus
          Schankin, Michael Heuel, Dagmar Bittner
          <Preisfeld
            won={true}
            placing="1. Platz Publikumswertung"
            event="Steinerei 2014"
          />
          <Preisfeld
            won={true}
            placing="1. Platz Jurywertung"
            event="Steinerei 2014"
          />
          <Preisfeld
            won={false}
            placing="2. Platz Brickfilmerwertung"
            event="Steinerei 2014"
          />
        </FilmMetaData>
      </FilmdataBox>

      <SubHeader title="Der Film" />
      <Videobox
        heading="Der Inhalt"
        videoLink={"https://www.youtube.com/embed/bqDodFboKxs?controls=1"}
        to="https://youtu.be/bqDodFboKxs"
      >
        Nach einem langen Arbeitstag stößt ein Mann zufällig auf ein Geschäft,
        in dem einfache Kartons mit der Aufschrift "Zeit" verkauft werden. Er
        hält das eigentlich für einen Fake, kauft aber trotzdem einen, um seine
        Freundin zu überraschen. Als diese dann die Box öffnet, ist sie
        begeistert, dass er ihr tatsächlich ein wenig Zeit geschenkt hat. Nun
        bleibt also die Frage offen, ob diese mysteriösen Boxen doch tatsächlich
        Zeit enthalten?
      </Videobox>

      <SubHeader title="Behind the Scenes" />
      <BtsGallery images={props.data.allImages} />
    </Template>
  )
}

export default Content

export const pageQuery = graphql`
  query {
    allImages: allFile(
      filter: { relativePath: { regex: "/timeforsale/bts/" } }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    timeforsale: file(relativePath: { eq: "timeforsale/timeforsale.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    layer1: file(relativePath: { eq: "timeforsale/layer1.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    awake: file(relativePath: { eq: "endangered/jhonnyAwake.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    asleep: file(relativePath: { eq: "endangered/jhonnyAsleep.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
