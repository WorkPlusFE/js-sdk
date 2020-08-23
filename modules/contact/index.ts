import getSingleContact from './getSingleContact';
import getContacts from './getContacts';
import getEmployeesFromCurrentOrg from './getEmployeesFromCurrentOrg';
import getCurrentUserInfo from './getCurrentUserInfo';
import getCurrentEmployeeInfo from './getCurrentEmployeeInfo';
import showUserChatViewByUser from './showUserChatViewByUser';
import getMobileContacts from './getMobileContacts';
import getUserInfoByUserId from './getUserInfoByUserId';
import showUserInfoByUsername from './showUserInfoByUsername';
import openDiscussionById from './openDiscussionById';
import createDiscussionChat from './createDiscussionChat';
import selectContacts from './selectContacts';
import selectDiscussionMembers from './selectDiscussionMembers';

import searchInApp from './searchInApp';
import showAppChatViewById from './showAppChatViewById';
import showAppListById from './showAppListById';

// contact模块将会被拆分成3个模块，包括 用户user、联系人contact、聊天session及应用app
export default {
  contact: {
    getSingleContact,
    getContacts,
    getEmployeesFromCurrentOrg,
    selectContacts,
    getMobileContacts,
  },
  user: {
    getCurrentUserInfo,
    getCurrentEmployeeInfo,
    getUserInfoByUserId,
    showUserInfoByUsername,
  },
  session: {
    showUserChatViewByUser,
    openDiscussionById,
    createDiscussionChat,
    selectDiscussionMembers,
  },
  app: {
    searchInApp,
    showAppChatViewById,
    showAppListById,
  },
};
