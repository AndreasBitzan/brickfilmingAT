import React from "react";
import Template from "../components/template";
import Header from "../components/header";
import SubHeader from "../components/subheader";
import SliderBox from "../components/slidebox";
import ContentBox from "../components/contentBox";
import InfoPanel from "../components/infopanel";
import { graphql } from "gatsby";
import InteractiveBox from "../components/interactiveBox";
import FancyInfoPanel from "../components/fancyinfopanel";
import InfoWindow from "../components/infowindow";
import Videobox from "../components/videopanel";
import SEO from "../components/seo";


const Content = (props)=>{
  return(
    <Template isActive="howto">
    <SEO title="How to Brickfilm" />
        {/* HEADER: isTitleLeft legt layout fest, Optionen für 2 TitelLines, die dieselbe Scaling danach haben. Option für Btn */}
    <Header type="image" imgData={props.data.image2.childImageSharp.fluid} isTitleLeft={false} firstLine="Was ist überhaupt" secondLine="Stop Motion?" btnTitle="Entdecken" />


    <SubHeader title="Viele Bilder - Eine Animation" id="entdecken" />
    <InteractiveBox />
    <SubHeader title="Was wird benötigt?" />

    <SliderBox>
      <ContentBox 
      title="Kamera" 
      imgData={props.data.camera.childImageSharp.fluid} >
      Zum Brickfilmen wird selbstvertändlich eine Kamera benötigt. Dabei kann man sich frei zwischen
      einer Webcam oder einer professionellen Kamera entscheiden. Doch auch mit dem Smartphone sind Brickfilme 
      inzwischen möglich! Worauf zu achten ist? Kamera befestigen und nicht während dem Animieren verwackeln!
      </ContentBox> 
       <ContentBox 
      title="Licht" 
      imgData={props.data.lampen.childImageSharp.fluid} >
        Das richtige Licht beim Brickfilmen ist sehr wichtig! Achte darauf dass kein natürliches Licht
        an das Set herankommt. Tageslicht verändert sich zu schnell und verursacht ein Flackern im fertigen Film.
        Schreibtischlampen eignen sich hierbei ideal um das Set auszuleuchten. Die Fenster am besten komplett abdunkeln!
      </ContentBox>
       <ContentBox 
      title="Software" 
      imgData={props.data.software.childImageSharp.fluid} >
        Um das Ganze wie eine Animation aussehen zu lassen müssen die Bilder 
        hintereinander in eine sogenannte "Timeline" in einem Schnittprogramm gezogen werden.
        Dabei ist wichtig, dass die Bilder, je nach Geschwindigkeit nur 0,1 0,2 oder 0,3 Frames lang
        dargestellt werden. Neben Adobe Premiere gibt es noch gratis Software, die weiter unten verlinkt ist.
      </ContentBox>
       <ContentBox 
      title="Geduld" 
      imgData={props.data.geduld.childImageSharp.fluid}>
        Brickfilmen ist ein sehr zeitaufwändiges Hobby. Bis die ersten Szenen gut aussehen kann es eine Weile dauern,
        doch wie bei vielen Hobbies: Übung macht den Meister. Oft kommt es vor dass ganze Szenen neu gefilmt werden müssen, 
        falls etwas umfällt oder die Kamera den Geist aufgibt. So ist und bleibt Brickfilmen ein Gedulsspiel.
      </ContentBox>
       <ContentBox 
      title="Lego" 
      imgData={props.data.lego.childImageSharp.fluid}>
      Steine, Steine und nochmal Steine geben dem Brickfilm seinen Namen. Doch um gute Filme und Animationen zu 
      erstellen reichen oft wenige Klicksteine aus. Wichtig ist es nur den aktuellen Kamerausschnitt zu füllen. 
      Ein komplettes Set ist dabei nicht notwendig. Oft kann das Set auch digital erweitert werden. Mehr dazu weiter unten.
      </ContentBox>
    </SliderBox>

    <SubHeader title="Nützliche Seiten und Gratis Inhalte" />
    <FancyInfoPanel imgData={props.data.editing.childImageSharp.fluid}>
      
      <InfoWindow heading="Musik" >
      <ul className="websiteLinks">
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.incompetech.com">Incompetech- Royality Free</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://audionautix.com/">Audionautix</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/audiolibrary/music">Youtube Music</a></li>
        </ul>
      </InfoWindow>
      <InfoWindow heading="Sounds" >
        <ul className="websiteLinks">
          <li><a target="_blank" rel="noopener noreferrer" href="https://freesound.org/">Freesound </a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="http://findsounds.com/">Find Sounds</a></li>
          <li>Diverse Sound CD's</li>
        </ul>
      </InfoWindow>
      <InfoWindow heading="Schnittprogramme" >
        <ul className="websiteLinks">
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.chip.de/downloads/DaVinci-Resolve_73088987.html">DaVinci Resolve</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://fxhome.com/hitfilm-express">Hitfilm Express</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://shotcut.org/">Shotcut</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.lwks.com/">Lightworks</a></li>
        </ul>
      </InfoWindow>
    </FancyInfoPanel>

    <SubHeader title="Ein Anfänger Tutorial" />
    <Videobox heading="Grundlagen schnell erklärt" 
              videoLink={"https://www.youtube.com/embed/ukFWYe-ZeTw"}
              to="https://youtu.be/ukFWYe-ZeTw"
              >
            
                  In diesem Video werden schnell einige Tipps gegeben, wie man
                  seinen ersten Film dreht. Dabei ist besonders drauf zu achten die 
                  Kamera zu befestigen, das Licht einheitlich zu halten und auch das gesamte
                  Set zu fixieren!
                      
    </Videobox>
    <SubHeader title="Das Set Design" />
    <InfoPanel type="moving"
      isTitleLeft
      heading="Mehrere Ebenen"
      imgData={props.data.kulisse1.childImageSharp.fluid} 
      imgData2={props.data.kulisse2.childImageSharp.fluid}>
      Die Gestaltung der Kulisse ist eine der wichtigsten Aufgaben bei einem Brickfilm! Um den Film
      realistischer wirken zu lassen, baue am besten mehrere Ebenen in dein Set ein! 
      Ein Vordergrund und Hintergrund geben Tiefe dazu. <strong>Bewege die Maus über das Bild oder tippe darauf </strong>
      um zu sehen wie groß der Unterschied ist!
    </InfoPanel>
   <SubHeader title="Beleuchtung" />
    <InfoPanel type="moving"
      isTitleLeft={false}
      heading="LEDs und Farblichter"
      imgData={props.data.beleuchtung1.childImageSharp.fluid} 
      imgData2={props.data.beleuchtung2.childImageSharp.fluid} >
      Das richtige Licht erzeugt extreme Stimmung in den Brickfilmen. Um realistischere Beleuchtungen hinzubekommen
      ist es neben Schreibtischlampen auch gut kleine LED's oder Leuchtsteine zu verwenden um so den richtigen Effeckt hinzubekommen.
      <strong> Bewege die Maus über das Bild oder tippe darauf!</strong>
    </InfoPanel>
    <SubHeader title="Lego fliegen lassen" />
    <InfoPanel type="moving"
      isTitleLeft={true}
      heading="Unsichtbare Fäden?"
      imgData={props.data.fliegen1.childImageSharp.fluid} 
      imgData2={props.data.fliegen2.childImageSharp.fluid} >
      Um Lego-Objekte fliegen lassen zu können ist etwas Arbeit am Computer notwendig. Als erstes muss 
      ein Foto der Szene ohne dieses Objekt gemacht werden, also die leere Kulisse. Danach wird das Objekt/die Figur
      mit Stützhilfen an die Position gebracht und ein Foto gemacht. Digital werden diese zwei Bilder übereinander gelegt 
      und die Stützsteine "wegradiert". 
      <strong> Bewege die Maus über das Bild oder tippe darauf!</strong>
    </InfoPanel>
    <SubHeader title="Erweitere die Möglichkeiten" />
    <InfoPanel type="moving"
      isTitleLeft={false}
      heading="Blue/Greenscreen"
      imgData={props.data.bluescreen1.childImageSharp.fluid} 
      imgData2={props.data.bluescreen2.childImageSharp.fluid}>
      Eine etwas fortgeschrittenere Technik ist der Blue- oder Greenscreen. 
      Indem man Teile des Bildes absichtlich in einer deutlich unterscheidbaren Farbe hält,
      können später an diesen Stellen mit einem (Chroma)Key Effeckt leicht andere Clips/Bilder/Szenen eingefügt werden.
      Achte besonders darauf die Farbe gleichmäßig zu beleuchten!
      <strong> Bewege die Maus über das Bild oder tippe darauf!</strong>
    </InfoPanel>
    <SubHeader title="Lass die Figuren reden" />
    <InfoPanel type="moving"
      isTitleLeft
      heading="Mundanimation"
      imgData={props.data.mundanimation1.childImageSharp.fluid} 
      imgData2={props.data.mundanimation2.childImageSharp.fluid} >
      Unsere Methode die Münder zu bewegen ist sehr zeitaufwändig und benötigt einige Schritte zur Vorbereitung.
      Zuerst werden verschiedene Minifiguren-Köpfe bei gutem Licht fotografiert, der Mund in Photoshop ausgeschnitten
      und dann über die Figur in der Szene Bild für Bild die Münder passend zum Ton ein.
      <strong> Bewege die Maus über das Bild oder tippe darauf!</strong>
    </InfoPanel> 
    <SubHeader title="Ein Blick hinter die Kulissen" />
    <Videobox heading="Voll von Effeckten" 
              videoLink={"https://www.youtube.com/embed/6-f4f0iw8WA"}
              to="https://www.youtube.com/watch?v=6-f4f0iw8WA"
              >
                
                  Hier gibt es ein paar Einblicke wie das Musikvideo "Riptide" gestaltet wurde.
                  Es wurde sehr viel mit Farbkorrektur und Greenscreen gearbeitet. Das Ergebnis ist in diesem Video
                  Schritt für Schritt ersichtlich.
                          
    </Videobox>
</Template>
  );
}
export default Content;

export const pageQuery=graphql`
query imageQuery{
    headerImages: allFile(
      filter:{ extension: {regex: "/(jpg)|(jpeg)|(png)|(JPG)/"}, relativeDirectory: {eq: "headerImages"}  }
      ){
        edges{
          node{
            childImageSharp {
            fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
                                  }
                             }
              }
            }
          }
      image2: file(relativePath: { eq: "image2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      camera: file(relativePath: { eq: "howto/camera.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lego: file(relativePath: { eq: "howto/lego.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lampen: file(relativePath: { eq: "howto/lampen.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      geduld: file(relativePath: { eq: "howto/geduld.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      software: file(relativePath: { eq: "howto/software.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      editing: file(relativePath: { eq: "editingBlur.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kulisse1: file(relativePath: { eq: "howto/kulisse1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kulisse2: file(relativePath: { eq: "howto/kulisse2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beleuchtung1: file(relativePath: { eq: "howto/beleuchtung1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beleuchtung2: file(relativePath: { eq: "howto/beleuchtung2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bluescreen1: file(relativePath: { eq: "howto/bluescreen1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bluescreen2: file(relativePath: { eq: "howto/bluescreen2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mundanimation1: file(relativePath: { eq: "howto/mundanimation1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mundanimation2: file(relativePath: { eq: "howto/mundanimation2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fliegen1: file(relativePath: { eq: "howto/fliegen1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fliegen2: file(relativePath: { eq: "howto/fliegen2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }


  }
`