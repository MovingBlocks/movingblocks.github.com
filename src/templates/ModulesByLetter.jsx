import React from "react";
import { graphql } from "gatsby";
import { Row } from "reactstrap";
import SEO from "../components/SEO/SEO";
import Layout from "../layout";
import ModuleListing from "../components/modules/ModuleListing";
import ModulePagination from "../components/modules/ModulePagination";


export function Head({ data: { site } }) {
  return <SEO title={`Modules | ${site.metadata.title}`} />;
}

function ModulesByLetter({ data, pageContext }) {
  const { letter, availableLetters } = pageContext;

  return (
    <Layout title="Modules">
      <div className="module-container">
        <Row className="justify-content-center">
          <ModulePagination
            currentLetter={letter}
            availableLetters={availableLetters}
          />
        </Row>
        <Row>
          <ModuleListing
            modules={data.modules.nodes}
            defaultCover={data.defaultCover}
          />
        </Row>
        <Row className="justify-content-center">
          <ModulePagination
            currentLetter={letter}
            availableLetters={availableLetters}
          />
        </Row>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ModulesForLetter($regex: String!) {
    modules: allTerasologyModule(filter: { name: { regex: $regex } }) {
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

export default ModulesByLetter;
