const ghpages = require('gh-pages');

ghpages.publish(
  'public', {
    branch: 'gh-pages',
    repo: process.env.REPO, // Repository link for the module site
  }
);
