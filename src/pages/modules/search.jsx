import React from "react";
import { graphql } from "gatsby";
import { Row } from "reactstrap";
import SEO from "../../components/SEO/SEO";
import Layout from "../../layout";
import ModuleListing from "../../components/modules/ModuleListing";
import withLocation from "../../components/common/withLocation";
import useJsSearch from "./useJsSearch"

export function Head({ data: { site } }) {
  return <SEO title={`Modules | ${site.metadata.title}`} />;
}

function Search({ data, pageContext, searchParams }) {
  const allModules = data.modules.nodes;

  // build search index for all modules
  const { search: doSearch } = useJsSearch(allModules);

  const tags = searchParams.get("tags")?.split(",").filter(x => x) || [];
  const term = searchParams.get("term") || "";

  // filter based on searched term
  const searchResults = (term ? doSearch(term) : allModules);
  // filter based on tags
  const modules =  searchResults.filter(m => tags.every(t => m.moduleTxt.tags.includes(t)))

  return (
    <Layout title="Modules">
      <div className="module-container">
        <Row className="justify-content-center">
          <ModuleListing
            defaultCover={data.defaultCover}
            modules={modules}
          />
        </Row>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query AllModules {
    modules: allTerasologyModule {
      nodes {
        name
        description
        url
        moduleTxt {
          description
          tags
        }
      }
    }
    defaultCover: file(relativePath: { eq: "logos/defaultCardcover.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    site {
      metadata: siteMetadata {
        title
      }
    }
  }
`;

export default withLocation(Search);
