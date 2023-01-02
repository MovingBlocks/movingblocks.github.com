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
    const node = {
      ...repo,
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
