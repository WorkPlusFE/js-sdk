"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("../shared/platform");
var is_1 = require("../shared/is");
var resolveLocalFileSystemURL = function (fileUrl) {
    return new Promise(function (resolve, reject) {
        window.resolveLocalFileSystemURL(fileUrl, function (fileEntry) {
            resolve(fileEntry);
        }, function (err) {
            reject(err);
        });
    });
};
var resolveURI = function (fileUrl) {
    return new Promise(function (resolve, reject) {
        if (platform_1.isAndroid()) {
            fileUrl = "file://" + fileUrl;
        }
        resolveLocalFileSystemURL(fileUrl)
            .then(function (fileEntry) {
            fileEntry.file(function (file) {
                resolve(file);
            }, function (err) {
                reject(err);
            });
        })
            .catch(function (err) {
            reject(err);
        });
    });
};
var readDataUrl = function (file) {
    return new Promise(function (resolve) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            resolve(evt);
        };
        reader.readAsDataURL(file);
    });
};
/**
 * 图片转 base64
 * @param {ToBase64Options} options
 * @returns
 */
function toBase64(options) {
    return resolveURI(options.filePath)
        .then(readDataUrl)
        .then(function (result) {
        if (options.success && is_1.isFunction(options.success)) {
            options.success(result);
        }
        return Promise.resolve(result);
    })
        .catch(function (err) {
        if (options.fail && is_1.isFunction(options.fail)) {
            options.fail(err);
        }
        return Promise.reject(err);
    });
}
exports.default = toBase64;
