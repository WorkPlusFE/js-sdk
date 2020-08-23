import addWaterMask from './addWaterMask';
import changeLeftButton from './changeLeftButton';
import changeOrientation from './changeOrientation';
import clearLeftButton from './clearLeftButton';
import clearRightButtons from './clearRightButtons';
import exit from './exit';
import leftButton from './leftButton';
import navigation from './navigation';
import openWebView from './openWebView';
import removeWaterMask from './removeWaterMask';
import rightButtons from './rightButtons';
import title from './title';
import visibleLeftButton from './visibleLeftButton';
import voiceToText from './voiceToText';
import share from './share';
import wxShare from './wxShare';
import registerShakeListener from './registerShakeListener';
import unregisterShakeListener from './unregisterShakeListener';

export default {
  webview: {
    /** 添加水印 */
    addWaterMask,
    /** 控制屏幕旋转 */
    changeOrientation,
    /** 退出webview */
    exit,
    /** 打开网页 */
    openWebView,
    /** 移除水印 */
    removeWaterMask,
    /** 分享 */
    share,
    /** 微信分享 */
    wxShare,
    /** 注册摇一摇 */
    registerShakeListener,
    /** 注销摇一摇 */
    unregisterShakeListener,
  },
  util: {
    /** 语音转文本 */
    voiceToText,
  },
  header: {
    /** 更换左侧按钮和定义动作 */
    changeLeftButton,
    /** 清除左侧按钮 */
    clearLeftButton,
    /** 清除右侧按钮 */
    clearRightButtons,
    /** 更换左侧按钮动作 */
    leftButton,
    /** 锁定网页顶部栏 */
    navigation,
    /** 更换右侧按钮动作 */
    rightButtons,
    /** 设置标题 */
    title,
    /** 是否隐藏或显示左侧的按钮和关闭字样 */
    visibleLeftButton,
  },
};
