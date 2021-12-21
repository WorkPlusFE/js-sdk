import addWaterMask from './addWaterMask';
import changeOrientation from './changeOrientation';
import exit from './exit';
import openWebView from './openWebView';
import removeWaterMask from './removeWaterMask';
import share from './share';
import wxShare from './wxShare';
import registerShakeListener from './registerShakeListener';
import unregisterShakeListener from './unregisterShakeListener';
import launchMiniProgram from './launchMiniProgram';
import { configPullRefresh, onPullRefresh, startPullRefresh, endPullRefresh } from './refresh';
export { 
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
/** 打开小程序 */
launchMiniProgram, 
/** 下拉刷新 */
configPullRefresh, onPullRefresh, startPullRefresh, endPullRefresh, };
