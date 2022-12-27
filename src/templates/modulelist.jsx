import React, { useState, useEffect } from "react";
import { Link, graphql } from "gatsby";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Row, Col } from "reactstrap";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../components/SearchResult/SearchResult";
import config from "../../data/SiteConfig";
import moduleList from "../generated/module-result.json";

const Modulelist = ({ data, pageContext, location }) => {
  const { moduleCurrentPage, moduleNumPages } = pageContext;
  const postEdges = data.allMarkdownRemark.edges;
  const moduleData = moduleList;

  const prefix = "/modules/";
  const isFirst = moduleCurrentPage === 1;
  const isLast = moduleCurrentPage === moduleNumPages;
  const prevPage =
    moduleCurrentPage - 1 === 1 ? "" : (moduleCurrentPage - 1).toString();
  const nextPage = (moduleCurrentPage + 1).toString();

  const [isShown, setIsShown] = useState(false);

  const [results, setResults] = useState([]);
  let srcLocation = location;
  if (typeof window !== `undefined`) {
    srcLocation = location.search;
  }
  const searchQuery = new URLSearchParams(srcLocation).get("keywords") || "";
  const filterTag = new URLSearchParams(srcLocation).get("filter") || "";
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  useEffect(() => {
    if (searchQuery || filterTag) {
      setResults(
        moduleData.filter((module) => {
          const searchRgx = new RegExp(escapeRegExp(searchQuery), "gi");
          const tagRgx = new RegExp(escapeRegExp(filterTag), "gi");
          const matchedTag = module.tags
            .filter((tag) => tag != null)
            .map((t) => t.match(tagRgx));
          return (
            matchedTag.toString().match(tagRgx) &&
            module.title?.match(searchRgx)
          );
        })
      );
      setIsShown(true);
    } else {
      setResults([]);
      setIsShown(false);
    }
  }, [srcLocation]);

  return (
    <Layout>
      <div className="index-container">
        <SearchForm
          query={searchQuery}
          filter={filterTag}
          location={location}
        />
        {isShown && (
          <SearchResults
            id="src"
            query={searchQuery}
            filter={filterTag}
            results={results}
            postEdges={postEdges}
          />
        )}
        {!isShown && <PostListing id="modules" postEdges={postEdges} />}
      </div>
      <Row>
        {!isFirst && results.length === 0 && (
          <Col className="text-center m-4">
            <Link
              to={`${prefix}${prevPage}`}
              rel="prev"
              className="btn-primary"
            >
              <FiArrowLeft />
              {` Previous Page`}
            </Link>
          </Col>
        )}
        {!isLast && results.length === 0 && (
          <Col className="text-center m-4">
            <Link
              to={`${prefix}${nextPage}`}
              rel="next"
              className="btn-primary"
            >
              {`Next Page `}
              <FiArrowRight />
            </Link>
          </Col>
        )}
      </Row>
    </Layout>
  );
};

/* eslint no-undef: "off" */
export const moduleQuery = graphql`
  query moduleQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { posttype: { eq: "module" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(format: PLAIN, pruneLength: 80, truncate: true)
          timeToRead
          frontmatter {
            title
            tags
            date
            posttype
            cover {
              publicURL
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

export default Modulelist;

export const Head = () => <SEO title={`Modules | ${config.siteTitle}`} />;
