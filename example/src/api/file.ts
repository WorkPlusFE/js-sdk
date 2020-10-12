// 文件

export default {
  title: '文件',
  module: 'file',
  active: false,
  icon: 'photo-o',
  apis: [{
    title: '选择文件',
    description: '打开 WorkPlus 文件选择管理器，支持单选或多选，并自动上传文件到后台媒体中心，返回对应 mediaId。',
    action: 'chooseFiles',
    params: {},
  }, {
    title: '打开文件详情',
    description: '通过指定 mediaId, fileName 等参数, 打开文件详情界面。',
    action: 'openFileDetail',
    params: {},
  }, {
    title: '本地打开文件',
    description: '原生打开文件，pdf、excel、word 及 ppt 等。',
    action: 'readFile',
    params: {},
  }, {
    title: '判断文件是否存在',
    description: '判断指定路径的文件是否存在。',
    action: 'isFileExist',
    disable: true,
    params: {},
  }, {
    title: '* 文件下载',
    description: '文件下载。',
    action: 'download',
    params: {},
  }, {
    title: '* 文件上传',
    description: '文件上传。',
    action: 'download',
    params: {},
  }],
};
