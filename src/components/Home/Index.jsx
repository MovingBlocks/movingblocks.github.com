import React from "react";
import { Row, Col, Button } from "reactstrap";
import { Link, graphql, useStaticQuery, withPrefix } from "gatsby";
import { FaRegArrowAltCircleRight, FaDiscord } from "react-icons/fa";
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
      path: `/blog${slug}-${date.replace(/[-T:.Z]/g, "-").substring(0, 10)}`,
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
          <p className="p-description text-justify">
            The Terasology project was born from a Minecraft-inspired tech demo
            in 2011. Over the years it has been a playground for different kinds
            of technical experiments and proof of concepts. The community
            strives to make Terasology a stable platform for various types of
            gameplay settings in a voxel world.
          </p>
          <Col className="my-5 justify-content-around">
            <Button type="button" color="primary" size="lg">
              <Link to="#about-us" className="link-about">
                Learn more
              </Link>
            </Button>
            <Button type="button" color="primary" size="lg">
              <Link
                to="https://discordapp.com/invite/Terasology"
                className="link-about"
              >
                Join our Discord <FaDiscord />
              </Link>
            </Button>
          </Col>
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
                The project was founded in 2011 by {`Benjamin "Begla" Glatzel `}
                while researching procedural terrain generation and effective
                rendering techniques. He succeeded in creating a minecraft-like
                demo engine, the foundation stone for what Terasology is today.
              </p>
              <p>
                We are always on the lookout for contributors with expertise in
                rendering, networking and concurrency, as well as in-game
                physics and AI technology.
              </p>
              <p>
                If you are interested in game engine development, come check out
                our{" "}
                <Link
                  to="/contribute#terasology-engine-and-module-land"
                  className="link-about"
                >
                  Terasology Engine & Module Land
                </Link>
                .
              </p>
            </HighlightBox>
          </Col>
          <Col md="12">
            <HighlightBox
              title="Modules & Gameplays"
              bgImage={withPrefix("/images/Quiet_Village.jpg")}
              align="end"
            >
              <p>
                From the ground up, Terasology was built to be very modular and
                support different kinds of gameplay ideas. We still host a large
                number of modules under the {`"Terasology" `}GitHub organization
                providing basic and advanced gameplay content as well as world
                generation options and technical libraries.
              </p>
              <p>
                Combining these modules allows to create very different kinds of
                gameplay in our voxel worlds. The possibilities are manifold and
                range from crafting- or trading-oriented survival over
                capture-the-flag to puzzle-style experiences and tower defenses.
              </p>
              <p>
                We especially appreciate expertise or interest in UI/UX, world
                generation or well-thought out gameplay mechanics, but also
                always have an open ear for crazy ideas for existing or new
                modules and gameplay content.
              </p>
              <p>
                If you are interested in gameplay development, come check out
                our{" "}
                <Link
                  to="/contribute#terasology-engine-and-module-land"
                  className="link-about"
                >
                  Terasology Engine & Module Land
                </Link>
                .
              </p>
            </HighlightBox>
          </Col>
          <Col md="12">
            <HighlightBox
              title="Community"
              bgImage={withPrefix("/images/Flowing_Water.jpg")}
            >
              <p>
                The Terasology community is a diverse mix of software
                developers, designers, game testers, graphic artists, musicians
                and other open source loving {`"Gooeys"`}. We value a positive,
                inclusive and respectful environment without harassment, attacks
                or inappropriate activities of any form.
              </p>
              <p>
                We encourage and appreciate contributions from everybody, and
                try to accept constructive criticism even by newcomers as
                gracefully and warmly as possible. and welcoming as possible to
                newcomers.
              </p>
              <p>
                If you want to talk to us or be the next in our group of Gooeys,
                come join us on our{" "}
                <Link
                  to="https://discordapp.com/invite/Terasology"
                  className="link-about"
                >
                  Terasology Discord
                </Link>
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
