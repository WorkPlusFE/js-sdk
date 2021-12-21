"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 0	success	通用调用成功
// -1	wrong	通用调用失败
// -2	cancel	取消操作
// -3	no auth	没有鉴权就直接使用
// -10	invalid arguments	传入参数异常
// -20	no system permissions	通用没有系统权限等, 如拍照, 地理位置,
// -999	service not found	找不到该cordova service定义
// -1000	action not found	找不到该cordova 方法
