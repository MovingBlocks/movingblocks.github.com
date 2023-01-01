import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

export default class Project extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { id } = pageContext;
    const project = data.trelloCard;
    const { name, childrenMarkdownRemark } = project;
    const { html, excerpt } = childrenMarkdownRemark;
    return (
      <Layout title={name}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div className="post-meta">
          <SocialLinks
            title={name}
            excerpt={excerpt}
            path={`/projects/${id}`}
          />
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ProjectsById($id: String!) {
    trelloCard(id: { eq: $id }) {
      name
      childrenMarkdownRemark {
        html
        excerpt
      }
    }
  }
`;

export function Head({ data, pageContext }) {
  return (
    <SEO
      pathname={pageContext.id}
      title={`${data.trelloCard.name} | ${config.siteTitle}`}
    />
  );
}
