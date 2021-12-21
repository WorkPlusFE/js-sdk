const path = require('path');
const replace = require('replace-x').default;

const version = process.argv[2] || process.env.VERSION;
const dist = path.resolve(__dirname, '../dist/');

replace({
  paths: [dist],
  recursive: true,
  regex: '__VERSION__',
  replacement: `${version}`,
});
