import React from "react";
import { Row, Col } from "reactstrap";
import { graphql } from "gatsby";
import moment from "moment-timezone";
import Section from "../components/Section";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import Layout from "../layout";
import MentorCards from "../components/Cards/MentorCards";

function toCardData(trelloCard, defaultCover) {
  const { id, name: title, labels, childMarkdownRemark } = trelloCard;
  const { excerpt } = childMarkdownRemark;
  const posttype = "project";
  const tags = labels.map((l) => l.name);
  const cover = defaultCover;
  return { posttype, title, path: `/projects/${id}`, excerpt, tags, cover };
}

function ContributorPrograms({ data }) {
  const trelloCardEdges = data.allTrelloCard.edges;

  const defaultCover = data.projectCover;
  const availableProjects = trelloCardEdges
    .filter(({ node }) => node.list_id === "5c3aab0bd640fe19e4069de5")
    .map(({ node }) => toCardData(node, defaultCover));
  const ongoingProjects = trelloCardEdges
    .filter(({ node }) => node.list_id === "60ddd7cf64da4b3ee8c5a2e9")
    .map(({ node }) => toCardData(node, defaultCover));

  const defaultAvatar = data.profilePlaceholder;
  const mentorList = trelloCardEdges
    .filter(({ node }) => node.list_id === "5eb715b48caa18614425c25e")
    .map(({ node }) => {
      const {
        name,
        labels,
        custom_fields: customFields,
        childMarkdownRemark,
        childCardMedia,
      } = node;
      const { html } = childMarkdownRemark;
      const avatar = childCardMedia ? childCardMedia.localFile : defaultAvatar;

      const tags = labels.map((l) => l.name);
      const githubProfile = customFields.find(
        (field) => field.idCustomField === "5eb71b3551de3a59ce8d9bd8"
      )?.value.text;
      const timeZone = customFields.find(
        (field) => field.idCustomField === "5eb71b53f52d88487f550e83"
      )?.value.text;
      const countryCode = customFields
        .find((field) => field.idCustomField === "5eb71b7081a67c3b58ea67ed")
        ?.value.text.toLowerCase();

      return { name, avatar, tags, html, githubProfile, timeZone, countryCode };
    });

  return (
    <Layout title="Contributor Programs & Projects">
      <Section tag="h3" title="GSoC & TSoC">
        <Row className="justify-content-center align-items-start">
          <Col md="5" className="text-justify student-programs-content">
            <b>Google Summer of Code (GSoC) </b>
            is a global, online program focused on bringing new contributors
            into open source software development. GSoC Contributors work with
            an open source organization on a 12+ week programming project under
            the guidance of mentors.
            <br />
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
            is similar to Google Summer of Code (GSoC). It is sponsored by The
            Terasology Foundation and comes with more flexibility than GSoC. It
            allows for projects tailored to your skill level and availability.
            Lower stipend than GSoC.
            <br />
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
      {ongoingProjects.length !== 0 ? (
        <Section tag="h3" title="Ongoing Projects">
          <PostListing postList={ongoingProjects} />
        </Section>
      ) : null}
      {availableProjects.length !== 0 ? (
        <Section tag="h3" title="Available Projects">
          <PostListing postList={availableProjects} />
        </Section>
      ) : null}
      <Section tag="h3" title="Mentors">
        <Col lg="12" className="card-spacing">
          <Row className="justify-content-center">
            {mentorList.map((mentor) => (
              <MentorCards
                name={mentor.name}
                avatar={mentor.avatar}
                tags={mentor.tags}
                html={mentor.html}
                githubProfile={mentor.githubProfile}
                timeZone={moment
                  .tz(moment(), `${mentor.timeZone}`)
                  .format("HH:mm [(GMT] Z[)]")}
                flagUrl={`https://flagcdn.com/w40/${mentor.countryCode}.png`}
              />
            ))}
          </Row>
        </Col>
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
          custom_fields {
            idCustomField
            value {
              text
            }
          }
          childMarkdownRemark {
            excerpt
            html
          }
          childCardMedia {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
    projectCover: file(name: { eq: "defaultCardcover" }, ext: { eq: ".jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    profilePlaceholder: file(
      name: { eq: "profile-placeholder" }
      ext: { eq: ".png" }
    ) {
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
  return (
    <SEO
      title={`Contributor Programs & Projects | ${data.site.siteMetadata.title}`}
    />
  );
}
