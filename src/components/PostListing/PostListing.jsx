import React from "react";
import { Link } from "gatsby";
import { Badge, Row, Col } from "reactstrap";
import Img from 'gatsby-image';

export default ({ id, postEdges }) => {
  const getPostList = () => {
    const postList = [];
    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        desc: postEdge.node.frontmatter.description,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  };
  const postList = getPostList();
  return (
    <Row>
      {/* Your post list here. */
      postList.map(post => (
        <Col md="4">
          <div className="card-content">
            <div className="card-img">
              <Img sizes={post.cover.childImageSharp.sizes} alt={post.title} />
            </div>
            <div className="card-desc">
            <div className="md-tag">
                <Badge>{post.tags}</Badge>
              </div>
              <h4 className="post-content">{post.title}</h4>
              <p>{post.desc}</p>
              <Link
                to={`/${id}${post.path}`}
                key={post.title}
                className="btn-card"
              >
                Read More
              </Link>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};
