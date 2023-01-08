import React, { useState, useMemo } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
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
import { graphql, navigate, withPrefix } from "gatsby";
import { GiPlainSquare, GiSquare } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { IconContext } from "react-icons";
import moment from "moment";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";

function Gallery({ data, pageContext, location }) {
  const prefix = "/gallery";

  const imageList = data.images.nodes.map((node) => {
    const { id, name, modifiedTime } = node;
    const image = getImage(node);

    return { image, name, id, date: modifiedTime };
  });

  const { galleryCurrentPage, galleryNumPages, numImages, limit } = pageContext;
  const slideNumbers = Array.from(Array(galleryNumPages).keys());

  const searchParams = new URLSearchParams(location.search);

  const closeIconAttributes = useMemo(() => ({ size: "1.5em" }), []);
  const paginationAttributes = useMemo(
    () => ({ className: "pagination-icon", size: "1.5em" }),
    []
  );

  // use Boolean() on purpose to set imageDisplay to a truthy value based on whether an index is given or not
  const [imageDisplay, setImageDisplay] = useState(
    Boolean(searchParams.get("index"))
  );
  const [activeIndex, setActiveIndex] = useState(
    parseInt(searchParams.get("index"), 10) || 0
  );

  const hideImage = () => {
    setImageDisplay(false);
    navigate(
      galleryCurrentPage === 1 ? `${prefix}` : `${prefix}/${galleryCurrentPage}`
    );
  };

  const showNext = () => {
    if (
      galleryCurrentPage === galleryNumPages &&
      activeIndex >= (numImages % limit) - 1
    ) {
      // continue on first page
      setActiveIndex(0);
      navigate(`${prefix}?index=0`);
    } else if (
      galleryCurrentPage !== galleryNumPages &&
      activeIndex >= limit - 1
    ) {
      // continue on next page
      setActiveIndex(0);
      navigate(`${prefix}/${galleryCurrentPage + 1}?index=0`);
    } else {
      // continue on same page
      setActiveIndex(activeIndex + 1);
      navigate(`?index=${activeIndex + 1}`);
    }
  };

  const showPrev = () => {
    if (activeIndex <= 0 && galleryCurrentPage === 1) {
      // continue on last page
      setActiveIndex(limit - 1);
      navigate(`${prefix}/${galleryNumPages}?index=${(numImages % limit) - 1}`);
    } else if (activeIndex <= 0 && galleryCurrentPage !== 0) {
      // continue on prev page
      setActiveIndex(limit - 1);
      navigate(
        galleryCurrentPage === 2
          ? `${prefix}?index=${limit - 1}`
          : `${prefix}/${galleryCurrentPage - 1}?index=${limit - 1}`
      );
    } else {
      // continue on same page
      setActiveIndex(activeIndex - 1);
      navigate(`?index=${activeIndex - 1}`);
    }
  };

  const goToIndex = (newIndex) => {
    setActiveIndex(newIndex);
    navigate(`?index=${newIndex}`);
  };

  const slides = imageList.map(({ id, name, date, image }) => (
    <CarouselItem key={id}>
      <GatsbyImage
        image={image}
        id="lightbox-img"
        className="m-4"
        imgStyle={{ boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)" }}
      />
      <CarouselCaption
        captionText={moment(date).format("MMMM DD, YYYY")}
        captionHeader={name.replaceAll("_", " ")}
      />
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
                  navigate(`?index=${index}`);
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
        {slideNumbers.map((number) => (
          <PaginationItem key={number} className="mt-3">
            <PaginationLink
              href={withPrefix(
                number === 0 ? `${prefix}` : `${prefix}/${number + 1}`
              )}
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

export const imageQuery = graphql`
  query imageQuery($skip: Int!, $limit: Int!) {
    images: allFile(
      filter: { relativeDirectory: { eq: "images" } }
      sort: { modifiedTime: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        name
        modifiedTime
        childImageSharp {
          gatsbyImageData(width: 1200, placeholder: BLURRED)
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export function Head({ data: { site } }) {
  return <SEO title={`Gallery | ${site.siteMetadata.title}`} />;
}
