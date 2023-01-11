import React from "react";
import { graphql, Link } from "gatsby";
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from "reactstrap";
import moment from "moment";
import { FaGithub } from "react-icons/fa";
import Section from "../components/Section";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import Layout from "../layout";
import Tags from "../components/common/Tags";
import gitHubLogo from "../../static/logos/github.svg";

function GettingStarted({ data }) {
  function toCardData(project, defaultCover) {
    console.log(project);
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
      return issues.nodes.map(( issue ) => {
        const { title, author, labels, updatedAt, url } = issue;
        const { login } = author;
        const { nodes } = labels;
        const tags = nodes.flatMap((node) => node.name)
        return { module: name, moduleUrl, title, author: login, tags, date: updatedAt, url };
      });
    })
    .sort((a, b) => { return new Date(a.date).getTime() <= new Date(b.date).getTime() ? 1 : 0; });

  return (
    <Layout title="Getting Contributors Started">
      <Row className="justify-content-center align-items-start">
        <Col md="8" className="text-justify">
          <p>
            All beginnings are difficult, but the below mentioned learning
            resources for{" "}
            <Link className="text-success" to="#setup">
              Workspace Setup
            </Link>
            {` and `}
            <Link className="text-success" to="#engine-modules">
              Terasology's Engine & Module Land
            </Link>{" "}
            should help you to get started and set yourself up for success.
          </p>
          <p>
            To get started with your first contribution, you'll also find{" "}
            <Link className="text-success" to="#ongoing">
              Ongoing Projects
            </Link>
            {` to join, as well as `}
            <Link className="text-success" to="#module-issues">
              Good First Module Land Issues
            </Link>
            {` and `}
            <Link className="text-success" to="#engine-issues">
              Good First Engine Issues
            </Link>{" "}
            to take on individually further below.
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
      <Section tag="h3" id="setup" title="Terasology Workspace Setup">
        <Row className="justify-content-center align-items-start">
          <Col md="7" className="text-justify">
            <p>
              Setting up your Terasology Workspace is the first step in your
              journey as a Terasology contributor. Follow the Contributor
              Quickstart and make sure you understand our multi-repo setup.
            </p>
            <p>
              If you're new to Git and GitHub, we also recommend to especially
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
                  href="http://www.apache.org/licenses/LICENSE-2.0"
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
      <Section
        tag="h3"
        id="engine-modules"
        title="Terasology's Engine & Module Land"
      >
        <Row className="justify-content-center align-items-start">
          <Col md="8" className="text-justify">
            <p>
              We recommend to start contributing in Terasology's Module Land
              rather than the Terasology Engine, especially if you don't have a
              lot of experience with Java or have not worked with an already
              existing and big codebase yet. However, the following concepts are
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
              Contributing to <b>Terasology's Module Land</b> requires basic
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
                  Terasology's Module Land
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
              <Link to="#moduleIssues" className="text-success">
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
              <li>
                <a
                  className="text-success"
                  href="https://github.com/MovingBlocks/Terasology/issues?q=is%3Aopen+is%3Aissue+label%3A%22Good+First+Issue%22"
                >
                  Good First Engine Issues
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Section>
      <Section tag="h3" title="Tasks & Projects">
        <Row className="justify-content-center align-items-start">
          <Col md="10" className="text-justify">
            <p>
              While you are free to roam our codebase and contribute in any area
              you'd like, below are some tasks and projects that we encourage
              you to consider. Their scope and feasibility are potentially more
              realistic than a goal you might set for yourself without knowing
              the depths and intricacies of our codebase.
            </p>
          </Col>
        </Row>
        {ongoingProjects.length !== 0 ? (
          <Section tag="h4" id="ongoing" title="Ongoing Projects">
            <Row className="justify-content-center align-items-start">
              <Col md="8" className="text-justify">
                <p>
                  Find our ongoing projects below. Come talk to us on our{" "}
                  <a
                    className="text-success font-weight-bold"
                    href="https://discordapp.com/invite/Terasology"
                  >
                    Discord
                  </a>{" "}
                  if you'd like to join one of them. You can also propose your
                  own project ideas.
                </p>
              </Col>
            </Row>
            <PostListing postList={ongoingProjects} />
          </Section>
        ) : null}
        <Section
          tag="h4"
          id="moduleIssues"
          title="Good First Module Land Issues"
        >
          <Row className="justify-content-center align-items-start">
            <Col md="8" className="text-justify justify-content-center">
              <p>
                Find our module-land issues below. If you'd like to work on one of them, 
                start a draft PR for it. You can also view them on{" "}
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
            {moduleIssues.map(
              ({ module, moduleUrl, title, tags, author, url, date }) => (
                <Row className="justify-content-start align-items-start">
                  <Card className="row_shadow h-100 md-12 my-3" style={{ width: '100%' }}>
                    <a href={moduleUrl} className="btn-success" target="_blank" rel="noreferrer">
                      <CardHeader>
                        {module}
                      </CardHeader>
                    </a>
                    <a href={url} className="btn-light" target="_blank" rel="noreferrer">
                      <Row className="justify-content-start align-items-center">
                        <Col md="1" className="ml-5 pt-0 pb-2">
                          <img src={gitHubLogo} class="img-fluid rounded-start" alt="Visit on GitHub" />
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
                                <b>Last updated on: </b>{moment(date).format("MMMM DD, YYYY")}
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
              ))
            }
          </Col>
        </Section>
      </Section>
    </Layout>
  );
}
export default GettingStarted;

export const pageQuery = graphql`
  query projectQuery {
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
