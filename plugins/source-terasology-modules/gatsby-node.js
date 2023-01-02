const { graphql } = require("@octokit/graphql");

const PLUGIN_NAME = "source-terasology-modules";

const gql = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
  },
});

const query = `
query Modules($cursor:String) {
  organization(login: "Terasology") {
    repositories(first: 20, after: $cursor) {
      nodes {
        id
        name
        url
        description
        homepageUrl
        moduleTxt: object(expression: "develop:module.txt") {
          ...on Blob {
            text
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
`;

exports.onPreInit = () => console.log("Loaded source-terasology-modules");

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
  createNodeId,
}) => {
  const repositories = [];

  let hasNextPage = true;
  let cursor;

  while (hasNextPage) {
    const { organization } = await gql(query, { cursor });

    organization.repositories.nodes.forEach((repo) => repositories.push(repo));

    hasNextPage = organization.repositories.pageInfo.hasNextPage;
    cursor = organization.repositories.pageInfo.endCursor;
  }

  console.log(`[${PLUGIN_NAME}] Found ${repositories.length} modules.`);

  repositories.forEach((repo) => {
    if (!repo.moduleTxt) {
      // skip non-module repositories
      return;
    }

    let moduleTxt;
    try {
      moduleTxt = JSON.parse(repo.moduleTxt?.text);
    } catch (err) {
      console.warn(`[${PLUGIN_NAME}] Could not parse 'module.txt' of ${repo.url}.`)
    }

    const node = {
      ...repo,
      moduleTxt,
      id: createNodeId(`TerasologyModule-${repo.id}`),
      parent: "__SOURCE__",
      children: [],
      internal: {
        type: "TerasologyModule",
      },
    };
    node.internal.contentDigest = createContentDigest(node);

    createNode(node);
  });
};
