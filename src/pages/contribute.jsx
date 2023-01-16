import React from "react";
import { graphql, Link, useMemo } from "gatsby";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from "reactstrap";
import moment from "moment";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import PostListing from "../components/PostListing/PostListing";
import Section from "../components/Section";
import SEO from "../components/SEO/SEO";
import Layout from "../layout";
import Tags from "../components/common/Tags";

function GettingStarted({ data }) {
  function toCardData(project, defaultCover) {
    const { id, name: title, labels, childMarkdownRemark } = project;
    const { excerpt } = childMarkdownRemark;
    const posttype = "project";
    const tags = labels.map((l) => l.name);
    const cover = defaultCover;
    return { posttype, title, path: `/projects/${id}`, excerpt, tags, cover };
  }

  const defaultCover = data.projectCover;
  const ongoingProjects = data.ongoingProjects.nodes.map((project) =>
    toCardData(project, defaultCover)
  );

  const moduleIssues = data.moduleIssues.nodes
    .filter((module) => module.issues.nodes.length !== 0)
    .flatMap((module) => {
      const { name, url: moduleUrl, issues } = module;
      return issues.nodes.map((issue) => {
        const { title, author, labels, updatedAt, url } = issue;
        const { login } = author;
        const { nodes } = labels;
        const tags = nodes.flatMap((node) => node.name);
        return {
          module: name,
          moduleUrl,
          title,
          author: login,
          tags,
          date: updatedAt,
          url,
        };
      });
    })
    .sort((a, b) =>
      new Date(a.date).getTime() <= new Date(b.date).getTime() ? 1 : 0
    );

  const githubIconSize = useMemo(() => ({ size: "4em" }), []);
  return (
    <Layout title="Getting Contributors Started">
      <Row className="justify-content-center align-items-start">
        <Col md="8" className="text-justify">
          <p>
            All beginnings are difficult, but the below mentioned learning
            resources for{" "}
            <Link className="text-success" to="#terasology-workspace-setup">
              Workspace Setup
            </Link>
            {` and `}
            <Link
              className="text-success"
              to="#terasology-engine-and-module-land"
            >
              Terasology Engine & Module Land
            </Link>{" "}
            should help you to get started and set yourself up for success.
          </p>
          <p>
            To get started with your first contribution, you will also find our
            current{" "}
            <Link className="text-success" to="#hot-topics">
              Hot Topics
            </Link>
            {` below that you can consider joining.`}
          </p>
          <p>
            Make sure to also join our{" "}
            <a
              className="text-success font-weight-bold"
              href="https://discordapp.com/invite/Terasology"
            >
              Discord
            </a>{" "}
            to get answers to your questions and help with any issues you might
            face.
          </p>
        </Col>
      </Row>
      <Section tag="h3" title="Terasology Workspace Setup">
        <Row className="justify-content-center align-items-start">
          <Col md="7" className="text-justify">
            <p>
              Setting up your Terasology Workspace is the first step in your
              journey as a Terasology contributor. Follow the Contributor
              Quickstart and make sure you understand our multi-repo setup.
            </p>
            <p>
              If you are new to Git and GitHub, we also recommend to especially
              get familiar with the Git branching basics and GitHub forking
              workflow.
            </p>
            <p>
              Further, remember that all submissions must be licensed under
              Apache License, Version 2.0, that we encourage certain best
              practices regarding code style, commits and pull requests, and
              that we maintain a code of conduct.
            </p>
          </Col>
          <Col md="3" className="text-justify">
            <ul>
              <li>
                <a
                  className="text-success"
                  href="https://github.com/MovingBlocks/Terasology/wiki/Contributor-Quick-Start"
                >
                  Contributor Quick Start
                </a>
              </li>
              <li>
                <a
                  className="text-success"
                  href="https://github.com/MovingBlocks/Terasology/wiki/Terasology's-Multi-Repo-Workspace"
                >
                  Multi-Repo Workspace
                </a>
              </li>
              <li>
                <a
                  className="text-success"
                  href="https://learngitbranching.js.org/"
                >
                  Learn Git Branching
                </a>
              </li>
              <li>
                <a
                  className="text-success"
                  href="https://docs.github.com/en/github/collaborating-with-pull-requests/working-with-forks/about-forks"
                >
                  Working with Forks
                </a>
              </li>
              <li>
                <a
                  className="text-success"
                  href="https://www.apache.org/licenses/LICENSE-2.0"
                >
                  Apache License, Version 2.0
                </a>
              </li>
              <li>
                <a
                  className="text-success"
                  href="https://github.com/MovingBlocks/Terasology/wiki/Code-Conventions"
                >
                  Code Style Conventions
                </a>
              </li>
              <li>
                <a
                  className="text-success"
                  href="https://github.com/MovingBlocks/Terasology/blob/develop/.github/CONTRIBUTING.md"
                >
                  Commits & PRs
                </a>
              </li>
              <li>
                <a
                  className="text-success"
                  href="https://github.com/MovingBlocks/Terasology/blob/develop/docs/CODE_OF_CONDUCT.md"
                >
                  Code of Conduct
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Section>
      <Section tag="h3" title="Terasology Engine & Module Land">
        <Row className="justify-content-center align-items-start">
          <Col md="8" className="text-justify">
            <p>
              We recommend to start contributing in Module Land rather than the
              Terasology Engine, especially if you do not have a lot of
              experience with Java or have not worked with an already existing
              and big codebase yet. However, the following concepts are
              important for both areas:
            </p>
            <ul>
              <li>
                <a
                  className="text-success"
                  href="https://github.com/MovingBlocks/Terasology/wiki/Entity-System-Architecture"
                >
                  Entity Component System (ECS)
                </a>
              </li>
              <li>
                <a
                  className="text-success"
                  href="https://github.com/Terasology/TutorialAssetSystem/wiki"
                >
                  Asset System
                </a>
              </li>
            </ul>
          </Col>
          <Col md="5" className="text-justify">
            <p>
              Contributing to <b>{`Terasology's Module Land`}</b> requires basic
              Java knowledge and interest in UI/UX, world generation or gameplay
              mechanics. Browse through our existing modules, see what we
              already have and what we might still be missing.
            </p>
            <p>
              To get started, you should make yourself familiar with module
              development and testing. Furthermore, you should to learn about
              module dependencies and world generation.
            </p>
            <ul>
              <li>
                <a
                  className="text-success"
                  href="https://github.com/Terasology"
                >
                  {`Terasology's Module Land`}
                </a>
              </li>
              <li>
                <a
                  className="text-success"
                  href="https://github.com/MovingBlocks/Terasology/wiki/Developing-Modules"
                >
                  Developing Modules
                </a>
              </li>
              <li>
                <a
                  className="text-success"
                  href="https://github.com/MovingBlocks/Terasology/wiki/Testing-Modules"
                >
                  Testing Modules
                </a>
              </li>
              <li>
                <a
                  className="text-success"
                  href="https://github.com/MovingBlocks/Terasology/wiki/Module-Dependencies"
                >
                  Module Dependencies
                </a>
              </li>
              <li>
                <a
                  className="text-success"
                  href="https://github.com/Terasology/TutorialWorldGeneration/wiki"
                >
                  World Generation Tutorial
                </a>
              </li>
            </ul>
            <p>
              Jump below to our{" "}
              <Link
                to="#good-first-module-land-issues"
                className="text-success"
              >
                <b>Good First Issues in Module Land</b>
              </Link>
              .
            </p>
          </Col>
          <Col md="5" className="text-justify">
            <p>
              Contributing to the <b>Terasology Engine</b> requires being very
              comfortable with Java and ideally having expertise in game engine
              topics like rendering, networking and concurrency, as well as
              in-game physics and AI technology.
            </p>
            <p>
              To get started, you should make yourself familiar with the
              codebase itself and any specific areas within it that match your
              interest. Most of the engine-related documentation is in-code.
            </p>
            <ul>
              <li>
                <a
                  className="text-success"
                  href="https://github.com/MovingBlocks/Terasology/wiki/Serialization-Overview"
                >
                  Serialization
                </a>
              </li>
              <li>
                <a
                  className="text-success"
                  href="https://github.com/MovingBlocks/Terasology/tree/develop/engine/src/main/java/org/terasology/engine/network"
                >
                  Network Package
                </a>
              </li>
              <li>
                <a
                  className="text-success"
                  href="https://github.com/MovingBlocks/Terasology/tree/develop/engine/src/main/java/org/terasology/engine/persistence"
                >
                  Persistence Package
                </a>
              </li>
              <li>
                <a
                  className="text-success"
                  href="https://github.com/MovingBlocks/Terasology/tree/develop/engine/src/main/java/org/terasology/engine/physics"
                >
                  Physics Package
                </a>
              </li>
              <li>
                <a
                  className="text-success"
                  href="https://github.com/MovingBlocks/Terasology/tree/develop/engine/src/main/java/org/terasology/engine/rendering"
                >
                  Rendering Package
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Section>
      <Section tag="h3" title="Tasks & Topics">
        <Row className="justify-content-center align-items-start">
          <Col md="8" className="text-justify">
            <p>
              While you are free to roam our codebase and contribute in any area
              you would like, below are some tasks and topics that we encourage
              you to consider. Their scope and feasibility are potentially more
              realistic than a goal you might set for yourself without knowing
              the depths and intricacies of our codebase.
            </p>
          </Col>
        </Row>
        {ongoingProjects.length !== 0 ? (
          <Section tag="h4" title="Hot Topics">
            <Row className="justify-content-center align-items-start">
              <Col md="8" className="text-justify">
                <p>
                  Find our currently ongoing efforts below. Come talk to us on
                  our{" "}
                  <a
                    className="text-success font-weight-bold"
                    href="https://discordapp.com/invite/Terasology"
                  >
                    Discord
                  </a>{" "}
                  if you would like to join one of them. You can also propose
                  your own project ideas.
                </p>
              </Col>
            </Row>
            <PostListing postList={ongoingProjects} />
          </Section>
        ) : null}
        <Section tag="h4" title="Good First Module Land Issues">
          <Row className="justify-content-center align-items-start">
            <Col md="8" className="text-justify justify-content-center">
              <p>
                Find some of our module-land issues below. If you would like to
                work on one of them, start a draft PR for it. You can also view
                the full list on{" "}
                <a
                  className="text-success font-weight-bold"
                  href="https://github.com/search?q=org%3ATerasology+label%3A%22Good+First+Issue%22+state%3Aopen&type=Issues&ref=advsearch&l=&l="
                >
                  GitHub
                </a>
                .
              </p>
            </Col>
          </Row>
          <Col lg="12" className="card-spacing">
            {moduleIssues
              .slice(0, 10)
              .map(({ module, moduleUrl, title, tags, author, url, date }) => (
                <Row className="justify-content-start align-items-start">
                  <Card
                    className="row_shadow h-100 md-12 my-3"
                    style={{ width: "100%" }}
                  >
                    <a
                      href={moduleUrl}
                      className="btn-success"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <CardHeader>{module}</CardHeader>
                    </a>
                    <a
                      href={url}
                      className="btn-light"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Row className="justify-content-start align-items-center">
                        <Col
                          md="1"
                          className="ml-5 pt-0 pb-2 d-none d-md-block"
                        >
                          <div>
                            <IconContext.Provider value={githubIconSize}>
                              <FaGithub />
                            </IconContext.Provider>
                          </div>
                        </Col>
                        <Col md="10" className="pt-0 pb-2">
                          <CardBody>
                            {tags ? (
                              <CardSubtitle tag="h7">
                                <Tags tags={tags} />
                              </CardSubtitle>
                            ) : (
                              ""
                            )}
                            <CardTitle tag="h5" className="mt-3">
                              {title}
                            </CardTitle>
                            {author ? (
                              <CardSubtitle className="text-muted">
                                <b>Author:</b> {author}
                              </CardSubtitle>
                            ) : (
                              ""
                            )}
                            {date ? (
                              <CardSubtitle className="text-muted">
                                <b>Last updated on: </b>
                                {moment(date).format("MMMM DD, YYYY")}
                              </CardSubtitle>
                            ) : (
                              ""
                            )}
                          </CardBody>
                        </Col>
                      </Row>
                    </a>
                  </Card>
                </Row>
              ))}
          </Col>
        </Section>
      </Section>
    </Layout>
  );
}
export default GettingStarted;

export const pageQuery = graphql`
  query pageQuery {
    ongoingProjects: allTrelloCard(
      filter: { list_id: { eq: "60ddd7cf64da4b3ee8c5a2e9" } }
      sort: { index: ASC }
    ) {
      nodes {
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
    moduleIssues: allTerasologyModule {
      nodes {
        name
        url
        issues {
          nodes {
            id
            title
            author {
              login
            }
            labels {
              nodes {
                name
              }
            }
            updatedAt
            url
          }
        }
      }
    }
    projectCover: file(name: { eq: "defaultCardcover" }, ext: { eq: ".jpg" }) {
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
      title={`Getting Contributors Started | ${data.site.siteMetadata.title}`}
    />
  );
}
