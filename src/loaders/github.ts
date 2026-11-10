import type { Loader, LoaderContext } from "astro/loaders";

const CACHE_HOURS = 12;

const ISSUE_FIELDS = `
  id
  title
  author { login }
  labels(first: 10) { nodes { name } }
  updatedAt
  url
`;

const MODULES_QUERY = `
query Modules($cursor: String) {
  organization(login: "Terasology") {
    repositories(orderBy: {field: NAME, direction: ASC}, first: 20, after: $cursor) {
      nodes {
        id
        name
        url
        description
        moduleTxt: object(expression: "develop:module.txt") { ... on Blob { text } }
        issues(first: 25, filterBy: {labels: "Good First Issue", states: OPEN}) {
          nodes { ${ISSUE_FIELDS} }
        }
      }
      pageInfo { hasNextPage endCursor }
    }
  }
}`;

const ENGINE_QUERY = `
query Engine {
  organization(login: "MovingBlocks") {
    repository(name: "Terasology") {
      issues(first: 10, filterBy: {labels: "Good First Issue", states: OPEN}, orderBy: {field: UPDATED_AT, direction: DESC}) {
        nodes { ${ISSUE_FIELDS} }
      }
    }
  }
}`;

interface RawIssue {
  id: string;
  title: string;
  author: { login: string } | null;
  labels: { nodes: { name: string }[] };
  updatedAt: string;
  url: string;
}

export interface Issue {
  title: string;
  author: string;
  tags: string[];
  date: string;
  url: string;
}

const toIssue = (i: RawIssue): Issue => ({
  title: i.title,
  author: i.author?.login ?? "(deleted user)",
  tags: i.labels.nodes.map((l) => l.name),
  date: i.updatedAt,
  url: i.url,
});

async function gql<T>(token: string, query: string, variables = {}): Promise<T> {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { authorization: `bearer ${token}`, "content-type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`GitHub GraphQL ${res.status} ${res.statusText}`);
  const json = (await res.json()) as { data: T; errors?: { message: string }[] };
  if (json.errors?.length) throw new Error(json.errors.map((e) => e.message).join("; "));
  return json.data;
}

/**
 * Wraps a fetch in the shared policy: reuse store data younger than 12h,
 * and without GITHUB_TOKEN (or on fetch errors) keep whatever is stored.
 */
function cachedLoader(
  name: string,
  fetchEntries: (token: string) => Promise<{ id: string; data: object }[]>,
): Loader {
  return {
    name,
    load: async ({ store, meta, logger, parseData, generateDigest }: LoaderContext) => {
      const last = Number(meta.get("lastFetched") ?? 0);
      if (store.keys().length > 0 && Date.now() - last < CACHE_HOURS * 3600e3) {
        logger.info(`using cached data (${store.keys().length} entries)`);
        return;
      }
      const token = process.env.GITHUB_TOKEN;
      if (!token) {
        logger.warn(`GITHUB_TOKEN not set; keeping ${store.keys().length} cached entries`);
        return;
      }
      let entries;
      try {
        entries = await fetchEntries(token);
      } catch (err) {
        logger.warn(`GitHub fetch failed (${err}); keeping cached entries`);
        return;
      }
      store.clear();
      for (const { id, data } of entries) {
        const parsed = await parseData({ id, data: data as Record<string, unknown> });
        store.set({ id, data: parsed, digest: generateDigest(parsed) });
      }
      meta.set("lastFetched", String(Date.now()));
      logger.info(`loaded ${entries.length} entries from GitHub`);
    },
  };
}

const MODULE_TAGS: [string, string][] = [
  ["isTutorial", "Tutorial"],
  ["isAsset", "Asset"],
  ["isLibrary", "Library"],
  ["isSpecial", "Special"],
  ["isRendering", "Rendering"],
  ["isAugmentation", "Augmentation"],
  ["isServerSideOnly", "Server"],
  ["isGameplay", "Gameplay"],
];

interface RawRepo {
  name: string;
  url: string;
  description: string | null;
  moduleTxt: { text: string } | null;
  issues: { nodes: RawIssue[] };
}

export const terasologyModules = () =>
  cachedLoader("terasology-modules", async (token) => {
    const repos: RawRepo[] = [];
    let cursor: string | undefined;
    for (;;) {
      const { organization } = await gql<{
        organization: {
          repositories: {
            nodes: RawRepo[];
            pageInfo: { hasNextPage: boolean; endCursor: string };
          };
        };
      }>(token, MODULES_QUERY, { cursor });
      repos.push(...organization.repositories.nodes);
      if (!organization.repositories.pageInfo.hasNextPage) break;
      cursor = organization.repositories.pageInfo.endCursor;
    }
    return repos.flatMap((repo) => {
      if (!repo.moduleTxt) return []; // not a module repository
      let txt: Record<string, unknown>;
      try {
        txt = JSON.parse(repo.moduleTxt.text);
      } catch {
        console.warn(`[terasology-modules] cannot parse module.txt of ${repo.url}`);
        return [];
      }
      return [
        {
          id: repo.name,
          data: {
            name: repo.name,
            url: repo.url,
            description: repo.description ?? "",
            moduleDescription: (txt.description as string) ?? "",
            tags: MODULE_TAGS.filter(([k]) => txt[k]).map(([, t]) => t),
            issues: repo.issues.nodes.map(toIssue),
          },
        },
      ];
    });
  });

export const terasologyEngine = () =>
  cachedLoader("terasology-engine", async (token) => {
    const { organization } = await gql<{
      organization: { repository: { issues: { nodes: RawIssue[] } } };
    }>(token, ENGINE_QUERY);
    return organization.repository.issues.nodes.map((i) => ({ id: i.id, data: toIssue(i) }));
  });
