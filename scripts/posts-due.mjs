// Decides whether a deploy run has anything to publish. Scheduled runs only build
// when a post's date has passed since the last successful deploy; every other
// trigger (push, manual) always builds. Writes `publish=true|false` to $GITHUB_OUTPUT.
import { execFileSync } from "node:child_process";
import { appendFileSync, readdirSync, readFileSync } from "node:fs";

function lastSuccessfulDeploy() {
  const repo = process.env.GITHUB_REPOSITORY;
  const json = execFileSync(
    "gh",
    [
      ...["run", "list", "--workflow", "deploy.yml", "--status", "success"],
      ...["--limit", "1", "--json", "createdAt"],
      ...(repo ? ["--repo", repo] : []),
    ],
    { encoding: "utf8" },
  );
  const [run] = JSON.parse(json);
  return run ? new Date(run.createdAt) : null;
}

function postDates() {
  return readdirSync("blog").flatMap((dir) => {
    try {
      const text = readFileSync(`blog/${dir}/index.md`, "utf8");
      const date = /^date:\s*["']?(.*?)["']?\s*$/m.exec(text)?.[1];
      return date ? [new Date(date)] : [];
    } catch {
      return [];
    }
  });
}

let publish = true;
if (process.env.EVENT === "schedule") {
  const since = lastSuccessfulDeploy();
  const now = new Date();
  publish = since === null || postDates().some((d) => d > since && d <= now);
}

console.log(`publish=${publish}`);
if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `publish=${publish}\n`);
