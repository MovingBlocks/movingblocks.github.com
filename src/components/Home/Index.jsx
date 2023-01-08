import React from "react";
import { Row, Col } from "reactstrap";
import { Link, graphql, useStaticQuery, withPrefix } from "gatsby";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Section from "../Section";
import PostListing from "../PostListing/PostListing";
import HighlightBox from "./HighlightBox";

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
              <Link to="#about" className="link-about">
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
          <Row className="d-flex justify-content-center mb-4">
            <Link
              to="/blog"
              className="btn-primary home-btn-read-more-blog font-weight-bold"
            >
              Find More Blogs
              <FaRegArrowAltCircleRight
                style={{
                  fontSize: "24px",
                  marginLeft: "0.5rem",
                }}
              />
            </Link>
          </Row>
        </Col>
      </Section>

      <Section title="About Us">
        <Row>
          <Col md="12">
            <HighlightBox
              title="History"
              bgImage={withPrefix("/images/Light_at_the_End_of_the_Tunnel.jpg")}
            >
              <p>
                Founded in 2011 by {`Benjamin "Begla" Glatzel`} while
                researching procedural terrain generation and effective
                rendering techniques, He succeded in creating a minecraft like
                demo From the ground up, Terasology was built to be a super
                hackable and modular game. We host a large number of modules
                under the Terasology organization and many more which are
                maintained by individual enthusiasts. We welcome new ideas, both
                crazy and well thought-out for modules and game extensions from
                anyone and everyone, so feel free to talk to us on our{" "}
                <a
                  className="text-white font-weight-bold"
                  href="https://discordapp.com/invite/Terasology"
                >
                  Discord
                </a>
                .
              </p>
            </HighlightBox>
          </Col>
          <Col md="12">
            <HighlightBox
              title="Modding API"
              bgImage={withPrefix("/images/Quiet_Village.jpg")}
              align="end"
            >
              <p>
                {`Terasology's`} engine uses a whitelisting approach to expose
                an API for modules using two primary methods and a rarely needed
                third one:
              </p>
              <ul className="text-left">
                <li>Classes or packages marked with the @API annotation</li>
                <li>
                  Classes or packages in the basic whitelist defined in
                  ExternalApiWhitelist.java
                </li>
                <li>
                  Rarely blocks of code in the engine may be hit in a way
                  requiring use of AccessController.doPrivileged(...) usually
                  module authors do not need to worry about this but once in a
                  while it could explain something quirky
                </li>
              </ul>
            </HighlightBox>
          </Col>
          <Col md="12">
            <HighlightBox
              title="Community"
              bgImage={withPrefix("/images/Colored_Torches.jpg")}
            >
              <p>
                The creators and maintainers are a diverse mix of software
                developers, designers, game testers, graphic artists, musicians
                and open source loving high schoolers. We encourage and
                appreciate contributions from everybody, and try to be as warm
                and welcoming as possible to newcomers. If you have any
                questions or if you just want to chat use this invite link for
                our{" "}
                <a
                  className="text-white font-weight-bolder"
                  href="https://discordapp.com/invite/Terasology"
                >
                  Discord
                </a>
                .
              </p>
            </HighlightBox>
          </Col>
        </Row>
      </Section>
    </section>
  );
}

export default Index;
