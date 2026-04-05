import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import moment from "moment";
import Layout from "../layout";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

export default class Blog extends React.Component {
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
    const { date } = postNode.fields;
    return (
      <Layout title={post.title}>
        <div>
          <div>
            <div className="title">
              <h6>
                {`Posted by ${post.author} on `}
                <span>{moment(date).format("MMMM DD, YYYY")}</span>
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
              <SocialLinks
                title={post.title}
                excerpt={post.excerpt}
                path={`/blog${slug}-${date
                  .replace(/[-T:.Z]/g, "-")
                  .substring(0, 10)}`}
              />
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

export function Head({ data, pageContext }) {
  return (
    <SEO
      pathname={pageContext.slug}
      title={`${data.markdownRemark.frontmatter.title} | ${config.siteTitle}`}
    />
  );
}
