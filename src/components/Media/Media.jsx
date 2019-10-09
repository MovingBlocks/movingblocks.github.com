import React from "react";
import "./Media.css";
import Img from "gatsby-image"
import {useStaticQuery, graphql} from "gatsby"

const Gallery = () => {
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
  return (
    <div>
    {data.images.nodes.map(image => (
      <Img key={image.id} fixed={image.childImageSharp.fixed}></Img>
    ))}
    </div>
  )
}

export default Gallery
