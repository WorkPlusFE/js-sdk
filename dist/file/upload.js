"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("../shared/is");
var FileUpload = /** @class */ (function () {
    function FileUpload(options) {
        this.fileTransferInstance = new FileTransfer();
        this.fileUploadOptions = options;
    }
    FileUpload.prototype.upload = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var success = function (res) {
                if (res.responseCode === 200) {
                    if (options.success && is_1.isFunction(options.success)) {
                        options.success(res);
                    }
                    return resolve(res);
                }
                return reject(res);
            };
            var failure = function (err) {
                if (options.fail && is_1.isFunction(options.fail)) {
                    options.fail(err);
                }
                reject(err);
            };
            _this.fileTransferInstance.onprogress = function (progressEvent) {
                var loaded = progressEvent.loaded, total = progressEvent.total;
                if (options.progress && is_1.isFunction(options.progress)) {
                    options.progress(loaded, total);
                }
            };
            _this.fileTransferInstance.upload(options.fileURL, encodeURI(options.server), success, failure, _this.fileUploadOptions, options.trustAllHosts);
        });
    };
    FileUpload.prototype.abort = function () {
        this.fileTransferInstance.abort();
    };
    return FileUpload;
}());
exports.default = FileUpload;
