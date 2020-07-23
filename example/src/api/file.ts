// 文件

export default {
  title: '文件',
  module: 'file',
  active: false,
  icon: 'photo-o',
  apis: [{
    title: '单选文件',
    description: '打开 WorkPlus 文件选择管理器，选择单个文件并返回。',
    action: 'selectFile',
    params: {},
  }, {
    title: '多选文件',
    description: '打开 WorkPlus 文件选择管理器，选择多个文件并返回。',
    action: 'selectFiles',
    params: {},
  }, {
    title: '文件选择并自动上传',
    description: '打开 WorkPlus 文件选择管理器，根据参数状态决定单选或多选文件，并上传该文件到后台，返回值带 mediaId。',
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
    params: {},
  }, {
    title: '文件上传 WIP',
    description: '文件上传。',
    action: 'upload',
    params: {},
  }, {
    title: '文件下载 WIP',
    description: '文件下载。',
    action: 'download',
    params: {},
  }, {
    title: '转 Base64 WIP',
    description: '转 Base64。',
    action: 'toBase64',
    params: {},
  }]
}
