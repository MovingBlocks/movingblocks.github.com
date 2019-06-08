import React from "react";
import { Link } from "gatsby";

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
    <div>
      {/* Your post list here. */
      moduleList.map(post => (
        <Link to={`/modules/${post.path}`} key={post.title}>
          <h1>{post.title}</h1>
        </Link>
      ))}
    </div>
  );
};
