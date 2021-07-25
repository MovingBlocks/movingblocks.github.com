import React from "react";
import { Link } from "gatsby";
import { Badge, Row, Col } from "reactstrap";

import Cards from "../Cards/Cards.jsx";

const PostListing = ({ id, postEdges }) => {
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
        ddate: postEdge.node.frontmatter.ddate,
        author: postEdge.node.frontmatter.author,
      });
    });
    return postList;
  };
  const postList = getPostList();
  return (
    <Col lg="12" className="card-spacing">
      <Row className="justify-content-center">
        {/* Your post list here. */
        postList.map((post) => (
          <Cards
            title={post.title}
            path={`/${id}${post.path}`}
            cover={post.cover.childImageSharp}
            tags={post.tags}
            excerpt={post.excerpt}
            author={post.author}
            ddate={post.ddate}
          />
        ))}
      </Row>
    </Col>
  );
};

export default PostListing;
