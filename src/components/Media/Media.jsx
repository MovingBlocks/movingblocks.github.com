import React from "react";
import "./Media.css";
import Img from "gatsby-image"
import { Row, Col } from 'reactstrap';
import { useStaticQuery, graphql } from "gatsby"

const Gallery = () => {
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
              <button class="btnImage" onClick={() => ZoomImages(image.childImageSharp.fluid.src)}>
                <Img class="images" key={image.id} fixed={image.childImageSharp.fixed}></Img>
              </button>
            ))}
          </div>
          <div id="imageModal" class="modal">
            <img class="modal-content" id="imageZoom"></img>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default Gallery

var imageZoomed = false;

function ZoomImages(src) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("imageZoom");
  imageZoomed = true;
  modal.style.display = "block";
  modalImg.src = src;
}

document.addEventListener("click", function () {
  if (imageZoomed == true) {
    document.getElementById('imageModal').style.display = 'none';
    imageZoomed = false;
  }
});
