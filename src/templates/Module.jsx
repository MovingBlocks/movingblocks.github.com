import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../layout";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import {FaGithub} from "react-icons/fa";

export default class Module extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { name, url, description } = pageContext;
    return (
      <Layout>
        <div>
          <div>
            <GatsbyImage
              className="post-cover"
              image={getImage(data.file)}
            />
            <h1 className="text-center">{name}</h1>
            <div className="title-underline" />            
            <p>
              {description}
            </p>
            <a href={url} target="_blank"><FaGithub />View on GitHub.</a>
            <div className="post-meta">
              <SocialLinks
                title={name}
                excerpt={description}
                path={`/modules/${name}`}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  {
    file(relativePath: {eq: "logos/defaultCardcover.jpg"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export function Head({ data, pageContext }) {
  return (
    <SEO
      pathname={pageContext.slug}
      title={`${pageContext.name} | ${config.siteTitle}`}
    />
  );
}
