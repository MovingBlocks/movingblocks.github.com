import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../layout";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

export default class Module extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <div>
          <div>
            <GatsbyImage
              className="post-cover"
              image={post.cover.childImageSharp.gatsbyImageData}
            />
            <h1 className="text-center">{post.title}</h1>
            <div className="title-underline" />
            <div className="d-flex mt-2 ml-2">
              {post.tags.map((tag) => (
                <PostTags tags={tag} type="modules" />
              ))}
            </div>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <div className="post-meta">
              <SocialLinks title={post.title} excerpt={post.excerpt} path={`/modules${slug}`} />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ModulesBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
        date
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;

export function Head({ data, pageContext }) {
  return (
    <SEO
      pathname={pageContext.slug}
      title={`${data.markdownRemark.frontmatter.title} | ${config.siteTitle}`}
    />
  );
}
