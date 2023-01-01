const axios = require("axios");
const { DateTime, Duration } = require("luxon");

async function fetchCards({ key = "", token = "", board_id }) {
  const params = `?fields=name,labels,desc,url,idBoard,idList`;

  //TODO: fetch attachments and cover images? fetch custom fields? fetch checklists?
  //      https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/#card-object

  const url = `https://api.trello.com/1/boards/${board_id}/cards${params}&key=${key}&token=${token}`;

  try {
    const { data } = await axios.get(url);

    return data.map(({ id, name, labels, desc, url, idBoard, idList }) => {
      return {
        id,
        name,
        labels,
        content: desc,
        url,
        board_id: idBoard,
        list_id: idList,
      };
    });
  } catch (error) {
    console.error(`ERROR while fetching cards from Trello: ${error}`);
    //console.log(JSON.stringify(error, null, 2))
  }
}

function toNode(card, { createNodeId, createContentDigest }) {
  const node = {
    ...card,
    id: createNodeId(`TrelloCard-${card.id}`),
    parent: "__SOURCE__",
    children: [],
    internal: {
      type: "TrelloCard",
      content: card.content,
      mediaType: "text/markdown",
    },
  };
  node.internal.contentDigest = createContentDigest(node);
  return node;
}

exports.sourceNodes = async (
  { actions: { createNode }, cache, createNodeId, createContentDigest },
  pluginConfig
) => {
  const cacheExpiration = new Duration(pluginConfig.cache_expiration);
  const lastFetched = DateTime.fromISO(
    await cache.get("gatsby-source-trello.timestamp")
  );
  const now = DateTime.utc();

  let data;

  if (lastFetched.invalid || lastFetched.plus(cacheExpiration) < now) {
    console.log("[gatsby-source-trello] Fetching cards from Trello ...");
    data = await fetchCards(pluginConfig);
    await cache.set("gatsby-source-trello.data", JSON.stringify(data));
  } else {
    console.log("[gatsby-source-trello] Reading cards from cache ...");
    data = JSON.parse(await cache.get("gatsby-source-trello.data"));
  }

  console.log(`[gatsby-source-trello] Loaded ${data.length} cards.`);

  data.forEach((card) => {
    createNode(toNode(card, { createNodeId, createContentDigest }));
  });

  return;
};

exports.onPreInit = () => console.log("Loaded gatsby-source-trello");

exports.onPostBuild = async ({ cache }) => {
  await cache.set("gatsby-source-trello.timestamp", DateTime.utc().toISO());
};
