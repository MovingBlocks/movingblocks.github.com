import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Badge } from "reactstrap";
import Layout from "../layout";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import { FaGithub, FaLink } from "react-icons/fa";

function Module({ data }) {
  console.log(JSON.stringify(data, null, 2));
  const { terasologyModule, file } = data;
  const { name, description, url, homepageUrl, moduleTxt } = terasologyModule;

  const { version, tags } = moduleTxt;

  return (
    <Layout>
      <div>
        <div>
          <GatsbyImage className="post-cover" image={getImage(data.file)} />

          <h1 className="text-center">{name}</h1>
          <div className="title-underline" />
          <div>
            {tags.map((tag) => (
              <Badge>{tag}</Badge>
            ))}
          </div>
          <div>{version}</div>
          <div>
            <p>{description}</p>
            <p>
              <a href={url} target="_blank">
                <FaGithub /> View on GitHub.
              </a>
            </p>
            {homepageUrl ? (
              <p>
                <a href={homepageUrl} target="_blank">
                  <FaLink /> Website
                </a>
              </p>
            ) : (
              ""
            )}
          </div>
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

export default Module;

export const query = graphql`
  query Module($name: String) {
    terasologyModule(name: { eq: $name }) {
      name
      description
      url
      homepageUrl
      moduleTxt {
        version
        tags
      }
    }

    file(relativePath: { eq: "logos/defaultCardcover.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

export function Head({ data, pageContext }) {
  return (
    <SEO
      pathname={pageContext.slug}
      title={`${pageContext.name} | ${config.siteTitle}`}
    />
  );
}
