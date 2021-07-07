import React, { useEffect, useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Row, Col } from "reactstrap";
import { useStaticQuery, graphql } from "gatsby";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { IconContext } from "react-icons";

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: { relativeDirectory: { eq: "images" } }) {
        nodes {
          id
          name
          childImageSharp {
            gatsbyImageData(width: 850, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  let imgArray = [];
  data.images.nodes.map((img) => {
    imgArray.push(img.childImageSharp.gatsbyImageData);
  });

  const [imageDisplay, setImageDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState(``);
  const [blur, setblur] = useState(``);

  const showImage = (image) => {
    setImageToShow(image);
    setImageDisplay(true);
    setblur("backblur");
  };

  const hideImage = () => {
    setImageDisplay(false);
    setblur("");
  };

  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = imgArray.indexOf(imageToShow);
    if (currentIndex >= imgArray.length - 1) {
      setImageDisplay(false);
      setblur("");
    } else {
      let nextImage = imgArray[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = imgArray.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setImageDisplay(false);
      setblur("");
    } else {
      let nextImage = imgArray[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [imagePerPage, setImagePerPage] = useState(9);

  const indexOfLastImage = currentPage * imagePerPage;
  const indexOfFirstImage = indexOfLastImage - imagePerPage;
  const currentImgArray = imgArray.slice(indexOfFirstImage, indexOfLastImage);

  return (
    <div>
      <div className={blur}>
        <h1 className="text-center">Screenshots</h1>
        <div className="container my-4">
          <div className="home-underline"></div>
        </div>
      </div>

      <div>
        <Row className="justify-content-center">
          {currentImgArray.map((image) => (
            <Col
              lg="4"
              md="6"
              sm="6"
              xs="6"
              className={blur}
              onClick={() => showImage(image)}
            >
              <div className="media-img">
                {" "}
                <GatsbyImage image={image} />
              </div>
            </Col>
          ))}

          {imageDisplay ? (
            <div className=" lightbox">
              <button
                className="btn btn-lg btn-primary ml-3 font-weigth-bolder rounded-circle media-button"
                onClick={showPrev}
              >
                {" "}
                <IconContext.Provider
                  value={{ size: "2em", className: "mr-1" }}
                >
                  <FaCaretLeft />
                </IconContext.Provider>
              </button>
              <div>
                <GatsbyImage
                  image={imageToShow}
                  id="lightbox-img"
                  onClick={hideImage}
                  className="m-4"
                />
              </div>

              <button
                className="btn btn-lg btn-primary ml-3 font-weigth-bolder rounded-circle media-button"
                onClick={showNext}
              >
                <IconContext.Provider
                  value={{ size: "2em", className: "ml-1" }}
                >
                  <FaCaretRight />
                </IconContext.Provider>
              </button>
            </div>
          ) : (
            ""
          )}
        </Row>
      </div>
    </div>
  );
};

export default Gallery;
