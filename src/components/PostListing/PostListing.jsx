import React from "react";
import { Link } from "gatsby";
import { Badge, Row, Col } from "reactstrap";
import Img from "gatsby-image";
import "./PostListing.css";

export default ({ id, postEdges }) => {
  const getPostList = () => {
    const postList = [];
    postEdges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        desc: postEdge.node.frontmatter.description,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      });
    });
    return postList;
  };
  const postList = getPostList();
  return (
    <Col lg="12">
      <Row className="justify-content-center">
        {/* Your post list here. */
        postList.map((post) => (
          <Col className="ml-4 mr-4 mt-2 mb-2" lg="3" md="8" sm="12">
            <Row className="row_shadow h-100">
              <Col lg="12" md="12" className="p-0">
                <Img
                  sizes={post.cover.childImageSharp.sizes}
                  alt={post.title}
                />
                <div className="md-tag mt-3 ml-3">
                  <Badge>{post.tags}</Badge>
                </div>
              </Col>

              <div className="d-flex flex-column ml-3">
                <h5 className="mt-1">{post.title}</h5>
                <div className="mt-auto mr-2" lang="en">
                  <p className="word-break">{post.excerpt}</p>
                </div>

                <div className="mt-auto mb-4">
                  <Link
                    to={`/${id}${post.path}`}
                    key={post.title}
                    className="mt-auto btn-primary"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </Row>
          </Col>
        ))}
      </Row>
    </Col>
  );
};
