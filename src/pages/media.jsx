import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Media from "../components/Media/Media";
import config from "../../data/SiteConfig";
import Img from "gatsby-image"
import {useStaticQuery, graphql} from "gatsby"

const Screenshots = () => {
  const data = useStaticQuery( graphql`
  query Images{
    images: allFile(filter: {relativeDirectory: { eq: "images"} }){
      nodes {
        id
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
      }
    }
  }
  }
`
  )
  console.log(data);
  return (
  <Layout>
    <div className="media-container">
      <Helmet title={`Media | ${config.siteTitle}`} />
      <Media />
    </div>
    <div className="screenshots">
    {data.images.nodes.map(image => (
      <Img key={image.id} fixed={image.childImageSharp.fixed}></Img>
    ))}
    </div>
  </Layout>
  )
}

export default Screenshots
