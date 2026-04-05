import React, { useState, useEffect } from "react";
import { Link, graphql } from "gatsby";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Row, Col } from "reactstrap";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import BlogSearchForm from "../components/BlogSearchForm/BlogSearchForm";
import SearchResults from "../components/SearchResult/SearchResult";
import config from "../../data/SiteConfig";
import blogList from "../generated/blog-result.json";

function BlogList({ data, pageContext, location }) {
  const { blogCurrentPage, postsNumPages } = pageContext;
  const postEdges = data.allMarkdownRemark.edges;
  const blogData = blogList;

  const prefix = "/blog";
  const isFirst = blogCurrentPage === 1;
  const isLast = blogCurrentPage === postsNumPages;
  const prevPage =
    blogCurrentPage - 1 === 1 ? "" : (blogCurrentPage - 1).toString();
  const nextPage = (blogCurrentPage + 1).toString();

  const [isShown, setIsShown] = useState(false);

  const [results, setResults] = useState([]);
  let srcLocation = location;
  if (typeof window !== `undefined`) {
    srcLocation = location.search;
  }
  const searchQuery = new URLSearchParams(srcLocation).get("keywords") || "";
  const filterTag = new URLSearchParams(srcLocation).get("tag") || "";
  const filterAuthor = new URLSearchParams(srcLocation).get("author") || "";
  const filterdate = new URLSearchParams(srcLocation).get("date") || "";
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  useEffect(() => {
    if (searchQuery || filterTag || filterAuthor || filterdate) {
      setResults(
        blogData.filter((blogPost) => {
          const searchRgx = new RegExp(escapeRegExp(searchQuery), "gi");
          const tagRgx = new RegExp(escapeRegExp(filterTag), "gi");
          const authorRgx = new RegExp(escapeRegExp(filterAuthor), "gi");
          const dateRgx = new RegExp(escapeRegExp(filterdate), "gi");
          const matchedTag = blogPost.tags
            .filter((tag) => tag != null)
            .map((t) => t.match(tagRgx));

          return (
            (blogPost.content?.match(searchRgx) ||
              blogPost.title?.match(searchRgx)) &&
            matchedTag.toString().match(tagRgx) &&
            blogPost.author?.match(authorRgx) &&
            blogPost.date?.match(dateRgx)
          );
        })
      );
      setIsShown(true);
    } else {
      setResults([]);
      setIsShown(false);
    }
  }, [blogData, filterAuthor, filterTag, filterdate, searchQuery]);

  const postList = postEdges.map(({ node }) => {
    const { frontmatter, fields, excerpt } = node;
    const { posttype, tags, cover, title, author } = frontmatter;
    const { slug, date } = fields;
    return {
      posttype,
      title,
      path: `${prefix}${slug}-${date
        .replace(/[-T:.Z]/g, "-")
        .substring(0, 10)}`,
      cover,
      tags,
      excerpt,
      date,
      author,
    };
  });

  return (
    <Layout title="Blog">
      <div className="index-container">
        <BlogSearchForm
          query={searchQuery}
          tag={filterTag}
          author={filterAuthor}
          date={filterdate}
          location={location}
          prefix={prefix}
        />
        {isShown && (
          <SearchResults query={searchQuery} results={results} type="blog" />
        )}
        {!isShown && <PostListing postList={postList} />}
      </div>
      <Row>
        {!isFirst && results.length === 0 && (
          <Col className="text-center m-4">
            <Link
              to={`${prefix}/${prevPage}`}
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
              to={`${prefix}/${nextPage}`}
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
}

/* eslint no-undef: "off" */
export const blogQuery = graphql`
  query blogQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
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
            tags
            posttype
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

export default BlogList;

export function Head() {
  return <SEO title={`Blog | ${config.siteTitle}`} />;
}
