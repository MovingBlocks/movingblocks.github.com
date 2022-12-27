import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Row, Col } from "reactstrap";
import { useStaticQuery, graphql } from "gatsby";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IconContext } from "react-icons";
import MediaPagination from "../MediaPagination/MediaPagination";

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: { relativeDirectory: { eq: "images" } }) {
        nodes {
          id
          name
          childImageSharp {
            gatsbyImageData(width: 1200, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  const imgArray = [];
  data.images.nodes.array?.forEach((img) => {
    imgArray.push(img.childImageSharp.gatsbyImageData);
  });

  const [imageDisplay, setImageDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState(``);

  const showImage = (image) => {
    setImageToShow(image);
    setImageDisplay(true);
  };

  const hideImage = () => {
    setImageDisplay(false);
  };

  const showNext = (e) => {
    e.stopPropagation();
    const currentIndex = imgArray.indexOf(imageToShow);
    if (currentIndex >= imgArray.length - 1) {
      setImageDisplay(false);
    } else {
      const nextImage = imgArray[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e) => {
    e.stopPropagation();
    const currentIndex = imgArray.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setImageDisplay(false);
    } else {
      const nextImage = imgArray[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [imagePerPage] = useState(9);
  const indexOfLastImage = currentPage * imagePerPage;
  const indexOfFirstImage = indexOfLastImage - imagePerPage;
  const currentImgArray = imgArray.slice(indexOfFirstImage, indexOfLastImage);
  const paginate = (pageNum) => setCurrentPage(pageNum);

  return (
    <div>
      <div>
        <h1 className="text-center">Screenshots</h1>
        <div className="container my-4">
          <div className="home-underline" />
        </div>
      </div>

      <div>
        <Row className="justify-content-center">
          {currentImgArray.map((image) => (
            <Col lg="4" md="6" sm="6" xs="6" onClick={() => showImage(image)}>
              <div className="media-img">
                {" "}
                <GatsbyImage
                  image={image}
                  imgStyle={{
                    transform: "none",
                  }}
                />
              </div>
            </Col>
          ))}

          {imageDisplay ? (
            <div className="media-modal">
              <div className="lightbox">
                <div>
                  <button
                    type="button"
                    className="btn btn-lg btn-primary font-weigth-bolder rounded-circle media-button"
                    onClick={showPrev}
                  >
                    {" "}
                    <IconContext.Provider
                      value={{ size: "2em", className: "mr-1" }}
                    >
                      <FaCaretLeft />
                    </IconContext.Provider>
                  </button>
                </div>

                <div className="align-items-center">
                  <Col className="d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-lg btn-primary rounded-circle media-button-cancel"
                      onClick={hideImage}
                    >
                      <IconContext.Provider value={{ size: "1.5em" }}>
                        <ImCross />
                      </IconContext.Provider>
                    </button>
                  </Col>

                  <div>
                    <GatsbyImage
                      image={imageToShow}
                      id="lightbox-img"
                      onClick={hideImage}
                      className="m-4"
                      imgStyle={{ boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)" }}
                    />
                  </div>
                </div>

                <div className="">
                  <button
                    type="button"
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
              </div>
            </div>
          ) : (
            ""
          )}
        </Row>
      </div>
      <MediaPagination
        imagePerPage={imagePerPage}
        totalImages={imgArray.length}
        paginate={paginate}
        currentSlider={currentPage}
      />
    </div>
  );
};

export default Gallery;
