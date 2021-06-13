import React ,{useEffect, useRef} from "react";
import "./Media.css";
import { GatsbyImage } from "gatsby-plugin-image";
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
          gatsbyImageData
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
        
    
            {data.images.nodes.map(image => (
               <Col lg="4" md="4" sm="6" xs="6" >
              <button class="btnImage" onClick={(e) => ZoomImages(image.childImageSharp.gatsbyImageData.images.fallback.src)}>
               
                <GatsbyImage
                    image={
                      image.childImageSharp.gatsbyImageData
                    }
                    imgStyle={{
                      borderRadius: "0px 0px 0px 0px",
                      cursor: "initial",
                    }}
                  />
              
              </button>
              </Col>
            ))}
         
          <div id="imageModal" class="modal" ref={modal}>
            <img class="modal-content" id="imageZoom" ref={modalImg}></img>
          </div>
          
       </Row>
    </section>
  )
}

export default Gallery

