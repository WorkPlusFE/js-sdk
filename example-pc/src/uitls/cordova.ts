import * as sdk from '../../../dist';

class CordovaUtils {
  /**
   * 自定义扫码
   * @param
   * @returns {Promise<void>}
   */
  scan() {
    return sdk.exec('WorkPlus_BarcodeScanner', 'scanner', [{ type: 'native' }]);
  }

  /**
   * 显示加载动画
   * @param
   * @returns {Promise<void>}
   */
  showLoading(option: any) {
    const title = option && option.title ? option.title : '';
    const block = option && option.block ? option.block : false;
    return sdk.exec('WorkPlus_Dialog', 'showLoading', [{ title, block }]);
  }

  /**
   * 关闭loading
   */
  hideLoading() {
    sdk.dialog.hideLoading();
  }
}

export default new CordovaUtils();
