import React from "react";
import { Row, Col } from "reactstrap";
import { graphql } from "gatsby";
import Section from "../components/Section";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import Layout from "../layout";

function toCardData(trelloCard, defaultCover) {
  const { id, name: title, labels, childMarkdownRemark } = trelloCard;
  const { excerpt } = childMarkdownRemark;
  const posttype = "project";
  const tags = labels.map((l) => l.name);
  const cover = defaultCover;
  return { posttype, title, path: `/projects/${id}`, excerpt, tags, cover };
}

function ContributorPrograms({ data }) {
  const defaultCover = data.file;

  const projectEdges = data.allTrelloCard.edges;

  const availableProjects = projectEdges
    .filter(({ node }) => node.list_id === "5c3aab0bd640fe19e4069de5")
    .map(({ node }) => toCardData(node, defaultCover));
  const ongoingProjects = projectEdges
    .filter(({ node }) => node.list_id === "60ddd7cf64da4b3ee8c5a2e9")
    .map(({ node }) => toCardData(node, defaultCover));

  return (
    <Layout title="Contributor Programs & Projects">
      <Section tag="h3" title="GSoC & TSoC">
        <Row className="justify-content-center align-items-start">
          <Col md="5" className="text-justify student-programs-content">
            <b>Google Summer of Code (GSoC) </b>
            is a global, online program focused on bringing new contributors
            into open source software development. GSoC Contributors work with
            an open source organization on a 12+ week programming project
            under the guidance of mentors.<br />
            For more information visit{" "}
            <a
              className="text-success font-weight-bold"
              href="https://summerofcode.withgoogle.com/"
            >
              Google Summer of Code
            </a>
            .
          </Col>
          <Col md="5" className="text-justify student-programs-content">
            <b>Terasology Summer of Code (TSoC) </b>
            is similar to Google Summer of Code (GSoC). It is sponsored by
            The Terasology Foundation and comes with more flexibility than GSoC.
            It allows for projects tailored to your skill level and availability.
            Lower stipend than GSoC.<br />
            For more information join our{" "}
            <a
              className="text-success font-weight-bold"
              href="https://discordapp.com/invite/Terasology"
            >
              Discord
            </a>
            .
          </Col>
        </Row>
      </Section>
      <Section tag="h3" title="Available Projects">
        <PostListing postList={availableProjects} />
      </Section>
      <Section tag="h3" title="Ongoing Projects">
        <PostListing postList={ongoingProjects} />
      </Section>
    </Layout>
  );
}
export default ContributorPrograms;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query projectQuery {
    allTrelloCard(sort: { index: ASC }) {
      edges {
        node {
          id
          list_id
          name
          labels {
            name
          }
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
    file(name: { eq: "defaultCardcover" }, ext: { eq: ".jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export function Head({ data }) {
  return <SEO title={`Contributor Programs & Projects | ${data.site.siteMetadata.title}`} />;
}
