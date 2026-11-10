## Project Structure (only important files)

```
├── blog                  - one directory per post: index.md plus its images
├── public                - files served as-is (logos, robots.txt)
├── src
│   ├── assets/gallery    - gallery screenshots, optimized at build time
│   ├── components        - Astro components (static) and React .jsx islands (interactive)
│   ├── content.config.ts - content collections: blog, modules, engineIssues, trello
│   ├── integrations      - build hook copying raw-HTML post assets to /blog/<slug>/
│   ├── layouts           - page skeleton: head/SEO, header, footer
│   ├── lib               - shared helpers (blog cards, gallery, formatting)
│   ├── loaders           - content loaders for GitHub (modules, engine issues) and Trello
│   ├── pages             - file-based routes, see below
│   └── styles            - SCSS on top of Bootstrap 5
└── astro.config.mjs
```

## Routes

| Route | Source |
| --- | --- |
| `/`, `/404`, `/contribute`, `/downloads`, `/programs` | `src/pages/*.astro` |
| `/blog`, `/blog/2`, … (27 posts per page) | `src/pages/blog/[...page].astro` |
| `/blog/<kebab-cased title>` | `src/pages/blog/[slug].astro` |
| `/gallery`, `/gallery/2`, … (9 images per page) | `src/pages/gallery/[...page].astro` |
| `/modules/a` … `/modules/z`, `/modules/search` | `src/pages/modules/` |
| `/projects/<trello card id>` | `src/pages/projects/[id].astro` |

A blog post's URL is derived from its `title` frontmatter (`lodash.kebabcase`), not from its directory name, so changing a title changes the URL.

## Data

- **Blog**: `glob` loader over `blog/*/index.md`; frontmatter is validated in `src/content.config.ts`.
- **Modules / engine issues**: `src/loaders/github.ts` queries the GitHub GraphQL API with `GITHUB_TOKEN`, caches results for 12 hours, and keeps cached (or empty) data with a warning when the token is missing or the request fails.
- **Contributor programs**: `src/loaders/trello.ts` reads the public "GSoC/GSoD ideas" and "Mentors" Trello boards and renders card descriptions as markdown.
