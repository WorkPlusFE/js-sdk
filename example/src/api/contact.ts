/** 邮箱 */

export default {
  title: '联系人',
  module: 'contact',
  active: false,
  icon: 'envelop-o',
  apis: [
    {
      title: '单选联系人',
      description: '打开当前组织的联系人列表，单选一个联系人(兼容2.0数据)。',
      action: 'getSingleContact',
      params: {
        hideMe: true,
        filterSenior: 1,
      },
    },
    {
      title: '多选联系人',
      description: '打开当前组织的联系人列表，多选联系人(兼容2.0数据)。',
      action: 'getContacts',
      params: {
        hideMe: true,
        filterSenior: 1,
        selectedContacts: [],
      },
    },
    {
      title: '多选当前组织的雇员列表',
      description: '打开当前组织的联系人列表，选择多个联系人，返回雇员信息。',
      action: 'getEmployeesFromCurrentOrg',
      params: {
        hideMe: true,
        filterSenior: 1,
        selectedContacts: [],
      },
    },
    {
      title: '打开通用选择人员界面',
      description: '该接口打开通用的选择界面，此界面能选择组织内的雇员信息, 用户的星标联系人等。',
      action: 'selectContacts',
      params: {
        filterSenior: 1,
        maxCount: 9,
        selectedUsers: [], // 已选择的users
        selectedEmployees: [], // 已选择的employees
      },
    }, {
      title: '获取手机通讯录',
      description: '获取手机通讯录联系人的列表。',
      action: 'getMobileContacts',
      params: {
      },
    },
  ],
};
