import React, { useState, useMemo } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Row, Col, Card, PaginationItem, PaginationLink } from "reactstrap";
import { graphql } from "gatsby";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { GiPlainSquare, GiSquare } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { IconContext } from "react-icons";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";

function Gallery({ data, pageContext, location }) {
  const { galleryCurrentPage, galleryNumPages } = pageContext;
  const prefix = "/gallery";

  const imgArray = [];
  data.images.edges.forEach(({ node }) => {
    imgArray.push(node.childImageSharp.gatsbyImageData);
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

  const paginationIconAttributes = useMemo(
    () => ({ className: "pagination-icon", size: "1.5em" }),
    []
  );

  const sildeNumber = Array.from(Array(galleryNumPages).keys());

  const prevIconAttributes = useMemo(
    () => ({ size: "2em", className: "mr-1" }),
    []
  );
  const nextIconAttributes = useMemo(
    () => ({ size: "2em", className: "ml-1" }),
    []
  );
  const closeIconAttributes = useMemo(() => ({ size: "1.5em" }), []);

  const imageEdges = data.images.edges;
  const imageList = imageEdges.map(({ node }) => {
    const { name, childImageSharp } = node;
    const { gatsbyImageData } = childImageSharp;

    return { image: gatsbyImageData, name };
  });

  return (

    <Layout title="Gallery">
      <Col lg="12" className="card-spacing">
        <Row className="justify-content-center">
          {imageList.map(({image}) => (
            <Col className="pt-0 mt-2 mb-4" lg="4" md="8" sm="12">
              <Card className="row_shadow h-100 align-items-center" onClick={() => showImage(image)} style={{ borderColor: "#08a045" }}>
                <GatsbyImage
                  className="h-100"
                  image={image}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className="media-container">
        <div>
          <Row className="justify-content-center">
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
                      <IconContext.Provider value={prevIconAttributes}>
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
                        <IconContext.Provider value={closeIconAttributes}>
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
                      <IconContext.Provider value={nextIconAttributes}>
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
        <div className="d-flex page-section">
          {sildeNumber.map((number) => (
            <PaginationItem key={number} className="mt-3">
              <PaginationLink href={
                number === 0 ?
                  `${prefix}` :
                  `${prefix}/${number + 1}`
              } >
                <IconContext.Provider value={paginationIconAttributes}>
                  {(() => {
                    if (galleryCurrentPage === number + 1) {
                      return <GiPlainSquare />;
                    }
                    return <GiSquare />;
                  })()}
                </IconContext.Provider>
              </PaginationLink>
            </PaginationItem>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Gallery;

/* eslint no-undef: "off" */
export const imageQuery = graphql`
  query imageQuery($skip: Int!, $limit: Int!) {
    images: allFile(
      filter: { relativeDirectory: { eq: "images" } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(width: 1200, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export function Head({ data }) {
  return <SEO title={`Gallery | ${config.siteTitle}`} />;
}
