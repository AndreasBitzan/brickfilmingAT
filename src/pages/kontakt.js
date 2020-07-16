import React from "react";
import Template from "../components/template";
import Header from "../components/header";
import SubHeader from "../components/subheader";
import FancyInfoPanel from "../components/fancyinfopanel";
import InfoWindow from "../components/infowindow";
import { graphql } from "gatsby";
import Fade from "react-reveal/Fade";
import {FaReact, FaHtml5, FaCss3Alt, FaHome, FaEnvelope, FaUserAlt} from "react-icons/fa";
import SEO from "../components/seo";

const Content =(props) => {
    return(
        <Template isActive="anfragen">
            <SEO title="Kontakt" />

            <Header type="image" 
            imgData={props.data.teamfoto.childImageSharp.fluid}
            isTitleLeft={false} firstLine="Kontakt"/>
            <SubHeader title="Kontaktinformationen"/>
            <FancyInfoPanel>
            <div className="contactWindow">
              <form className="inputWindow">
                <input className="nameInput" type="text" placeholder="Name" name="name" required/>
                <input className="emailInput" type="email" placeholder="sample.mail@email.com" name="email" required/>
                <br />
                <input className="subjectInput" type="text" placeholder="Betreff" name="subject" required />
                <br />
                <textarea className="messageInput" name="message" required placeholder="Nachricht" />
                <br />
                <input className="submitInput" type="submit" value="Absenden" />
              </form>
              <div className="personInfoWindow">
                <div><FaUserAlt/><p>Andreas Bitzan</p></div>
                <div><FaEnvelope /> <p>andreas.bitzan@gmail.com</p></div>
                <div><FaHome /><p>Klagenfurt, Österreich</p></div>
                <div><FaReact /> <FaHtml5 /> <FaCss3Alt /></div>
              </div>
            </div>
              </FancyInfoPanel>
              <SubHeader title="Impressum" id="impresum"/>
              <FancyInfoPanel imgData={props.data.bgImg.childImageSharp.fluid}>
             <Fade bottom delay={200}>
                <InfoWindow heading="Verantwortlich">
                  <p>
                    Für den Inhalt und die Fotos verantwortlich: <br/>
                    Andreas Bitzan
                    <br/>
                    Im Rahmen des MultiMediaProjekt 1 (MMP1) entstanden.
                    Programmiert von Andreas Bitzan, MultiMediaTechnology / FHS.

                  </p>
                </InfoWindow>
              </Fade>
             </FancyInfoPanel>

            </Template>
    );
}
export default Content;

export const pageQuery=graphql`
query {
    teamfoto: file(relativePath: { eq: "Teamfoto.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bgImg: file(relativePath: { eq: "bgImg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
}
`
