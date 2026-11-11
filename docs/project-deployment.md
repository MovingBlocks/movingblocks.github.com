# Deployment

The website is deployed to [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) by the `deploy.yml` workflow on every push to `master`, or manually from the Actions tab. A daily check at 02:00 UTC (`scripts/posts-due.mjs`) also starts a build when a blog post's date has passed since the last successful deploy, and does nothing otherwise.

The workflow installs dependencies with `npm ci`, runs `npm run build` with the `MODULE_FETCH_GITHUB_TOKEN` secret exposed as `GITHUB_TOKEN`, uploads `dist/` with `actions/upload-pages-artifact`, and publishes it with `actions/deploy-pages`.
The site is served from the domain root, so no base path is configured.

Pull requests are test-built on Node 24 and 26 by `build.yml`; `lint.yml` runs ESLint (uploaded to code scanning), Prettier and Stylelint.
