import React ,{useEffect, useRef} from "react";
import "./Media.css";
import Img from "gatsby-image"
import { Row, Col } from 'reactstrap';
import { useStaticQuery, graphql } from "gatsby"

const Gallery = () => {
  const imageZoomed = useRef()
  const modal = useRef()
  const modalImg = useRef()

  useEffect(() => {
    document.addEventListener("click", (event)=>{
      if(event.target == modal.current && imageZoomed.current == true){
        modal.current.style.display = 'none'
        imageZoomed.current = false
      }
      
    });
  }, []);


  const ZoomImages = (src)=>{
    imageZoomed.current = true
    modal.current.style.display = 'block'
    modalImg.current.src = src
  }
  const data = useStaticQuery(graphql`
  query Images{
    images: allFile(filter: {relativeDirectory: { eq: "images"} }){
      nodes {
        id
        name
        childImageSharp {
          fixed(width: 240, height: 240) {
            ...GatsbyImageSharpFixed
          }
          fluid(maxWidth: 800) {
            src
          }
      }
    }
  }
  }
`
  )
  console.log(data);
  return (
    <section>
      <Row className="justify-content-center">
        <Col lg="8">
          <div>
            {data.images.nodes.map(image => (
              <button class="btnImage" onClick={(e) => ZoomImages(image.childImageSharp.fluid.src,e)}>
                <Img class="images" key={image.id} fixed={image.childImageSharp.fixed}></Img>
              </button>
            ))}
          </div>
          <div id="imageModal" class="modal" ref={modal}>
            <img class="modal-content" id="imageZoom" ref={modalImg}></img>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default Gallery

