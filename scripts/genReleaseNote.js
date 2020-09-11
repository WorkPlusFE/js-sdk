const cc = require('conventional-changelog');

const { version } = require('../package.json');
const file = `./release_note/RELEASE_NOTE${version ? `_${version}` : ``}.md`;
const fileStream = require('fs').createWriteStream(file);

cc({
  preset: 'angular',
  pkg: {
    transform (pkg) {
      pkg.version = `v${version}`;
      return pkg;
    },
  },
}).pipe(fileStream).on('close', () => {
  console.log(`Generated release note at ${file}`);
});
