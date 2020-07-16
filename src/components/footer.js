import React from "react"
import "../styles/footer.css"
import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa"
import { Link } from "gatsby"

const AddressField = () => {
  return (
    <address>
      <p>Andreas Bitzan, Alexander Leitner</p>
      <p>Klagenfurt, Austria</p>
      <a href="https://www.youtube.com/user/Cocotatam/" className="iconLink">
        <FaYoutube />
      </a>
      <a
        href="https://www.facebook.com/AM-Studios-150224171674530/"
        className="iconLink"
      >
        <FaFacebook />
      </a>
      <a href="https://www.flickr.com/photos/aumstudios/" className="iconLink">
        <FaTwitter />
      </a>
      <br/>
      <Link to="/kontakt#impressum">Impressum</Link>
    </address>
  )
}

const Footer = props => {
  return (
    <footer className="footer">
      <article>
        <h3>A&M Studios Brickfilms und Legostudio01</h3>
        <AddressField />
      </article>
      {props.siteName !== undefined ? <p>Seite: {props.siteName}</p> : null}
    </footer>
  )
}

export default Footer
