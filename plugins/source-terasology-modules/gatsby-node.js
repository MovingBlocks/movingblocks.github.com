const { graphql } = require("@octokit/graphql");
const { DateTime } = require("luxon");

const PLUGIN_NAME = "source-terasology-modules";

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
  reporter,
  cache,
}, {
  access_token
}) => {

  const gql = graphql.defaults({
    headers: {
      authorization: `token ${access_token}`,
    },
  });

  const lastFetchedKey = "terasology-modules-last-fetched";
  const dataKey = "terasology-modules-data";

  const now = DateTime.utc();
  const lastFetched = DateTime.fromISO(await cache.get(lastFetchedKey), {
    zone: "utc",
  });

  let repositories = [];

  if (lastFetched.plus({ hours: 12 }) > now) {
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
  }

  reporter.success(`[${PLUGIN_NAME}] Loaded ${repositories.length} modules.`);

  let created = 0;
  repositories
    .forEach((repo) => {
      if (!repo.moduleTxt) {
        // skip non-module repositories
        return;
      }

      let moduleTxt;
      try {
        moduleTxt = JSON.parse(repo.moduleTxt?.text);
      } catch (err) {
        console.warn(
          `[${PLUGIN_NAME}] Could not parse 'module.txt' of ${repo.url}.`
        );
        return;
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
        id: createNodeId(`TerasologyModule-${repo.id}`),
        parent: "__SOURCE__",
        children: [],
        internal: {
          type: "TerasologyModule",
        },
      };
      node.internal.contentDigest = createContentDigest(node);

      createNode(node);
      created += 1;
    })
    .filter((x) => x);

  reporter.success(`[${PLUGIN_NAME}] Created ${created} nodes.`);
};
