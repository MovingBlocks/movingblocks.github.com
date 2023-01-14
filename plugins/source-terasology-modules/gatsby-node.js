const { graphql } = require("@octokit/graphql");
const { DateTime } = require("luxon");
const { createRemoteFileNode } = require("gatsby-source-filesystem");
const fs = require("fs");

const PLUGIN_NAME = "source-terasology-modules";

const query = `
query Modules($cursor:String) {
  organization(login: "Terasology") {
    repositories(orderBy: {field: NAME, direction: ASC}, first: 20, after: $cursor) {
      nodes {
        id
        name
        url
        description
        homepageUrl
        openGraphImageUrl
        usesCustomOpenGraphImage

        moduleTxt: object(expression: "develop:module.txt") {
          ...on Blob {
            text
          }
        }

        readme: object(expression: "develop:README.md") {
          ...on Blob {
            text
          }
        }

        issues(first: 25, filterBy: {labels: "Good First Issue", states: OPEN}) {
          nodes {
            id
            title
            author {
              login
            }
            labels(first: 10) {
              nodes {
                name
              }
            }
            updatedAt
            url
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

exports.onPreInit = ({ reporter }) =>
  reporter.verbose("Loaded source-terasology-modules");

exports.sourceNodes = async (
  {
    actions: { createNode, createParentChildLink },
    createContentDigest,
    createNodeId,
    reporter,
    cache,
  },
  { accessToken }
) => {
  const gql = graphql.defaults({
    headers: {
      authorization: `token ${accessToken}`,
    },
  });

  const lastFetchedKey = "terasology-modules-last-fetched";
  const dataKey = "terasology-modules-data";

  const now = DateTime.utc();
  const lastFetched = DateTime.fromISO(await cache.get(lastFetchedKey), {
    zone: "utc",
  });

  let repositories = [];

  // Temporary hack to avoid fetching data from GitHub during local testing.
  // Un-/comment as needed after changing the query.
  if (fs.existsSync(`${__dirname}/data.json`)) {
    // repositories = JSON.parse(fs.readFileSync(`${__dirname}/data.json`));
  }

  if (repositories.length > 0) {
    reporter.info(
      `[${PLUGIN_NAME}] Loaded Terasology module info from file ...`
    );
  } else if (lastFetched.plus({ hours: 12 }) > now) {
    reporter.info(
      `[${PLUGIN_NAME}] Loading Terasology module info from cache ...`
    );
    repositories = JSON.parse(await cache.get(dataKey));
  } else {
    reporter.info(
      `[${PLUGIN_NAME}] Fetching Terasology module info from GitHub ...`
    );
    let hasNextPage = true;
    let cursor;

    /* Loop iterations depend on the outcome of the previous request, thus 'await' is required here. */
    /* eslint-disable no-await-in-loop */
    while (hasNextPage) {
      const { organization } = await gql(query, { cursor });

      organization.repositories.nodes.forEach((repo) =>
        repositories.push(repo)
      );

      hasNextPage = organization.repositories.pageInfo.hasNextPage;
      cursor = organization.repositories.pageInfo.endCursor;
    }

    await cache.set(dataKey, JSON.stringify(repositories));
    await cache.set(lastFetchedKey, now.toISO());

    fs.writeFileSync(
      `${__dirname}/data.json`,
      JSON.stringify(repositories, null, 2)
    );
  }

  reporter.success(`[${PLUGIN_NAME}] Loaded ${repositories.length} modules.`);

  const nodes = repositories.flatMap(async (repo) => {
    if (!repo.moduleTxt) {
      // skip non-module repositories
      return [];
    }

    let moduleTxt;
    try {
      moduleTxt = JSON.parse(repo.moduleTxt?.text);
    } catch (err) {
      console.warn(
        `[${PLUGIN_NAME}] Could not parse 'module.txt' of ${repo.url}.`
      );
      return [];
    }

    const tags = [
      moduleTxt.isTutorial ? "Tutorial" : undefined,
      moduleTxt.isAsset ? "Asset" : undefined,
      moduleTxt.isLibrary ? "Library" : undefined,
      moduleTxt.isSpecial ? "Special" : undefined,
      moduleTxt.isRendering ? "Rendering" : undefined,
      moduleTxt.isAugmentation ? "Augmentation" : undefined,
      moduleTxt.isServerSideOnly ? "Server" : undefined,
      moduleTxt.isGameplay ? "Gameplay" : undefined,
    ].filter((x) => x);

    const { id, version, displayName, description, dependencies } = moduleTxt;

    const cover = repo.usesCustomOpenGraphImage
      ? repo.openGraphImageUrl
      : undefined;

    const moduleInfo = {
      id,
      version,
      displayName,
      description,
      dependencies,
      tags,
    };

    moduleInfo.dependencies = moduleInfo.dependencies.map((dep) => ({
      ...dep,
      optional: /true/i.test(dep.optional),
    }));

    const node = {
      ...repo,
      usesCustomOpenGraphImage: undefined,
      openGraphImageUrl: undefined,
      cover,
      moduleTxt: moduleInfo,
      issues: repo.issues,
      id: createNodeId(`TerasologyModule-${repo.id}`),
      parent: "__SOURCE__",
      children: [],
      internal: {
        type: "TerasologyModule",
      },
    };
    node.internal.contentDigest = createContentDigest(node);

    let fileNode;
    if (node.cover) {
      try {
        fileNode = await createRemoteFileNode({
          url: node.cover,
          parentNodeId: node.id,
          cache,
          createNodeId,
          createNode,
          ext: ".png",
        });
      } catch (err) {
        reporter.error(err);
      }
      if (fileNode) {
        node.coverImage___NODE = fileNode.id;
        reporter.info(
          `Created remote file node for ${node.name}: ${node.cover}`
        );
      }
    }

    createNode(node);

    if (fileNode) {
      try {
        createParentChildLink({
          parent: node,
          child: fileNode,
        });
      } catch (err) {
        reporter.error(err);
      }
    }
    return Promise.resolve();
  });

  await Promise.all(nodes);

  reporter.success(`[${PLUGIN_NAME}] Created nodes for Terasology modules.`);
};
