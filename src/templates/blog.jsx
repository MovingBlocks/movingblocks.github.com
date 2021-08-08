import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import SearchForm from "../components/BlogSearchForm/BlogSearchForm";
import SearchResults from "../components/SearchResult/SearchResult";
import config from "../../data/SiteConfig";
import blogList from "../generated/blog-result.json";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Row, Col } from "reactstrap";

const blog = (
  { data, pageContext: { blogCurrentPage, postsNumPages } },
  props
) => {
  const postEdges = data.allMarkdownRemark.edges;
  const blogData = blogList;

  const prefix = "/blog/";
  const isFirst = blogCurrentPage === 1;
  const isLast = blogCurrentPage === postsNumPages;
  const prevPage =
    blogCurrentPage - 1 === 1 ? "" : (blogCurrentPage - 1).toString();
  const nextPage = (blogCurrentPage + 1).toString();

  const [isShown, setIsShown] = useState(false);

  const [results, setResults] = useState([]);
  // eslint-disable-next-line react/destructuring-assignment
  let srcLocation = props.location;
  if (typeof window !== `undefined`) {
    // eslint-disable-next-line no-restricted-globals
    srcLocation = location.search;
  }
  let searchQuery = new URLSearchParams(srcLocation).get("keywords") || "";
  let filterTag = new URLSearchParams(srcLocation).get("tag") || "";
  let filterAuthor = new URLSearchParams(srcLocation).get("author") || "";
  let filterddate = new URLSearchParams(srcLocation).get("ddate") || "";
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  useEffect(() => {
    if (searchQuery || filterTag || filterAuthor || filterddate) {
      setResults(
        blogData.filter((blog) => {
          const searchRgx = new RegExp(escapeRegExp(searchQuery), "gi");
          const tagRgx = new RegExp(escapeRegExp(filterTag), "gi");
          const authorRgx = new RegExp(escapeRegExp(filterAuthor), "gi");
          const ddateRgx = new RegExp(escapeRegExp(filterddate), "gi");
          const matchedTag = blog.tags
            .filter((tag) => tag != null)
            .map((t) => t.match(tagRgx));
          return (
            (blog.content.match(searchRgx) || blog.title.match(searchRgx)) &&
            matchedTag.toString().match(tagRgx) &&
            blog.author.match(authorRgx) &&
            blog.ddate.match(ddateRgx)
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
        <Helmet title={`Blog | ${config.siteTitle}`} />
        <SEO />
        <SearchForm
          query={searchQuery}
          tag={filterTag}
          author={filterAuthor}
          ddate={filterddate}
        />
        {isShown && (
          <SearchResults id="src" query={searchQuery} results={results} />
        )}
        {!isShown && <PostListing id="blog" postEdges={postEdges} />}
      </div>
      <Row>
        {!isFirst && results.length === 0 && (
          <Col className="text-center m-4">
            <Link
              to={`${prefix}${prevPage}`}
              rel="prev"
              className="btn-primary"
            >
              <FiArrowLeft /> Previous Page
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
              Next Page <FiArrowRight />
            </Link>
          </Col>
        )}
      </Row>
    </Layout>
  );
};

/* eslint no-undef: "off" */
export const blogQuery = graphql`
  query blogQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { posttype: { eq: "blog" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(format: PLAIN, pruneLength: 120, truncate: true)
          timeToRead
          frontmatter {
            title
            date
            author
            ddate
            tags
            description
            cover {
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

export default blog;
