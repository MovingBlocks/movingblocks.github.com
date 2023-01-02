import React, { useState, useMemo } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  Row,
  Col,
  Card,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import { graphql, navigate } from "gatsby";
import { GiPlainSquare, GiSquare } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { IconContext } from "react-icons";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";

function Gallery({ data, pageContext }) {
  const { galleryCurrentPage, galleryNumPages, numImages, limit } = pageContext;
  const sildeNumber = Array.from(Array(galleryNumPages).keys());
  const prefix = "/gallery";

  const imageEdges = data.images.edges;
  const imageList = imageEdges.map(({ node }) => {
    const { id, name, childImageSharp } = node;
    const { gatsbyImageData } = childImageSharp;

    return { image: gatsbyImageData, name, id };
  });

  const closeIconAttributes = useMemo(() => ({ size: "1.5em" }), []);
  const paginationAttributes = useMemo(
    () => ({ className: "pagination-icon", size: "1.5em" }),
    []
  );

  const [imageDisplay, setImageDisplay] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const hideImage = () => {
    setImageDisplay(false);
  };

  const showNext = () => {
    console.log(numImages);
    console.log(activeIndex);
    if (activeIndex >= limit - 1 && galleryCurrentPage === galleryNumPages) {
      setImageDisplay(false);
    } else if (
      activeIndex >= limit - 1 &&
      galleryCurrentPage !== galleryNumPages
    ) {
      // navigate to next page
      navigate(`${prefix}/${galleryCurrentPage + 1}`);
      // set index for carousel to 0
      // set image display to open modal
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const showPrev = () => {
    if (activeIndex <= 0 && galleryCurrentPage === 0) {
      setImageDisplay(false);
    } else if (activeIndex <= 0 && galleryCurrentPage !== 0) {
      // navigate to prev page
      navigate(
        galleryCurrentPage === 2
          ? `${prefix}`
          : `${prefix}/${galleryCurrentPage - 1}`
      );
      // set index for carousel to limit-1
      // set image display to open modal
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const goToIndex = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const slides = imageList.map(({ id, name, image }) => (
    <CarouselItem key={id}>
      <GatsbyImage
        image={image}
        id="lightbox-img"
        className="m-4"
        imgStyle={{ boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)" }}
      />
      <CarouselCaption captionText={name} captionHeader={name} />
    </CarouselItem>
  ));

  return (
    <Layout title="Gallery">
      {/* Modal Carousel */}
      {imageDisplay ? (
        <div className="media-modal">
          <div className="lightbox">
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
            <Col className="d-flex justify-content-center">
              <Carousel
                fade
                slide={false}
                activeIndex={activeIndex}
                next={showNext}
                prev={showPrev}
              >
                <CarouselIndicators
                  items={imageList}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                  direction="prev"
                  directionText="<"
                  onClickHandler={showPrev}
                />
                <CarouselControl
                  direction="next"
                  directionText=">"
                  onClickHandler={showNext}
                />
              </Carousel>
            </Col>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* Image Grid */}
      <Col lg="12" className="card-spacing">
        <Row className="justify-content-center">
          {imageList.map(({ image }, index) => (
            <Col className="pt-0 mt-2 mb-4" lg="4" md="8" sm="12">
              <Card
                className="row_shadow h-100 align-items-center"
                onClick={() => {
                  setImageDisplay(true);
                  setActiveIndex(index);
                }}
                style={{ borderColor: "#08a045" }}
              >
                <GatsbyImage className="h-100" image={image} />
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
      {/* Pagination */}
      <div className="d-flex page-section">
        {sildeNumber.map((number) => (
          <PaginationItem key={number} className="mt-3">
            <PaginationLink
              href={number === 0 ? `${prefix}` : `${prefix}/${number + 1}`}
            >
              <IconContext.Provider value={paginationAttributes}>
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

export function Head() {
  return <SEO title={`Gallery | ${config.siteTitle}`} />;
}
