const version = process.argv[2] || process.env.VERSION;

const cc = require('conventional-changelog');
const file = `./release_note/RELEASE_NOTE.md`;
const fileStream = require('fs').createWriteStream(file);

cc({
  preset: 'angular',
  pkg: {
    transform (pkg) {
      pkg.version = `v${version}`;
      return pkg;
    },
  },
  releaseCount: 0,
}).pipe(fileStream).on('close', () => {
  console.log(`Generated release note at ${file}`);
});
