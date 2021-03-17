import React from "react";
import "./Index.css";
import { Row, Col } from "reactstrap";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { CardImg } from "../../../node_modules/reactstrap/es/index";

const Index = () => {
  const data = useStaticQuery(graphql`
    query homePageQuery {
      allMarkdownRemark(
        sort: { fields: [fields___date], order: DESC }
        filter: { frontmatter: { posttype: { eq: "blog" } } }
        limit: 4
      ) {
        edges {
          node {
            fields {
              slug
              date
            }
            excerpt(format: PLAIN, pruneLength: 125, truncate: true)
            timeToRead
            frontmatter {
              title
              author
              tags
              description
              cover {
                publicURL
                childImageSharp {
                  sizes(maxWidth: 768) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const RecentPost = data.allMarkdownRemark.edges;
  return (
    <section className="sect-home">
      <Row>
        <Col md="12">
          <div>
            <h1 className="text-center">Welcome to Terasology</h1>
            <div className="container my-4">
              <div className="home-underline"></div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="7">
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
            <button className="font-weight-bold btn btn-lg btn-success button">
              <Link to="/game" className="link-about">
                Learn More
              </Link>
            </button>
          </div>
        </Col>
        <Col md="5">
          <div className="index">
            <iframe
              src="https://www.youtube.com/embed/Wpa2aiadwE8"
              title="Terasology trailer"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <h1 className="text-center">Recent News</h1>
          <div className="container my-4">
            <div className="home-underline"></div>
          </div>
        </Col>
      </Row>

      <Col lg="12">
        <Row className="justify-content-center ">
          {RecentPost.map(({ node }) => (
            <Col className="m-4" lg="5" md="8" sm="12">
              <Row className="row_shadow">
                <Col lg="12" md="12">
                  <Img
                    sizes={node.frontmatter.cover.childImageSharp.sizes}
                    alt={node.frontmatter.title}
                    style={{
                      position: "static",
                    }}
                  />
                </Col>
                <div className="my-4 ml-4">
                  <h4 className="text-center">{node.frontmatter.title}</h4>
                  <div>
                    <p className="font-weight-bold author text-center">
                      By: {node.frontmatter.author}
                    </p>
                  </div>
                  <p className="my-4">{node.excerpt}</p>

                  <div className="d-flex justify-content-center">
                    <div>
                      <Link
                        to={`/${`blog`}${node.fields.slug}`}
                        key={node.frontmatter.title}
                        className="btn-primary"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </Row>
            </Col>
          ))}
        </Row>
      </Col>
    </section>
  );
};

export default Index;
