var ghpages = require('gh-pages');

ghpages.publish('build', {
  branch: 'build',
}, () => {
  console.log('publish done');
});
