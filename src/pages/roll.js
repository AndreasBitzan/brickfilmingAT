import React from "react";
import Header from "../components/header";
import SubHeader from "../components/subheader";
import SliderBox from "../components/slidebox";
import SingleSlide from "../components/singleslide";
import Template from "../components/template";
import { graphql } from "gatsby";
import FilmdataBox from "../components/filmdataBox";
import Preisfeld from "../components/preisfeld";
import Videobox from "../components/videopanel";
import FilmMetaData from "../components/filmmetadata";
import SEO from "../components/seo";
import BtsGallery from "../components/btsgallery"


const Content = (props)=>{
  const images = Array.from(props.data.allImages.edges);
  const allSlides = images.map(({ node }) => {
    return (<SingleSlide imgData={node.childImageSharp.fluid} />)
  })
    return(
        
      <Template isActive="filme" thumbnails={props.data.allThumbnails.edges}>
          <SEO title="Roll - Steinerei 2017" />
        
                {/* HEADER: isTitleLeft legt layout fest, Optionen für 2 TitelLines, die dieselbe Scaling danach haben. Option für Btn */}
            <Header 
            type="fullscreen"
            imgData={props.data.roll.childImageSharp.fluid} 
            title="Roll"
            // leftTo="/mordindermanege"
            // rightTo="/filme"
            year="< 2017 >"
                />
        
            <SubHeader title="Informationen" />

            <FilmdataBox heading="Roll" 
            imgAwake={props.data.awake.childImageSharp.fluid}
            imgAsleep={props.data.asleep.childImageSharp.fluid}
            >
            <FilmMetaData
              frames="2643"
              duration="2.45"
              year="2017"
              production="2"
              >
                   Alexander Leitner, Andreas Bitzan, Thomas Leitner,

                    <Preisfeld 
                    won={true}
                    placing="1. Platz Brickfilmerwertung"
                    event="Steinerei 2017"
                    />
                                    
                    <Preisfeld 
                    won={false}
                    placing="3. Platz Publikumswertung"
                    event="Steinerei 2017"
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
              videoLink={"https://www.youtube.com/embed/4jvMesae8Dk?controls=1"}
              to="https://youtu.be/4jvMesae8Dk"
              >
                Roll erzählt die faszinierende, 
                    sinnfreie Legende der Erfindung des Rades! 
                    Ein Lego Steinzeit Brickfilm über den ersten Versuch, das Rad ins rollen zu bringen!
                           
              </Videobox>
            
            <SubHeader title="Behind the Scenes" />
            <BtsGallery images={props.data.allImages} />

        </Template>
    );
}

export default Content;

export const pageQuery=graphql`
query {
  allImages: allFile(filter: {relativePath: {regex: "/roll/bts/"} }) {
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
  allThumbnails: allFile(filter: {relativePath: {regex: "/thumbnails/"} }) {
    edges{
      node{
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
    roll: file(relativePath: { eq: "roll/roll.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
      awake: file(relativePath: { eq: "roll/awake.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      asleep: file(relativePath: { eq: "roll/asleep.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
}
`