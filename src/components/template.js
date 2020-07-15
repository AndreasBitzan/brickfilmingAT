import React from "react"
import MenuBar from "../components/menubar"
import Navlink from "../components/navlink"
import DropDown from "../components/dropdownlink"
import Footer from "../components/footer"
import {Link} from "gatsby"


const Template = props => {
    let mainChildren = []
    for (let i = 0; i < props.children.length; i++) {
      if (i > 1) {
        mainChildren.push(props.children[i])
      }
    }
    return (
     
      <div id="content">
        {props.isActive !== undefined ? (
          <MenuBar>
            {props.isActive === "howto" ? (
              <Navlink name="How to" to="howtobrickfilm" isActive />
            ) : (
              <Navlink name="How to" to="howtobrickfilm" />
            )}
            {props.isActive === "filme" ? (
              <DropDown name="Filme" isActive>
                <Link to="/mordindermanege/">Mord i.d. Man.</Link>
                <Link to="/roll/">Roll</Link>
                <Link to="/endangered/">Endangered</Link>
              </DropDown>
            ) : (
              <DropDown name="Filme">
                <Link to="/mordindermanege/">Mord i.d. Man.</Link>
                <Link to="/roll/">Roll</Link>
                <Link to="/endangered/">Endangered</Link>
              </DropDown>
            )}
            {props.isActive === "workshops" ? (
              <Navlink name="Workshops" to="/workshops" isActive />
            ) : (
              <Navlink name="Workshops" to="/workshops" />
            )}
            {props.isActive === "anfragen" ? (
              <Navlink name="Anfragen" to="/kontakt" isActive />
            ) : (
              <Navlink name="Anfragen" to="/kontakt" />
            )}
            <Navlink name="home" to="/" />
          </MenuBar>
        ) : (
          <MenuBar>
            <Navlink name="How to" to="/howtobrickfilm" />
            <DropDown name="Filme">
              <Link to="/mordindermanege/">Mord i.d. Man.</Link>
              <Link to="/roll/">Roll</Link>
              <Link to="/endangered/">Endangered</Link>
            </DropDown>
            <Navlink name="Workshops" to="/workshops" />
            <Navlink name="Anfragen" to="/kontakt" />
            <Navlink name="home" to="/" isActive/>
            
          </MenuBar>
        )}
        {props.children[0]}
        {props.children[1]}
  
        <main>
        {mainChildren}
        </main>
  
        <Footer />
      </div>
    )
  }
  
  export default Template