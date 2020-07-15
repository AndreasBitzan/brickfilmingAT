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


const Content = (props)=>{
    const images = Array.from(props.data.allImages.edges);
    const allSlides = images.map(({ node }) => {
      return (<SingleSlide imgData={node.childImageSharp.fluid} />)
    })

    return(
        
           <Template isActive="filme">
           <SEO title="Endangered - Steinerei 2016" />

            <Header 
            type="fullscreen"
            imgData={props.data.endangered.childImageSharp.fluid} 
            layer1={props.data.jhonny.childImageSharp.fluid} 
            title="Endangered"
            // leftTo="/roll"
            year="< 2016 >"
                />
            <SubHeader title="Informationen" />

            <FilmdataBox heading="Endangered" 
            imgAwake={props.data.awake.childImageSharp.fluid}
            imgAsleep={props.data.asleep.childImageSharp.fluid}
            >
              <FilmMetaData
              frames="3872"
              duration="5"
              year="2016"
              production="4"
              >
                Alexander Leitner, Andreas Bitzan, Thomas Leitner,
                Maik G.
                
                <Preisfeld 
                    won={true}
                    placing="1. Platz Publikumswertung"
                    event="Steinerei 2016"
                    />
                                    
                    <Preisfeld 
                    won={true}
                    placing="1. Platz Brickfilmerwertung"
                    event="Steinerei 2016"
                    />
                          
                    <Preisfeld 
                    won={false}
                    placing="Beste Animation"
                    event="Steinerei 2016"
                    />
              </FilmMetaData>
            
            </FilmdataBox>

            <SubHeader title="Der Film" />
              <Videobox heading="Der Inhalt" 
              videoLink={"https://www.youtube.com/embed/HNeL8xOAewY?controls=1"}
              to="https://youtu.be/HNeL8xOAewY"
              >
                Endangered - Von Monstern, Butlern und anderen Gefahren" 
                  ist eine weitere Co-Produktion der A&M Studios und Legostudio01 im Rahmen der Steinerei 2016! <br />
                  Zu dem dem Wettbewerbsthema "absurd" verschlägt es den Abenteurer Johnny und seinen Butler Alfred in den Dschungel, 
                  um ein äußerst seltenes Monster zu jagen. Wird es ihm gelingen es auch zu fangen? Das Abenteuer ruft!  
                          
              </Videobox>
            
            <SubHeader title="Behind the Scenes" />
            <SliderBox>
              {allSlides}
            </SliderBox>
                     
            </Template>
            
    );
}

export default Content;

export const pageQuery=graphql`
query {
    allImages: allFile(filter: {relativePath: {regex: "/endangered/bts/"} }) {
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
    endangered: file(relativePath: { eq: "endangered/Endangered.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jhonny: file(relativePath: { eq: "endangered/JhonnyLayer.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ritter: file(relativePath: { eq: "endangered/RitterLayer.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
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