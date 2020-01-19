import addWaterMask from './addWaterMask';
import changeLeftButton from './changeLeftButton';
import changeOrientation from './changeOrientation';
import clearLeftButton from './clearLeftButton';
import clearRightButtons from './clearRightButtons';
import exit from './exit';
import leftButton from './leftButton';
import navigation from './navigation';
import openLocalURL from './openLocalURL';
import openWebView from './openWebView';
import removeWaterMask from './removeWaterMask';
import rightButtons from './rightButtons';
import title from './title';
import toActivity from './toActivity';
import visibleLeftButton from './visibleLeftButton';
import voiceToText from './voiceToText';
import share from './share';
import wxShare from './wxShare';
import registerShakeListener from './registerShakeListener';
import unregisterShakeListener from './unregisterShakeListener';

export default {
  /** 添加水印 */
  addWaterMask,
  /** 更换左侧按钮和定义动作 */
  changeLeftButton,
  /** 控制屏幕旋转 */
  changeOrientation,
  /** 清除左侧按钮 */
  clearLeftButton,
  /** 清除右侧按钮 */
  clearRightButtons,
  /** 退出webview */
  exit,
  /** 更换左侧按钮动作 */
  leftButton,
  /** 锁定网页顶部栏 */
  navigation,
  /** 打开WorkPlus里已有的html */
  openLocalURL,
  /** 打开网页 */
  openWebView,
  /** 移除水印 */
  removeWaterMask,
  /** 更换右侧按钮动作 */
  rightButtons,
  /** 设置标题 */
  title,
  /** 跳转到workplus特定页面 */
  toActivity,
  /** 是否隐藏或显示左侧的按钮和关闭字样 */
  visibleLeftButton,
  /** 语音转文本 */
  voiceToText,
  /** 分享 */
  share,
  /** 微信分享 */
  wxShare,
  /** 注册摇一摇 */
  registerShakeListener,
  /** 注销摇一摇 */
  unregisterShakeListener,
};
