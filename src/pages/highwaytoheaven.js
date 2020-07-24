import React from "react";
import Header from "../components/header";
import SubHeader from "../components/subheader";
import Template from "../components/template";
import { graphql } from "gatsby";
import FilmdataBox from "../components/filmdataBox";
import Preisfeld from "../components/preisfeld";
import Videobox from "../components/videopanel";
import FilmMetaData from "../components/filmmetadata";
import SEO from "../components/seo";
import BtsGallery from "../components/btsgallery"



const Content = (props)=>{

    return(
        
           <Template isActive="filme">
           <SEO title="Highway to Heaven - Steinerei 2019" />

            <Header 
            type="fullscreen"
            imgData={props.data.highwaytoheaven.childImageSharp.fluid} 
            layer1={props.data.layer1.childImageSharp.fluid} 
            title="Highway to Heaven"
            // leftTo="/roll"
            year="< 2019 >"
                />
            <SubHeader title="Informationen" />

            <FilmdataBox heading="Highway to Heaven" 
            imgAwake={props.data.awake.childImageSharp.fluid}
            imgAsleep={props.data.asleep.childImageSharp.fluid}
            >
              <FilmMetaData
              frames="3204"
              duration="5.15"
              year="2019"
              production="2"
              >
                Alexander Leitner, Andreas Bitzan, Thomas Leitner,
                Christoph Soboll, Werner Wilke, Leopold Traar, Simon N. Steger
                
                <Preisfeld 
                    won={true}
                    placing="Bester Film"
                    event="Steinerei 2019"
                    />
                                    
                    <Preisfeld 
                    won={true}
                    placing="Beste Dramaturgie"
                    event="Steinerei 2019"
                    />
                          
                    <Preisfeld 
                    won={true}
                    placing="Bestes Sounddesign"
                    event="Steinerei 2019"
                    />
              </FilmMetaData>
            
            </FilmdataBox>

            <SubHeader title="Der Film" />
              <Videobox heading="Der Inhalt" 
              videoLink={"https://www.youtube.com/embed/BKEzdnCJx6w?controls=1"}
              to="https://youtu.be/BKEzdnCJx6w"
              >
                Was passiert eigentlich nach dem Tod? Viele Menschen stellen sich oft diese Frage.
                 Doch wenn der Himmelsbote schon an der Tür steht, wer würde es denn nicht herausfinden wollen?
                Der Film "Highway to Heaven" ist für die Steinerei 2018 zum Thema “Butter bei die Fische“ entstanden. Wie immer in Kooperation mit den A&M Studios.
                Beim Brickfilmfestival wurde der Film mit 3 Preisen ausgezeichnet: dem Hauptpreis "Bester Film", "Beste Dramaturgie" und "Bestes Sounddesign".
                          
              </Videobox>
            
            <SubHeader title="Behind the Scenes" />
            <BtsGallery images={props.data.allImages} />

                     
            </Template>
            
    );
}

export default Content;

export const pageQuery=graphql`
query {
    allImages: allFile(filter: {relativePath: {regex: "/highwaytoheaven/bts/"} }) {
      edges{
        node{
          id
          name
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
         }
        }
      }
    }
    highwaytoheaven: file(relativePath: { eq: "highwaytoheaven/highwaytoheaven.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    layer1: file(relativePath: { eq: "highwaytoheaven/layer1.png" }) {
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