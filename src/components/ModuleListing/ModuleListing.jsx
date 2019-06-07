import React from "react";
import { Link } from "gatsby";

export default class ModuleListing extends React.Component {
  getModuleList() {
    const moduleList = [];
    this.props.postEdges.forEach(postEdge => {
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
  }
  
  render() {
    const moduleList = this.getModuleList();
    return (
      <div>
        {/* Your post list here. */
        moduleList.map(post => (
          <Link to={`/modules/${post.path}`} key={post.title}>
            {post.title}
          </Link>
        ))}
      </div>
    );
  }
}
