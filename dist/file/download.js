"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 文件下载
 * @param {Download} options
 * @returns
 */
function FileDownload(options) {
    return new Promise(function (resolve, reject) {
        var _a, _b;
        var fileTransfer = new FileTransfer();
        var successCallback = function (entry) {
            options === null || options === void 0 ? void 0 : options.success(entry);
            resolve(entry);
        };
        var errorCallback = function (error) {
            options === null || options === void 0 ? void 0 : options.fail(error);
            reject(error);
        };
        fileTransfer.download(encodeURI(options.source), options.target, successCallback, errorCallback, (_a = options.trustAllHosts) !== null && _a !== void 0 ? _a : false, (_b = options.options) !== null && _b !== void 0 ? _b : {});
    });
}
exports.default = FileDownload;
