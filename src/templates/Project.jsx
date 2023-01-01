import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

export default class Project extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { id, slug } = pageContext;
    const project = data.trelloCard;
    return (
      <Layout title={project.name}>
        <div dangerouslySetInnerHTML={{ __html: project.childrenMarkdownRemark.html }} />
        <div className="post-meta">
          <SocialLinks postPath={`/projects${slug}`} postNode={project} />
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ProjectsBySlug($id: String!) {
    trelloCard(id: { eq: $id }) {
      name
      childrenMarkdownRemark {
        html
      }
    }
  }
`;

export function Head({ data, pageContext }) {
  return (
    <SEO
      pathname={pageContext.slug}
      title={`${data.trelloCard.name} | ${config.siteTitle}`}
    />
  );
}
