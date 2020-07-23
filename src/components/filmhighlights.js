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
        <Link to="/endangered" ><Img fluid={this.props.data.imageOne.childImageSharp.fluid} /></Link>
        <Link to="/endangered" ><Img fluid={this.props.data.imageOne.childImageSharp.fluid} /></Link>
        <Link to="/endangered" ><Img fluid={this.props.data.imageOne.childImageSharp.fluid} /></Link>
        <Link to="/endangered" ><Img fluid={this.props.data.imageOne.childImageSharp.fluid} /></Link>
        <Link to="/endangered" ><Img fluid={this.props.data.imageOne.childImageSharp.fluid} /></Link>
        <Link to="/endangered" ><Img fluid={this.props.data.imageOne.childImageSharp.fluid} /></Link>
    </section>
    )  
}
}

export default ({ props }) => (
  <StaticQuery
    query={graphql`
      query {
        imageOne: file(relativePath: { eq: "highlights/Frame1.jpg" }) {
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
