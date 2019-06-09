import React from "react";
import { Link } from "gatsby";
import { Row, Col, Badge } from "reactstrap";

export default ({ postEdges }) => {
  const getModuleList = () => {
    const moduleList = [];
    postEdges.forEach(postEdge => {
      moduleList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return moduleList;
  };

  const moduleList = getModuleList();
  return (
    <Row className="equal">
      {/* Your post list here. */
      moduleList.map(post => (
        <Col md="4">
          <div className="card-content">
            <div className="card-img">
              <img src={post.cover} alt={post.title} />
            </div>
            <div className="card-desc">
              <div className="md-tag">
                <Badge>{post.tags}</Badge>
              </div>
              <h4>{post.title}</h4>
              <p>{post.excerpt}</p>
              <Link
                to={`/modules/${post.path}`}
                key={post.title}
                className="btn-card"
              >
                Read More
              </Link>
              <Link
                to={`/modules/${post.path}`}
                key={post.title}
                className="btn-card"
              >
                Download
              </Link>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};
