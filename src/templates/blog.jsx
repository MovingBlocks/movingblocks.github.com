import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

export default ({ data, pageContext: { blogCurrentPage, postsNumPages } }) => {
  const postEdges = data.allMarkdownRemark.edges;
  const prefix = "/blog/"
  const isFirst = blogCurrentPage === 1
  const isLast = blogCurrentPage === postsNumPages
  const prevPage = blogCurrentPage - 1 ===  1  ? "/" : (blogCurrentPage - 1).toString()
  const nextPage = (blogCurrentPage + 1).toString()
  
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <PostListing postEdges={postEdges} />
      {!isFirst && (
        <Link to={`${prefix}${prevPage}`} rel="prev">
          ← Previous Page
        </Link>
      )}
      {!isLast && (
        <Link to={`${prefix}${nextPage}`} rel="next">
          Next Page →
        </Link>
      )}
    </Layout>
  );
};

/* eslint no-undef: "off" */
export const blogQuery = graphql`
  query blogQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: {fileAbsolutePath: {regex: "/blog/.*\\.md$/"}}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
