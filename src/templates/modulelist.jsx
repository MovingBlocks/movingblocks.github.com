import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../layout";
import ModuleListing from "../components/ModuleListing/ModuleListing";
import SEO from "../components/SEO/SEO";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../components/SearchResult/SearchResult";
import config from "../../data/SiteConfig";
import moduleList from "../generated/result.json";

export default ({ data, pageContext: { moduleCurrentPage, moduleNumPages } },  props) => {
  const postEdges = data.allMarkdownRemark.edges;
  const DATA = moduleList;

  const prefix = "/modules/";
  const isFirst = moduleCurrentPage === 1;
  const isLast = moduleCurrentPage === moduleNumPages;
  const prevPage =
    moduleCurrentPage - 1 === 1 ? "/" : (moduleCurrentPage - 1).toString();
  const nextPage = (moduleCurrentPage + 1).toString();

  const [isShown, setIsShown] = useState(false);

  const [results, setResults] = useState([]);
  // eslint-disable-next-line react/destructuring-assignment
  let srcLocation = props.location;
  if (typeof window !== `undefined`) {
    // eslint-disable-next-line no-restricted-globals
    srcLocation = location.search;
  }
  const searchQuery = new URLSearchParams(srcLocation).get("keywords") || "";
  var filterTag = new URLSearchParams(srcLocation).get("filter") || "";
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  useEffect(() => {
    if (searchQuery || filterTag) {
      setResults(
        DATA.filter(module => {
          const searchRgx = new RegExp(escapeRegExp(searchQuery), "gi");
          const tagRgx = new RegExp(escapeRegExp(filterTag), "gi");
          return module.tags[0].match(tagRgx) && module.title.match(searchRgx);
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
        <Helmet title={config.siteTitle} />
        <SEO />
        <SearchForm query={searchQuery} filter={filterTag} />
        {isShown && (
          <SearchResults
            id="src"
            query={searchQuery}
            filter={filterTag}
            results={results}
          />
        )}
        {!isShown && <ModuleListing id="modules" postEdges={postEdges} />}
      </div>
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
export const moduleQuery = graphql`
  query moduleQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { posttype: { eq: "module" } } }
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
            cover {
              publicURL
              childImageSharp {
                sizes(maxWidth: 2000) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            date
          }
        }
      }
    }
  }
`;
