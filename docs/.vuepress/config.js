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


function getModulesSidebar (pluginTitle, pluginIntro, officialPluginTitle) {
  return [
    {
      title: pluginTitle,
      collapsable: false,
      children: [
        ['', pluginIntro],
        'using-a-plugin',
        'writing-a-plugin',
        'life-cycle',
        'option-api',
        'context-api'
      ]
    },
    {
      title: officialPluginTitle,
      collapsable: false,
      children: officalPlugins
    }
  ]
}


module.exports = {
  title: 'sdk.js',
  description: pkg.description,
  base: '/sdk.js/',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    nav: [
      { text: '快速开始', link: '/quick-start' },
      { text: 'API文档', link: '/api/' },
      { text: '常见问题', link: '/qa' },
      { text: '更新日志', link: '/changelog' },
      { text: 'Github', link: 'https://github.com/WorkPlusFE/sdk.js' }
    ],
    sidebar: {
      '/api/': getApidebar('API文档'),
    },
    displayAllHeaders: true,
  },
};


function getApidebar (groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        'image',
        'contact',
        'storage'
      ]
    }
  ]
}