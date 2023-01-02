import React from "react";
import { graphql } from "gatsby";
import { Col, Row } from "reactstrap";
import moment from "moment-timezone";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import MentorCards from "../components/Cards/MentorCards";

function Mentors({ data }) {
  const projectEdges = data.allTrelloCard.edges;
  const defaultAvatar = data.file;

  console.log(JSON.stringify(projectEdges, null, 2));
  const mentorList = projectEdges.map(({ node }) => {
    const { name, labels, custom_fields, childMarkdownRemark, childCardMedia } =
      node;
    const { html } = childMarkdownRemark;
    const avatar = childCardMedia ? childCardMedia.localFile : defaultAvatar;

    const tags = labels.map((l) => l.name);
    const githubProfile = custom_fields
      .filter((field) => field.idCustomField === "5eb71b3551de3a59ce8d9bd8")
      .map((field) => field.value.text);
    const timeZone = custom_fields
      .filter((field) => field.idCustomField === "5eb71b53f52d88487f550e83")
      .map((field) => field.value.text);
    const countryCode = custom_fields
      .filter((field) => field.idCustomField === "5eb71b7081a67c3b58ea67ed")
      .map((field) => field.value.text.toLowerCase());

    return { name, avatar, tags, html, githubProfile, timeZone, countryCode };
  });
  const getCountryName = new Intl.DisplayNames(["en"], { type: "region" });

  return (
    <Layout title="Mentors">
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
              country={getCountryName.of(`${mentor.countryCode}`)}
              flagUrl={`https://flagcdn.com/w40/${mentor.countryCode}.png`}
            />
          ))}
        </Row>
      </Col>
    </Layout>
  );
}

export default Mentors;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query mentorQuery {
    allTrelloCard(filter: { list_id: { eq: "5eb715b48caa18614425c25e" } }) {
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
    file(name: { eq: "profile-placeholder" }, ext: { eq: ".png" }) {
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
  return <SEO title={`Mentors | ${data.site.siteMetadata.title}`} />;
}
