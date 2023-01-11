const { graphql } = require("@octokit/graphql");
const { DateTime } = require("luxon");
const { createRemoteFileNode } = require("gatsby-source-filesystem");
const fs = require("fs");

const PLUGIN_NAME = "source-terasology-engine";

const query = `
query Engine($cursor:String) {
  organization(login: "MovingBlocks") {
    repository(name: "Terasology") {
      issues(first: 10, filterBy: {labels: "Good First Issue", states: OPEN}, orderBy: {field: UPDATED_AT, direction: DESC}) {
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
  }
}
`;

exports.onPreInit = ({ reporter }) =>
  reporter.verbose("Loaded source-terasology-engine");

exports.sourceNodes = async (
  {
    actions: { createNode },
    createContentDigest,
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

  const lastFetchedKey = "terasology-engine-last-fetched";
  const dataKey = "terasology-engine-data";

  const now = DateTime.utc();
  const lastFetched = DateTime.fromISO(await cache.get(lastFetchedKey), {
    zone: "utc",
  });

  let engine = {};

  // Temporary hack to avoid fetching data from GitHub during local testing.
  // Un-/comment as needed after changing the query.
  if (fs.existsSync(`${__dirname}/data.json`)) {
    // engine = JSON.parse(fs.readFileSync(`${__dirname}/data.json`));
  }

  if (lastFetched.plus({ hours: 12 }) > now) {
    reporter.info(
      `[${PLUGIN_NAME}] Loading Terasology engine info from cache ...`
    );
    engine = JSON.parse(await cache.get(dataKey));
  } else {
    reporter.info(
      `[${PLUGIN_NAME}] Fetching Terasology engine info from GitHub ...`
    );

    const { engine } = await gql(query);

    await cache.set(dataKey, JSON.stringify(engine));
    await cache.set(lastFetchedKey, now.toISO());

    fs.writeFileSync(
      `${__dirname}/data.json`,
      JSON.stringify(engine, null, 2)
    );
  }

  reporter.success(`[${PLUGIN_NAME}] Loaded Terasology engine info.`);

  const node = {
    issues: engine.issues,
    parent: "__SOURCE__",
    children: [],
    internal: {
      type: "TerasologyEngine",
    },
  };

  node.internal.contentDigest = createContentDigest(node);

  createNode(node);

  reporter.success(`[${PLUGIN_NAME}] Created nodes for Terasology modules.`);
}
