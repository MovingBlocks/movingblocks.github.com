import { graphql, useStaticQuery } from "gatsby";


// TODO: make this a higher-order component to allow wrapping components
//        export default withLocation(withSiteMetadata(Component))
export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          image
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
