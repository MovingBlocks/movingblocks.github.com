const config = {
  siteTitle: "Terasology", // Site title. Same as Short site title for home screen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Terasology Project | An Open Source Voxel World", // Alternative site title for SEO.
  siteLogo: "/logos/logo.png", // Logo used for SEO and manifest.
  siteUrl: "https://terasology.org", // Domain of your website without pathPrefix.
  pathPrefix: "/ModuleSite", // Prefixes all links. Currently used to deploy ModuleSite as sub-site of current Terasology website.
  siteDescription:
    "Terasology is a super extensible open source voxel-based game. Born from a Minecraft-inspired tech demo, it is gradually becoming a stable platform for all sorts of gameplay settings in a voxel world.", // Website description used for meta description tag.
  postDefaultCategoryID: "Update", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  copyright: "Copyright © 2022. Moving Blocks!", // Copyright string for the footer of the website.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  twitterUsername: "@Terasology", // used in site metadata
};

// Config Validation Checks

if (config.siteUrl !== "") {
  let url;
  try {
    // remove trailing slashes
    config.siteUrl = `${config.siteUrl.replace(/[\/]+$/g, "")}`;
    // check that siteUrl is a valid URL
    url = new URL(config.siteUrl);
  } catch (e) {
    console.error("Configured siteUrl '" + config.siteUrl + "' is not a valid URL: " + e);
  }
}

if (config.pathPrefix !== "") {
  // remove all leading and trailing slashes and prepend single slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^[\/]+|[\/]+$/g, "")}`;
  // validate that pathPrefix is a valid path with single leading and no trailing slashes
  /^(\/[a-z0-9\s_@\-^!#$%&+={}\[\]]+)+$/i.test(config.pathPrefix)
}

module.exports = config;
