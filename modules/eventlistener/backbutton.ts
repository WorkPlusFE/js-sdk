interface Channel {
  action: string;
}

/**
 * 绑定安卓物理返回按钮事件
 * @description 该方法只需要执行一次，一旦绑定，返回按钮的原始事件将失效，然后返回逻辑都需要在回调方法中处理
 * @param {Function} callback
 */
function bindBackButtonEvent(callback: Function): void {
  const backButtonEvent = (channel: Channel): void => {
    if (channel.action === 'backbutton' && typeof callback === 'function') {
      callback();
    }
  };
  /* eslint @typescript-eslint/no-empty-function: 0 */
  cordova.exec(
    () => {},
    () => {},
    'CoreAndroid',
    'overrideBackbutton',
    [true],
  );
  cordova.exec(backButtonEvent, () => {}, 'CoreAndroid', 'messageChannel', []);
}

export default bindBackButtonEvent;
