const config = {
  siteTitle: "Terasology", // Site title. Same as Short site title for home screen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Terasology Project | An Open Source Voxel World", // Alternative site title for SEO.
  siteLogo: "/logos/logo.png", // Logo used for SEO and manifest.
  siteUrl: "https://terasology.org", // Domain of your website without pathPrefix. Should not have trailing slashes.
  // Prefixes all links. Should not have trailing slashes. Should have only a single leading slash.
  // Currently used to deploy ModuleSite as sub-site of current Terasology website.
  pathPrefix: "/ModuleSite",
  siteDescription:
    "Terasology is a super extensible open source voxel-based game. Born from a Minecraft-inspired tech demo, it is gradually becoming a stable platform for all sorts of gameplay settings in a voxel world.", // Website description used for meta description tag.
  postDefaultCategoryID: "Update", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  copyright: "Copyright © 2022. Moving Blocks!", // Copyright string for the footer of the website.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  twitterUsername: "@Terasology", // Used in site metadata
};

// Config Validation Checks

if (config.siteUrl !== "") {
  let url;
  try {
    // check that siteUrl does not have trailing slashes
    if (/\/$/.test(config.siteUrl)) {
      console.error(
        `{Configured siteUrl '${config.siteUrl}' has trailing slashes}`
      );
    }
    // check that siteUrl is a valid URL
    url = new URL(config.siteUrl);
    // check that siteUrl does not have a path (should be configured as pathPrefix instead)
    if (url.pathname !== "/") {
      console.error(
        `{Configured siteUrl '${config.siteUrl}' has undesired path '${url.pathname}', please use 'pathPrefix' configuration instead}`
      );
    }
  } catch (e) {
    console.error(
      `{Configured siteUrl '${config.siteUrl}' is not a valid URL: ${e}}`
    );
  }
}

if (config.pathPrefix !== "") {
  // check that pathPrefix does not have trailing slashes
  if (/\/$/.test(config.pathPrefix)) {
    console.error(
      `{Configured pathPrefix '${config.pathPrefix}' has trailing slashes}`
    );
  }
  // validate that pathPrefix is a valid path (with single leading and no trailing slashes)
  if (!/^(\/[a-z0-9\s_@\-^!#$%&+={}[\]]+)+$/i.test(config.pathPrefix)) {
    console.error(
      `{Configured pathPrefix "${config.pathPrefix}" is not a valid path or has multiple leading slashes}`
    );
  }
}

module.exports = config;
