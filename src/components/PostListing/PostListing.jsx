import React from "react";
import { Link } from "gatsby";
import { Row, Col, Card, CardTitle, CardSubtitle, CardBody } from "reactstrap";

export default ({ postEdges }) => {
  const getPostList = () => {
    const postList = [];
    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
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
              <img src={post.cover} alt={post.title} />
              <span>
                <h4>{post.tags}</h4>
              </span>
            </div>
            <div className="card-desc">
              <h4>{post.title}</h4>
              <p>{post.excerpt}</p>
              <Link
                to={`/blog/${post.path}`}
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
