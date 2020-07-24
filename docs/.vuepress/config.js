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
  title: 'WorkPlus 开放平台',
  description: pkg.description,
  base: '/js-sdk/',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    logo: '/sdk-logo@3x.png',
    nav: [
      { text: '快速开始', link: '/quick-start' },
      { text: 'JS-SDK 接口文档', link: '/api/overview.html' },
      { text: '开发工具', link: '/dev-tools' },
      { text: '常见问题', link: '/qa' },
      { text: '更新日志', link: '/changelog' },
    ],
    sidebar: {
      '/api/': getApidebar('API文档'),
    },
    lastUpdated: '上次编辑于', 

    docsRepo: 'WorkPlusFE/js-sdk',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们完善此文档'
  },
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment');
          moment.locale(lang);
          return moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
        }
      }
    ]
  ]
};

function getApidebar (groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 1,
      children: [
        'overview',
        'contact',
        'auth',
        'image',
        'file',
        'webview',
        'device',
        'app',
        'network',
        'location',
        'email',
        'pay',
        'eventListener',
        'notification',
        'shared',
        'storage',
      ]
    }
  ]
}