"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    SDK_NAME: 'cordova-import.js',
    // 只有作为es模块初始化时，才需配置
    SDK_HOST: null,
    // 不同平台的 CordovaJs
    cordovajs: {
        iOS: 'ios.cordova.min.js',
        android: 'android.cordova.min.js',
        local: 'applocal://cordova.min.js',
    },
    // =.=!
    pcSDKUri: '',
};
exports.default = config;
