import React from "react";
import { Row, Col } from "reactstrap";
import moment from "moment";

import Cards from "../Cards/Cards";

function PostListing({ id, postEdges }) {
  const getPostList = () => {
    const postList = [];
    postEdges.forEach((postEdge) => {
      postList.push({
        posttype: postEdge.node.frontmatter.posttype,
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        desc: postEdge.node.frontmatter.description,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        author: postEdge.node.frontmatter.author,
      });
    });
    return postList;
  };
  const postList = getPostList();
  return (
    <Col lg="12" className="card-spacing">
      <Row className="justify-content-center">
        {
          /* Your post list here. */
          postList.map((post) =>
            post.posttype === "blog" ? (
              <Cards
                title={post.title}
                path={`/${id}${post.path}`}
                cover={post.cover.childImageSharp}
                tags={post.tags}
                excerpt={post.excerpt}
                author={post.author}
                date={moment(post.date).format("MMMM DD, YYYY")}
                type={post.posttype}
              />
            ) : (
              <Cards
                title={post.title}
                path={`/${id}${post.path}`}
                cover={post.cover.childImageSharp}
                tags={post.tags}
                excerpt={post.excerpt}
                type={post.posttype}
              />
            )
          )
        }
      </Row>
    </Col>
  );
}

export default PostListing;
