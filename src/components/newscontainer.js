import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ReactHtmlParser from "react-html-parser"
import "../styles/newscontainer.scss"

const getDateSepcs = datum => {
  datum = datum.split("-")
  return datum
}

class NewsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.showMoreContent = this.showMoreContent.bind(this)
  }

  showMoreContent(slug) {
    console.log("gets executed")
    let content = document.querySelector(`.${slug}`)
    let btn = document.querySelector(`.btn-${slug}`)
    if (content !== undefined) {
      content.classList.toggle("hiddenContent")
      if (content.classList.contains("hiddenContent")) {
        btn.innerHTML = "Weniger lesen"
      } else {
        btn.innerHTML = "Mehr lesen"
      }
    }
  }
  render() {
    return (
      <section className="news-container">
        {this.props.data.allWpPost.nodes.map(posting => {
          return (
            <div className="news-container__posting content-container">
              <header>
                <div className="news-container__posting__date">
                  <span className="news-container__posting__date__day">
                    {getDateSepcs(posting.date)[0]}
                  </span>
                  <span>
                    {getDateSepcs(posting.date)[1]}
                    <br /> <span>{getDateSepcs(posting.date)[2]}</span>
                  </span>
                </div>
                <img
                  srcSet={posting.featuredImage.node.srcSet}
                  alt={posting.featuredImage.node.altText}
                />
              </header>
              <h3 className="news-container__posting__heading">
                {posting.title}
              </h3>
              <div
                role="button"
                className="news-container__posting__btn btn"
                onClick={() => this.showMoreContent(posting.slug)}
              >
                <span>
                  <span>
                    <span className={`btn-${posting.slug}`}>Mehr lesen</span>
                  </span>
                </span>
              </div>
              <div
                className={`news-container__posting__content ${posting.slug}`}
              >
                {ReactHtmlParser(posting.content)}
              </div>
            </div>
          )
        })}
      </section>
    )
  }
}

export default ({ props }) => (
  <StaticQuery
    query={graphql`
      query {
        allWpPost(limit: 2) {
          nodes {
            slug
            excerpt
            title
            content
            featuredImage {
              node {
                altText
                srcSet
                localFile {
                  publicURL
                }
              }
            }
            date(formatString: "DD-MMM-YYYY")
          }
        }
      }
    `}
    render={data => <NewsContainer props={props} data={data} />}
  />
)
