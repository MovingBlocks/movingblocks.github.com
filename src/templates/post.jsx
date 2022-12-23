import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../layout";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";


export default class PostTemplate extends React.Component {
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
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div>
            <div className="title">
              <h1>{post.title}</h1>
              <h6>
                {`Posted by ${post.author} on `}
                <span>{post.ddate}</span>
              </h6>
            </div>
            <br />
            <GatsbyImage
              className="post-cover"
              image={post.cover.childImageSharp.gatsbyImageData}
            />
            <br />
            <hr />
            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: postNode.html }}
            />
            <hr />
            <div className="post-meta">
              <SocialLinks postPath={`/blog${slug}`} postNode={postNode} />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        ddate
        tags
        author
        cover {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      fields {
        slug
        date
      }
    }
  }
`;
