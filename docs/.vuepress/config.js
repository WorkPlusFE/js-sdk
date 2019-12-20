const fs = require('fs');
const pkg = require(process.cwd() + '/package.json');
const docDir = process.cwd() + '/docs';

const generateChildren = () => {
  const dirs = [];
  fs.readdirSync(docDir).forEach(path => {
    if (path.indexOf('.') !== 0) {
      const stat = fs.lstatSync(`${docDir}/${path}`);
      if (stat.isDirectory()) {
        dirs.push(`/${path}/`);
      }
    }
  });
  return dirs;
};

module.exports = {
  title: pkg.name,
  description: pkg.description,
  themeConfig: {
    nav: [{ text: 'Github', link: 'https://github.com/WorkPlusFE/sdk.js' }],
    sidebar: [
      {
        title: 'WorkPlus SDK',
        collapsable: false,
        children: generateChildren(),
      },
    ],
    displayAllHeaders: true,
  },
};
