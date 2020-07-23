import React from "react"
import MenuBar from "../components/menubar"
import Navlink from "../components/navlink"
import DropDown from "../components/dropdownlink"
import Footer from "../components/footer"
import Img from "gatsby-image"
import { Link, graphql, useStaticQuery } from "gatsby"

const Template = props => {
  console.log(props)
  let mainChildren = []
  for (let i = 0; i < props.children.length; i++) {
    if (i > 1) {
      mainChildren.push(props.children[i])
    }
  }

  const data = useStaticQuery(graphql`
    query {
      allThumbnails: allFile(
        filter: { relativePath: { regex: "/thumbnails/" } }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const GetFluidByName = imgName => {
    return data.allThumbnails.edges.find(currentImg => currentImg.node.name == imgName)
  }
  return (
    <div id="content">

        <MenuBar>
          <Navlink
            name="How to"
            to="/howtobrickfilm"
            isActive={props.isActive === "howto" ? true : false}
          />

          <DropDown
            name="Filme"
            isActive={props.isActive === "filme" ? true : false}
          >
            <Link to="/mordindermanege/"><Img fluid={GetFluidByName("mordindermanege").node.childImageSharp.fluid} />
            <div className="thumbnail__overlay"><p>Mord i. d. Manege</p></div>
            </Link>
            <Link to="/roll/"><Img fluid={GetFluidByName("roll").node.childImageSharp.fluid} />
            <div className="thumbnail__overlay"><p>Roll</p></div></Link>
            <Link to="/endangered/"><Img fluid={GetFluidByName("endangered").node.childImageSharp.fluid} />
            <div className="thumbnail__overlay"><p>Endangered</p></div></Link>
            <Link to="/endangered/"><Img fluid={GetFluidByName("timeforsale").node.childImageSharp.fluid} /></Link>
          </DropDown>

          <Navlink
            name="Workshops"
            to="/workshops"
            isActive={props.isActive === "workshops" ? true : false}
          />

          <Navlink
            name="Anfragen"
            to="/kontakt"
            isActive={props.isActive === "anfragen" ? true : false}
          />

          <Navlink name="home" to="/" isActive={props.isActive==undefined ? true : false} />
        </MenuBar>
    
      {props.children[0]}
      {props.children[1]}

      <main>{mainChildren}</main>

      <Footer />
    </div>
  )
}

export default Template
