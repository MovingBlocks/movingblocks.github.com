import React from "react";
import { Row, Col } from "reactstrap";
import { Link, graphql, useStaticQuery } from "gatsby";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Section from "../Section";
import PostListing from "../PostListing/PostListing";

function Index() {
  const data = useStaticQuery(graphql`
    query homePageQuery {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { frontmatter: { posttype: { eq: "blog" } } }
        limit: 3
      ) {
        edges {
          node {
            fields {
              slug
              date
            }
            excerpt(format: PLAIN, pruneLength: 120, truncate: true)
            timeToRead
            frontmatter {
              title
              date
              author
              tags
              posttype
              description
              cover {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);
  const recentPostEdges = data.allMarkdownRemark.edges;
  const recentPostList = recentPostEdges.map(({ node }) => {
    const { frontmatter, fields, excerpt } = node;
    const { posttype, tags, cover, title, author } = frontmatter;
    const { slug, date } = fields;
    return {
      posttype,
      title,
      path: `/blog${slug}`,
      cover,
      tags,
      excerpt,
      date,
      author,
    };
  });


  return (
    <section className="sect-home">
      <Row>
        <Col md="6">
          <h3>What is Terasology?</h3>
          <p className="p-title">
            An open source voxel world - imagine the possibilities!
          </p>
          <p className="p-description">
            The Terasology project was born from a Minecraft-inspired tech demo
            and is becoming a stable platform for various types of gameplay
            settings in a voxel world. The creators and maintainers are a
            diverse mix of software developers, designers, game testers, graphic
            artists, and musicians. We encourage others to join!
          </p>
          <div className="my-5">
            <button
              type="button"
              className="font-weight-bold btn btn-lg btn-success home-btn"
            >
              <Link to="/game" className="link-about">
                Learn More
              </Link>
            </button>
          </div>
        </Col>
        <Col md="6">
          <div className="index">
            <iframe
              src="https://www.youtube.com/embed/Wpa2aiadwE8"
              title="Terasology trailer"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
              style={{ border: "0px" }}
            />
          </div>
        </Col>
      </Row>

      <Section title="Recent News">
        <Col lg="12">
          <Row className="justify-content-center ">
            <PostListing postList={recentPostList} />
          </Row>
        </Col>

        <div className="d-flex justify-content-center mb-4">
          <div>
            <Link
              to="/blog"
              className="btn-primary home-btn-read-more-blog font-weight-bold"
            >
              Find More Blogs
              <FaRegArrowAltCircleRight
                style={{
                  fontSize: "28px",
                  marginBottom: "4px",
                  marginLeft: "6px",
                }}
              />
            </Link>
          </div>
        </div>
      </Section>
    </section>
  );
}

export default Index;
