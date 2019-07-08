var ghpages = require('gh-pages');

// replace with your repo url
ghpages.publish(
  'public', {
    branch: 'gh-pages',
    repo: 'https://github.com/terasology/terasology.github.io.git',
  }
);
