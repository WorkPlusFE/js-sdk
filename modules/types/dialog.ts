export interface ToastParams {
  /** 标题 */
  title: string;
  /** 显示时间 */
  duration?: number;
}

export interface ModalParams {
  /** 弹框标题 */
  title: string;
  /** 弹框内容 */
  content?: string;
  /** 输入框的提示信息 */
  placeholder?: string;
  /** 输入框默认值 */
  value?: string;
  /** 是否显示取消按钮 */
  show_cancel?: boolean;
  /** 取消按钮的描述文本，默认使用系统文本内容 */
  cancel_text?: string;
  /** 确认按钮的描述文本，默认使用系统文本内容 */
  confirm_text?: string;
}

export interface ModalRes {
  /** 若为true，表示点击了取消按钮 */
  cancel: boolean;
  /** 若为true，表示点击了确认按钮  */
  confirm: boolean;
}

export interface LoadingParams {
  /** loading 显示的文本 */
  title?: string;
}

export interface ActionSheetParams {
  /** 选项的字符串数组 */
  item_list: [string];
}

export interface ActionSheetRes {
  /** 点击了第几项，从 0 开始 */
  tap_index: number;
}

export interface PopNotificationRes {
  [key: string]: unknown;
}

export interface PopNotificationParams {
  [key: string]: unknown;
}
