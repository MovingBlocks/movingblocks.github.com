import React from "react";
import { Row } from "reactstrap";
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

function StudentPrograms({ data }) {
  const defaultCover = data.file;

  const projectEdges = data.allTrelloCard.edges;

  const availableProjects = projectEdges
    .filter(({ node }) => node.list_id === "5c3aab0bd640fe19e4069de5")
    .map(({ node }) => toCardData(node, defaultCover));
  const ongoingProjects = projectEdges
    .filter(({ node }) => node.list_id === "60ddd7cf64da4b3ee8c5a2e9")
    .map(({ node }) => toCardData(node, defaultCover));

  return (
    <Layout title="Student Programs">
      <Section tag="h3" title="GSoC & TSoC">
        <Row className="justify-content-center">
          <div className="col-md-10">
            <div className="text-center  student-programs-content">
              <b>Google Summer of Code (GSoC) </b>
              is a global program focused on bringing more student developers
              into open source software development. Every year more than 1200
              students are accepted. Accepted students work with a mentor and
              become a part of the open source community. Many become lifetime
              open source developers. Spend your summer break writing code and
              learning about open source development while earning a stipend.
              For more information visit{" "}
              <a
                className="text-success font-weight-bold"
                href="https://summerofcode.withgoogle.com/"
              >
                Google Summer of Code
              </a>
              .
            </div>
            <div className="text-center mt-4 student-programs-content">
              <b>Terasology Summer of Code (TSoC) </b>
              is similar as Google Summer of Code (GSoC). It is sponsored by
              Terasology with different timeline then GSoC, do half of work,
              take a break for exams and other thing and then do second half
              work. Lower stipend than GSoC. For more information join our{" "}
              <a
                className="text-success font-weight-bold"
                href="https://discordapp.com/invite/Terasology"
              >
                Discord
              </a>
              .
            </div>
          </div>
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
export default StudentPrograms;

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
  return <SEO title={`Student Programs | ${data.site.siteMetadata.title}`} />;
}
