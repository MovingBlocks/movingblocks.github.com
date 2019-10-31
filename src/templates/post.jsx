import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from 'gatsby-image';
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
            <meta property="og:title" content={post.title} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${config.siteUrl}/post${slug}`} />
            <meta property="og:image" content="" />
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div>
            <div className={"title"}>
              <h1>{post.title}</h1>
              <h6>Posted by {post.author} on <span>{post.date}</span></h6>
            </div>
            <br />
            <Img className={"post-cover"} sizes={post.cover.childImageSharp.sizes} style={{maxHeight: 500}} />
            <br />
            <hr />
            <div className="post-content" dangerouslySetInnerHTML={{ __html: postNode.html }} />
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
            sizes(maxWidth: 768) {
              ...GatsbyImageSharpSizes
            }
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
