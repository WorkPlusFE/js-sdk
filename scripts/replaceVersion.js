const pkg = require('../package.json');
const path = require('path');
const replace = require('replace-x').default;

const dist = path.resolve(__dirname, '../dist/');

replace({
  paths: [dist],
  recursive: true,
  regex: '__VERSION__',
  replacement: `v${pkg.version}`,
});
