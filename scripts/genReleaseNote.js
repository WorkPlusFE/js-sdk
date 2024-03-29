const cc = require('conventional-changelog');

const version = process.argv[2] || process.env.VERSION;
const file = `./release_note/RELEASE_NOTE_${version}.md`;
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
