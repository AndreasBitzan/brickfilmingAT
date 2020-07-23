import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import "../styles/filmhighlights.scss"

class FilmHighlights extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
    <section className="filmhighlights">
        <Link to="/highwaytoheaven" ><Img fluid={this.props.data.highwaytoheaven.childImageSharp.fluid} /></Link>
        <Link to="/mordindermanege" ><Img fluid={this.props.data.mordindermanege.childImageSharp.fluid} /></Link>
        <Link to="/roll" ><Img fluid={this.props.data.roll.childImageSharp.fluid} /></Link>
        <Link to="/endangered" ><Img fluid={this.props.data.endangered.childImageSharp.fluid} /></Link>
        <Link to="/endangered" ><Img fluid={this.props.data.timeforsale.childImageSharp.fluid} /></Link>
        <Link to="/endangered" ><Img fluid={this.props.data.knighttimes.childImageSharp.fluid} /></Link>
    </section>
    )  
}
}

export default ({ props }) => (
  <StaticQuery
    query={graphql`
      query {
        highwaytoheaven: file(relativePath: { eq: "highlights/WebsitePosterHighwayToHeaven.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mordindermanege: file(relativePath: { eq: "highlights/WebsitePosterMordInDerManege.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          roll: file(relativePath: { eq: "highlights/WebsitePosterRoll.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          endangered: file(relativePath: { eq: "highlights/WebsitePosterEndangered.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          timeforsale: file(relativePath: { eq: "highlights/WebsitePosterTimeForSale.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          knighttimes: file(relativePath: { eq: "highlights/WebsitePosterKnightTimes.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    `}
    render={data => <FilmHighlights props={props} data={data} />}
  />
)
