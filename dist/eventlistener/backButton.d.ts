/**
 * 绑定安卓物理返回按钮事件
 * @description 该方法只需要执行一次，一旦绑定，返回按钮的原始事件将失效，然后返回逻辑都需要在回调方法中处理
 * @param {Function} callback
 */
export declare function bindBackButtonEvent(callback: Function): void;
/**
 * 解除安卓物理返回按钮事件
 */
export declare function unbindBackButtonEvent(): void;
