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
      { text: '轻应用', link: '/quick-start/create.html' },
      { text: 'JS-SDK', link: '/api/overview.html' },
      { text: 'API 文档', link: 'https://apidocs3.workplus.io/' },
      { text: '开发工具', link: '/dev-tools' },
      { text: '常见问题', link: '/qa' },
    ],
    sidebar: {
      '/api/': getApidebar('JS-SDK'),
      '/quick-start/': getQuickStartbar('轻应用'),
    },
    lastUpdated: '上次编辑于', 

    docsRepo: 'WorkPlusFE/js-sdk',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们完善此文档',

    smoothScroll: true,
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

function getApidebar () {
  return [
    {
      title: '概述',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        'overview',
        'changelog',
      ]
    },
    {
      title: '方法列表',
      collapsable: false,
      sidebarDepth: 1,
      children: [
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

function getQuickStartbar (group) {
  return [
    {
      title: '轻应用',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'create',
        'offline',
        'isv',
      ]
    }, {
      title: '平台接入',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'sso',
        'notify',
        'workbench',
      ]
    }, {
      title: '调试',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'debug',
      ]
    }
  ]
}