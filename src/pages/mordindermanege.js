import React from "react";
import Header from "../components/header";
import SubHeader from "../components/subheader";
import Template from "../components/template";
import Videobox from "../components/videopanel"
import { graphql } from "gatsby";
import FilmdataBox from "../components/filmdataBox";
import Preisfeld from "../components/preisfeld";
import FilmMetaData from "../components/filmmetadata";
import SEO from "../components/seo";
import BtsGallery from "../components/btsgallery"


const Content = (props)=>{
    return(
        
      <Template isActive="filme">
            <SEO title="Mord in der Manege - Steinerei 2018"/>
            
                {/* HEADER: isTitleLeft legt layout fest, Optionen für 2 TitelLines, die dieselbe Scaling danach haben. Option für Btn */}
            <Header 
            type="fullscreen"
            imgData={props.data.headerback.childImageSharp.fluid} 
            layer1={props.data.layer1.childImageSharp.fluid} 
            layer2={props.data.layer2.childImageSharp.fluid} 
            title="Mord in der Manege"
            // rightTo="/roll"
            year="< 2018 >"
                />
            <SubHeader title="Informationen" />

            <FilmdataBox heading="Mord in der Manege" 
            imgAwake={props.data.awake.childImageSharp.fluid}
            imgAsleep={props.data.asleep.childImageSharp.fluid}
            >
              <FilmMetaData
              frames="4221"
              duration="6.30"
              year="2018"
              production="4"
              >
                   Alexander Leitner, Andreas Bitzan, Thomas Leitner,
                   Michael Lips, Matthias Hofer, Martin Lange <br/>
        
                    <Preisfeld 
                    won={true}
                    placing="1. Platz Brickfilmerwertung"
                    event="Steinerei 2018"
                    />
                    <Preisfeld 
                    won={true}
                    placing="Best Screenplay"
                    event="Brickfilmersguild"
                    />
                    <Preisfeld 
                    won={false}
                    placing="Silber"
                    event="Landesmeisterschaft 2018"
                    />
               </FilmMetaData>
            </FilmdataBox>
             <SubHeader title="Der Film" />
              <Videobox heading="Der Inhalt" 
              videoLink={"https://www.youtube.com/embed/-mEviW2DZyU?controls=1"}
              to="https://youtu.be/-mEviW2DZyU"
              >
                Als Detective Wolff von einem panischen Clown kontaktiert wird, 
                  begibt er sich zum Zirkus, um der Spur nachzugehen...
                  Sein Abenteuer führt ihn in einen dunklen Zirkus, als er beginnt sich mit den 
                  Artisten zu unterhalten ergibt sich eine Spur!
                   Der Film "Mord in der Manege" ist für die Steinerei 2018 zum Thema “Einfach heldenhaft!“ entstanden.
                           
              </Videobox>
            
            <SubHeader title="Behind the Scenes" />
            <BtsGallery images={props.data.allImages} />

           

         </Template>
            
    );
}

export default Content;

export const pageQuery=graphql`
query {
  allImages: allFile(filter: {relativePath: {regex: "/mordindermanege/bts/"} }) {
    edges{
      node{
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
    headerback: file(relativePath: { eq: "mordindermanege/mordindermanege.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    layer1: file(relativePath: { eq: "mordindermanege/layer2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      layer2: file(relativePath: { eq: "mordindermanege/layer1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      awake: file(relativePath: { eq: "mordindermanege/awake.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      asleep: file(relativePath: { eq: "mordindermanege/asleep.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
}
`