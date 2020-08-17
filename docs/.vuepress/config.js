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
  base: '/v4/',
  dest: 'docs/.vuepress/dist',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '轻应用', link: '/light-app/' },
      { text: 'JS-SDK', link: '/js-sdk/' },
      { text: 'API 文档', link: '/api/' },
      { text: '开发工具', link: '/dev-tools' },
      { text: '常见问题', link: '/qa' },
    ],
    sidebar: {
      '/light-app/': getLightAppBar(),
      '/js-sdk/': getJsSdkBar(),
      '/api/': getApiBar(),
    },

    docsRepo: 'WorkPlusFE/js-sdk',
    docsDir: 'docs',
    docsBranch: 'master',

    editLinks: true,
    editLinkText: '帮助我们完善此文档',

    lastUpdated: '上次编辑于', 

    smoothScroll: false,
  },
  plugins: [
    '@vuepress/back-to-top',
    'fulltext-search',
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

function getJsSdkBar () {
  return [
    {
      title: 'JS-SDK',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        '/js-sdk/',
        '/js-sdk/overview/usage',
        '/js-sdk/overview/auth',
        '/js-sdk/overview/urlScheme',
        '/js-sdk/overview/demo',
        '/js-sdk/overview/origin',
        '/js-sdk/overview/changelog',
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

function getLightAppBar (group) {
  return [
    {
      title: '轻应用',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        '',
        'offline',
        // 'isv',
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

function getApiBar () {
  return [
    {
      title: 'API 文档',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        '',
        'getStart',
        'callback',
        'response',
        'errorCode',
      ]
    }, {
      title: '接口列表',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'auth',
        'users',
        {
          title: '组织架构',
          collapsable: false,
          sidebarDepth: 2,
          path: '/api/organizations/employee',
          children: [
            '/api/organizations/employee',
            '/api/organizations/org',
          ]
        },
        {
          title: '媒体',
          collapsable: false,
          sidebarDepth: 2,
          path: '/api/medias/query',
          children: [
            '/api/medias/query',
            '/api/medias/vfs',
            '/api/medias/translator',
          ]
        },
        {
          title: '应用',
          collapsable: false,
          sidebarDepth: 2,
          path: '/api/app/mbox',
          children: [
            '/api/app/mbox',
            '/api/app/scope',
            '/api/app/template',
          ]
        },
      ]
    }
  ]
}