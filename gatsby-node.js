/* eslint-disable no-console */
const fs = require("fs");
const kebabCase = require("lodash.kebabcase");
const moment = require("moment");
const path = require("path");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const { relativePath } = fileNode;
    if (relativePath) {
      const parsedFilePath = path.parse(fileNode.relativePath);
      if (
        Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
        Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
      ) {
        slug = `/${kebabCase(node.frontmatter.title)}`;
      } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
        slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
      } else if (parsedFilePath.dir === "") {
        slug = `/${parsedFilePath.name}/`;
      } else {
        slug = `/${parsedFilePath.dir}/`;
      }
    }

    if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug"))
        slug = `/${kebabCase(node.frontmatter.slug)}`;
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
        const date = moment.utc(node.frontmatter.date);
        if (!date.isValid)
          console.warn(`WARNING: Invalid date.`, node.frontmatter);

        createNodeField({
          node,
          name: "date",
          value: date.toISOString(),
        });
      }
    }
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  async function createBlogPages() {
    const blogPostTemplate = path.resolve("src/templates/Blog.jsx");
    const blogQueryResult = await graphql(
      `
        {
          allMarkdownRemark(
            filter: { frontmatter: { posttype: { eq: "blog" } } }
          ) {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `
    );
    const posts = blogQueryResult.data.allMarkdownRemark.edges;
    posts.forEach((edge) => {
      createPage({
        path: `/blog${edge.node.fields.slug}`,
        component: blogPostTemplate,
        context: {
          slug: edge.node.fields.slug,
        },
      });
    });

    const blogListTemplate = path.resolve("./src/templates/BlogList.jsx");
    const blogsPerPage = 27;
    const numBlogPages = Math.ceil(posts.length / blogsPerPage);
    Array.from({ length: numBlogPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: blogListTemplate,
        context: {
          limit: blogsPerPage,
          skip: i * blogsPerPage,
          postsNumPages: numBlogPages,
          blogCurrentPage: i + 1,
        },
      });
    });
  }

  async function createModulePages() {
    const modulePageTemplate = path.resolve("src/templates/Module.jsx");
    const moduleQueryResult = await graphql(
      `
        {
          allMarkdownRemark(
            filter: { frontmatter: { posttype: { eq: "module" } } }
          ) {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `
    );

    const modules = moduleQueryResult.data.allMarkdownRemark.edges;
    modules.forEach((edge) => {
      createPage({
        path: `/modules${edge.node.fields.slug}`,
        component: modulePageTemplate,
        context: {
          slug: edge.node.fields.slug,
        },
      });
    });

    const moduleListTemplate = path.resolve("./src/templates/ModuleList.jsx");
    const modulesPerPage = 27;
    const numModulePages = Math.ceil(modules.length / modulesPerPage);
    Array.from({ length: numModulePages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/modules` : `/modules/${i + 1}`,
        component: moduleListTemplate,
        context: {
          limit: modulesPerPage,
          skip: i * modulesPerPage,
          moduleNumPages: numModulePages,
          moduleCurrentPage: i + 1,
        },
      });
    });
  }

  async function createProjectPages() {
    const projectPageTemplate = path.resolve("src/templates/Project.jsx");
    const projectQueryResult = await graphql(
      `
        {
          allTrelloCard {
            edges {
              node {
                id
                list_id
              }
            }
          }
        }
      `
    );

    const projects = projectQueryResult.data.allTrelloCard.edges;
    projects
      .filter(
        (edge) =>
          edge.node.list_id === "5c3aab0bd640fe19e4069de5" ||
          edge.node.list_id === "60ddd7cf64da4b3ee8c5a2e9"
      )
      .forEach((edge) => {
        createPage({
          path: `/projects/${edge.node.id}`,
          component: projectPageTemplate,
          context: {
            id: edge.node.id,
          },
        });
      });
  }

  await createBlogPages();
  await createModulePages();
  await createProjectPages();

  // TODO: replace below with proper search index generation, see
  //          https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-search/

  async function buildBlogSearchIndex() {
    const blogSearchIndexQueryResult = await graphql(
      `
        {
          allMarkdownRemark(
            filter: { frontmatter: { posttype: { eq: "blog" } } }
            sort: { frontmatter: { date: DESC } }
          ) {
            edges {
              node {
                excerpt
                fields {
                  slug
                  date(formatString: "MMMM DD, YYYY")
                }
                frontmatter {
                  author
                  date
                  tags
                  title
                  cover {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                internal {
                  content
                }
              }
            }
          }
        }
      `
    );
    const index = blogSearchIndexQueryResult.data.allMarkdownRemark.edges.map(
      (edge) => {
        const { excerpt, fields, frontmatter, internal } = edge.node;
        const { slug, date: ddate } = fields;
        const { title, tags, author, date, cover } = frontmatter;
        const { content } = internal;

        return {
          author,
          excerpt,
          content,
          cover,
          date,
          ddate,
          path: `/blog${slug}`,
          tags,
          title,
          posttype: "blog",
        };
      }
    );

    return index;
  }

  async function buildModulesSearchIndex() {
    const result = await graphql(
      `
        {
          allMarkdownRemark(
            filter: { frontmatter: { posttype: { eq: "module" } } }
            sort: { frontmatter: { title: ASC } }
          ) {
            edges {
              node {
                excerpt
                fields {
                  slug
                }
                frontmatter {
                  tags
                  title
                  cover {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        }
      `
    );
    const index = result.data.allMarkdownRemark.edges.map((edge) => {
      const { excerpt, fields, frontmatter } = edge.node;
      const { slug } = fields;
      const { tags, title, cover } = frontmatter;

      return {
        excerpt,
        path: `/modules${slug}`,
        tags,
        title,
        cover,
        posttype: "module",
      };
    });

    return index;
  }

  const blogIndex = await buildBlogSearchIndex();
  const moduleIndex = await buildModulesSearchIndex();

  if (!fs.existsSync("src/generated")) {
    fs.mkdirSync("src/generated");
  }

  fs.writeFileSync(
    "./src/generated/blog-result.json",
    JSON.stringify(blogIndex, null, 2)
  );
  fs.writeFileSync(
    "./src/generated/module-result.json",
    JSON.stringify(moduleIndex, null, 2)
  );
};
