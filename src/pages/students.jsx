import React, { useState, useEffect } from "react";
import { Row } from "reactstrap";
import "react-multi-carousel/lib/styles.css";
import Section from "../components/Section";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import { graphql } from "gatsby";
import Layout from "../layout";

function StudentPrograms({ data }) {
  const prefix = "/projects";
  const projectEdges = data.allTrelloCard.edges;

  const availableProjects = projectEdges.filter((node) => {
    node.list_id === "5c3aab0bd640fe19e4069de5"
  }).map((node) => {
    console.log(projectEdges)
    const { name, childrenMarkdownRemark } = node;
    const { excerpt } = childrenMarkdownRemark;
    const posttype = "project";
    return { posttype, title: name, excerpt };
  });
  const ongoingProjects = projectEdges.filter((node) => {
    node.list_id === "60ddd7cf64da4b3ee8c5a2e9"
  }).map((node) => {
    const { name, childrenMarkdownRemark } = node;
    const { excerpt } = childrenMarkdownRemark;
    const posttype = "project";
    return { posttype, title: name, excerpt };
  });

  return (
    <Layout title="Student Programs">
      <Section
        tag="h3"
        title="GSoC & TSoC"
      >
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
        <PostListing prefix={prefix} postList={availableProjects} />
      </Section>
      <Section tag="h3" title="Ongoing Projects">
        <PostListing prefix={prefix} postList={ongoingProjects} />
      </Section>
    </Layout>
  );
}
export default StudentPrograms;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query projectQuery {
    allTrelloCard {
      edges {
        node {
          name
          childrenMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;

export function Head() {
  return <SEO title={`Student Programs | ${config.siteTitle}`} />;
}
