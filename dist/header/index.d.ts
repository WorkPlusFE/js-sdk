import rightButtons from './rightButtons';
import setTitle from './setTitle';
import visibleLeftButton from './visibleLeftButton';
import clearLeftButton from './clearLeftButton';
import clearRightButtons from './clearRightButtons';
import leftButton from './leftButton';
import changeLeftButton from './changeLeftButton';
import showSearchBar from './showSearchBar';
import hideSearchBar from './hideSearchBar';
declare const navigation: {
    lock(): void;
    unlock(): void;
};
export { 
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
setTitle, 
/** 是否隐藏或显示左侧的按钮和关闭字样 */
visibleLeftButton, 
/** 显示搜索栏 */
showSearchBar, 
/** 隐藏搜索栏 */
hideSearchBar, };
