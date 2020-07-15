import React from "react";
import Template from "../components/template";
import Header from "../components/header";
import SubHeader from "../components/subheader";
import SliderBox from "../components/slidebox";
import FancyInfoPanel from "../components/fancyinfopanel";
import InfoPanel from "../components/infopanel";
import { graphql } from "gatsby";
import SingleSlide from "../components/singleslide";
import Countdown from "react-countdown";
import config from "react-reveal/globals";
import Flip from "react-reveal/Flip";
import SEO from "../components/seo";


config({ ssrFadeout: true});


const Content =(props) => {
    return(
        <Template isActive="workshops">
            <SEO title="Brickfilm Workshops" />
           
            <Header type="image" 
            imgData={props.data.workshop1.childImageSharp.fluid}
            isTitleLeft={true} firstLine="Die Brickfilm" secondLine="Workshops" btnTitle="Entdecken"/>
            <SubHeader title="Von der Idee bis zum fertigen Film"/>
            <InfoPanel type="picture" isTitleLeft={false} heading="Sei kreativ!" imgData={props.data.workshop2.childImageSharp.fluid} >
              Gemeinsam mit Alexander Leitner lernst du bei uns wie deine Idee zu einem fertigen Film wird. 
              Von dem Storyboard, dem Setbau, der Animation bis hin zur Vertonung und Effeckten, es ist für jeden etwas dabei!
              Entdecken - Lernen - Umsetzen!
            </InfoPanel> 
            <SubHeader title="Bisherige Workshop Filme" />
    
            <SliderBox >
              <SingleSlide imgData={props.data.thumbnail1.childImageSharp.fluid} link="https://www.youtube.com/embed/ty9Yfvt9Amg" />
              <SingleSlide imgData={props.data.thumbnail2.childImageSharp.fluid} link="https://www.youtube.com/embed/Py_4fGB40Bs" />
              <SingleSlide imgData={props.data.thumbnail3.childImageSharp.fluid} link="https://www.youtube.com/embed/M8TEJaBkJGo" />
              <SingleSlide imgData={props.data.thumbnail4.childImageSharp.fluid} link="https://www.youtube.com/embed/rRr6NhlhCtA" />
              <SingleSlide imgData={props.data.thumbnail5.childImageSharp.fluid} link="https://www.youtube.com/embed/YgpyxpY_4V0" />
              <SingleSlide imgData={props.data.thumbnail6.childImageSharp.fluid} link="https://www.youtube.com/embed/JNP8b32BfvA" />
              <SingleSlide imgData={props.data.thumbnail7.childImageSharp.fluid} link="https://www.youtube.com/embed/b8dWS3_zFkk" />
            </SliderBox>

            <SubHeader title="Wann? Wie? Wo?" id="entdecken" />
            <InfoPanel type="picture" isTitleLeft={true} heading="Der Bluecube" imgData={props.data.workshop4.childImageSharp.fluid} >
                Unsere Workshops finden im Bluecube Klagenfurt statt. Von 9-12 Uhr könnt ihr 
                    erlernen ihr eure Minifigur zum Leben erweckt! Für Euipment inklusive Lego ist gesorgt. 
                    Am besten schon mit einer Filmidee kommen! 
                    Die Daten und Anmeldungen sind auf der Webseite des Bluecubes Klagenfurt möglich.
                    Hier gelangst du zur Webseite mit den neuesten Informationen.
                
                <a href="http://www.wissenswertwelt.at/" >Zum Bluecube</a>
            </InfoPanel>
            <SubHeader title="Der nächste Workshop" />
            <FancyInfoPanel imgData={props.data.bgImg.childImageSharp.fluid}>
                {/* 'Sat, 01 Feb 2020 01:02:03' VALID DATE FORMAT */}
              <Flip top>
                <div className="countdown">
                15. Juni 2019 <br />
                <Countdown  date="Sat, 15 Jun 2019 09:00:00" /> 
                </div>
              </Flip> 
                
            </FancyInfoPanel>
         
            </Template>
    );
}
export default Content;

export const pageQuery=graphql`
query {
    workshop1: file(relativePath: { eq: "workshop/workshop1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    workshop2: file(relativePath: { eq: "workshop/workshop2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      workshop3: file(relativePath: { eq: "workshop/workshop3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      workshop4: file(relativePath: { eq: "workshop/workshop4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thumbnail1: file(relativePath: { eq: "workshop/Thumbnail_Workshop1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thumbnail2: file(relativePath: { eq: "workshop/Thumbnail_Workshop2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thumbnail3: file(relativePath: { eq: "workshop/Thumbnail_Workshop3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thumbnail4: file(relativePath: { eq: "workshop/Thumbnail_Workshop4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thumbnail5: file(relativePath: { eq: "workshop/Thumbnail_Workshop5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thumbnail6: file(relativePath: { eq: "workshop/Thumbnail_Workshop6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thumbnail7: file(relativePath: { eq: "workshop/Thumbnail_Workshop7.jpg" }) {
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