import React from "react"
import "../styles/dropdownlink.scss"
import ReactResizeDetector from "react-resize-detector"

class DropDown extends React.Component{
  constructor(props){
    super(props)
    this.resizeSubMenu = this.resizeSubMenu.bind(this)
  }

  resizeSubMenu(){


      let subMenu=document.querySelector(".dropdown-content");
      let mainMenu=document.querySelector(".navList__content__list");
      if(window.innerWidth>570){
      subMenu.style.width=`${mainMenu.clientWidth}px`;
      }

  }
  render(){
  return (
    <li className="dropdown">
        <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={() => this.resizeSubMenu()}
        />
        <button className={this.props.isActive ? "activeLink dropbtn" : "dropbtn"}>{this.props.name}</button>
        <div className="dropdown-content">
            {this.props.children}
        </div>
    </li>
  )
  }
}

export default DropDown
